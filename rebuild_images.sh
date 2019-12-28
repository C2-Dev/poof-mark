#!/usr/bin/env bash

CUR_DIR=$(pwd)
DOCKERBIN="docker"

if command -v docker.exe > /dev/null; then
  echo "=== WSL detected, using docker.exe"
  DOCKERBIN="docker.exe"
fi

echo "=== Purging old entries"
${DOCKERBIN} stop poof-back poof-postgres
${DOCKERBIN} rm poof-postgres poof-back
${DOCKERBIN} volume rm poof-postgres

echo "=== Rebuilding poof/back"
${DOCKERBIN} rmi poof-back
${DOCKERBIN} build --no-cache -t poof-back .
cd ${CUR_DIR}