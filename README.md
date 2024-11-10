# Dynamic Portfolio Builder

The **Dynamic Portfolio Builder** is a comprehensive web application designed to enable individuals and businesses to create, customize, and manage personalized online portfolios easily. This platform combines ease of use with powerful features, making it ideal for users from various professions looking to showcase their work online without needing technical expertise.

## Features

- **User Registration & Authentication**: Secure user accounts using JWT-based authentication for secure logins and data protection.
- **Portfolio Customization**: Users can create portfolios with real-time customization, choosing from multiple templates that support text, image, and layout modifications.
- **Admin Panel**: A robust admin panel allows administrators to manage user accounts, monitor activity, and oversee template options for a smooth user experience.
- **Real-time Updates**: Changes made in the admin panel or by users are instantly reflected on the live website.
- **Responsive Design**: Ensures optimal display across various devices, including desktops, tablets, and smartphones.
- **Role-based Access Control**: Distinct permissions for administrators and users to ensure data privacy and content control.

## Technologies Used

- **Frontend**: React - Provides a responsive and interactive user interface.
- **Backend**: Node.js - Manages server-side operations and API requests.
- **Database**: MySQL - Stores user and portfolio data securely.
- **Authentication**: JSON Web Tokens (JWT) - Ensures secure login and role-based access control.

## Getting Started

### Prerequisites

- Node.js
- MySQL
- Any modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dynamic-portfolio-builder.git
   cd dynamic-portfolio-builder
Install dependencies:

bash
Copy code
npm install
Set up the database:

Configure your MySQL database and add the connection details in a .env file.
Example .env setup:
env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=portfolio_builder
Start the server:

bash
Copy code
npm start
Access the application at http://localhost:3000.

Usage
Register/Login: Users can create an account or log in to access portfolio creation tools.
Create and Customize Portfolio: Select a template, upload media, and edit text and layout for a personalized portfolio.
Admin Controls: Administrators can add or edit templates, manage user data, and monitor system health from the admin panel.
