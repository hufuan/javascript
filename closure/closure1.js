let user = {
    name: 'crystal',
    age: 30,
    email: '123@email.com',
    login: function (){
        console.log('the user logged in');
    }
};

function test() {
    var name1 = '';
    function fn1() {
        return name1;
    }
    function fn2(newName){
        name1 = newName;
    }
    fn2("fuan");
    console.log(fn1());
    name1 = "test";
    console.log(fn1());
}
test();
