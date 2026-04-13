# Quick Start - Pulseflow (Wardrobe + Closet)

## Prerequisites
- Docker (Podman on macOS)
- Ports 3000 and 8080 available

## Option 1: Using Docker Compose (Recommended)

```bash
cd /Users/rahil/Documents/pulseflow

# Start all services (frontend, backend, MongoDB)
docker-compose up -d

# Services will be available at:
# Frontend: http://localhost:3000
# Backend API: http://localhost:8080/api/items
```

## Option 2: Manual Container Start

### Step 1: Start MongoDB
```bash
podman run -d --name mongodb \
  -p 27017:27017 \
  docker.io/library/mongo:7
```

### Step 2: Start Closet Backend
```bash
cd /Users/rahil/Documents/pulseflow/closet

podman build -t closetimage .

podman run -d --name closet \
  -p 8080:8080 \
  -e MONGODB_URI=mongodb://host.docker.internal:27017/closet \
  closetimage:latest
```

### Step 3: Start Wardrobe Frontend
```bash
cd /Users/rahil/Documents/pulseflow/wardrobe

podman build -t wardrobeimage .

podman run -d --name wardrobe \
  -p 3000:3000 \
  -e NEXT_PUBLIC_API_BASE_URL=http://localhost:8080 \
  wardrobeimage:latest
```

## Testing the APIs

### Get All Items
```bash
curl http://localhost:8080/api/items
```

### Search Items
```bash
curl 'http://localhost:8080/api/items?search=yellow'
```

### Frontend
Visit: http://localhost:3000

## Stopping Services

```bash
# Using Docker Compose
docker-compose down

# Manual containers
podman stop closet wardrobe mongodb
podman rm closet wardrobe mongodb
```

## Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | `http://localhost:8080` | Frontend API endpoint |
| `MONGODB_URI` | `mongodb://localhost:27017/closet` | MongoDB connection string |
| `JAVA_OPTS` | `-Xmx256m -Xms128m` | JVM memory settings |

## Troubleshooting

### "No image found" error
- Fixed by using non-alpine base images (ARM64 compatible)
- Base images now use: `maven:3.9-eclipse-temurin-17` and `eclipse-temurin:17-jre`

### MongoDB connection refused
- This is normal if MongoDB isn't running
- Use `docker-compose up` to automatically start MongoDB
- Or start MongoDB separately: `podman run -d mongo:7`

### CORS errors
- Ensure `NEXT_PUBLIC_API_BASE_URL` is set correctly
- Backend allows `http://localhost:3000` and `http://localhost:8080`

## Logs

```bash
# View all logs
docker-compose logs -f

# Specific service logs
docker-compose logs -f closet
docker-compose logs -f wardrobe
docker-compose logs -f mongodb
```
