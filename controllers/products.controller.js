const Product = require('../models/product.model');
const fs = require('fs');

exports.addProductPage = (req, res) => res.render('add-product.ejs', { title: 'Add Product', message: '' });

exports.addProduct = (req, res) => {
    let uploadedFile = req.files.image;
    let imageName = Date.now() + "_" + uploadedFile.name;
    uploadedFile.mv(`public/assets/img/${imageName}`, (err) => {
        if (err) return res.status(500).send(err);
        Product.add({ ...req.body, image: imageName }, () => res.redirect('/'));
    });
};

exports.editProductPage = (req, res) => {
    Product.getById(req.params.id, (err, result) => {
        res.render('edit-product.ejs', { title: 'Edit Product', product: result[0], message: '' });
    });
};

exports.editProduct = (req, res) => {
    let imageName = req.body.old_image;
    if (req.files && req.files.image) {
        let uploadedFile = req.files.image;
        imageName = Date.now() + "_" + uploadedFile.name;
        uploadedFile.mv(`public/assets/img/${imageName}`);
        if (req.body.old_image) fs.unlinkSync(`public/assets/img/${req.body.old_image}`);
    }
    Product.update(req.params.id, { ...req.body, image: imageName }, () => res.redirect('/'));
};

exports.deleteProduct = (req, res) => {
    Product.getById(req.params.id, (err, result) => {
        if (result[0].image) fs.unlinkSync(`public/assets/img/${result[0].image}`);
        Product.delete(req.params.id, () => res.redirect('/'));
    });
};