# Contact Manager (MERN Stack)
A modern, responsive **Contact Manager** application built using the MERN stack. The app allows users to create, view and delete contacts with a clean desktop UI.

## 🚀 Features

* Add new contacts (Name, Email, Phone, Message)
* View contacts in a responsive table (desktop)
* Mobile‑friendly card UI
* MongoDB Atlas cloud database
* Fully responsive design


## 🧱 Tech Stack

### Frontend

* React (Vite)
* Axios
* React Toastify
* CSS (Responsive, Mobile‑First)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## 📂 Project Structure

```
contact-manager/
├── backend/
│   ├── config/db.js
│   ├── models/Contact.js
│   ├── routes/contactRoutes.js
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.jsx
    │   │   ├── ContactList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd contact-manager
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
```

Run backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open: **[http://localhost:5173](http://localhost:5173)**


## 📱 Responsive Design

* Desktop: Form + Table layout
* Mobile: Form + Card UI
* Scrollable contact list

## 📌 Future Improvements

* Edit contact feature
* Authentication
* Pagination
* Deployment (Vercel + Render)

## 👨‍💻 Author

Built with ❤️ for interview and learning purposes.

