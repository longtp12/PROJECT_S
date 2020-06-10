let games = [
    {
        id: 01,
        name: 'STAR WARS Jedi: Fallen Order',
        dev: 'Respawn Entertainment',
        pub: 'aa',
        genre:['Actions', 'Adventure', 'Sci-fi'],
        img: ['https://steamcdn-a.akamaihd.net/steam/apps/1172380/header.jpg?t=1588955280', 'https://steamcdn-a.akamaihd.net/steam/apps/1172380/ss_cfad9481db1a3b68fb5fcb2298cfc74bcb6a469e.600x338.jpg?t=1588955280','https://steamcdn-a.akamaihd.net/steam/apps/1172380/ss_763dcc7434f072d6fdbb9037b4d37f4474e29d9b.600x338.jpg?t=1588955280'],
        // des: ''
        sDes: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.',
        stores: ['https://store.steampowered.com/app/1172380/STAR_WARS_Jedi_Fallen_Order/','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order'],
        commentSection: [],
    },
    {
        id: 02,
        name: 'metal gear',
        dev: 'Respawn Entertainments',
        pub: 'EA',
        genre:['Action', 'Adventure', 'Sci-fi'],
        img: ['https://steamcdn-a.akamaihd.net/steam/apps/287700/header.jpg?t=1581382198', 'https://steamcdn-a.akamaihd.net/steam/apps/1172380/ss_cfad9481db1a3b68fb5fcb2298cfc74bcb6a469e.600x338.jpg?t=1588955280','https://steamcdn-a.akamaihd.net/steam/apps/1172380/ss_763dcc7434f072d6fdbb9037b4d37f4474e29d9b.600x338.jpg?t=1588955280'],
        // des: ''
        sDes: `A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.`,
        stores: ['https://store.steampowered.com/app/1172380/STAR_WARS_Jedi_Fallen_Order/','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order'],
        commentSection: [],
    },
    {
        id: 03,
        name: 'STAR WARS Jedi: Fallen Orders',
        dev: 'Respawn Entertainmentss',
        pub: 'Electronic Arts',
        genre:['Action', 'Adventure', 'Sci-fi'],
        img: ['https://steamcdn-a.akamaihd.net/steam/apps/287700/ss_fbfa8f676661d34b1da0495e15df5a08c7e1f04a.600x338.jpg?t=1581382198', 'https://steamcdn-a.akamaihd.net/steam/apps/1172380/ss_cfad9481db1a3b68fb5fcb2298cfc74bcb6a469e.600x338.jpg?t=1588955280','https://steamcdn-a.akamaihd.net/steam/apps/1172380/ss_763dcc7434f072d6fdbb9037b4d37f4474e29d9b.600x338.jpg?t=1588955280'],
        // des: ''
        sDes: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.',
        stores: ['https://store.steampowered.com/app/1172380/STAR_WARS_Jedi_Fallen_Order/','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order','https://www.origin.com/sgp/en-us/store/star-wars/star-wars-jedi-fallen-order'],
        commentSection: [],
    }
    // {
    //     name: 
    //     dev:
    //     pub:
    //     genre:
    //     img
    //     des:
    //     sDes:
    //     stores:
    // },
    
]

// document.body.style.zoom="90%"


function detail(name){
    localStorage.setItem('gameName',name)
    localStorage.setItem('listgames',JSON.stringify(games))
    window.location.href = "file:///D:/Project/detail.html"
}

function show(){

let displayGames = document.getElementById('games');

for (let i = 0; i < games.length; i++) {
    let htmlList = `<li>
                    <div>
                        <a href="#">
                            <img onclick="detail('${games[i].name}')" src="${games[i].img[0]}" alt="">
                        </a>
                    </div>
                    <div>    
                        <h2>
                            <a onclick="detail('${games[i].name}')" href="#">${games[i].name}</a>
                        </h2>
                        <p>${games[i].sDes}</p>
                    </div>    
                    </li>`;

    displayGames.innerHTML += htmlList;
}
}




show();

showSearchHome();



function filterPub() {
    let displayGames = document.getElementById('games');
    displayGames.innerHTML = '';
    let filterPub = document.getElementById('filterItem').value;
    let gamePub = games.filter(function(publisher){
        return publisher.pub === filterPub;
    })
    
    if(filterPub === ''){
        show()
    }else{
        for (let i = 0; i < gamePub.length; i++) {
            let html = `<li>
            <div>
                <a href="#">
                    <img onclick="detail('${gamePub[i].name}')" src="${gamePub[i].img[0]}" alt="">
                </a>
            </div>
            <div>    
                <h2>
                    <a onclick="detail('${gamePub[i].name}')" href="#">${gamePub[i].name}</a>
                </h2>
                <p>${gamePub[i].sDes}</p>
            </div>    
            </li>`;

            displayGames.innerHTML += html;
            
        }
    }
}

