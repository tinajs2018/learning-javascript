
var hellop={students:"karimi",college:"christine",house:"children"};
console.log(hellop);

console.log(tina);
var dude= new Object;
dude.lastborn="anita";
dude.firstborn="donne"
dude.midddleborn="pupy"
function person(first,last,age,eye){
    this.firstname=first;
    this.lastborn=last;
    this.age=age;
    this.eyecolor=eye;
}
console.log(person);
var tina={
    university:"mut",
    course:"asp",
    passion:"coding"
}

console.log(tina.university);
console.log(tina.passion);
 console.log(tina.university + " " + tina.course  + " "  + tina.passion  + "loves what she does" ) ; 
 var pet={name:'johh',school:"kemtc"} ;

function lag(best ,good ,very){
    this.beststudent="alex";
    this.techguru="vera";
    this.lazy="mark";
}/* with the the fuction constructor you can use the new keyword to create a new object from 
the same prototype*/

lag.adroid="hasting"
var a=4;
function flag (a,b){
    a*b;
} var p=2;
var v=flag*p;
console.log(v);

//creating an anonymous fuction :that is afuction with no name.
function rat(a,b) {
    return a*b
}
var jazz=rat(3,5)*2;
console.log(jazz);

function dad(b,c){
 return b/c
}
var bee=dad(8,2)*2;
console.log(bee);
x=findMax(1,123,500,115,44,88);
function findMax(){
    var i;
    var max=-Infinity;
    for(i=0;i< arguments.length; i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max
}
console.log(x);
v=sumAll(1,123,500,115,44,88);
function sumAll(){
    var i, sum=0;
    for(i=0;i< arguments.length; i++){
      sum+=arguments[i];
    }
    return sum;
}
console.log(v);
function nod(x,y){
    return x*y
}
 var peep=nod(12,2);
 console.log(peep);
 function wep(p,j){
     return p/j
 }
 var temp=wep(12,2);
 console.log(temp);
function deep(a,b){
    return a*b;
}
myobject=deep.call(deep,2,5)
console.log(myobject);
function still(a,b){
    return a+b;
}
myarray=[10,3]
grace=still.apply(still,myarray);
console.log(grace);