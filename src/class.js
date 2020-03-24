class Human {
  constructor(name) {
    this.name = name;
    this.weight = 86;
  }
  what_name() {
    console.log('my name is ' + this.name)
  }
  can_walk() {
    console.log('walking')
  }
  show_weight() {
    console.log(`${this.name} weight ${this.weight} Kg `)
  }


}

let nickname = new Human("Jane");
nickname.what_name();
nickname.can_walk();
nickname.show_weight();





