#!/bin/bash

# Simple script to serve the website locally
# Usage: ./serve.sh [port] [address]
# Example: ./serve.sh 8080 0.0.0.0

PORT=${1:-8000}
ADDRESS=${2:-127.0.0.1}

echo "Starting local server for Bereket Website..."
echo "Open your browser at: http://$ADDRESS:$PORT"

# Use /usr/bin/python3 as verified to be working
/usr/bin/python3 -m http.server "$PORT" --bind "$ADDRESS"
