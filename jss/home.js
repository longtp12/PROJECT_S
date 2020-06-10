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
    
];

let imgCarousel = document.getElementById('big-carousel-img');
let html = `<div class="carousel-item active">
                <a href="#"><img onclick="imgRedirect('${games[0].name}')" src="${games[0].img[0]}" class="d-block w-100" alt="..."></a>
            </div>
            <div class="carousel-item">
                <a href="#"><img onclick="imgRedirect('${games[1].name}')" src="${games[1].img[0]}" class="d-block w-100" alt="..."></a>
            </div>
            <div class="carousel-item">
                <a href="#"><img onclick="imgRedirect('${games[2].name}')" src="${games[2].img[0]}" class="d-block w-100" alt="..."></a>
            </div>`;

imgCarousel.innerHTML += html;






function imgRedirect(name){
    localStorage.setItem('gameName',name)
    localStorage.setItem('listgames',JSON.stringify(games))
    window.location.href = "file:///D:/Code/Project/detail.html"
}








function searchRedirect() {
    localStorage.setItem('item',document.getElementById('item').value)
    window.location.href = "file:///D:/Code/Project/games.html";
}