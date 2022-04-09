# 1章 イントロダクション

## 目次
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->

<!-- code_chunk_output -->

- [1章 イントロダクション](#1章-イントロダクション)
  - [目次](#目次)
  - [1.4 JavaScriptの基本](#14-javascriptの基本)
    - [1.4.1 変数の宣言](#141-変数の宣言)
    - [1.4.2 関数](#142-関数)
    - [1.4.3 オブジェクト](#143-オブジェクト)
    - [1.4.4 配列](#144-配列)
    - [1.4.5 クラス](#145-クラス)
    - [1.4.5.1 プロトタイプチェーン](#1451-プロトタイプチェーン)
    - [1.4.5  等価性](#145--等価性)
    - [1.4.7 CommonJSモジュール](#147-commonjsモジュール)
    - [1.4.7.1 module.exportsとrequire()](#1471-moduleexportsとrequire)

<!-- /code_chunk_output -->

## 1.4 JavaScriptの基本

### 1.4.1 変数の宣言
* const
  * 割り当てが不可能、ES2015で導入
* let
  * 割り当てが可能、同じくES2015で導入
* var
  * ES2015以前まで使われてた、非推奨
  
### 1.4.2 関数

関数宣言は巻き上げが可能であるのに対し、関数式はエラーになる

関数の定義はいくつかの方法がある  
アロー関数

```
const add = (a, b) => { return a+b}
```

{}を省略するとreturnなしで値が返される

```
const add = (a, b) => return a+b
```

引数が1つなら ()も省略可
```
const add = a =>  a + 5
```

### 1.4.3 オブジェクト

オブジェクトの作成
```
const obj1 = {propA:1, propB:2}

# ドット記法
obj1.propA

# ブラケット記法
obj1['propA']
```
プロパティの追加は新たなプロパティを作成し、代入してあげればよい  
プロパティの削除
```
delete obj1.propB
```

削除してしまうと元のオブジェクトを変更してしまう（ミュータブル）ため、元のオブジェクトを変更せずに（イミュータブル）削除を行うにはスプレッド構文とレスト構文を用いる
```
# スプレッド構文を用いて追加
const obj2 = { ...obj1, propC:3}

# レスト構文で削除 (porpAが削除されたobj3ができる)
const {propA, ...obj3} = obj2
```
ミュータブルを避けてイミュータブルにすることで、オブジェクトは状態を持たなくなるため開発をシンプルに保つ

```
# スプレッド構文を用いて任意のオブジェクト、プロパティを渡せる
const obj4 = {propB:'b', propD:'d'}

```

プロパティの値を取得、設定する際に関数を実行するsetter, getterがある
```
const price = {
value: 100,
get withTax(){
return Math.floor(this.value*1.1)
},
set withTax(withTax){
this.value=Math.ceil(withTax/1.1)
}
}

undefined
> price.withTax
110
> price.withTax=333
333
> price.withTax
333
> price.value
303
```

それぞれオブジェクトのプロパティ、値、両方を取得
>Object.keys()
>Object.values()
>Object.entries()

### 1.4.4 配列

配列は配列リテラルで初期化
以下基本操作
```
# 初期化
const arr1 = ['foo', 'bar']
arr1.length   #長さ

arr1[1] #指定したインデックスの要素を取得
# >'bar'

# 指定した要素のインデックスを取得(存在しないと戻り値は-1)
arr1.indexOf('bar')

# 要素が配列に含まれるか(true/false)
arr1.includes('bar')

# 全要素を引数に指定した文字列で結合
arr1.join('-') # >'foo-bar'

# 引数がなければ,で結合
arr1.join() # >'foo,bar'
```

**配列の要素の操作**
* 要素の末尾への
  * >追加：push(<追加する要素>)
  * >削除: pop()
* 要素の先頭への
  * >追加: unshift(<追加する要素>)
  * >削除: shift()
  
要素の追加は
>arr1.unshift('d','e','f')
のように複数同時に追加できる

**イミュータブルに要素を操作する**
オブジェクトと同様にスプレッド構文とレスト構文を使う
```
# arr2を作成
> const arr2 = ['foo', 'bar', 'baz']
# スプレッド構文で先頭と末尾に要素を追加
> const arr3 = ['a', ...arr2, 'b', 'c']
undefined
> arr3
[ 'a', 'foo', 'bar', 'baz', 'b', 'c' ]
# 元配列は変わらず
> arr2
[ 'foo', 'bar', 'baz' ]
# arr2から先頭2つをレスト構文で削除したarr4を作成
> const [head1, head2, ...arr4] = arr2
undefined
> arr4
[ 'baz' ]
# 元配列は変わらず
> arr2
[ 'foo', 'bar', 'baz' ]
```
配列のレスト構文では、レスト要素が配列の最後でなければならない。
そのときはslice()を使う。
```
# エラー
> const [...arr5, last] = arr2
const [...arr5, last] = arr2
       ^^^^^^^

Uncaught SyntaxError: Rest element must be last element

# sliceを使う 最初のインデックスと最後のインデックスを指定
> arr2.slice(0,2)
[ 'foo', 'bar' ]
# 負の値を設定すると配列の最後から数えたインデックスになる
> arr2.slice(0,-1)
[ 'foo', 'bar' ]
# 第二引数を省略すると配列の最後までを切り出す
> arr2.slice(2)
[ 'baz' ]
# 引数を省略すると最初から最後までのコピーになる
> arr2.slice()
[ 'foo', 'bar', 'baz' ]
# 元配列は変わらず
> arr2
[ 'foo', 'bar', 'baz' ]
```

*配列を操作するときは、そのメソッドがミュータブルかイミュータブルかを常に意識する*

たとえば、sort()はソート後の配列を返すと同時に**元の配列自体にも同じ変更を加える**

```
> const arr2 = ['foo', 'bar', 'baz']
undefined
> arr2.sort()
[ 'bar', 'baz', 'foo' ]
> arr2
[ 'bar', 'baz', 'foo' ]

> const arr3 = ['a', ...arr2, 'b', 'c']
undefined
# 文字数の昇順にソートされるような関数を指定
> arr3.sort((a,b)=>a.length - b.length)
[ 'a', 'b', 'c', 'bar', 'baz', 'foo' ]
> arr3
[ 'a', 'b', 'c', 'bar', 'baz', 'foo' ]
```

配列に対する反復処理はfor　もしくはfor..of文で記述する
```
> for(let i = 0; i<arr2.length;i++){console.log(arr2[i])}
bar
baz
foo
undefined
> for(const e of arr2){console.log(e)}
bar
baz
foo
```
forを使わずに、配列のメソッドを使って反復処理を実行できる  
その場合は引数にコールバック関数を指定して、処理を各要素に適用させる  
どのメソッドもイミュータブル
```
# forEach各要素にコールバック関数を適用
> for(const e of arr2){console.log(e)}
bar
baz
foo
undefined
# map: 各要素をコールバック関数の戻り値に置き換えた配列で返す
> arr2.forEach(console.log)
bar 0 [ 'bar', 'baz', 'foo' ]
baz 1 [ 'bar', 'baz', 'foo' ]
foo 2 [ 'bar', 'baz', 'foo' ]
undefined
> arr2.map(e=>e+e)
[ 'barbar', 'bazbaz', 'foofoo' ]
# filter: コールバック関数が真の値を返す要素のみを含む配列を返す
> arr2.filter(e=>e.startsWith('b'))
[ 'bar', 'baz' ]
# find: コールバック関数が真の値を返す最初の要素のみ返す
> arr2.find(e=>e.startsWith('b'))
'bar'

# 要素がzで終わればtrueを返す処理
arr2.find(e=>{
console.log(e)
return e.endsWith('z')
})

bar
baz
'baz'
```

### 1.4.5 クラス

[クラス](ch1_1.js)

### 1.4.5.1 プロトタイプチェーン

JavaScriptのクラスは、プロトタイプチェーンに基づく継承の仕組みがある。  
(prototypeチェーンとは、オブジェクトに必要なプロパティや関数がない場合、__proto__が参照するコンストラクタ関数のprototypeオブジェクトにさかのぼって探すことをいいます。)

クラスに定義した、メソッド、コンストラクタ、getter、setterはそのくらすのプロパティに追加される。追加されたプロパティはインスタンスの__proto__にセットされる

```
> Foo.prototype
{}
> Object.getOwnPropertyNames(Foo.prototype)
[ 'constructor', 'computed', 'publicMethod' ]
> Foo.prototype.publicMethod
[Function: publicMethod]
> fooInstance.__proto__=Foo.prototype
true
```

### 1.4.5  等価性
JavaScriptでは**常に"==="** を使うようにする。
\==と===では等価性の評価が異なり、==では予測しづらい。
> 0===' '
>false
> 0==' '
> true

オブジェクトの比較では\==を使用すると、flaseになる
**同じリテラルで表現される値を比較するときに\===を使う**

### 1.4.7 CommonJSモジュール

Node.jsはCommonJSモジュールとESモジュールに対応している。ESモジュールはまだ実験的な機能なため、CommonJSモジュールを基本的に使う。

### 1.4.7.1 module.exportsとrequire()
CommonJSモジュールでは、それぞれのJavaScriptファイルが、個別のモジュールとして扱われる。CommonJSモジュールはモジュールレベルのスコープでNodejsが自動的に割り当てるmoduleという変数のexportプロパティを通じて外部に変数や関数を公開する。
外部モジュールをインポートするときはrequire()関数を使用する。
[cjs-math.js](cjs-math.js)

利用するときはファイルのパスを指定して、ロードする
```
> const math = require('./cjs-math')
undefined
> math.add(1,2)
3
```
REPLを開きなおさないと、追加したメソッドを読み込めずエラーになる。requireが1度ロード
したモジュールをキャッシュする仕組みがある・require.cache()で取得できるオブジェクトにモジュールのパスをキーに保存している。モジュールのパスはrequire.resolve()で取得できるので、delete演算子を使ってキャッシュをクリアする
```
> delete require.cache[require.resolve('./cjs-math')]
true
```