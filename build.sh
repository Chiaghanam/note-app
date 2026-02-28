#!/bin/bash
cd react-note-app && npm install && npm run build
cd ..
python manage.py collectstatic --noinput
python manage.py migrate