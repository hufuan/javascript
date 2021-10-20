function Keith(name) {
        var age;
        function setAge(n) {
            age = n;
        }
        function getAge() {
            return age;
        }
        return {
            name: name,
            setAge: setAge,
            getAge: getAge
        };
    }
    var person = Keith('keith');
    person.setAge(21);
    console.log(person.name); // 'keith'
    console.log(person.getAge()); //21