
let output="";
let arrayDeValores=["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M",",",".","-","Spacebar","Backspace"]
window.onload = function() { 
  for(let i=0; i<arrayDeValores.length; i++ ){
    let id = arrayDeValores[i];
    document.getElementById(i).value=id


  }

}


function escribir(value){
output +=value
document.getElementById("output").value=output
}  
function del(){
  if(output.length>0){

    output= output.slice(0, -1)
    document.getElementById("output").value=output
  }
}
