FROM python:3.9.23-alpine3.22
WORKDIR /app
COPY . . 
CMD ["python", "main.py"]
 