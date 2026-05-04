exports.getHomePage = (req, res) => {
    const query = 'SELECT * FROM products ORDER BY id ASC';

    global.db.query(query, (err, result) => {
        if (err) {
            console.log('Database error:', err);

            return res.send(`
                <h1>Database Error</h1>
                <p><b>Error message:</b> ${err.sqlMessage || err.message}</p>
                <p><b>Error code:</b> ${err.code}</p>
            `);
        }

        res.render('index.ejs', {
            title: 'Supermarket Admin',
            products: result
        });
    });
};