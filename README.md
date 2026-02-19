# ⚡ PulseFlow

**PulseFlow** is a high-performance, enterprise-grade, fully decoupled full-stack application. It combines a modern dashboard for content management with a robust backend API, powered by AI-driven insights and scalable event-driven architecture. Designed for cloud-native deployment with Kubernetes, SSO authentication, and load balancing.

---

## 🏗️ System Architecture

PulseFlow follows a **three-tier decoupled architecture** with technology interchangeability:

### **Tier 1: Frontend (Wardrobe)**
- **Framework:** Next.js 16+ (App Router)
- **Deployable as:** React SPA, Vite, or any modern frontend framework
- **Responsibilities:** User interface, real-time data visualization, content management dashboard
- **Communicates via:** RESTful API + WebSockets (future)

### **Tier 2: Backend (Closet)**
- **Framework:** Spring Boot 3.1.0
- **Deployable as:** Node.js/NestJS, Django, Go, or any REST-capable backend
- **Responsibilities:** Business logic, API routes, authentication, data validation, event production
- **Communicates via:** REST API endpoints, Kafka event streams

### **Tier 3: Data Layer**
- **Primary Database:** PostgreSQL (relational data, ACID compliance)
- **Swappable with:** MongoDB, CosmosDB, CockroachDB
- **Responsibilities:** Persistent data storage, complex queries, relationships

### **Supporting Infrastructure**
- **Message Queue:** Apache Kafka (event streaming, decoupling services)
- **Container Orchestration:** Kubernetes (production environment)
- **API Gateway:** Load Balancer + API Gateway (Kong, NGINX, AWS ALB)
- **Authentication:** SSO integration (OAuth 2.0 / OIDC / SAML)
- **AI/ML Layer:** Fine-tuned AI chatbots and intelligent automation (manifest files included)

---

## 🛠️ Tech Stack

