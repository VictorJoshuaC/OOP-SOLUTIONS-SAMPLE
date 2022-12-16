class Cat {
  constructor(){
    if (this.constructor == Cat) {
        throw new Error ("ndi ara")
    }
  }
  area (){
    throw new Error("this can not be implemented directly")
  }

}



class Dog extends Cat {
    constructor(radius){
        super()
        this.radius = radius
    }
    area(){
        const r = Math.PI * (this.radius ** 2)
        return r
    }
}

let dog = new Dog(9)
// console.log(dog.area());



class Cultist extends Cat {
    constructor(length){
        super()
        this.length = length
    }
    area(){
       return this.length + this.length
    }
}

let myCut = new Cultist(90)
console.log(myCut.area());



 