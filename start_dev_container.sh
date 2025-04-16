#!/bin/bash

# Define the path to the .devcontainer directory
DEVCONTAINER_DIR=".devcontainer"

# Define the path to the compose.yaml file
COMPOSE_FILE="${DEVCONTAINER_DIR}/docker-compose.yaml"

# Check if the compose file exists
if [ ! -f "${COMPOSE_FILE}" ]; then
  echo "Error: Compose file not found at ${COMPOSE_FILE}"
  exit 1
fi

# Use docker compose to build and start the container in detached mode
docker compose -f "${COMPOSE_FILE}" up -d

# Get the container ID
CONTAINER_ID=$(docker ps -q -f "name=$(docker compose -f "${COMPOSE_FILE}" project)")

# Check if the container ID is found
if [ -z "${CONTAINER_ID}" ]; then
  echo "Error: Container ID not found."
  exit 1
fi

# Open VS Code in the container
code --folder "vscode-remote+docker://${CONTAINER_ID}$(pwd)"

echo "VS Code is now connected to the container."
