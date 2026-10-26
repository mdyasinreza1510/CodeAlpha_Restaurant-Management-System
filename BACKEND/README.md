<h1>TASK 3</h1>
<br>
<b>Restaurant Management System</b>
● Set up backend using Django or Express.js to handle restaurant operations (orders, tables, inventory).
● Design database models for menu items, orders, tables, reservations, and inventory.
● Create APIs for placing orders, reserving tables, updating inventory, and viewing menu.
● Implement logic for order processing, table availability check, and inventory auto-update.
● Optional: Add reporting features (e.g., daily sales, stock alerts) and admin access panel.
<br>
# 🍽️ Restaurant Management System

A RESTful backend application built with **Node.js**, **Express.js**, and **MongoDB** to manage restaurant operations. The system provides APIs for managing menus, orders, table reservations, and inventory while demonstrating clean MVC architecture and CRUD operations.

---

# 🚀 Features

- 📋 View restaurant menu
- 🛒 Place customer orders
- 🍽️ Reserve restaurant tables
- 📦 Update inventory
- 🔄 Automatic inventory update after order placement
- ✅ Table availability validation before reservation
- 🗂️ Clean MVC Architecture
- 🌐 RESTful APIs
- 💾 MongoDB Database Integration

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- Postman (API Testing)

---

# 📂 Project Structure

```text
RESTAURANT-MANAGEMENT
│
├── src
│   ├── controllers
│   │      inventory.controller.js
│   │      menu.controller.js
│   │      order.controller.js
│   │      reservation.controller.js
│   │
│   ├── db
│   │      db.js
│   │
│   ├── models
│   │      inventory.model.js
│   │      menu.model.js
│   │      order.model.js
│   │      reservation.model.js
│   │      table.model.js
│   │
│   ├── routes
│   │      inventory.routes.js
│   │      menu.routes.js
│   │      order.routes.js
│   │      reservation.routes.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# 🗄️ Database Models

## Menu

| Field | Type |
|------|------|
| name | String |
| price | Number |
| category | String |

---

## Order

| Field | Type |
|------|------|
| menuItem | ObjectId |
| quantity | Number |
| table | ObjectId |
| status | String |

---

## Table

| Field | Type |
|------|------|
| tableNumber | Number |
| capacity | Number |
| isAvailable | Boolean |

---

## Reservation

| Field | Type |
|------|------|
| customerName | String |
| table | ObjectId |
| reservationTime | Date |

---

## Inventory

| Field | Type |
|------|------|
| itemName | String |
| stock | Number |

---

# 📡 API Endpoints

## 🍴 Menu

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | View complete menu |

---

## 🛒 Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order` | Place a new order |

---

## 🍽️ Reservations

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/reservation` | Reserve a table |

---

## 📦 Inventory

| Method | Endpoint | Description |
|--------|----------|-------------|
| PUT | `/api/inventory/:id` | Update inventory stock |

---

# ⚙️ Business Logic

### ✔ Order Processing
- Creates a new customer order.
- Stores the order in MongoDB.

### ✔ Table Availability Check
- Checks whether the selected table is available.
- Prevents double booking.
- Marks the table as unavailable after successful reservation.

### ✔ Inventory Auto Update
- Automatically decreases inventory stock after an order is placed.

---

---

# 🧪 API Testing

All endpoints were tested using **Postman**.

---

# 📌 Future Enhancements

- Daily Sales Reports
- Stock Alerts
- Admin Dashboard
- Authentication & Authorization

---

# 👨‍💻 Author

**Md Yasin Reza**

Backend Developer | Computer Science Engineering Student

---


