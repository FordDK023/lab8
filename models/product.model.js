const Product = {
    getAll: (callback) => db.query("SELECT * FROM products ORDER BY id ASC", callback),
    getById: (id, callback) => db.query("SELECT * FROM products WHERE id = ?", [id], callback),
    add: (data, callback) => {
        db.query("INSERT INTO products (name, category, price, stock, image) VALUES (?, ?, ?, ?, ?)", 
        [data.name, data.category, data.price, data.stock, data.image], callback);
    },
    update: (id, data, callback) => {
        db.query("UPDATE products SET name=?, category=?, price=?, stock=?, image=? WHERE id=?", 
        [data.name, data.category, data.price, data.stock, data.image, id], callback);
    },
    delete: (id, callback) => db.query("DELETE FROM products WHERE id = ?", [id], callback)
};
module.exports = Product;