//object prototype
const studentProtos = function (name, prefect, year){
  return `${this.name} has been the ${this.prefect} since ${this.year}`;
};

const getAge = function (){
  const years = new Date().getFullYear() - this.year;
  return `${this.name} has been the ${this.prefect} for ${years} years`;
};


