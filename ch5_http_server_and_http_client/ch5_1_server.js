// ToDo一覧
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

// httpサーバの初期化
const http = require('http')
const server = http.createServer((req, res)=>{
    // リクエストのURLやhttpメソッドによって適切なレスポンスを返す
    if(req.url === '/api/todos'){
        if(req.method === 'GET'){
            // GETメソッドの場合、すべてのToDoをJSONで返す
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(todos));
        }
        // GET以外はサポートしないため、405を返す
        res.statusCode = 405;
    }else{
        // api/todos以外は存在しないので404を返す
        res.statusCode = 404;
    }
    res.end()
}).listen(3000);