//object prototype
const studentProtos = function (name, prefect, year){
  return `${this.name} has been the ${this.prefect} since ${this.year}`;
};

const getAge = function (){
  const years = new Date().getFullYear() - this.year;
  return `${this.name} has been the ${this.prefect} for ${years} years`;
};

//create object
const student1 = Object.create(studentProtos,{
  name: {value: 'Hamza Jirah'},
  prefect: {value: 'health'},
  year: {value: '2004'}
});


console.log(student1);


