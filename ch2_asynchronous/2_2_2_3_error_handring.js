function parseJSONSync(json, callback){
    setTimeout(() => {
        try{
            callback(null, JSON.parse(json))
        }catch(err){
            callback(err)
        }
    }, 1000);

}

parseJSONSync('不正なJSON',(err, result) =>
    console.log('parse結果', err,result)
)