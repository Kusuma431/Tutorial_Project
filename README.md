**🎓 **Full Stack LMS Website (MERN Stack)****

In this tutorial project, we are going to build a full stack Learning Management System (LMS) website using the MERN Stack.
This platform allows educators to publish courses online and students to enroll, purchase, and watch courses seamlessly.

**🚀 Features**

**👨‍🎓 Student Portal:**

User Registration & Login (powered by Clerk)

Browse and enroll in available courses

Secure payments through Stripe

Watch purchased courses

**👩‍🏫 Educator Portal:**

Publish and manage courses

Track enrollments & earnings

**🔐 Authentication & User Management:**

Clerk provides secure authentication and beautiful pre-built UI components like Sign-In, Sign-Up, and Profile.

**💳 Payment Gateway Integration**

Stripe integration for secure transactions

Students can purchase courses online

Educators earn revenue from their courses

**🛠️ Tech Stack**

Frontend: React, Clerk, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Payment Gateway: Stripe
Authentication: Clerk

**📂 Project Structure**
lms-mern/
│── client/         # React frontend
│── server/         # Express backend
│── models/         # Mongoose models
│── routes/         # API routes
│── controllers/    # Business logic
│── config/         # Database & environment configs
│── README.md

⚡ Getting Started
1. Clone the Repository
git clone https://github.com/Kusuma431/Tutorial_Project.git
cd lms-mern

**2. Install Dependencies**

For backend:

cd server
npm install


For frontend:

cd client
npm install

**3. Set Environment Variables**

Create .env files in both client and server folders with the following:

Server .env:

MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
CLERK_API_KEY=your_clerk_api_key
PORT=5000


Client .env:

REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key

**4. Run the Application**

Backend:

cd server
npm run dev


Frontend:

cd client
npm start


The app will be available at:
👉 http://localhost:3000


💡 Future Improvements

Add video streaming optimization

Implement instructor dashboards with analytics

Course reviews & ratings

Admin panel for site management

🤝 Contributing

Contributions are welcome!
If you’d like to improve this project, feel free to fork it and submit a PR.

📜 License

This project is licensed under the MIT License.
