### Ecommerce-Follow-Along

## Milestone 1:
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

## Milestone 2 : Project Setup and Login Page
Created a structured folder hierarchy for the project. Set up a React app for the frontend. Set up a Node.js server for the backend. Configured Tailwind CSS for streamlined styling. Added optional extensions for improving development efficiency. Built a functional and styled Login Page for the frontend.

## Milestone 3 :
Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation.

## Milestone 4 :
created a User Model to define how user data is structured in the database also developed a User Controller to manage user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

## Milestone 5 (Frontend - Signup page) :
developed the frontend signup page using React. The page includes a form for users to register, with input validation for fields like email and password. integrated the page with the backend API to handle user registration and implemented error handling to ensure a smooth user experience.

## Milestone 6 :
In this milestone, we implemented secure user authentication using JSON Web Tokens (JWT). This ensures that users can securely register, log in, and maintain authentication across sessions.

Key Updates: JWT-Based Authentication: Users receive a signed token upon login or signup. Protected Routes: Implemented middleware to restrict access to authorized users only. Password Hashing: Used bcrypt.js to securely hash passwords before storing them. User Login & Logout: Developed API endpoints for user login and logout functionality. Persistent Authentication: Implemented token storage for maintaining user sessions.

With this milestone, we have laid the foundation for secure user access and protected API endpoints, ensuring a robust authentication system.

## Milestone 7 (Backend - User Login Authentication)
Implemented user login functionality with secure password validation using bcrypt.

Key Updates:

Created a login API endpoint to authenticate users.
Retrieved user data from the database based on email/username.
Used bcrypt to compare entered passwords with stored hashed passwords.
Implemented error handling for invalid credentials.
With this milestone, users can securely log in to the application, ensuring safe authentication. 

## Milestone 8 (Frontend - Product Card Component & Homepage)
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

## Milestone 19: Cart Functionality Implementation
Overview 
In this milestone, we implemented a cart system with both frontend and backend functionalities. The cart page is designed to display products dynamically, allowing users to adjust the quantity of each product with + and - buttons. Backend endpoints were created to handle quantity updates efficiently.

Key Features 
Cart Frontend Page:
Displays all the products in the user's cart.
Each product has:
Name
Price
Product Image
Quantity Counter with + and - buttons.

## Milestone 20: Profile Page and User Data API
Overview 
In this milestone, we implemented a profile page and a backend endpoint to enhance user experience and manage user data. The profile page displays key user information such as profile photo, name, email, and address. It allows adding new addresses while handling cases where no addresses exist.

Key Features 
Backend Endpoint:

Created an endpoint to retrieve all user data.
Supports sending user data via email (optional, as per requirements).
Frontend Profile Page:

Displays:
Profile Photo, Name, and Email in one section.
Address in another section.
Provides an option to Add Address.
Displays a fallback message "No address found" if no addresses are available.
Dynamic Design:

The profile page is designed with responsiveness and usability in mind.

## Address Form – Milestone 21
Overview
This project implements a frontend Address Form that allows users to input their address details, including:

Country
City
Address Line 1 and 2
Zip Code
Address Type

Features
React-based address form
Uses state management to store input data
Navigates to the form when clicking Add Address in the profile page
Submits the form data via API

Submission
Code pushed to GitHub
Repository is publicly accessible
README updated with progress

## Milestone 22 - Save Address in User Profile
Overview
In this milestone, we created a backend endpoint to store user addresses in the database. The endpoint receives address details from the frontend form and appends them to the address array in the user collection.

Learning Outcomes
Implemented an API endpoint to handle address storage
Updated the user collection to include multiple addresses
Strengthened backend skills for handling user profiles

Submission Details
Code pushed to GitHub repository
Repository is publicly accessible

## Milestone 23 - Implementing Place Order and Select Address Page
Overview
In this milestone, we implemented the Place Order functionality in our e-commerce project. This includes adding a button inside the cart page, creating a select address page, and setting up the backend to handle addresses.

Features Implemented
Place Order button added inside the cart page, redirects to the select address page
Select Address Page displays all saved addresses and allows the user to choose a delivery address
Backend API for addresses created to fetch user addresses
Order Schema defined for storing order details in MongoDB

Steps Completed
Added a Place Order button inside the cart page
Created a select address page with all saved addresses
Developed a backend API to retrieve user addresses
Defined a MongoDB schema to store order details

Submission Details
Code pushed to GitHub
Repository is publicly accessible
README updated

## Milestone 24 - Order Confirmation Page
Overview
In this milestone, we implemented the Order Confirmation Page where users can review their order details before finalizing the purchase.

Key Features
Display all the ordered products
Show the selected delivery address
Calculate and display the total price of the cart
Provide a Place Order button to confirm the purchase

Implementation Steps
Fetch and display ordered products
Show the selected address for delivery
Calculate the total order value dynamically
Add a Place Order button to proceed with checkout

Submission Details
Code pushed to GitHub
Public repository link updated
Assignment submitted successfully

## Milestone 25 - Place Order Endpoint
Overview
In this milestone, we created a backend endpoint to handle order placement in our e-commerce application.

