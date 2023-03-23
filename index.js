function receivesAFunction(callback){
    callback()
}
receivesAFunction(function(){
    console.log('hello')
})

function returnsANamedFunction(){
     return function namedFunction(){
        console.log()
    }
}
 
function returnsAnAnonymousFunction(){
    return function(){
        console.log()
    };
}