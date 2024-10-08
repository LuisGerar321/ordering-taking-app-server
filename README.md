# Ordering Taking App Server

This project is a backend application built with Node.js, Express, and Sequelize. It includes Docker and Docker Compose for easy environment setup and management. The application connects to a MySQL database.

## Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow the instructions below to get the project up and running.

### 1. Clone the Repository

```bash
git clone https://github.com/luisgerar321/ordering-taking-app-server.git
cd ordering-taking-app-server
```

### 2. Environment Variables

Create a .env file in the root directory of the project and add your environment variables:

```
#API Version
API_VERSION = "v1"

#Server Config
SERVER_PORT = 3001
SERVER_HOST = "localhost"


#Database Configuration
DB_NAME = "mydatabase"
DB_USER_NAME = "user"
DB_PASS = "password"

```

### 3. Build and Run the Containers

Use Docker Compose to build and start the containers (If an error ocurrs try to retry docker-compose up):

```bash
docker-compose up --build
```

This command will Build the Node.js application container.
Start the MySQL database container.
Start the Node.js application container and expose it on port 3001.

### 4. Accessing the Application

Once the containers are running, you can access the backend server at:

```
http://localhost:3001
```

### 5. Stopping the Containers

To stop the running containers, use:

```bash
docker-compose down
```

This command will stop and remove the containers, networks, and volumes created by docker-compose up.

Development
Running in Development Mode
For development, the application uses nodemon to automatically restart the server on file changes. To run the application in development mode:

```bash
npm run dev
Running Tests
```

## Technologies Used

Node.js
Express
Sequelize
MySQL
Docker
TypeScript
License
This project is licensed under the ISC License.