### Frontend (Wardrobe)
*   **Framework:** [Next.js 16+](https://nextjs.org) (App Router)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
*   **Components:** [Shadcn UI](https://ui.shadcn.com)
*   **State Management:** TanStack Query (React Query) / Zustand
*   **Type Safety:** TypeScript
*   **Testing:** Vitest / Jest

### Backend (Closet)
*   **API Framework:** [Spring Boot 3.1.0](https://spring.io/projects/spring-boot) (Java)
*   **ORM:** Spring Data JPA / Hibernate
*   **Type Safety:** Java Records & Annotations
*   **Testing:** JUnit 5, Mockito
*   **Logging:** Logback / SLF4J

### Data & Persistence
*   **Primary DB:** [PostgreSQL](https://www.postgresql.org) 15+ (ACID-compliant relational database)
*   **Caching:** Redis (future implementation)
*   **Migrations:** Liquibase / Flyway

### Infrastructure & DevOps
*   **Containerization:** [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose) (local dev)
*   **Orchestration:** [Kubernetes](https://kubernetes.io) (production)
*   **Event Streaming:** [Apache Kafka](https://kafka.apache.org) (KRaft mode for high availability)
*   **API Gateway:** [NGINX](https://nginx.org) / Kong / AWS ALB
*   **Service Mesh:** Istio (future implementation)
*   **Monitoring:** Prometheus + Grafana (future)
*   **Logging:** ELK Stack (Elasticsearch, Logstash, Kibana) / Splunk (future)

### Authentication & Security
*   **SSO:** OAuth 2.0 / OIDC / SAML (Keycloak, Auth0, Okta)
*   **API Security:** JWT tokens, rate limiting
*   **Encryption:** TLS/SSL, bcrypt for passwords

### AI & Intelligent Features
*   **AI Integration:** LLM-based chatbots (OpenAI, Claude, Anthropic)
*   **Fine-tuning:** Custom manifest files for domain-specific AI models
*   **Orchestration:** LangChain / LlamaIndex

---

## 🚀 Key Features

### Current Implementation
- **Clean Decoupling:** Three independent tiers communicating via REST API
- **Type Safety:** Full TypeScript on frontend, Java on backend
- **CORS-Enabled:** Frontend and backend run independently with proper cross-origin configuration
- **Scalable Architecture:** Ready for horizontal scaling and load balancing
- **Containerized Development:** Docker support for local development parity

### Planned Features (Phase 2+)
- **AI-Powered Dashboard:** Intelligent recommendations and automations
- **Real-time Notifications:** WebSocket-based push notifications to frontend
- **Event-Driven Workflows:** Complex business processes orchestrated via Kafka
- **Multi-tenancy:** Support for multiple organizations with data isolation
- **Role-Based Access Control (RBAC):** Granular permission management
- **Audit Logging:** Complete audit trail for compliance
- **Advanced Analytics:** User behavior and system performance dashboards
- **File Management:** S3-compatible object storage integration

---

## 🏭 Enterprise Practices

### CI/CD Pipeline
- **Version Control:** Git with branch protection and PR reviews
- **Build Automation:** Maven (Spring Boot) and Next.js build pipelines
- **Artifact Repository:** Containerize and push to Docker Registry (DockerHub, ECR, GCR)
- **Automated Testing:** Unit tests, integration tests, E2E tests in CI
- **Code Quality:** SonarQube, ESLint, Checkstyle integration
- **Deployment:** GitOps with Kubernetes manifests

### Infrastructure as Code (IaC)
- **Kubernetes Manifests:** Stored in `/k8s-manifests` directory
- **Helm Charts:** For templated Kubernetes deployments
- **Docker Compose:** Local development environment
- **Terraform** (future): Infrastructure provisioning scripts

### Artifact Management
- **Frontend:** Docker image pushed to registry on build
- **Backend:** Spring Boot JAR + Docker image in registry
- **Database:** PostgreSQL migrations versioned in Git
- **Configuration:** ConfigMaps and Secrets in Kubernetes

### AI & LLM Integration
- **Chatbot Manifests:** YAML/JSON specification files for fine-tuned models in `/ai-models` directory
- **Prompt Engineering:** Structured prompts for domain-specific tasks
- **Model Orchestration:** LangChain chains for multi-step AI workflows
- **Observability:** Token usage tracking and model performance metrics

### Security & Compliance
- **Environment Variables:** Managed via `.env` and Kubernetes Secrets
- **API Security:** Rate limiting, request validation, authentication middleware
- **Database Security:** Encryption at rest, connection pooling, parameterized queries
- **Monitoring:** Centralized logging and alerting

---

## 🔄 Technology Interchangeability

The architecture is designed for component swapping:

| Layer | Current | Alternative Options |
|-------|---------|---------------------|
| **Frontend** | Next.js | React (CRA), Vite, Angular, Svelte |
| **Backend** | Spring Boot | Node.js/NestJS, Django, Go, FastAPI |
| **Database** | PostgreSQL | MongoDB, CosmosDB, CockroachDB, MySQL |
| **Message Queue** | Kafka | RabbitMQ, AWS SQS, Azure Service Bus |
| **Container Orchestration** | Kubernetes | Docker Swarm, AWS ECS, Nomad |
| **API Gateway** | NGINX | Kong, AWS ALB, Traefik, Envoy |

Each tier communicates via standardized contracts (REST API, event schemas), making swaps seamless.

---

## 🛠️ Getting Started

### Prerequisites
- **Docker & Docker Compose** (for containerized dev environment)
- **Node.js v22+** (for frontend: /wardrobe)
- **Java 17+** (for backend: /closet)
- **Maven 3.8+** (for Spring Boot builds)
- **Git** (version control)
- **PostgreSQL client** (optional, for direct DB access)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/rahilkapoor/pulseflow.git
cd pulseflow
```

#### 2. Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration (database, SSO, API keys, etc.)
```

#### 3. Start Backend (Closet - Spring Boot)
```bash
cd closet
mvn clean install
mvn spring-boot:run
# Backend runs on http://localhost:8080
```

#### 4. Start Frontend (Wardrobe - Next.js)
```bash
cd wardrobe
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

#### 5. Verify API Connection
```bash
curl http://localhost:8080/api/items
# Should return JSON response from backend
```

### Docker Compose (Full Stack Local Setup - Coming Soon)
```bash
docker-compose up -d
# Spins up: PostgreSQL, Kafka, Spring Boot, Next.js dev server
```

### Kubernetes Deployment (Production)
```bash
cd k8s-manifests
kubectl apply -f .
# Deploys all services to Kubernetes cluster
```

---

## 📁 Project Structure

```
pulseflow/
├── wardrobe/              # Next.js frontend (port 3000)
│   ├── app/              # App Router pages & layouts
│   ├── components/       # Reusable React components
│   └── public/           # Static assets
├── closet/               # Spring Boot backend (port 8080)
│   ├── src/main/java/    # Java source code
│   ├── src/main/resources/ # Spring configuration
│   └── pom.xml           # Maven dependencies
├── k8s-manifests/        # Kubernetes YAML files (WIP)
├── ai-models/            # AI chatbot manifests & prompts (WIP)
├── docker-compose.yml    # Local dev orchestration (WIP)
├── .github/workflows/    # CI/CD pipeline definitions (WIP)
└── README.md             # This file
```

---

## 🤝 Contributing

Contributions are welcome! We follow enterprise-ready practices for all submissions.

### Contribution Workflow
1. **Check existing issues** on the [Issues](https://github.com/rahilkapoor/pulseflow/issues) tab - look for "Good First Issues" or "Help Wanted"
2. **Fork the project**
3. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
4. **Make your changes** with meaningful commits
5. **Add tests** for new functionality (unit, integration, or E2E)
6. **Run code quality checks** (linting, formatting)
7. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
8. **Push to the branch** (`git push origin feature/AmazingFeature`)
9. **Open a Pull Request** with a detailed description

### Code Standards
- **Frontend:** TypeScript, ESLint, Prettier
- **Backend:** Java, Checkstyle, SonarQube
- **Tests:** Minimum 80% code coverage
- **Commits:** Follow [Conventional Commits](https://www.conventionalcommits.org/)
- **Branch naming:** `feature/*`, `bugfix/*`, `chore/*`, `docs/*`

### Areas for Contribution
- Backend API endpoints and services
- Frontend UI components and pages
- Kubernetes manifests and deployment configs
- AI/LLM chatbot prompts and fine-tuning
- Documentation and guides
- CI/CD pipeline improvements

---

## 📝 Roadmap

### Phase 1 (Current)
- ✅ Frontend & Backend scaffolding  
- ✅ REST API with CORS
- 🔄 PostgreSQL integration
- 🔄 Docker Compose orchestration

### Phase 2 (Q2 2026)
- SSO integration (OAuth 2.0 / OIDC)
- Kafka event streaming
- Kubernetes manifests
- Database migrations (Liquibase/Flyway)
- API rate limiting and security

### Phase 3 (Q3 2026)
- CI/CD pipelines (GitHub Actions / GitLab CI)
- Load balancer & API gateway setup
- Monitoring & observability (Prometheus + Grafana)
- Redis caching layer

### Phase 4 (Q4 2026)
- AI/LLM chatbot integration
- Multi-tenancy support
- Advanced analytics dashboard
- Cloud deployment (AWS/GCP/Azure)

---

## 📚 Documentation

- **[Architecture Documentation](./docs/ARCHITECTURE.md)** - Detailed system design
- **[API Documentation](./docs/API.md)** - REST API endpoints and schemas
- **[Development Guide](./docs/DEVELOPMENT.md)** - Setup and local development
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Production deployment steps
- **[Contributing Guidelines](./docs/CONTRIBUTING.md)** - Detailed contribution process

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙋 Support & Questions

Have questions or need help?
- Open an [issue](https://github.com/rahilkapoor/pulseflow/issues)
- Check [existing discussions](https://github.com/rahilkapoor/pulseflow/discussions)
- Email: contact@pulseflow.dev (future)

---

*Built with ❤️ by the PulseFlow community. Enterprise-grade, open-source, fully decoupled.*
