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

//books read constructor
