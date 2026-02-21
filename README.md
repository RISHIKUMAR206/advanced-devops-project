🚀 Advanced DevOps Project: Rishabhmeta Deployment
Production-Ready Multi-Container Architecture (Part 1 to Part 6)
This report covers the step-by-step implementation of the Rishabhmeta contact system, following all DevOps best practices.

🛠️ PART 1 - Linux System Setup & Security
1. User & Permissions 👤
Action: Created a new system user named devopsuser.

Security: Added the user to the docker group to enable running containers without sudo privileges.

2. Firewall Configuration (UFW) 🧱
Requirement: Only ports 22, 80, and 443 are allowed.

Explanation: Configured UFW to block all incoming traffic except for SSH and Web (HTTP/HTTPS) to ensure a hardened production environment.

🌿 PART 2 - Git & GitHub Workflow
1. Branching Strategy 🌳
We implemented a professional workflow using multiple branches:

main: Production-ready code.

develop: Integration branch for features.

feature/frontend & feature/backend: Task-specific development.

2. Versioning & Commits 🏷️
Commits: Completed over 10 meaningful commits.

Tags: Marked the stable release as v1.0 using Git tags.

🐳 PART 3 - Multi-Container Docker Setup
1. Project Architecture 🏗️
Frontend: Nginx serving the Rishabhmeta UI.

Backend: Node.js Express API handling data logic.

Database: PostgreSQL for persistent storage.

2. Persistence & Networking 📦
Data Persistence: Used Named Volumes (rishi_data) so that database data is NOT lost even if containers are deleted.

Networking: Created a custom bridge network (rishi_net) for secure internal communication.

🌐 PART 4 - Networking & Debugging
1. Port Mapping ⚓
Host Port 80 is mapped to Container Port 80 for global accessibility.

2. Localhost vs 0.0.0.0 ❓
Localhost (127.0.0.1): Refers only to the internal loopback. Services on localhost aren't reachable from outside the container.

0.0.0.0: Listens on all available network interfaces, making the Rishabhmeta app accessible to the public web.

🏗️ PART 5 - Production Best Practices
1. Image Tagging Strategy 📌
Best Practice: We do NOT use the latest tag.

Why?: The latest tag is unpredictable and can break builds. We used specific versions like node:18-alpine and postgres:15 for stability.

2. Environment Secrets 🔑
All database credentials and sensitive info are stored in a hidden .env file, never hardcoded in the script.

📊 PART 6 - Monitoring
1. Resource Monitoring 🖥️
Used the docker stats command to monitor real-time CPU and Memory usage of the Rishabhmeta containers.

2. OOM (Out-of-Memory) Explanation 💥
If a container consumes too much RAM, the Linux Kernel's OOM Killer will terminate the process to save the host system. Monitoring helps us set proper limits.

🚀 Quick Run Commands
Bash
# To start the project:
docker compose up -d --build

# To check running services:
docker compose ps

# To view live logs:
docker compose logs -f
App Live at: http://localhost 🌍
