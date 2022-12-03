'use strict'
const express = require('express')
const app = express();

// /api/todos以下のパスに対するリクエストのハンドリングを./route/todosモジュールに移譲
app.use('/api/todos', require('./routes/todo'))


app.listen(3000)