function allergy(num)
{
	
	var arr1=[128,64,32,16,8,4,2,1];
	var arr2=["cats","pollen","chocolate","tomatoes","strawberries","shellfish","peanuts","eggs"];
	var res=new Array();
	var i;
	for(i=0;i<arr1.length;i++)
	{
		
		if(num>=arr1[i])
		{
			res.push(arr2[i]);
			num=num-arr1[i];
		}
	}
	
	document.getElementById("show").innerHTML = res.join(" ");
	
}