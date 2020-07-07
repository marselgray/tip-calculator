window.addEventListener("load", function() {
	avatar();
})


function avatar(){
	
	var btn = document.getElementById('btn');
	
	btn.addEventListener('click', function(){
		var val = document.getElementById('amount').value;
		
		console.log(val)
	})

}
