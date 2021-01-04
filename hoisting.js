// console.log(example); 
// let example = "I'm the example!";  

//reference error

console.log(hello);                                   
var hello = 'world';     

// var hello //get hoisted
// console.log(hello); //undefine
// hello = 'world'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// test(); //undefined
// function test(){
//     var needle = 'magnet';
//     console.log(needle); //magnet
// }

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); //'only okay' when the function print() gets called
// }
// console.log(brendan); //'super cool'

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// console.log(food); //'chicken'
// eat(); //function call can be called without order, the system will look into next line to find a function eat(), write 'half-chicken'
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean(); //mean is not a function
// console.log(food); //undefined
// var mean = function() { 
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);//undefined

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre
// console.log(genre); //undefined
// genre = "disco";
// rewind(); //'rock' 'r&b'
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); 'disco'

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// console.log(dojo); //"san jose"
// learn(); //"seattle" "burbank"
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo); //"san jose"

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //can not assign a const, change to dojo.hiring="closed for now"
    }
    return dojo;
}


// Object {
//   hiring: true,
//   name: "Chicago",
//   students: 65
// }
// Object {
//   hiring: "closed for now",
//   name: "Berkeley",
//   students: 0
// }