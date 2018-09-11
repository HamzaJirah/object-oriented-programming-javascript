class Student {
  constructor (name, prefect, year){
    this.name = name;
    this.prefect = prefect;
    this.year = year;
  }

  getSummary (){
    return `${this.name} is the only reliable ${this.prefect} in our school since ${this.year}`;
  }
}

//instantiate object
const student1 = new Student('Hamza Jirah', 'health prefect', '2005'); 

console.log(student1.getSummary());