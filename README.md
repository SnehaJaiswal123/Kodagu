# Task Management System API
This project is a RESTful API for a task management system built using Node.js, Express.js, and MongoDB. The API allows users to perform various operations such as creating tasks, updating their status, and retrieving analytics on task completion.

## Table of Contents
+ Setup and Configuration
+ Database and Schema Design
+ API Endpoints
+ User Authentication (Optional)
+ Analytics
+ Error Handling
+ Testing
+ API Documentation
+ Setup and Configuration

 ##  1.Clone the repository
#### git clone https://github.com/your-username/task-management-api.git
cd task-management-api

## 2.Install Dependencies:
npm install

## API Endpoints
The API provides the following endpoints:

+ POST /task/create: Create a new task
+ GET /task/alltask: Retrieve a list of all tasks
+ GET /tasks/:id: Retrieve a single task by ID
+ PUT /tasks/:id: Update an existing task (including marking as completed)
+ DELETE /tasks/:id: Delete a task by ID
  ___

## Authentication
Authentication is implemented using a basic token-based approach. Only authenticated users can create, update, and delete tasks. To authenticate, include the token in the Authorization header.

 middlewares/authenticate.js


## Analytics

The API includes a simple analytics endpoint at GET /tasks/analytics. It provides statistics on task completion, such as the number of tasks completed in the last 7 days.

## Error Handling
Basic error handling is implemented using a middleware. The middlewares/errorHandler.js file handles common scenarios and returns a 500 Internal Server Error response.







