//Object prototype
function Student(name, prefect, year){
  this.name = name;
  this.prefect = prefect;
  this.year = year;
}

//get summary
Student.prototype.getSummary = function (){
  return `${this.name} has been the ${this.prefect} since ${this.year}`
}

const student1 = new Student("Abraham Isa'ac", 'headboy', '2000')
console.log(student1.getSummary());
console.log(student1);

