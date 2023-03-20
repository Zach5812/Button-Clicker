function logoff(element){
    if(element.innerText == "Login") 
    {
    element.innerText = "Logoff"
    }
    else 
    {
        element.innerText = "Login"
    }
}



// var likeButton = 0
// function likes(element){
//     likeButton = likeButton++
//     console.log(likeButton)
//     return likeButton
// }

function hide(element) {
    element.remove();
}

