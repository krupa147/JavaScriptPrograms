function panagram(){
	
	var flage = 0,text = "",count=0;
	var check_string = document.getElementById("string").value;
	var string_lower = check_string.toLowerCase();
	
	for(var i=0 ; i<string_lower.length ; i++){
		var value1 = string_lower.charCodeAt(i);
		var var2 = string_lower.charAt(i);
		if((value1>96 && value1<123) && text.lastIndexOf(var2)==-1){
			text = text + var2;
			count=count+1;
		}
	}
	
	if(count==26){
		document.getElementById("result").innerHTML = "the string is panagram";
	}
	else{
		document.getElementById("result").innerHTML = "The string is not panagram";
	}
	
	
	
}