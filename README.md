🚀 Rishabhmeta: Production-Ready Multi-Container Deployment
📝 Project Overview
This project demonstrates a high-availability 3-tier architecture using Docker. It features a branded Rishabhmeta contact system integrated with a Node.js backend and a PostgreSQL database, all orchestrated via Nginx.

🛡️ PART 1 - Linux System Setup & Security
User Creation: Created devopsuser and added it to the docker group to run commands without sudo. 👤

Firewall (UFW): Configured rules to allow only essential traffic: 22 (SSH), 80 (HTTP), and 443 (HTTPS). 🧱

Persistence: Enabled Docker service to ensure it starts automatically on system boot. 🔄

🌿 PART 2 - Git & GitHub Workflow
Branching Strategy: Used main for production, develop for integration, and feature/ branches for modular development. 🌳

Versioning: Applied a version tag v1.0 to the stable release. 🏷️

Commits: Maintained 10+ meaningful commits to track the project's evolution. 📈

🐳 PART 3 - Multi-Container Docker Setup
Services:

Frontend/Proxy: Nginx handling the entry point. 🌐

Backend: Node.js Express API. ⚙️

Database: PostgreSQL for data storage. 💾

Volumes: Used named volumes (rishi_data) for database persistence so data isn't lost on restart. 📦

Environment: Managed all secrets and credentials via a secured .env file. 🔑

🌐 PART 4 - Networking & Debugging
Custom Bridge Network: Created rishi_net to isolate container communication. 🛣️

Port Mapping: Explicitly mapped host Port 80 to container Port 80 for public access. ⚓

Key Concept: Localhost vs 0.0.0.0: ❓

Localhost (127.0.0.1): This is a loopback address. It means "this machine only." If a service listens on localhost, it cannot be accessed from outside the container or the host.

0.0.0.0: This means "all IP addresses on the local machine." Binding to 0.0.0.0 allows the service to be reachable from the network (external access).

🏗️ PART 5 - Production Best Practices
Pinned Tags: Used specific versions like node:18-alpine and postgres:15 instead of latest to avoid breaking changes in production. 📌

Why not "latest"?: Using latest is risky because it's unpredictable. If the base image updates, your app might break during the next build. Specific tags ensure stability and easy rollbacks. ⚠️

📊 PART 6 - Monitoring
Resource Monitoring: Used docker stats to track real-time CPU and Memory usage per container. 🖥️

Log Management: Used docker compose logs -f --tail=100 for active debugging. 📜

OOM (Out-Of-Memory): Understanding that when a container exceeds its memory limit, the Linux kernel invokes the OOM Killer to terminate the process and protect the host system. 💥

🚀 Quick Run Commands
Bash
# Start the Rishabhmeta application
docker compose up -d --build

# Check running services
docker compose ps

# Monitor resource usage
docker stats
App URL: http://localhost 🌍
