var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login: function(){
        console.log(this.email, 'has logged in');
    },
    logout: function(){
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();
console.log(userOne.name);