# Simple 2 page website

## Introduction
This project aims to create a simple 2-page website using Node.js and an SQL database. The website will have features to fetch user data from an external API, delete user data from the database, and display user details with pagination and filtering options.

## Video Walkthrough of the Project
[Video Link](https://drive.google.com/drive/folders/1eOQ3RrUH9AO7zbEf5oEMKbbSmapIfPX-?usp=sharing).

## Features
List of key features of the application:

- Fetch Users: Fetches bulk user data (around 50-100 records) from the [RandomUser API](https://randomuser.me/) and stores it in the database.
- Delete Users: Removes all user entries from the database.
- User Details: Displays user data in a table view on Page 2 with pagination and filtering options.

## Design Decisions or Assumptions
- The database table name will be determined during the setup process.
- The application will use a simple design for the user interface.
- Pagination will be implemented using a standard pagination numbered buttons.
- Filtering will be implemented based on specific columns such as name, age, etc.

## Installation & Getting Started
Follow these steps to install, configure, and run the project:

1. Clone the repository.
2. Navigate to the backend  directory.
3. Install dependencies using the following command:
   
   ```bash
   npm install
   ```

4. Set up the database connection details in a `.env` file.
5. Run the application using the following command:
   
   ```bash
   npm run dev 
   ```
6.  Navigate to the frontend  directory.
7. Install dependencies using the following command:
   
   ```bash
   npm install
   ```
8. Run the react application using the following command:
   
   ```bash
   npm start
   ```

## Usage
To use the application:

1. Access the homepage.
2. Click the "Fetch Users" button to fetch user data from the RandomUser API and store it in the database.
3. Click the "Delete Users" button to remove all user entries from the database.
4. Click the "User Details" button to navigate to Page 2, where user data is displayed in a table view with pagination and filtering options.

## APIs Used
- [RandomUser API](https://randomuser.me/): Used to fetch user data.

## API Endpoints
- `POST /api/bulkcreate`: On recieving user data in bulk from the RandomUser API passed in the body as array of objects, stores it in the database[AWS RDS].
- `DELETE /api/bulkdelete`: Deletes all user entries from the table.
- `GET /api`: Retrieves user data from the AWS RDS database and also has pagination option in queries and filter options .

    Following are the query parameters that you can pass in the API for the desired output
    -  page
    - perPage
    - name
    - username
    - email
    - address
    - country
    - image
    - minAge
    - maxAge

## Technology Stack
The project uses the following technologies:

- Node.js
- Express.js
- MySQL
- AWS RDS
- React
- Sequelize ORM
