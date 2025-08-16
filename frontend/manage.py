#!/usr/bin/env python3
import os
import sys
from pathlib import Path

def main() -> None:
    base_dir = Path(__file__).resolve().parent
    if str(base_dir) not in sys.path:
        sys.path.insert(0, str(base_dir))

    # Force the right settings module (overrides any stray env var)
    os.environ["DJANGO_SETTINGS_MODULE"] = "backend.settings"

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Activate your env and install deps:\n"
            "  conda activate urcover\n"
            "  pip install -r requirements.txt\n"
        ) from exc

    execute_from_command_line(sys.argv)

if __name__ == "__main__":
    main()
