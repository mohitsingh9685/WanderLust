WanderLust 🏡

A full-stack vacation rental web application inspired by Airbnb, where users can explore, create, edit, and manage property listings. The application provides secure user authentication, property management, and a responsive interface built using the MVC architecture.

🚀 Features

* User registration and login authentication
* Secure authorization for protected routes
* Create, edit, update, and delete property listings
* View detailed information for each listing
* Server-side form validation
* Centralized error handling
* Responsive UI built with Bootstrap
* RESTful routing using Express.js
* MVC architecture for clean and maintainable code
* MongoDB database integration

⸻

🛠️ Tech Stack

Frontend

* EJS
* HTML5
* CSS3
* Bootstrap

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Other Tools

* Express Session
* Passport.js (Authentication)
* Connect Flash
* Method Override
* Joi (Validation)
* dotenv
* Git & GitHub

Remove any package from the list above if your project does not use it.

⸻

📁 Project Structure

WanderLust/
│
├── app.js
├── package.json
├── cloudConfig.js
├── middleware.js
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── utils/
├── init/
├── schema.js
└── README.md

⸻

⚙️ Installation

1. Clone the repository

git clone https://github.com/<your-username>/WanderLust.git

2. Navigate to the project folder

cd WanderLust

3. Install dependencies

npm install

4. Configure environment variables

Create a .env file in the root directory.

Example:

ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
# If using Cloudinary
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

⸻

▶️ Running the Project

Start the development server:

npm start

The application will be available at:

http://localhost:8080/listings

⸻

📌 Available Routes

Method	Route	Description
GET	/listings	Display all listings
GET	/listings/new	Show form to create a listing
POST	/listings	Create a new listing
GET	/listings/:id	View listing details
GET	/listings/:id/edit	Edit a listing
PUT	/listings/:id	Update a listing
DELETE	/listings/:id	Delete a listing

⸻

🏗️ Architecture

The application follows the Model-View-Controller (MVC) design pattern.

* Models – Database schema and data management
* Views – EJS templates for the user interface
* Controllers – Business logic
* Routes – API and page routing
* Middleware – Authentication, validation, and error handling

⸻

🔒 Authentication

* User Registration
* User Login
* User Logout
* Session-based Authentication
* Protected Routes
* Authorization for Listing Management

⸻

📸 Screenshots

Add screenshots of:

* Home Page
* Listings Page
* Listing Details
* Login Page
* Signup Page
* Create Listing
* Edit Listing

⸻

🌐 Deployment

You can deploy the application using:

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

⸻

👨‍💻 Author

Mohit Singh

GitHub: https://github.com/mohitsingh9685

LinkedIn: (Add your LinkedIn profile URL here)

LeetCode: (Add your LeetCode profile URL here)

⸻

📄 License

This project is intended for educational and portfolio purposes.
