// import express from 'express';
const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.send('<h1>Welcome to Sofias Exercise Four </h1><img src="/flower.jpeg" alt="Flower Image">')
});

module.exports = router;