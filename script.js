function display(val) {
    document.getElementById("textval").value+=val
}
function calculate()
{
 let x = document.getElementById("textval").value
 let y = eval(x)
 document.getElementById("textval").value = y
 console.log(x)
}

 function clr(){
     document.getElementById("textval").value =""
 }
 
 function  per(){
    let a= document.getElementById("textval").value
    let b = a/100
     document.getElementById("textval").value=b
 }

 
 
 