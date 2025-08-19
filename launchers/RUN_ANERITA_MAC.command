#!/bin/bash
echo "Starting ANERITA local backend..."
python3 -V >/dev/null 2>&1 || { echo "Python3 not found. Install from python.org"; exit 1; }
python3 -m venv .venv
source .venv/bin/activate
pip install -r anerita_backend_nextgen/requirements.txt
python3 anerita_backend_nextgen/app.py
