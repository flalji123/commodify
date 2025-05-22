#!/bin/bash

# Move into backend directory if needed (only if main.py is inside it)
cd backend

# Install dependencies
pip install -r requirements.txt

# Start FastAPI with the PORT environment variable
uvicorn main:app --host 0.0.0.0 --port ${PORT}