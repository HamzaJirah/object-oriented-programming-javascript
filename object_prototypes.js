//Object prototype
function Student(name, prefect, age){
  this.name = name;
  this.prefect = prefect;
  this.age = age;
}

//get summary
Student.prototype.getSummary = function (){
  return `${this.name} has been the ${this.prefect} since age ${this.age}`
}

const student1 = new Student("Abraham Isa'ac", 'headboy', '19')
console.log(student1.getSummary());

