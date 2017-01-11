function luhn(){
	
	var number = document.getElementById("number").value;
	var array  =  new Array();
	var number_string = number.toString();
	var count=1,sum=0;
	/*while(number>0){
		rem=number%10;
		array.push(rem);
		number=number/10;
		alert(rem);
	}	*/
	//alert(number_string + number_string.length);
	for(var i=number_string.length-1;i>=0;i--){
		
		var num = parseInt(number_string.charAt(i));
		if(count%2==0){
			num = num*2;
			if(num>9){
				num=num-9;
			}
		}
		//alert(num);
		count++;
		sum = sum + num;
		
	}
	
	if(sum%10==0){
		alert("It satisfies luhn formula");
	}
	else{
		alert("It doe not satisfies luhn formula");
	}
}