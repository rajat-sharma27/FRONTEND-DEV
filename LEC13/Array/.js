// Second way t create to object
const car19=new Object();
car.name="Toyaota"
car.model="Fortuner"
car.price=6000000


// COnstruct Function
function car(name,price){
    this.name=name
    this.price=price
    this.greet=function() //Anonymous FUnction --Which have no name
    {
        return `Hii My name is ${this.name} and price is ${this.price}`
    }
}


const car1=new car("Toyota-Fortuner",6000000)
console.log(car1.greet())

// using Create

const child={
    greet()
    {
        console.log("hii")
    }
}

const child1=Object.create(child)
child1.age=24
console.log(child1)

// Using JSON
const person='{"name":"Deepak","age":21}';
const jsonObj=JSON.parse(person)
console.log(jsonObj.name)


const stringObj=JSON.stringify(jsonObj)