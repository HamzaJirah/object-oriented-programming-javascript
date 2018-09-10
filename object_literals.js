//create book object
const student1 = {
  name: 'Musa Segun',
  title: 'prefect',
  year: '2000'
  getSummary: function (){
    return '${this.name} was the ${this.title} in ${this.year}';
  }
}
console.log(student1);
console.log(student1.title);