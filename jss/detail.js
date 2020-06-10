let games = JSON.parse(localStorage.getItem('listgames'));
let gameName = localStorage.getItem('gameName');
let game = games.find(function(value){
    return value.name === gameName;
})

console.log(game);


let displayImg = document.getElementById('detail');

let html =  `<img src="${game.img[0]}" alt=""></img>
            <a href="${game.stores[0]}"target="_blank" rel="noopener noreferrer"><img width='100' height='auto' src="css/img/Steam_(service)-Logo.wine.png" alt=""></a>
            <a href="${game.stores[1]}"target="_blank"  rel="noopener noreferrer"><img width='100' height='auto' src="css/img/Epic_Games-Logo.wine.png" alt=""></a>
            <a href="${game.stores[2]}"target="_blank"  rel="noopener noreferrer"><img width='100' height='auto' src="css/img/Origin_(service)-Logo.wine.png" alt=""></a>
            <a href="${game.stores[3]}"target="_blank"  rel="noopener noreferrer"><img width='100' height='auto' src="css/img/Ubisoft-Logo.wine.png" alt=""></a>`;


displayImg.innerHTML = html;


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
              <div class="comment-text">
                <p>${gameComment[i].commentText}</p>
                </div>
                <div class="comment-info">
                    <div class="comment-author-email">
                        ${gameComment[i].email}
                    <span class="comment-author">~${gameComment[i].name}</span>
                    </div>
                    <div class="rating">
                        ${gameComment[i].rating} <span class="fa fa-star checked"></span>
                    </div>
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

