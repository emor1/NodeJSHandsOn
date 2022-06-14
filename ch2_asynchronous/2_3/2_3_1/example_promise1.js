function parseJSONAsync(json){
    // Promiseインスタンスを生成して返す(このときpending)
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try{
                // fulfilled状態に移行（解決
                resolve(JSON.parse(json))
            }catch(err){
                // reject状態に
                reject(err)
            }
        }, 1000)
    )
}

const toBeFulfilled = parseJSONAsync(`{"foo":1}`)
const toBeRejected = parseJSONAsync('不正なJSON')
console.log('*******************Promsie生成直後****************')
console.log(toBeFulfilled)
console.log(toBeRejected)
setTimeout(()=>{
    console.log('**************1秒後******************')
    console.log(toBeFulfilled)
    console.log(toBeRejected)
}, 1000)

