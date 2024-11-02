## Movie Management System

- This project is a full-stack movie management system developed using Node.js and React. Users can add, list, delete, and view movie details.

### Features

- Movie List: Lists all movies available in the system.

- Movie Details: Displays detailed information like title and description for each movie.

- Add Movie: Allows users to add a new movie.

- Delete Movie: Users can delete movies from the list.

### Technologies

- Frontend: React

- Backend: Node.js

### Setup

1.Clone this repository

2.Install backend dependencies and start the server:

```
cd backend
npm install
npm start
```

3.Install frontend dependencies and start the client:

```
cd frontend
npm install
npm start
```

### Usage

- The homepage displays a list of movies.

- New movies can be added via the "Add Movie" button.

- Click on a movie in the list to view its details.

- Each movie has a delete option to remove it from the list.


### API Documentation

| Method   | URL                  | Description               |
|----------|-----------------------|---------------------------|
| `GET`    | `/api/movies`        | Fetch all movies          |
| `POST`   | `/api/movies`        | Add a new movie           |
| `GET`    | `/api/movies/:id`    | Fetch details of a movie  |
| `DELETE` | `/api/movies/:id`    | Delete a specific movie   |


### Gif

<image src="movieproject.gif">





