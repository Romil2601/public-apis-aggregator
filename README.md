# Public API Browser 🚀

A full-stack web application to browse, search, and manage public APIs.  
Built with **Vite (React)** for the frontend, **Python** for the backend, and **SQL** for data storage.

---

## 🛠 Tech Stack

### Frontend
- Vite + React
- Axios
- CSS Grid / Flexbox
- Deployed on Vercel

### Backend
- Python
- REST API (Flask / FastAPI)
- SQL (SQLite / MySQL / PostgreSQL)
- Deployed on Render

---

## 📁 Project Structure

```text
public-api-browser/
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── database.db
│
├── README.md
└── .gitignore

```

---

## ✨ Features

- Browse public APIs
- Search APIs by name
- Add new APIs
- Edit existing APIs
- Delete APIs
- Responsive grid layout (4 cards per row on desktop)
- REST-based backend architecture

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/Romil2601/public-api-browser.git  
cd public-api-browser  

---

### 2️⃣ Frontend Setup (Vite)

cd frontend  
npm install  
npm run dev  

Frontend runs at:  
http://localhost:5173

---

### 3️⃣ Backend Setup (Python)

cd backend  
python -m venv venv  
venv\Scripts\activate        (Windows)  
source venv/bin/activate    (Mac/Linux)  

pip install -r requirements.txt  
python app.py  

Backend runs at:  
http://127.0.0.1:8000

---

## 🔌 API Endpoints

GET    /apis        → Get all APIs  
POST   /apis        → Add new API  
PUT    /apis/:id    → Update API  
DELETE /apis/:id    → Delete API  

---

## 🗄 Database

- Uses SQL database
- Default: SQLite (database.db)
- Can be upgraded to MySQL or PostgreSQL

---

## 🌍 Deployment

### Frontend
- Root Directory: frontend
- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist

### Backend
- Root Directory: backend
- Build Command: pip install -r requirements.txt
- Start Command: python app.py

---

## 🔐 Environment Variables (Backend)

PORT=8000  
DATABASE_URL=backend/database.db 

---

## 📌 Future Improvements

- Authentication & authorization
- API categories & filtering
- Pagination
- Admin dashboard
- Production-grade database (PostgreSQL)

---

## 👤 Author

Romil Raja  
GitHub: https://github.com/Romil2601  
Portfolio: https://romil-raja-portfolio.vercel.app/

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
