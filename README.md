# User Management Project

## Project Overview

This project is a user management system built using Node.js, Sequelize with MySQL, and rendered with Handlebars.

### Features

1. **Registration Page:** New users can register and their information is added to the database.
2. **Login Page:** Users can log in based on their credentials and roles.
3. **Role-based Redirects:**
   - Customers and Sellers are redirected to a user page.
   - Admins are redirected to an admin page.
4. **Protected Edit Routes:** Editing routes are protected and require authorization.
5. **Delete Route:** The delete route can only be accessed by users with the admin role.

## Technologies Used

- Node.js
- Express.js
- Sequelize
- MySQL
- Handlebars

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/ufyy01/user_mgt.git
   
3. Install dependencies:
    npm install

## Set up MySQL database:
1. Create a database named user_management.
2. Update the database configuration in config/config.json.
3. Run the application:
npm start

## Folder Structure
config/: Contains database configuration.
models/: Defines Sequelize models for user data.
public/: Static assets (CSS, images, etc.).
routes/: Express routes for different functionalities.
views/: Handlebars templates for rendering views.
server.js: Main entry point of the application.
package.json: Project dependencies and scripts.

click https://user-92he.onrender.com/ to view project
