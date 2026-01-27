# ⚡ PulseFlow

**PulseFlow** is a high-performance, event-driven admin dashboard and notification engine. It allows administrators to manage rich user content (documents, images, notes) and leverages **Apache Kafka** to orchestrate time-sensitive email and push notifications from a local environment to mobile devices.

---

## 🏗️ System Architecture

PulseFlow follows a decoupled, producer-consumer architecture:

1.  **The Hub (Dashboard):** A Next.js 16 interface for content management and appointment scheduling.
2.  **The Brain (API):** A NestJS backend that handles data persistence and produces events to Kafka.
3.  **The Stream (Kafka):** Acts as the central nervous system, holding notification events in a KRaft-mode cluster.
4.  **The Workers:** Local consumers that listen to Kafka topics and trigger external APIs (Firebase/Resend) based on scheduled logic.

---

## 🛠️ Tech Stack

### Frontend & Dashboard
*   **Framework:** [Next.js 16](https://nextjs.org) (App Router)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
*   **Components:** [Shadcn UI](https://ui.shadcn.com)
*   **State Management:** TanStack Query (React Query)

### Backend & Infrastructure
*   **API Framework:** [NestJS](https://nestjs.com) (Node.js)
*   **Database:** [PostgreSQL](https://www.postgresql.org) with [Prisma ORM](https://www.prisma.io)
*   **Event Streaming:** [Apache Kafka](https://kafka.apache.org) (KRaft mode)
*   **Object Storage:** [MinIO](https://min.io) (Local S3-compatible storage for images/docs)
*   **Containerization:** [Docker Compose](https://www.docker.com)

### Notifications & Communication
*   **Email:** [Resend](https://resend.com) / Nodemailer
*   **Push Notifications:** [Firebase Cloud Messaging (FCM)](https://firebase.google.com)
*   **Local Tunneling:** [Cloudflare Tunnels](https://www.cloudflare.com) (to bridge local server to the web)

---

## 🚀 Key Features
- **Multimodal Uploads:** Add text, notes, and high-res images to user profiles.
- **Event-Driven Reminders:** Appointment scheduling backed by Kafka topics.
- **Local-First Server:** Designed to run entirely on a local machine while interacting with global push services.
- **Contributor Ready:** Modular folder structure for easy scaling.

---

## ⚠️ Challenges & Technical Constraints
- **Kafka Scheduling:** Kafka is a stream, not a scheduler. We implement a "Database Polling + Worker" pattern to push events into the stream at the correct time.
- **Background Execution:** Mobile devices (iOS/Android) cannot act as reliable servers due to OS-level battery optimization. PulseFlow uses the local machine as the server and the phone as the client.
- **Networking:** Localhost is bridged via Cloudflare Tunnels to allow Firebase to send feedback to the local backend.

---

## 🛠️ Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js v22+
- A Firebase Project (for Push keys)

### Installation
1. Clone the repo: `git clone https://github.com`
2. Install dependencies: `npm install`
3. Spin up infrastructure: `docker-compose up -d`
4. Set up your `.env` (see `.env.example`)
5. Run the dev server: `npm run dev`

---

## 🤝 Contributing
Contributions are welcome! Please check the [Issues](https://github.com) tab for "Good First Issues." 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
*Built with ❤️ for the developer community.*
