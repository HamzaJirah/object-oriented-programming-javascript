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

//pupil subclass
class Pupil extends Student {
  constructor (name, prefect, year, month){
    super(name, prefect, year)
    this.month = month;
  }
}

//instantiate object
const pupil1 = new Pupil('Salim Shere', 'sports prefect', '2017', 'Sept');

console.log(pupil1.getSummary());
