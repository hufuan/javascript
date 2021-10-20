var obj = {
    foo: function() {
        console.log(this)
    }
}

var foo = obj.foo

obj.foo()  
//foo()