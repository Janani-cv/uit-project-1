
FROM python:3.9.23-alphine3.22
WORKDIR /app
COPY . . 

CMD ["python", "main.py"]
 