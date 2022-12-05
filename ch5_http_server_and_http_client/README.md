# HTTPサーバーとHTTPクライアント

nodejsにはhttpモジュールが用意されている（httpsの場合はhttpsモジュール)

今回は練習として、ToDo管理アプリケーションを、httpモジュールや、それをラップするアプリを使ってnodejsでサーバとクライアントサイドを作っていくr

## 5.1 ToDo管理アプリケーション
## 5.2 httpモジュールの利用
1. httpサーバを起動
2. そのサーバの上にToDoを返すAPIを実装

* httpモジュールのcreateServerメソッドでサーバを起動
* コールバックで、リクエストをハンドリング
  * コールバックはリクエストとレスポンスの２つの引数を受け取る
    * リクエスト：読み込みストリーム
    * レスポンス：書き込みストリーム
* listen()メソッドで、ポートを指定

リクエストを送信する処理
* `request(URL, 'コールバック')`
  * http.ClientRequestオブジェクトを返す
  * request()だけでは実行されず、end()を実行したタイミングで送信される
  * request()はデフォルトGET、POSTは第二引数で指定できる
    * ` {method:'POST'}`

## 5.3 WebアプリケーションフレームワークとExpress

### 5.3.1 ルーティング
* Expressの基本機能、ルーティング
  * リクエストのパスやメソッドに応じて、適切なハンドラに振り分ける
* app.get()でGETリクエストに対応
  * POSTならpostと簡単
  * 対応するハンドラが存在しないリクエストには自動的に404を返す
  * もしもhttpモジュールのみで行おうとすると、ifの条件分岐が増えて、ハンドラが肥大化してしまう

また同じパスでリクエストが処理が異なる場合は以下のように記述することができる
```javascript
  app.route('/path')
    .get((req, res)=>{
        // GETリクエストの処理
    })
    .post((req, res)=>{
        // POSTリクエストの処理
    });
```
めっちゃすごい、、簡単にRESTフルなAPI作れるやんけ

また一つのファイルですべてのAPIのルーティングを行うとファイルが肥大化するため、APIをカテゴライズして、モジュールごとに分けてルーティングをすると管理が楽[実装れい](routes/todo.js)、[読み込むばい](./app.js)

これによってパスやクエリに含まれるパラメータの種痘が容易になる、またhttpモジュールを使っている場合は正規表現でパスの確認が行える、Expressの場合は
```javascript
app.get('/api/todos/:id(\\d+)',(req, res)=>{
    const todoID = Number(req.params.id);
})
```
のような形で取得できる

クエリの取得に関しては
* `/api/todos?completed=true`
* `/api/todos?completed=false`
  * などで絞り込みができる

### 5.3.2 ミドルウェア
Expressの機能の多くはミドルウェアで提供されており、公式のパッケージに含まれるもの、含まれていないが公式が開発していたり、サードパーティによって提供されているものもある

ミドルウェア関数
```javascript
function expressMiddleware(req, res, next){
  next()
}
```

`app.get()`や`app.post()`の第二引数もミドルう関数

* 汎用的な処理を行うミドルウェアを適用するときは`app.use()`を使う
  * `app.use(expressMiddleware)`：すべてのパスでミドルウェアを使う
  * `app.use('/path',expressMiddleware)`：特定のパスに対してミドルウェアを適用

#### 5.3.2.1 静的ファイルの配信
サーバからブラウザ向けにファイルを配信するとき、Nodejsではリクエストで指定されたパスに存在するファイルをfsモジュールで読みって送る、かなり面倒なため、expressを使うと、`express.static()`で配信が簡単に行える

* `app.use(express.static('public')`
* `app.use('/path',express.static('public')`

#### 5.3.2.2 リクエストボディのパース
HTTPリクエストは、ボディを含む場合があるため、ボディをパースしないと見づらい、以下のミドルウェアを使うことで見やすくなる
* `app.use(express.json())`
* `app.use(express.urlencoded({extended:true}))`

### 5.3.3 プロいしを介したHTTPリクエストの処理
HTTPクライアントからのリクエストは直接サーバに来るとは限らない、プリキしを経由することが多い

## 5.4 ToDoアプリケーションの開発

## 5.5 ユニバーサルWebアプリケーション
