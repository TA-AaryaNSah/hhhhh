const images = [
    "https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2649404/pexels-photo-2649404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector('header').style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 5000); // Change image every 5 seconds