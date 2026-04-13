# Docker Setup Guide for Pulseflow

This guide will help you run the Pulseflow application (wardrobe frontend + closet backend) using Docker.

## Prerequisites

- Docker Desktop installed
- Docker Compose installed

## Quick Start (Recommended)

Run both services (frontend, backend, and MongoDB) together:

```bash
# From the project root directory
docker-compose up -d
```

The application will be available at:
- **Frontend (Wardrobe)**: http://localhost:3000
- **Backend API (Closet)**: http://localhost:8080
- **API Endpoint**: http://localhost:8080/api/items

## Individual Service Setup

### Option 1: Build and Run Closet Backend

```bash
# Build the closet image
docker build -t closet-app ./closet

# Run closet (requires local MongoDB)
docker run -p 8080:8080 \
  -e MONGODB_URI=mongodb://host.docker.internal:27017/closet \
  closet-app
```

### Option 2: Build and Run Wardrobe Frontend

```bash
# Build the wardrobe image
docker build -t wardrobe-app ./wardrobe

# Run wardrobe
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_BASE_URL=http://localhost:8080 \
  wardrobe-app
```

## Environment Variables

### For Wardrobe (Frontend)
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080  # or http://closet:8080 when using docker-compose
NODE_ENV=production
```

### For Closet (Backend)
```bash
MONGODB_URI=mongodb://localhost:27017/closet     # or mongodb://mongodb:27017/closet when using docker-compose
JAVA_OPTS=-Xmx256m -Xms128m
```

## Troubleshooting

### CSS not showing in Wardrobe
- Ensure `NODE_ENV=production` is set
- Check that `NEXT_PUBLIC_API_BASE_URL` points to the correct backend URL
- Verify the container is built without the standalone output mode

### Backend API not responding
- Check MongoDB is running and accessible
- Verify `MONGODB_URI` is correctly configured
- Check logs: `docker logs pulseflow-closet`

### CORS errors
- Ensure the frontend origin is added to the WebConfig CORS mappings
- When using docker-compose, use `http://wardrobe:3000` and `http://closet:8080`

## Checking Logs

```bash
# View logs for all services
docker-compose logs -f

# View logs for specific service
docker-compose logs -f closet
docker-compose logs -f wardrobe
docker-compose logs -f mongodb
```

## Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (WARNING: deletes data)
docker-compose down -v
```

## Building without Cache

```bash
# Rebuild images without using cache
docker-compose build --no-cache

# Then start services
docker-compose up
```

## Health Checks

- **Closet API**: http://localhost:8080/health
- Both services include health checks that can be viewed with: `docker-compose ps`

## Production Deployment

For production, consider:
1. Updating CORS origins in WebConfig
2. Setting `NODE_ENV=production` for frontend
3. Using environment-specific MongoDB URIs
4. Running containers with resource limits
5. Using a reverse proxy (nginx) for SSL/TLS
6. Regular backup of MongoDB volumes
