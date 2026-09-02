WanderLust 🏡

A full-stack vacation rental web application inspired by Airbnb, where users can explore, create, edit, and manage property listings. 

🚀 Features

* Create, edit, update, and delete property listings
* View detailed information for each listing
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
├── models/
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

MONGODB_URL=your_mongodb_connection_string
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

📸 Pages

pages of:

* Home Page
* Listings Page
* Listing Details
* Create Listing
* Edit Listing

⸻

🌐 Deployment

You can deploy the application using:

* Frontend: Vercel
* Database: MongoDB Atlas

⸻

👨‍💻 Author

Mohit Singh

GitHub: https://github.com/mohitsingh9685

