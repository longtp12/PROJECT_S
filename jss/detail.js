let games = JSON.parse(localStorage.getItem('listgames'));
let gameName = localStorage.getItem('gameName');
let game = games.find(function(value){
    return value.name === gameName;
})
function searchRedirect() {
    let item = document.getElementById('item').value
    if(item === ''){
        alert("Please enter valid informations")
        return
    }
    localStorage.setItem('item',document.getElementById('item').value)
    window.location.href = "games.html";
}

let carousel = document.getElementById('border-carousel');
let carouselHtml = `<ul class="uk-slideshow-items">
                        <li>
                            <img src="${game.img[2]}" alt="" uk-cover>
                        </li>
                        <li>
                            <img src="${game.img[3]}" alt="" uk-cover>
                        </li>
                        <li>
                            <img src="${game.img[4]}" alt="" uk-cover>
                        </li>
                    </ul>

                        <div id="small-carousel" class="uk-position-bottom-center uk-position-small">
                            <ul class="uk-thumbnav">
                                <li uk-slideshow-item="0"><a href="#"><img src="${game.img[2]}" width="100" alt=""></a></li>
                                <li uk-slideshow-item="1"><a href="#"><img src="${game.img[3]}" width="100" alt=""></a></li>
                                <li uk-slideshow-item="2"><a href="#"><img src="${game.img[4]}" width="100" alt=""></a></li>
                            </ul>
                        </div>`
    carousel.innerHTML = carouselHtml;
    
    
let title = document.getElementById("name-game");
let nameHtml = `<div><h1>${game.name}</h1></div>`;
title.innerHTML = nameHtml;
let store = document.getElementById('store');
let storeHtml = `<h4 class="store-advice">Buy ${game.name}</h4>
                <div id="icons">
                <a  href="${game.stores[0]}" target="_blank"> <img class="store-icon" src="css/img/Steam_(service)-Logo.wine.png" alt="Epic"> </a>
                <a  href="${game.stores[1]}" target="_blank"> <img class="store-icon" src="css/img/Epic_Games-Logo.wine.png" alt="Origin"> </a>
                <a  href="${game.stores[2]}" target="_blank"> <img class="store-icon" src="css/img/Origin_(service)-Logo.wine.png" alt="Steam"> </a>
                <a href="${game.stores[3]}" target="_blank"> <img class="store-icon" src="css/img/Ubisoft-Logo.wine.png" alt="Ubisoft"> </a>
                </div>`;
store.innerHTML = storeHtml;
let devpub = document.getElementById("pub");
let devpubHtml = `<h5>Developer: ${game.dev} </h5>
                  <h5>Publisher: ${game.pub}</h5>`;
devpub.innerHTML = devpubHtml;

let sDes = document.getElementById('sDes');
let sDesHtml = `<p>${game.sDes}</p>`
sDes.innerHTML = sDesHtml;

let imgHeader = document.getElementById("img-header");
let imgHeaderHtml = `<img src="${game.img[1]}" alt="">`;
imgHeader.innerHTML = imgHeaderHtml;

let des = document.getElementById("des");
let desHtml = `${game.des}`
des.innerHTML = desHtml;



function showComment(){

let displayComments = document.getElementById('comment');
displayComments.innerHTML = '';
if(localStorage.getItem("commentData")  === null){
    return 
}
let commentData = JSON.parse(localStorage.getItem("commentData"));
let gameComment = commentData.filter(function(comment){
    return comment.nameGame === gameName;
})
for (let i = 0; i < gameComment.length; i++) {
    let html = `<li class="comment">
                    <div class="comment-info">
                            <div class="comment-author">
                            ${gameComment[i].name}
                            <span class="comment-author-email">${gameComment[i].email} </span>
                            </div>
                            <div class="rating">
                                ${gameComment[i].rating}<span class="fa fa-star checked"></span>
                            </div>
                        </div>  
                    <div class="comment-text">
                        <p>${gameComment[i].commentText}</p>
                    </div>
                </li>`
    
        displayComments.innerHTML += html;
}

}







showComment();

function submit(){   
    let commentSection 
    if(localStorage.getItem('commentData') === null){
        commentSection = [];
    }else{
    commentSection = JSON.parse(localStorage.getItem('commentData'));
    }
    let nameValue = document.getElementById('name-input').value;
    let emailValue = document.getElementById('email-input').value;
    let commentTextValue = document.getElementById('input').value;
    let ratingValue = rating();
    if(nameValue === '' || emailValue === '' || commentTextValue === '' || ratingValue === undefined || emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1 ){
        alert("Please enter valid informations");
        return
    }
    let comment = {
        nameGame: `${gameName}`,
        name: `${nameValue}`,
        email: `${emailValue}`,
        commentText: `${commentTextValue}`,
        rating : `${ratingValue}`
    }


    commentSection.unshift(comment);
    console.log(commentSection);
    console.log(game);
    
    localStorage.setItem("commentData",JSON.stringify(commentSection));
    
   showComment();
}



function rating(){

let starValue = document.getElementsByName('star');

for (let i = 0; i < starValue.length; i++) {
        if(starValue[i].checked){
            return starValue[i].value ;
            
        }
    }
}


function searchEnter(e){
    if(e.key === "Enter"){
        searchRedirect()
        return
    }
}

function submitEnter(e){
    if(e.key === "Enter"){
        submit();
    }
}