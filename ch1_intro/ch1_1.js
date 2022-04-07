class Foo{
    //privateフィールド
    #privateField = 1;
    //publicフィールド
    publicField = 2;

    // staticなpuraibateフィールド
    static #staticPrivateField = 3;
    // staticなpublicフィールド
    static staticPublicField = 4;

    // コンストラクタ
    constructor(parameter){
        // コンストラクタの中でもフィールドを初期化できる
        this.fieldInitializedInConstructor = parameter;
        console.log('Foo constructor');
    }

    // privateなgetter
    get #computed(){
        return this.publicField*2;
    }

    // publicなgettet
    get computed(){
        return this.#computed;
    }

    // privateなsetter
    set #computed(value){
        this.publicField = value/2;
    }

    // publicなsetter
    set computed(value){
        this.#privateField =  value;
    }

    // privateメソッド
    #privateMethod(){
        return this.#privateField;
    }

    // publicメソッド
    publicMethod(){
        return this.#privateMethod;
    }

    // staticなprivateメソッド
    static #staticPrivateMethod(){
        return this.#privateField;
    }

    // staticなpublicメソッド
    static staticPublicMethod(){
        return this.#staticPrivateField;
    }
}

export default Foo;