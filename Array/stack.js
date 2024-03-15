class Stack{
    constructor(){
        this.array = new Array()
    }

    pop(){
        this.array.pop()
    }

    push(n){
        this.array.push(n)
    }

    print(){
        return this.array;
    }

    size(){
        return this.array.length;
    }
}