import { useEffect, useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import 'isomorphic-fetch'

// 各ページに対する情報の定義
const pages = {
    index:{title: 'すべてのToDo', fetchQuery: ''},
    active: {title: '未完了のToDo', fetchQuery: '?completed=false'},
    completed:{title:'完了したToDo', fetchQuery: '?completed=true' }
}

// CSRでページを切り替えるためのリンク
const pageLinks = Object.keys(pages).map((page, index)=>
    <Link href={`/${page==='index' ? '':page}`} key={index} style={{marginRight:10}}>
        {pages[page].title}
    </Link>
)

// Reactコンポーネントを実装して、外部のモジュールで使えるようにexportで公開
export default function ToDos(props){
    const {title, fetchQuery} = pages[props.page]

    // コンポーネントの初期化とpropsの値に応じた更新
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        fetch(`/api/todos${fetchQuery}`)
        .then(async res=>res.ok
            ? setTodos(await res.json())
            :alert(await res.text())
        )
    },[props.page])

    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <ul>
                {todos.map(({id, title, completed})=>
                    <li key={id}>
                        <span style={completed?{textDecoration: 'line-through'}:{}}>
                            {title}
                        </span>
                    </li>
                )}
            </ul>
            <div>{pageLinks}</div>
        </>
    )
}