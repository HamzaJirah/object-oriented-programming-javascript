class Student {
  constructor (name, prefect, year){
    this.name = name;
    this.prefect = prefect;
    this.year = year;
  }

  getSummary (){
    return `${this.name} is the only reliable ${this.prefect} in our school since ${this.year}`;
  }

  getAge (){
    const years = new Date().getFullYear() - this.year;
    return `${this.name} has been the ${this.prefect} for ${years} years`;
  }

  review (newYear){
    this.year = newYear;
    this.reviewed = true;
  }

  //static method
  static topStudent(){
    return `Jirah Ibrahim`;
  }
}

//instantiate object
const student1 = new Student('Hamza Jirah', 'health prefect', '2005'); 

// console.log(student1);
// student1.review('2016');
// console.log(student1);

console.log(Student.topStudent());