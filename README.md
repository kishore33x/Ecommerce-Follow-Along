Ecommerce-Follow-Along

Milestone 1:
Project Overview:

This project will guide you through building a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will learn how to implement key functionalities such as user authentication, product management, and order handling while gaining hands-on experience with REST APIs, database schema design, and frontend development with React.

Key Features:
User Authentication: Secure login and registration with JWT.
Product Management: CRUD operations for products, with features like filtering and sorting.
Order Handling: Users can place and view orders.
REST API: Build scalable API endpoints for managing users, products, and orders.
Frontend: Responsive UI built with React for a smooth user experience.
Technologies Used:
MongoDB
Express.js
React.js
Node.js
JWT for authentication
REST API

Milestone 2 : Project Setup and Login Page
Created a structured folder hierarchy for the project. Set up a React app for the frontend. Set up a Node.js server for the backend. Configured Tailwind CSS for streamlined styling. Added optional extensions for improving development efficiency. Built a functional and styled Login Page for the frontend.

Milestone 3 :
Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation.

Milestone 4 :
created a User Model to define how user data is structured in the database also developed a User Controller to manage user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

Milestone 5 (Frontend - Signup page) :
developed the frontend signup page using React. The page includes a form for users to register, with input validation for fields like email and password. integrated the page with the backend API to handle user registration and implemented error handling to ensure a smooth user experience.

Milestone 6 :
In this milestone, we implemented secure user authentication using JSON Web Tokens (JWT). This ensures that users can securely register, log in, and maintain authentication across sessions.

Key Updates: JWT-Based Authentication: Users receive a signed token upon login or signup. Protected Routes: Implemented middleware to restrict access to authorized users only. Password Hashing: Used bcrypt.js to securely hash passwords before storing them. User Login & Logout: Developed API endpoints for user login and logout functionality. Persistent Authentication: Implemented token storage for maintaining user sessions.

With this milestone, we have laid the foundation for secure user access and protected API endpoints, ensuring a robust authentication system.

Milestone 7 (Backend - User Login Authentication)
Implemented user login functionality with secure password validation using bcrypt.

Key Updates:

Created a login API endpoint to authenticate users.
Retrieved user data from the database based on email/username.
Used bcrypt to compare entered passwords with stored hashed passwords.
Implemented error handling for invalid credentials.
With this milestone, users can securely log in to the application, ensuring safe authentication. 

Milestone 8 (Frontend - Product Card Component & Homepage)
Designed a reusable product card component and created a structured homepage layout to display products effectively.

Key Updates:

Developed a dynamic product card component using props to display product details.
Implemented array mapping to render multiple product cards dynamically.
Styled the homepage using a grid/flexbox layout for better organization.
With this milestone, the homepage now showcases products in a clean and visually appealing manner.  

## Milestone 9: Frontend - Product Input Form

- Created a product input form to collect product details.
- Implemented functionality to upload multiple product images.
- Ensured form validation for required fields.
- Designed a user-friendly UI for product entry.
- Prepared for future enhancements like admin access and shop profile integration.  

## Milestone 10: Backend - Product Schema & API Endpoint

- Created a Mongoose schema for products, defining fields such as name, description, price, and image URL.
- Implemented validation to ensure proper data integrity.
- Built a POST endpoint to receive and store product details in MongoDB.
- Ensured validation before saving product data to prevent errors.
- Prepared for future enhancements such as admin-only access and shop profiles.  

## Milestone 11: Dynamic Home Page

Today, we will make our home page that will display all the products dynamic. We will write an endpoint that will send all the data that was saved in MongoDB using the add products page earlier.

Learning Goals 🎯
By the end of this milestone, you will:

Understand how to write an endpoint that will extract and send data from MongoDB.
Learn how to receive data at the frontend.
Learn how to display that data dynamically using the product card component created earlier.

## Milestone 12: My Products Page
Overview
In this milestone, we created a "My Products" page that displays all the products added by the user, filtered by their email.

Features
Backend: Added an endpoint to fetch products by user email.
Frontend: Created a function to retrieve and display products dynamically.
Component: Utilized the Card component to present each product.
Got it! Here’s a simplified version of the README file without code:

## Milestone 13: Edit Product Functionality
Learning Goals 🎯
Write an endpoint to update existing data in MongoDB.
Autofill forms with previous data for editing.

## Milestone 14: Delete Product Functionality
Learning Goals 🎯
Write an endpoint to update existing data in MongoDB.
Deletes the product from the page
Great, you're working on Milestone 15 of your follow-along project. Here’s a short README file tailored to your milestone:

## Milestone 15: Responsive navbar added
Description
This milestone involves creating a responsive Navbar component with links to all pages in your application and ensuring smooth and easy navigation.

Learning Goals 
By the end of this milestone, you will:

Learn how to create a Nav component.
Understand how to reuse the same component across multiple pages.
Features
Links to Home, Add product, and Cart pages.
Responsive design for all screen sizes.
Reusable Navbar component.

## Milestone 16: Product in detail Page is added
Description
This milestone involves creating a Page where it contains more detailed information about the product

Features
Links to Buy, Cart pages.
Responsive design for all screen sizes.
Shows similar products at bottom of Page.

## Milestone 17: Cart Functionality in Node.js + MongoDB
This project adds cart functionality to an existing Node.js + MongoDB application. The functionality includes creating a cart, adding products to the cart, retrieving cart details, and removing products from the cart. Here’s a professional README.md file tailored for Milestone 18 — Fetching products inside a cart using the user's email:

## Milestone 18: Fetch Products in Cart using User Email
This project adds functionality to fetch products inside a user's cart using their email. The backend endpoint retrieves cart data, including full product details, and returns it in a structured format to display on the cart page.

