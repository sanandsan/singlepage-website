
document.body.style.backgroundImage = "url('bg-img1.jpg')";
document.addEventListener('DOMContentLoaded',()=> {
    
       console.log( document.body.style.backgroundColor)

});
function achieve(){
    const changableData= document.getElementById("achievements").innerHTML;
    document.getElementById("changing").innerHTML=changableData
}

function signup(){
    const changableData= document.getElementById("signup").innerHTML;
    document.getElementById("changing").innerHTML=changableData
}


function experience(){
    const changableData= document.getElementById("experience").innerHTML;
    document.getElementById("changing").innerHTML=changableData
}


function changeContentOf(){
    console.log("this")
}