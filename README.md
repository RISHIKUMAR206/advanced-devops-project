🚀 Advanced DevOps Project Report: Rishabhmeta Deployment

(Implementation: Part 1 to Part 6)
This report documents the serial execution of the multi-container project. Each part includes the commands used and a short explanation of the results.

🛠️ PART 1 - Linux System Setup & Security
1. User Creation & Privileges
Command:

Bash
sudo adduser devopsuser
sudo usermod -aG docker devopsuser
Explanation: Created a dedicated user devopsuser and added it to the docker group. This allows running Docker commands without needing sudo every time.

2. Firewall (UFW) Hardening
Command:

Bash
sudo ufw allow 22,80,443/tcp
sudo ufw enable
sudo ufw status
Explanation: Configured the firewall to strictly allow only SSH (22), HTTP (80), and HTTPS (443) traffic, ensuring the server is production-secure.

3. Environment Verification
Command:

Bash
docker --version && docker compose version
Explanation: Confirmed that Docker Engine and Docker Compose are correctly installed and ready for container orchestration.

🌿 PART 2 - Git & GitHub Workflow
1. Branching & Feature Development
Command:

Bash
git checkout -b develop
git checkout -b feature/frontend
Explanation: Implemented a professional branching strategy. Developed features in dedicated feature/ branches before merging them into develop for integration.

2. Versioning
Command:

Bash
git tag -a v1.0 -m "Stable Rishabhmeta Release"
git push origin --tags
Explanation: Applied Git tags (v1.0) to mark the first stable production-ready version of the Rishabhmeta application.

🐳 PART 3 - Multi-Container Docker Setup
1. Services Architecture
Structure:

Frontend/Nginx: Handles routing.

Backend/App: Node.js API processing data.

Database: PostgreSQL storing Rishabhmeta records.

2. Orchestration & Persistence
Command:

Bash
docker compose up -d --build
Explanation: Used a single docker-compose.yml to launch all services. Configured Named Volumes to ensure data persists even if the database container is restarted or removed.

🌐 PART 4 - Networking & Debugging
1. Custom Network Inspection
Command:

Bash
docker network ls
docker network inspect rishi_net
Explanation: Created a custom bridge network rishi_net to isolate application traffic, allowing containers to communicate using service names (e.g., app connecting to db).

2. Networking Concepts: Localhost vs 0.0.0.0
localhost (127.0.0.1): Refers only to the local machine's internal loopback; not accessible from outside the container.

0.0.0.0: Binds to all available network interfaces, making the Rishabhmeta app accessible to any device on the network via the host IP.

🏗️ PART 5 - Production Best Practices
1. Image Pining
Practice: Used node:18-alpine and postgres:15 instead of latest.
Explanation: Pinned specific image versions to ensure build consistency. The latest tag is avoided because it is non-deterministic and can lead to unexpected breaking changes in production.

2. Secret Management
Practice: Moved credentials to .env.
Explanation: Secured sensitive data like database passwords by using environment variables, ensuring no secrets are hardcoded in the application source code.

📊 PART 6 - Monitoring
1. Resource Statistics
Command:

Bash
docker stats --no-stream
Explanation: Monitored real-time CPU and Memory usage of all Rishabhmeta containers to ensure the system is operating within healthy resource limits.

2. OOM (Out-of-Memory) Logic
Explanation: Understood that if a container exceeds host memory limits, the Linux Kernel's OOM Killer will intervene to kill the process. Monitoring prevents such unexpected shutdowns.

🚀 Quick Run Commands (For Demo)
Bash
# Clean start
docker compose down
docker compose up -d --build

# Verify Connectivity
docker compose ps

# Live Logs
docker compose logs -f --tail=50
App URL: http://localhost 🌍
