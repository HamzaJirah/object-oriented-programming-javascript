//Object Constructor

function Student(name, prefect, age){
  this.name = name;
  this.prefect = prefect;
  this.age = age;
  this.getSummary = function (){
    return `${this.name} was the ${this.prefect} at age ${this.age}`;
  }
}

