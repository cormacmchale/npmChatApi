FROM ubuntu:16.04
RUN apt-get update -y
RUN apt-get install -y python-pip
RUN apt-get install -y python-dev
RUN pip install Flask==1.1.1
RUN pip install numpy==1.16.5
COPY webApp.py ./
COPY /templates ./templates
COPY /static ./static
CMD ["python","webApp.py"]
