//      1

type Admin = {
    name: string,
    permissions: string[]
}


type User = {
    name: string,
    email: string
}

type AdminUser = Admin & User

//      2

interface Car {
    make: string,
    model: string 
    engine: {
        type: string,
        horsepower: number
    },
    year: number
}

const car: Car = {
    make: 'Mercedes',
    model: 'CLS',
    engine: {
        type: 'Benzine',
        horsepower: 1200
    },
    year: 2023
}

// console.log(car)

const getAutoInfo =(car: Car): string =>{
    return `Make: ${car.make}\n Model: ${car.model}\n Engine: ${car.engine.type}\n Horsepower: ${car.engine.horsepower} HP \n Year: ${car.year}`
}

console.log(getAutoInfo(car))

//      3

interface Product {
    name: string,
    price: number,
}

interface CalculateDiscount {
   ( product: Product,
    discount: number):number
}
const calculateDiscount: CalculateDiscount =(product: Product, discount: number): number =>{
        const discountPrice = product.price - (product.price * discount / 100)
        return discountPrice
    }
    const product: Product = {
        name: 'iPhone',
        price: 799
    }
    const discount = 10
     
console.log(`Price after discount: ${calculateDiscount(product, discount)} `)


//      4

interface Employee {
    name: string,
    salary: number
}

const employee: Employee[] = [
    {name: 'Bob', salary: 2200},
    {name: 'Alex', salary: 2260},
    {name: 'Jessica', salary: 2400},
]

const getEmployeeSalary =(employee: Employee[]):{name: string, salary: number}[] => {

    return  employee.map(employee => ({name: employee.name, salary: employee.salary})) 
}
console.log(getEmployeeSalary(employee))

//      5

interface Person {
    firstName: string,
    lastName: string
}

interface Student extends Person {
    grade: number
}

const person: Person = {
    firstName: 'Bob',
    lastName: 'Jakson',
}

const studentGrade =(person: Person, grade: number): string => {
    return `First Name: ${person.firstName}\n Last Name: ${person.lastName}\n Grade: ${grade}`

}
console.log(studentGrade(person, 95))


//      6

interface concatStrings {
    (str1: string, str2: string): string
}
const ConcatString: concatStrings =(str1: string, str2: string): string => {
    return `${str1}, ${str2}`
} 
console.log(ConcatString('Hello','world'))