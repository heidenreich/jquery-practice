// 42

// ''

// ""

// []

// [["fish", "milk"], "cheerse", "beer", 11 ]

// {
// 	style: undefined,
// 	legs: 4,
// 	height: "5 feet",
// 	materials: [
// 	'pine',
// 	'iron'
// 	],
// 	maxCapacity: '400lb'

// }

// true
// false

// /.+/

// var dog = {
// 	legs: 4;
// 	ears: 2;
// 	bark: function function() {
// 		console.log ('woof')
// 	},
// 	countEars: function (){
// 		console.log ('I have', this.ears, 'ears');
// 	}
// }


//ONE 

var hotdog = {
		bun: ['wheat', 'white', 'potato'],
		meat: ['pork', 'beef', 'chicken', 'slurry'],
		toppings: ['relish', 'mustard', 'sauerkraut', 'ketchup']
};

var sandwich = {
		bun: ['wheat', 'white', 'potato'],
		meat: ['pork', 'beef', 'chicken', 'slurry'],
		toppings: ['relish', 'ketchip', 'sauerkraut', 'ketchup']
};

function removeTopping(entree, sauce){
	console.log('I hate ' + entree.toppings[sauce])
}

removeTopping(sandiwch, 2)
//TWO

var academy = {
	teachers: [ 'Joe', 'Mason'],
	spaces: 15,
	students: [ 
			'Joshua',
			'Austin',
			'Shane',
			'Daniel',
			'Katy',
			'Jeremy', 
			'Jennifer',
			'Edwin', 
			'Katherine', 
			'Matt', 
			'Todd', 
			'Tyler',
			'Jacob', 
			'Elizabeth'
		],
	cool: true
};

function countStudents(number){
	console.log ('There are '+ academy.students.length + "  students in the Iron Yard Academy")
};




//THREE

var backpack = {
	straps: 2,
	pockets: 7,
	color: 'red',
	brand: ['Nike', 'Adidas','Jansport']
};

function addPockets (x){
	console.log ((backpack.pockets+x) + ' is way to many pockets!')
};




// var students = [
// 	{
// 		name: 'Austin',
// 		age: 73,
// 		superPower: 'Eating Soup'
// 	},
// 	{
// 		name: 'Matt',
// 		age: 90000,
// 		superPower: 'Sleeping'
// 	},
// 	{
// 		name: 'ALF',
// 		age: 1,
// 		superPower: 'Eating cats'
// 	}
// ]

// students.forEach(function(student, index){
// 	var newDiv = $(<div class="student-container"> + student.name +'</div>')
// 	$('body').append(newDiv);

// })
