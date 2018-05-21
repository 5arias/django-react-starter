# django-react-starter

A sample app that runs a React app inside a Django template.

## Installation

After cloning this repo:

```shell
# set up backend environment
pip install pipenv
pipenv install
pipenv run ./manage.py migrate

# set up frontend environment
cd frontend
npm install -g yarn
yarn
```

## Run the frontend service (dev only)

```shell
yarn start
```

## Run the backend service

```shell
pipenv run ./manage.py runserver
```

## Accessing the pages

Several routes are now available:

| route                | is auth required? | is 404? |
|----------------------|-------------------|---------|
| /                    | no                | no      |
| /auth                | yes               | no      |
| /notprivate          | no                | yes     |
| /notprivate/private/ | yes               | yes     |
