'use strict'
const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res)=>{
    // GETリクエストに対する処理
})
.post((req, res)=>{
    // POSTリクエストに対する処理
})

module.exports = router;
