#!/bin/bash

# Simple script to serve the website locally on port 8000
# Usage: ./serve.sh

echo "Starting local server for Bereket Website..."
echo "Open your browser at: http://localhost:8000"

# Use /usr/bin/python3 as verified to be working
/usr/bin/python3 -m http.server 8000
