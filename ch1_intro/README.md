# 1章 イントロダクション
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

引数が1つなら()も省略可
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

*配列をそうするときは、そのメソッドがミュータブルかイミュータブルかを常に意識する*
