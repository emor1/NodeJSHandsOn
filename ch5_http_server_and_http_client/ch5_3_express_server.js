'use strict'
const express = require('express');

const todos =[
    {
        id: 1,
        title: 'ネーム',
        completed: false
    },
    {
        id: 2,
        title:'下書き',
        completed:true
    }
];

const app = express();

// api/todosのGETリクエストを処理するハンドラ
app.get('/api/todos', (req, res)=>{
    res.json(todos);
})

app.listen(3000);