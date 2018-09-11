//Object prototype
function Student(name, prefect, year){
  this.name = name;
  this.prefect = prefect;
  this.year = year;
};

//get summary
Student.prototype.getSummary = function (){
  return `${this.name} has been the ${this.prefect} since ${this.year}`
};

//books read constructor
function Friends(name, prefect, year, month){
  Student.call(this, name, prefect, year);
  this.month = month;
};

//inherit prototype
Friends.prototype = Object.create(Student.prototype);

//Instantitate friends
const friend1 = new Friends('Buhari Sule', 'food prefect', '1999', 'Sept');

//use Friends constructor
Friends.prototype.constructor = Friends;

console.log(friend1);