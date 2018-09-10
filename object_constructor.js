//Object Constructor

function Student(name, prefect, age){
  this.name = name;
  this.prefect = prefect;
  this.age = age;
  this.getSummary = function (){
    return `${this.name} was the ${this.prefect} at age ${this.age}`;
  }
}

//instantiate object i.e create as many objects as you want
const student1 = new Student('Phil Jeff', 'time-keeper', '15');
const student2 = new Student('Kenneth Mike', 'labour-captain', '16');

//log to console
console.log(student1.name);
console.log(student2.age);