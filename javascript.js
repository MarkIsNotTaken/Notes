//comment
/* block 
comm
ent
*/

//string
var Name = "Mark";

//integer
var Age = 16;

//boolean, true or false
var booleanExample = true;

//unassigned variable
undefined

//not a #
NaN

//array

//objects

//function = excute statement
function () {

}

function nameOfFunction () {
	console.log('ay show me dat name')
}

//invoking a function
nameOfFunction();

//parameters 
function sup (a, b) {
	console.log(a + b); 
}

sup (10, 11);

function createGreeting (name, age) {
	if (age < 32){
		console.log('sup' + name);
	}else{
		console.log('sup my bud,' +name);
	}
}

createGreeting('Mark', 16);