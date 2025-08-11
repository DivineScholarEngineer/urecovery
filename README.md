# urecover_django v2

## Run
```bash
python -m venv .venv
.venv\Scripts\activate       # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open http://127.0.0.1:8000/ (and /health should print "ok").

## Build your frontend
```bash
cd frontend
npm install
npm run build
```
The server expects `frontend/build/index.html` to exist. Static assets under
`frontend/build/static/` are served at `/static/...`.
