window.addEventListener("load", function() {
	tipCalc();
})


function tipCalc(){
	
	var btn = document.getElementById('btn');
	
	btn.addEventListener('click', function(){
		calc();
	})

}



function calc(){
	console.log('calc ran')
	var val = document.getElementById('amount').value;
	var tip = document.getElementById('tip').value;
	var people = document.getElementById('people').value;

	// tip is percentage so times 100 times the bill added to the bill divided by number of people
	var tipAmount =  ( ( ( parseInt(tip) / 100 ) * parseInt(val) ) + parseInt(val) ) / parseInt(people);
	
	document.getElementById('total').innerText = `$ ${tipAmount}`;
}