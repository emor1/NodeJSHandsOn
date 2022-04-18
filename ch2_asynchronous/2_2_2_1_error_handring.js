function parseJSONSync(json){
    try{
        return JSON.parse(json)
    }catch(err){
        console.error('エラーをキャッチ', err)
    }
}

parseJSONSync('不正なJSON')