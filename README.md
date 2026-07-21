# 🛍️ E-Commerce Website

A full-stack E-Commerce web application built using the MERN stack. The platform provides a modern shopping experience with user authentication, product management, shopping cart functionality, secure payment integration, and responsive UI.

---

## 🚀 Features

### User Features
- User Registration & Login
- JWT Authentication
- Browse Products
- Product Categories
- Search Products
- Add to Cart
- Update Cart Quantity
- Checkout
- Secure Payments
- Responsive Design

### Admin Features
- Add Products
- Update Products
- Delete Products
- Upload Product Images
- Manage Orders

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT
- bcrypt

### Cloud Services
- Cloudinary

### Payment Gateway
- Razorpay
- Stripe

---

## 📂 Project Structure

```
E-Commerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/E-Commerce.git
```

Move inside the project

```bash
cd E-Commerce
```

---

## Backend Setup

Move into backend

```bash
cd Backend
```

Install dependencies

```bash
npm install
```

Start Backend

```bash
npm run server
```

or

```bash
npm start
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run Frontend

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **Backend** folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

STRIPE_SECRET_KEY=your_secret_key
```

---

## 📸 Screenshots

Add screenshots here.

Example:

- Home Page
- Product Page
- Cart
- Login
- Checkout
- Admin Dashboard

---

## Future Improvements

- Wishlist
- Product Reviews
- Order Tracking
- Coupons
- Email Verification
- Password Reset
- Dark Mode

---

## Author

**Manaswi KA**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile