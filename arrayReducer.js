var reduce = (num, fn, init) => {
    if(num.length == 0){
          return init;
    }

    let result = init;

    for(let i = 0; i < num.length; i++){
        result = fun(result, num[i])
    }

    return result;
}