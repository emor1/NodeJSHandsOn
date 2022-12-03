const http = require('http')
// http.request('http://localhost:3000/api/todos', {method:'POST'},res=>{
    // 405が帰ってくる：httpメソッドが異なる
// http.request('http://localhost:3000/api/foo', res=>{
    // 404が帰ってくる
http.request('http://localhost:3000/api/todos', res=>{
    let responseData = '';
    console.log('statusCode', res.statusCode);
    res.on('data', chunk =>responseData+=chunk)
    res.on('end', ()=>console.log('responseData', JSON.parse(responseData)));
}).end();