# Q&A Forum Node API

This is a Q&A forum Node API for students and teachers to interact with each other.

## Installation

1. Make sure you have Node.js and PostgreSQL installed on your machine.

2. Clone this repository:

   ```bash
   git clone https://github.com/bluediberry/QA_API.git

## Running the project

1. Initialize the project
   
   ```bash
   cd QA_API
   npm install

2. Create a PostgreSQL database for the project
3. Update the database connection configuration in the config.js file, located in the project root directory
4. Run the database migrations:
   
   ```bash
   npx sequelize-cli db:migrate

5. Start the server
   
   ```bash
   node src/index.js

## Usage

The API server will start running on http://localhost:3000 by default.
Use an HTTP client like Postman to interact with the API endpoints.

```json

## POST /questions

Create a new question.

Request Body

{
  "title": "Your question title",
  "content": "Your question content"
}

Response
Status: 201 Created
Body:

{
  "id": 1,
  "title": "Your question title",
  "content": "Your question content",
  "createdAt": "2023-07-02T12:34:56Z",
  "updatedAt": "2023-07-02T12:34:56Z"
}

## GET /questions

Retrieve all questions.

Response
Status: 200 OK
Body:

[
  {
    "id": 1,
    "title": "Your question title",
    "content": "Your question content",
    "createdAt": "2023-07-02T12:34:56Z",
    "updatedAt": "2023-07-02T12:34:56Z"
  },
  ...
]

## POST /answers

Create a new answer.

Request Body

{
  "questionId": 1,
  "content": "Your answer content"
}

Response
Status: 201 Created
Body:

{
  "id": 1,
  "questionId": 1,
  "content": "Your answer content",
  "createdAt": "2023-07-02T12:34:56Z",
  "updatedAt": "2023-07-02T12:34:56Z"
}

## PUT /answers/:answerId/validate

Validate an answer (only for teachers).

Response
Status: 200 OK
