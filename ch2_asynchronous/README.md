# 2章 非同期プログラミング

## 目次
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=4 orderedList=false} -->

<!-- code_chunk_output -->

- [2章 非同期プログラミング](#2章-非同期プログラミング)
  - [目次](#目次)
  - [2.1 イベントループと非同期プログラミング](#21-イベントループと非同期プログラミング)
    - [2.1.1 マルチスレッドによる並行処理とその問題点](#211-マルチスレッドによる並行処理とその問題点)
      - [2.1.1.1 ブロッキングI/Oとスレッドの切り替えによる並行処理](#2111-ブロッキングioとスレッドの切り替えによる並行処理)

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
1,2の構文的な違いはなく、どちらもメソッドを実行してその戻り値を変数にぢあにゅうしている 
しかし実際のオペレーションでは、それぞれの行でおこることの性質が異なる  
* 「弁当」に対する「バーコードリーダー」の処理は短い操作ですぐに金額を得ることができる
* 電子レンジで弁当を温める処理は時間のかかる処理  
そのため、長い処理が終わるまで処理の実行が止まってしまう

時間のかかる処理＝＝＞ブロッキング  
I/Oである場合は**ブロッキングI/O**と呼ばれる
並行処理を実現するには、待ち時間に別の作業を実行する必要があるが、ブロッキングな処理では、そのような処理は表現されない。

p40まで