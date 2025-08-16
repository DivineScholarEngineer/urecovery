# uRecover — README

A compact guide to run the **uRecover** project locally with one click in PyCharm or from the command line.

---

## What you can do (already present in this repo)

- **Run the Django backend** using `manage.py` (configured to point at `backend.settings`).  
- **Install all Python dependencies** from `requirements.txt` in your chosen environment.  
- **Use the existing SQLite database** (`db.sqlite3`) or create a fresh one via migrations.  
- **Serve the frontend build** if present under `frontend/` (or you can build your own and wire it up).

> Note: `manage.py` is set to use `backend.settings` so you don’t have to export any settings variable manually.

---

## Prerequisites

- Python 3.x (the same interpreter you’ll use to run the server)
- (Optional but recommended) Conda environment named `urcover`
- Pip installed in that interpreter

If you use Conda:
```bat
conda create -n urcover python=3.11 -y
conda activate urcover
```

---

## Quick Start (Command Line)

From the project root (the folder containing `manage.py` and `backend/`):

```bat
:: 1) Activate your environment
conda activate urcover

:: 2) Install dependencies
pip install -r requirements.txt

:: 3) (Optional) Apply database migrations
python manage.py migrate

:: 4) Run the development server
python manage.py runserver
```

Open http://127.0.0.1:8000/

---

## One-Click Run in PyCharm

**Option A (direct runserver parameter):**

1. Run → Edit Configurations… → + → Python  
2. **Name:** Django Server (any name is fine)  
   **Script path:** `<project_root>\manage.py`  
   **Parameters:** `runserver`  
   **Working directory:** `<project_root>`  
   **Interpreter:** your Conda env (`urcover`)  
3. Ensure **“Add content roots to PYTHONPATH”** is checked.  
4. Click **OK**, then hit the green **Play** button.  

**Option B (just run manage.py directly):**

1. In PyCharm, open **Run → Edit Configurations… → + → Python**  
2. **Script path:** `<project_root>\manage.py`  
3. **Working directory:** `<project_root>`  
4. **Interpreter:** select your `urcover` environment  
5. Leave **Parameters** empty.  
6. Now click **Run**.  
   - PyCharm will execute `python manage.py`  
   - You’ll see Django’s command-line help, confirming it works.  
   - From there you can add arguments (like `runserver`, `migrate`, etc.) directly inside PyCharm if you prefer.

---

## Project Structure (typical)

```
project_root/
├─ manage.py
├─ requirements.txt
├─ db.sqlite3                # optional existing database
├─ backend/
│  ├─ __init__.py
│  ├─ settings.py
│  ├─ urls.py
│  ├─ wsgi.py
│  └─ asgi.py
└─ frontend/
   └─ ... (optional build or source)
```

---

## How `manage.py` is configured

- It ensures the project root is on `sys.path` and sets the correct settings module:
  - `DJANGO_SETTINGS_MODULE = "backend.settings"`

You can start the server with:
```bat
python manage.py runserver
```

---

## Troubleshooting

### 1) “No module named 'django'”  
Install dependencies **in the same interpreter** you’re running:
```bat
conda activate urcover
pip install -r requirements.txt
```

### 2) Unicode escape path error in strings (Windows)
Avoid raw Windows backslashes inside Python strings/docstrings. Use **forward slashes** or **double backslashes**.

### 3) Import error mentions `backend.urecover`
If an environment variable is forcing the wrong settings module, clear it:

- **In Windows (Anaconda Prompt):**
```bat
setx DJANGO_SETTINGS_MODULE ""
```
Close and reopen PyCharm/terminal afterward.

Also check PyCharm **Run configuration → Environment variables** and remove `DJANGO_SETTINGS_MODULE` there (or set it to `backend.settings`).

---

## Common Commands

```bat
python manage.py runserver
python manage.py migrate
python manage.py makemigrations
python manage.py createsuperuser
```

---

## Notes

- If you move the project out of OneDrive into a simpler path like `C:\Projects\ucover\`, paths tend to behave better on Windows.
- Keep `ALLOWED_HOSTS` generous (`["*"]`) during local dev; tighten it for production.

---

**Happy building!**
