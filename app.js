// const express = require('express')
// const fs = require('fs')
// const app = express()
//  const port = 3000

// app.get('/products','')


import express from "express"
import fetch from 'node-fetch';
const app = express();

app.get('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await fetch(`https://fakestoreapi.com/products/1`);
        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error)
    }

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});