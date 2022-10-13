//array of images
let animeImages = [
    "https://wallpaper.dog/large/20487367.jpg",
    "https://wallpaperaccess.com/full/33270.jpg",
    "https://i.ytimg.com/vi/16hGcLvD9HQ/maxresdefault.jpg",
    "https://images.alphacoders.com/598/598846.jpg",
    "https://www.myfreewalls.com/public/uploads/preview/red-blue-dragon-ball-z-goku-anime-4k-wallpaper-11628961651rprcxlhkzh.jpg",
    "https://lovelytab.com/wp-content/uploads/2018/12/img1543845129223.jpg",
    "https://wallpaperteg.com/wp-content/uploads/2021/08/My-5k-4k-resolution-anime-wallpaper-collection-anime.jpg",
    "https://wallpaperteg.com/wp-content/uploads/2021/08/Anime-Wallpaper-Background-Picture-Wallpul-HD-Wallpaper.jpg",
    "https://cutewallpaper.org/22/4k-aesthetic-anime-wallpapers/anime-wallpaper-4k-pc-aesthetic.jpg"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * animeImages.length)
    imgs[i].src = animeImages[randomImg];
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Anime is Life";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is about the great thing known as Anime";
}

chrome.runtime.sendMessage({type: "alertUser"});

const btn = document.getElementById('btn')

btn.addEventListener('click', function master(){
    var master = document.getElementsByClassName("master2");
    master[2].innerHTML = 'I hate Anime';
})

const masterEl = document.getElementById('master')
console.log(masterEl) //<p id="master">Anime is Amazing</p> 