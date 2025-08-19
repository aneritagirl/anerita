@echo off
setlocal
echo Starting ANERITA local backend...
python --version >nul 2>&1 || (echo Python not found. Install from python.org & pause & exit /b)
python -m venv .venv
call .venv\Scripts\activate
pip install -r anerita_backend_nextgen\requirements.txt
python anerita_backend_nextgen\app.py
