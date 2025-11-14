🛍️ Local Seller Demo - Full Stack Project:-
This project is a full-stack e-commerce web application named **Apna Dukaan** (formerly Local Seller Demo). It combines a Spring Boot backend with a React frontend to provide a seamless shopping experience, including product management, cart handling, and checkout functionality.

📁 Project Overview:-
This project demonstrates a modern full-stack architecture using React for the frontend, Spring Boot (Maven) for the backend, and MySQL for persistent data storage.
🧩 Tech Stack

1. Frontend: React (Axios, Bootstrap 5)
2. Backend: Spring Boot (Java 17, Maven)
3. Database: MySQL 8+
4. Build Tools: npm, Maven
5. IDE: VS Code 

⚙️ Backend Structure:-

backend-springboot/
│
├── src/main/java/com/localmarket/marketplace/
│   ├── controller/      → Handles REST API endpoints (Product, Cart, Order)
│   ├── model/           → Contains Entity classes mapped to database tables
│   ├── repository/      → JPA repositories for CRUD operations
│   ├── service/         → Contains business logic between controller and repository
│   └── MarketplaceApplication.java → Entry point of the backend app
│
└── src/main/resources/
    ├── application.properties → Database connection and server configuration
    └── data.sql / schema.sql  → Optional DB initialization files

🗃️ Database Configuration (MySQL):-

application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/local_seller_demo
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

🧠 Database Design (ER Overview):-

Tables:
- Product (id, name, price, description, quantity)
- Cart (id, product_id, quantity)
- Order (id, total_amount, order_date)

Relationships:
- One-to-Many between Product and Cart
- One-to-Many between Cart and Order

🎨 Frontend Structure:-

react-frontend/
│
├── src/
│   ├── components/
│   │   ├── ProductList.js  → Displays all products
│   │   ├── Cart.js         → Shows user cart
│   │   ├── Checkout.js     → Checkout process UI
│   │   └── ProductForm.js  → Add new product form
│   ├── App.js              → Main UI structure (Navbar, Routing, Sections)
│   └── services/CartService.js → Handles API calls to backend using Axios
│
└── package.json → React dependencies and scripts

🚀 Setup Instructions:-

1️⃣ Clone this repository:
   git clone https://github.com/yourusername/local-seller-demo.git
   cd local-seller-demo

2️⃣ Setup Backend:
   cd backend-springboot
   mvn clean install
   mvn spring-boot:run

   (Ensure MySQL server is running and configured in application.properties)

3️⃣ Setup Frontend:
   cd react-frontend
   npm install
   npm start

4️⃣ Access App:
   Frontend → http://localhost:3000
   Backend  → http://localhost:8080/api/products

🧪 API Endpoints:-

Products:
- GET /api/products
- POST /api/products
- PUT /api/products/{id}
- DELETE /api/products/{id}

Cart:
- GET /api/cart
- POST /api/cart/add/{productId}
- DELETE /api/cart/clear

Orders:
- GET /api/orders
- POST /api/orders/place

🌟 Key Features:-

✅ Add, edit, and delete products.
✅ Add items to cart with quantity control.
✅ View and clear cart.
✅ Checkout and generate order summary.
✅ Fully responsive React frontend.
✅ RESTful API with Spring Boot backend.
✅ Persistent data using MySQL database.

👨‍💻 Developed By:-
Deepanshu Mandhyan — B.E. CSE Student | Full Stack Developer
