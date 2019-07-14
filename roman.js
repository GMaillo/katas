function roman(number){
	
	var map = {
		'M': 1000,
		'CM': 900,
		'D': 500,
		'CD': 400,
		'C': 100,
		'XC': 90,
		'L': 50,
		'XL': 40,
		'X': 10,
		'IX': 9,
		'V': 5,
		'IV': 4,
		'I': 1,
	};
    
	if (number > 3999) throw "Has excedido el valor permitido";

	result = '';
	
	
	for (var roman in map)
	{
		
	    while (number >= map[roman])
	    {
	    	
	        number -= map[roman];
	        
	        result = result + roman;
	    }
	}
	

	return result;
}
console.log(roman(3999));
