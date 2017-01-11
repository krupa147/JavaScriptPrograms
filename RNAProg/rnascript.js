
function getRNA(){
var DNAString = document.getElementById("dnavalue").value;
var i,text="";


for(i=0;i<DNAString.length;i++){
	
	var char = DNAString.charAt(i);
	
	switch(char)
            {
               case 'A': text+="U";
               break;
            
               case 'G': text+="C";
               break;
            
               case 'C': text+="G";
               break;
            
               case 'T' : text+="A";
               break;            
                          
               default:  text="";
            }
		
}


document.getElementById("result").innerHTML = text;

}