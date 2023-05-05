

## To-Do App

This is a simple mobile app that allows users to create and manage to-do tasks. The app is built using React Native and communicates with a Django backend via RESTful APIs.

## Features

- Users can view a list of all tasks
- Users can create a new task
- Users can update an existing task
- Users can mark a task as completed
- Users can delete a task

## Requirements

- Node.js (version 14 or later)
- Expo CLI
- Python (version 3.9 or later)
- Django (version 3.2 or later)
- Django REST Framework (version 3.12 or later)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running `npm install` in the terminal.
4. Start the Expo development server by running `expo start` in the terminal.
5. In a separate terminal window, navigate to the `backend` directory and create a virtual environment by running `python -m venv venv`.
6. Activate the virtual environment by running `source venv/bin/activate`.
7. Install the necessary Python dependencies by running `pip install -r requirements.txt`.
8. Start the Django development server by running `python manage.py runserver` in the terminal.

## Usage

- Open the Expo app on your mobile device or emulator.
- Scan the QR code displayed in the terminal to open the app.
- Use the app to create and manage to-do tasks.

## API Reference

The app communicates with the Django backend via RESTful APIs. The available endpoints are:

- `GET /api/todo/`: returns a list of all tasks
- `POST /api/todo/`: creates a new task
- `GET /api/todo/{id}/`: returns the details of a single task
- `PUT /api/todo/{id}/`: updates the details of a single task
- `PATCH /api/todo/{id}/`: marks a single task as completed
- `DELETE /api/todo/{id}/`: deletes a single task

