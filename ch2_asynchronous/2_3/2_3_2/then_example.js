const promise = new Promise()

promise.then(
    // fulfilledの時
    value =>{
        // 成功時の処理
    },
    // rejectedの時
    err =>{
        // 失敗時の処理
    }
)

const asyncFunc1 = new Promise()

asyncFunc1(input)
    // asyncFunc1終了後、その結果を引数にasyncFunc2を実行
    .then(asyncFunc2)
       // asyncFunc2終了後、その結果を引数にasyncFunc3を実行
    .then(asyncFunc3)
   // asyncFunc2終了後、その結果を引数にasyncFunc3を実行
    .then(asyncFunc3)
    .then(result =>{
        // 全ての非同期処理が完了した後の処理
    })
    .catch(err=>{
        // エラーハンドリング
    })

// thenで実装
const withoutOnFufilld = Promise.reject(new Error('エラー')).then(undefined, ()=>0)
// catchの使用で同じ処理に
const catchedPromise = Promise.reject(new Error('エラー')).catch(()=>0)


// finally
const onFinally = () => console.log('finallyのコールバック')
Promise.resolve().finally(onFinally)

Promise.reject(new Error('エラー')).finally(onFinally)