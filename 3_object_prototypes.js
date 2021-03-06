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

//getAge
Student.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.name} has been the ${this.prefect} for ${years} years`
};

//Review /Change Year
Student.prototype.review = function(newYear){
  this.year = newYear;
  this.reviewed = true;
};

//instantiate object
const student1 = new Student("Abraham Isa'ac", 'headboy', '2000');
const student2 = new Student('Maleek Musa', 'house captain', '2003');

console.log(student2);
student2.review('2013');
console.log(student2);

