const cache3 = {}

function parseJSONAsync(json, callback){
    setTimeout(() => {
        try{
            callback(null, JSON.parse(json))
        }catch(err){
            callback(err)
        }
    }, 1000);
}

function parseJSONAsyncWithCache(json, callback){
    const cached = cache3[json]
    if(cached){
        // Nodejsが対象の場合
        process.nextTick(()=>callback(cached.err, cached.result))
        /**
         * ブラウザの場合
         * queueMicrotask(()=>callback(cached.err, cached.result))
         * Promisse.resolve().then(()=>callback(cached.err, cached.result))
         */
        return
    }
    parseJSONAsync(json, (err, result)=>{
        cache3[json]={err, result}
        callback(err, result)
    })
}

// 1回目の実行
parseJSONAsyncWithCache(
    '{"message":"Hello", "to":"World"}',
    (err, result)=>{
        console.log('1回目の結果',err, result)
        parseJSONAsyncWithCache(
            '{"message":"Hello", "to":"world"}',
            (err, result)=>{
                console.log('2回目の結果', err, result)
            }
        )
    console.log("2回目の呼び出し完了")
    }
)
console.log("1回目の呼び出し完了")