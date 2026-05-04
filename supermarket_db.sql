CREATE DATABASE IF NOT EXISTS supermarket_db;
USE supermarket_db;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, category, price, stock, image) VALUES
('Milk', 'Dairy', 45.00, 20, 'no-image.png'),
('Bread', 'Bakery', 35.00, 15, 'no-image.png'),
('Instant Noodles', 'Food', 8.00, 50, 'no-image.png'),
('Rice 5 kg', 'Food', 180.00, 0, 'no-image.png');