Key Tasks
Developed an endpoint to receive product, user, and address details
Retrieved the user ID using their email
Created separate orders for each product with the same address
Stored order details in the MongoDB orders collection using the order schema

Learning Outcome
Gained experience in handling order processing through a backend API

Submission
Code pushed to GitHub public repository
README updated with milestone progress
Repository link shared for submission

## Milestone 26 - Get User Orders Endpoint
Overview
In this milestone, we created a backend endpoint to retrieve all orders placed by a user.

Key Tasks
Developed an endpoint that receives the user's email
Retrieved the user ID using their email
Fetched all orders associated with the user's ID from the database
Sent the list of orders in the response

Learning Outcome
Gained experience in fetching and managing user-specific order data

Submission
Code pushed to GitHub public repository
README updated with milestone progress
Repository link shared for submission

## Milestone 27 - My Orders Page
Overview
In this milestone, we created a My Orders page for our frontend. This page fetches and displays all user orders by sending a GET request to the my-orders endpoint using the user’s email.

Learning Goals
Implement a frontend page to display user orders
Send a request to retrieve order data from the backend
Integrate the My Orders page into the navbar for easy access

Implementation Steps
Created a My Orders page
Sent a GET request to fetch user orders using their email
Displayed the retrieved orders on the page
Updated the navbar to include the My Orders page

Submission Guidelines
Code pushed to the GitHub repository
Repository is publicly accessible
README updated with milestone details
Repository link submitted

## Milestone 28 - Cancel Order Feature
Overview
In this milestone, we enhanced the My Orders page by adding a Cancel Order button and implemented a backend endpoint to handle order cancellations.

Learning Goals
Enable users to cancel placed orders
Implement order cancellation logic in the frontend and backend
Prevent the cancel button from appearing for already canceled orders

Implementation Steps
Added a Cancel Order button for each order in the My Orders page
Ensured the button is hidden for already canceled orders
Created a backend endpoint to receive an order ID, find the order, update its status to canceled, and save the changes

Submission Guidelines
Code pushed to the GitHub repository
Repository is publicly accessible
README updated with milestone details
Repository link submitted

## Milestone 29 - PayPal Integration
Overview
In this milestone, we started integrating an online payment gateway using the PayPal API in the application.

Key Implementations
Created a PayPal Developer Account and set up a Sandbox Account
Retrieved and saved the Sandbox User ID and Client ID
Updated the order confirmation page with two payment options
Cash on Delivery (COD)
Online Payment via PayPal
Implemented radio buttons to toggle between COD and PayPal payment
Prepared the UI to display PayPal payment buttons

Next Steps
Implement the functionality for PayPal payment processing in the upcoming milestone

## Milestone 30 - PayPal Payment Integration
Overview
This project implements an online payment gateway using the PayPal API in a React application.

Features
Integrated PayPal API for secure payments
Used react-paypal-js for seamless UI integration
Supports multiple payment methods like credit or debit cards

Installation
Clone the repository
Install dependencies
Add your PayPal client key in a .env file
Start the application

Usage
Access the payment page and proceed with PayPal payment

Technologies Used
React
PayPal API
react-paypal-js

Successfully completed Milestone 30

## Milestone 31 - Global State Management with Redux
Overview
In this milestone, we implemented global state management using Redux to store user data.

Features Implemented
Installed react-redux for state management
Created a store folder with store.js to configure a Redux store with a userReducer
Implemented userActions.js with a setEmail action to update the email
Wrapped the App component with the Redux Provider in index.js

Installation
Clone the repository
Install dependencies
Start the project

Usage
The global state now holds the user email, which can be accessed and updated from any component

Next Steps
In the next milestone, we will implement email state management across components

## Milestone 32 - Global State Management with Redux
Overview
In this milestone, we implemented Redux to manage the global state for user authentication. Specifically, we stored the user's email in the Redux store and accessed it across all pages.

Steps Completed
Used useDispatch to store the email in the global state upon login
Used useSelector to access the email across all pages
Integrated Redux for centralized state management

Technologies Used
React
Redux Toolkit
React-Redux

## Milestone 33 - JWT Token and Cookie Storage
Overview
In this milestone, we implemented JSON Web Token authentication by generating a token and storing it in a cookie for secure session management.

Steps Completed
Installed jsonwebtoken package
Used sign method to generate a JWT with email and user ID
Set maxAge to define the token expiration time
Stored the JWT inside a cookie in the response

Technologies Used
Node.js
Express.js
JSON Web Token
Cookie Parser

## Milestone 34 - JWT Token Validation
Overview
This milestone focuses on implementing JWT authentication by validating the token stored in cookies. It ensures that only authenticated users can access protected routes.

Learning Goals
Extract the JWT token from browser cookies and send it to the server
Validate the received JWT token on the backend
Prevent unauthorized users from accessing protected pages

Implementation Steps
Extract JWT Token from Cookies
Validate JWT Token in Backend
Protect Routes
Enforce Authentication in Frontend

## Milestone 35 - Deployment
Frontend and Backend Deployed

Conclusion
By implementing JWT validation, we enhance security and ensure users can only access resources they are authorized for.

