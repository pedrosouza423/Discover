function Person(name){
    this.name = name;
    this.walk = () => {
        return console.log(`${this.name} está andando`)
    }
}

const pedro = new Person("Pedro");
pedro.walk()