# 2章 非同期プログラミング

## 目次
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=4 orderedList=false} -->

<!-- code_chunk_output -->

- [2章 非同期プログラミング](#2章-非同期プログラミング)
  - [目次](#目次)
  - [2.1 イベントループと非同期プログラミング](#21-イベントループと非同期プログラミング)
    - [2.1.1 マルチスレッドによる並行処理とその問題点](#211-マルチスレッドによる並行処理とその問題点)
      - [2.1.1.1 ブロッキングI/Oとスレッドの切り替えによる並行処理](#2111-ブロッキングioとスレッドの切り替えによる並行処理)
      - [2.1.1.2 マルチスレッドの問題点](#2112-マルチスレッドの問題点)
    - [2.1.2 イベントループによる並行処理と非同期プログラミング](#212-イベントループによる並行処理と非同期プログラミング)
      - [2.1.2.1 ノンブロッキングI/Oを利用した並行処理](#2121-ノンブロッキングioを利用した並行処理)
      - [2.1.2.2 マルチスレッドの問題点の解消](#2122-マルチスレッドの問題点の解消)
      - [2.1.2.3 イベントループで注意する点](#2123-イベントループで注意する点)
  - [2.2 コールバック](#22-コールバック)
    - [2.2.1 コールバックを利用した非同期APIを実行する](#221-コールバックを利用した非同期apiを実行する)
    - [2.2.2 エラーハンドリング](#222-エラーハンドリング)
    - [2.2.3 混ぜるな危険、同期と非同期](#223-混ぜるな危険同期と非同期)
      - [2.2.3.1 コールバックの実行を非同期化するのに使用するAPI](#2231-コールバックの実行を非同期化するのに使用するapi)
    - [2.2.4 コールバックヘル](#224-コールバックヘル)

<!-- /code_chunk_output -->

イベントループで並行処理を実現するには非同期プログラミングが不可欠  
この章ではマルチスレッドとイベントループの違いを深く知り、非同期プログラミングの必要性を学ぶ 

## 2.1 イベントループと非同期プログラミング
### 2.1.1 マルチスレッドによる並行処理とその問題点

#### 2.1.1.1 ブロッキングI/Oとスレッドの切り替えによる並行処理

マルチスレッドで並行処理を実現する言語では、コンビニでのレジの処理はこのようになる
```
    const  金額 = バーコードリーダー.読む(弁当) //1
    const 温まった弁当 = 電子レンジ.チン(弁当)  //2
    レジ.会計する(金額)
    商品を渡す(温まった弁当)
```
1,2の構文的な違いはなく、どちらもメソッドを実行してその戻り値を変数に代入している   
しかし実際のオペレーションでは、それぞれの行でおこることの性質が異なる    
* 「弁当」に対する「バーコードリーダー」の処理は短い操作ですぐに金額を得ることができる  
* 電子レンジで弁当を温める処理は時間のかかる処理    
そのため、長い処理が終わるまで処理の実行が止まってしまう  

時間のかかる処理＝＝＞ブロッキング  
I/Oである場合は**ブロッキングI/O**と呼ばれる  
並行処理を実現するには、待ち時間に別の作業を実行する必要があるが、ブロッキングな処理では、そのような処理は表現されない。  

マルチスレッド：実行状況に応じて、スレッドを切り替えることで並行処理を実現。

#### 2.1.1.2 マルチスレッドの問題点
C10K：スレッドごとにスタックと呼ばれるメモリ領域を持っているため、ハードウェアのメモリの容量の制約を受け、最大接続数が制限される。

マルチスレッドでは、プログラマーはスレッドセーフにコードを保たないといけない。  
  スレッドセーフ：複数のスレッドが並列に実行しても問題が起きないこと。更新操作の競合を防ぐ。
&rarr; スレッド間で、値を共有しないようにプログラムを組む
or 共有する値をロックを取得し、処理が終了するまで他のスレッドからの更新を防ぐ、しかしロックはパフォーマンスに悪影響を与える

### 2.1.2 イベントループによる並行処理と非同期プログラミング

イベントループ：シングルスレッドで動作
&rarr;マルチスレッドの問題がない

#### 2.1.2.1 ノンブロッキングI/Oを利用した並行処理

マルチスレッド&rarr;スレッドを自動で切り替え
イベントループ&rarr;完了後のタスクを指定して実行

疑似コード
```
const 金額 = バーコードリーダー.読む(弁当)
電子レンジ.チン(
  弁当,
  // 第二引数に完了後のタスク指定
  温まった弁当 => 商品を渡す(温まった弁当)
)
レジ.会計する(金額)
```
プログラムは、先にレジの会計をしてから、商品を渡す

ノンブロッキングI/O  

#### 2.1.2.2 マルチスレッドの問題点の解消
C10K問題をイベントループによる並行処理で解決することができる。  
メモリの負荷もあまり課から何

#### 2.1.2.3 イベントループで注意する点

* 非同期プログラミングの複雑さ
  * **マルチスレッド**：
    * **メリット**：簡単に記述できる
    * **デメリット**：コードから制御する難易度が高く、複雑な実装になる
  * **イベントループ**並列処理を柔軟に制御でき、スレッドセーフなどの配慮が不要
    * **デメリット**：制御フローが複雑になりやすい

* CPU負荷の高い処理の扱い
  * イベントループの並行処理は**I/Oを多用するアプリケーションの開発に適している**
  * CPUを使った負荷の高いアプリケーションでは、注意が必要

## 2.2 コールバック

JavaScriptの非同期プログラムで最も基本的な実装パターン  
非同期処理を行う関数の引数として、コールバックを私、処理が終わると実行される。  

### 2.2.1 コールバックを利用した非同期APIを実行する

[time_out.js](time_out.js)
```
setTimeout(
    ()=>console.log('1秒経過しました'), //コールバック
    1000 //1000ミリ秒
)
console.log('setTimeoutを実行しました')

```

先に「setTimeoutを実行しました」が実行される。

コールバックを利用しているからといって、必ず非同期になるわけではない。
配列のmap()は、引数のコールバックを使って配列内の要素を変換するが、同期的に実行される
```
const array1 = [0,1,2,3]

const array2 = array1.map((element)=>{
    console.log(`${element}を変換します`)
    return element*10 //それぞれの要素を10倍
})

console.log('配列の変換が完了しました',array2)

>node ch2_asynchronous\map_callback_check.js
0を変換します
1を変換します
2を変換します
3を変換します
配列の変換が完了しました [ 0, 10, 20, 30 ]
```

node.jsのfs.readdir()：指定したディレクトリに存在するファイル一覧を返す
```
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
fs.readdir(
    '.', //REPLの実行ディレクトリ
    (err, files)=>{
        //コールバック
        console.log('fs.readdir()実行結果')
        console.log('err',err)
        console.log('files', files)
    }
)

undefined
> fs.readdir()実行結果
err null
files [ '.git', 'ch1_intro', 'ch2_asynchronous', 'README.md' ]
```
戻り値がなく、コールバックの引数としてファイル名が渡される  
エラー発生時には、エラーオブジェクトが入る


Node.jsのコールバックの非同期処理の規約
* コールバックがパラメータの最後にあること
* コールバックの最初のパラメータが処理中に発生したエラー、２つ目以降のパラメータが処理の結果であること

### 2.2.2 エラーハンドリング

try ... catch ：エラーハンドリング

同期的に発生するエラー処理  
```
function parseJSONSync(json){
    try{
        //JSON.parse: 文字列をパースシテJSオブジェクトを返す
        return JSON.parse(json)
    }catch(err){
        console.error('エラーをキャッチ', err)
    }
}

parseJSONSync('不正なJSON')

>node ch2_asynchronous\2_2_2_1_error_handring.js
エラーをキャッチ SyntaxError: Unexpected token 不 in JSON at position 0
```

try..catchではコールバックの中で発生したエラーをハンドリングができないため、コールバックのパラメータとしてエラーを渡すようにしている
```
function parseJSONSync(json, callback){
    try{
        setTimeout(()=>{
            callback( JSON.parse(json))
        }, 1000)
    }catch(err){
        console.error('エラーをキャッチ', err)
        callback({})
    }
}

parseJSONSync('不正なJSON', result =>
    console.log('parse結果', result)
)

>
SyntaxError: Unexpected token 不 in JSON at position 0
```
エラーをキャッチと表示されれない&rarr; キャッチされることなく、イベントループまで到達した結果。そのため同期の時ではどこで発生したかわかったが、非同期ではどのような経路でエラーが発生したのかがわからない

Node.jsの規約に従い書き直すと次のようになる
```
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

>
parse結果 SyntaxError: Unexpected token 不 in JSON at position 0
    at JSON.parse (<anonymous>)
```

### 2.2.3 混ぜるな危険、同期と非同期

遅い非同期処理が発生する場合は、効率を上げるためにキャッシュを使うことがある

[cache.js](2_2_3/cache.js)
```
const cache = {}

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
    const cached = cache[json]
    if(cached){
        callback(cached.err, cached.result)
        return
    }
    parseJSONAsync(json, (err, result)=>{
        cache[json]={err, result}
        callback(err, result)
    })
}

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

>
1回目の呼び出し完了
1回目の結果 null { message: 'Hello', to: 'World' }
2回目の呼び出し完了
```
キャッシュにより、２回目の結果が出力されるが、parseJSONAsyncWithCache()が状況によって、コールバックの実行が同期的や非同期的に変わるため、**JavaScriptのアンチパターン**であることに注意する。

コールバックの呼び出し方を同期か非同期かの一貫性がないと、APIの挙動が予想づらく、原因の特定が困難な不具合の原因になる可能性が高い。

そのため、上記のプログラミングは以下のように記述する。  
[good_cache.js](2_2_3/good_cache.js)
```
const cache2 = {}

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
    const cached = cache2[json]
    if(cached){
        // キャッシュに値が存在する場合でも、非同期的にコールバックを実行
        setTimeout(()=>callback(cached.err, cached.result),0)
        return
    }
    parseJSONAsync(json, (err,result)=>{
        cache2[json]={err, result}
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

>
1回目の呼び出し完了
1回目の結果 null { message: 'Hello', to: 'World' }
2回目の呼び出し完了
2回目の結果 null { message: 'Hello', to: 'world' }
```

#### 2.2.3.1 コールバックの実行を非同期化するのに使用するAPI
setTimeout以外のコールバックのAPI  
* process.nextTick()
  * setTimeoutより早く実行される
  * ブラウザのJavaScriptには存在しない&rarr;queueMicrotask()でキューに積む

[nextTick_callback.js](2_2_3_1/nextTick_callback.js)
```
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
```

### 2.2.4 コールバックヘル