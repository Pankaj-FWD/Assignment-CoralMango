Node.js (version 10 or later)
MongoDB (running instance or hosted instance)
npm package manager
Step 1: Clone the Repository

Clone the repository from GitHub using git clone https://github.com/Pankaj-FWD/Assignment-CoralMango.git
Checkoout to the Pankaj branch
Navigate to the project directory using the terminal or command prompt
Step 2: Install Dependencies

Install the required dependencies using npm install in the terminal
This will install all the dependencies required for the project as specified in the package.json file
Step 3: Set Up Environment Variables

Create a .env file in the root directory of the project (given example.env)

Change the MONGODB_URI value to the connection string of your MongoDB database
Alternatively, you can use environment variables to set the values for PORT and MONGODB_URI instead of adding them to the .env file
Step 4: Start the Server

Start the server using npm start in the terminal
The server will start running on the specified port (8000) and connect to the MongoDB database