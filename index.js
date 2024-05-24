var countEL=document.getElementById("count-el")
var saveEl=document.getElementById("save-el")
let count=0
function increment(){
    count=count+1
    countEL.innerText=count
}
function save()
{
    let counts=count +  " - "
    saveEl.textContent +=counts
    
    countEL.innerText=0
    count=0
}
