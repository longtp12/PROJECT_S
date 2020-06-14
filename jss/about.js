function searchRedirect() {
    let item = document.getElementById('item').value
    if(item === ''){
        alert("Please enter valid informations")
        return
    }
    localStorage.setItem('item',document.getElementById('item').value)
    window.location.href = "games.html";
}

function searchEnter(e){
    if(e.key === "Enter"){
        searchRedirect()
        return
    }
}
