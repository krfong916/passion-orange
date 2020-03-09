# Passion Orange

Passion Orange is a personal playground for container development. Currently, it contains Docker best practices, and in time, Kubernetes.

This project also serves as a guide for a Node / Express app.

## Getting Started

### 1. Docker and Docker Compose Installed?

This repo assumes you already have Docker and Docker compose installed. If not, you can head over to [Docker's website](https://docs.docker.com/install/) and install a version of Docker for your operating system of choice.

### 2. How To Clone This Repo

```sh
git clone https://github.com/krfong916/passion-orange.git
```

### 3. Trying Out the App

#### Without Docker Compose

_Note:_ You must remove the `docker-compose.yml` file from the project directory

```sh
docker image build -t image_name_here:version_number_here .
docker container run -p 3000 --name specify_container_identifier_here image_name_here:version_number_here
```

#### With Docker Compose

```sh
docker-compose build
docker-compose up
```

#### Using Docker for Windows, Mac or Linux?

Check out `http://localhost:3000` in your browser.

## Built With

Node / Express - Server Framework
Docker - Container Software
Babel - Transpiler
Yarn - Dependency Management

## About the Author

What's good? I'm Kyle Fong. I'm a software engineer.
