//create book object

//Object-Literal
const student1 = {
  name: 'Musa Segun',
  title: 'prefect',
  year: '2000',
  getSummary: function (){
    return `${this.name} was the ${this.title} in ${this.year}`;
  }
}

const student2 = {
  name: 'Chinedu Gyang',
  title: 'class rep',
  year: '2015',
  getSummary: function (){
    return `${this.name} was the ${this.title} in ${this.year}`;
  }
}
console.log(student2.getSummary());