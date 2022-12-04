'use strict'
const express = require('express')
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

const app = express()

app.use(express.json())

// ToDOの取得
app.get('/api/todos',(req, res)=>{
    if(!req.query.completed){
        return res.json(todos)
    }
    const completed = req.query.completed === 'true'
    res.json(todos.filter(todos=>todos.completed===completed));
})

// ToDoの🆔を管理するための変数
let id = 2
//ToDoの新規登録
app.post('/api/todos',(req, res, next)=>{
    const {title} = req.body
    if(typeof title !== 'string'|| !title){
        // titleが含まれてないときにステータスコード400を返す
        const err = new Error('title is required')
        err.statusCode = 400;
        return next(err)
    }
    // todoの作成
    const todo = {id: id+=1, title, completed:false}
    todos.push(todo)
    // 201を返す
    res.status(201).json(todo)
})

// エラーハンドルミドルウェア
app.use((err, req, res, next)=>{
    res.status(err.statusCode||500).json({error:err.message})
})

app.listen(3000)