function filterName() {
    let displayGames = document.getElementById('games');
    displayGames.innerHTML = '';
    let filterName = document.getElementById('filterItem').value;
    let gameName = games.filter(function(publisher){
        return publisher.name === filterName;
    })
    
    if(filterName === ''){
        show()
    }else{
        for (let i = 0; i < gameName.length; i++) {
            let html = `<li>
            <div>
                <a href="#">
                    <img onclick="detail('${gameName[i].name}')" src="${gameName[i].img[0]}" alt="">
                </a>
            </div>
            <div>    
                <h2>
                    <a onclick="detail('${gameName[i].name}')" href="#">${gameName[i].name}</a>
                </h2>
                <p>${gameName[i].sDes}</p>
            </div>    
            </li>`;

            displayGames.innerHTML += html;
            
        }
    }
}

function filterGenre() {
    let displayGames = document.getElementById('games');
    displayGames.innerHTML = '';
    
    let filterGenre = document.getElementById('filterItem').value;
    for (let i = 0; i < games.length; i++) {
        const gameGenre = games[i].genre.filter(function(Genre){
            return Genre.genre === filterGenre;
        })
        
    }
      
    if(filterGenre === ''){
        show()
    }else{
        for (let i = 0; i < gameGenre.length; i++) {
            let html = `<li>
            <div>
                <a href="#">
                    <img src="${gameGenre[i].img[0]}" alt="">
                </a>
            </div>
            <div>    
                <h2>
                    <a href="#">${gameGenre[i].name}</a>
                </h2>
                <p>${gameGenre[i].sDes}</p>
            </div>    
            </li>`;

            displayGames.innerHTML += html;
            
        }
    }
}




function trimString(s) {
    var l=0, r=s.length -1;
    while(l < s.length && s[l] == ' ') l++;
    while(r > l && s[r] == ' ') r-=1;
    return s.substring(l, r+1);
  }
  
  function compareObjects(o1, o2) {
    var k = '';
    for(k in o1) if(o1[k] != o2[k]) return false;
    for(k in o2) if(o1[k] != o2[k]) return false;
    return true;
  }
  
  function itemExists(haystack, needle) {
    for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
    return false;
  }


  function searchFor(toSearch) {
    const results = []; 
    for(var i=0; i<games.length; i++) {
        if(games[i].name.toLowerCase().trim().indexOf(toSearch.toLowerCase().trim())!==-1
        || games[i].dev.toLowerCase().trim().indexOf(toSearch.toLowerCase().trim())!==-1
        || games[i].pub.toLowerCase().trim().indexOf(toSearch.toLowerCase().trim())!==-1) {
           results.push(games[i]);
        }
        
    }  
    return results;
  }





// let results = [];
// let toSearch = 'me';
// for (let i = 0; i < games.length; i++) {
//     for (var key in games[i]) {
//       if(games[i][key].indexOf(toSearch) !=-1){
//         results.push(games[i]);
//       }
//     }
    
// }
// console.log(results);


  function searchBar(){
    
    let item = document.getElementById('item').value;
    let results = searchFor(item);
    
    let displayGames = document.getElementById('games');
    displayGames.innerHTML = '';
    if(results.length === 0){
        let notFound = `<h1>ko tìm thấy</h1>`;
        displayGames.innerHTML = notFound;
    }else{
        for (let i = 0; i < results.length; i++) {
            let html = `<li>
            <div>
                <a href="#">
                    <img onclick="detail('${results[i].name}')" src="${results[i].img[0]}" alt="">
                </a>
            </div>
            <div>    
                <h2>
                    <a onclick="detail('${results[i].name}')" href="#">${results[i].name}</a>
                </h2>
                <p>${results[i].sDes}</p>
            </div>    
            </li>`;
            displayGames.innerHTML += html;
        }
    }   
  }

 

  function showSearchHome(){
      let searchedItem = localStorage.getItem('item');
      if(searchedItem === null){
          return
      }
      let results = searchFor(searchedItem);
      let displayGames = document.getElementById('games');
    displayGames.innerHTML = '';
    if(results.length === 0){
        let notFound = `<h1>ko tìm thấy</h1>`;
        displayGames.innerHTML = notFound;
    }else{
        for (let i = 0; i < results.length; i++) {
            let html = `<li>
            <div>
                <a href="#">
                    <img onclick="detail('${results[i].name}')" src="${results[i].img[0]}" alt="">
                </a>
            </div>
            <div>    
                <h2>
                    <a onclick="detail('${results[i].name}')" href="#">${results[i].name}</a>
                </h2>
                <p>${results[i].sDes}</p>
            </div>    
            </li>`;
            displayGames.innerHTML += html;
        }
    }   

    localStorage.removeItem('item');
      
  }