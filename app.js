const countButton = document.getElementById("count-button");
countButton.addEventListener("click", function()
{
    const count = document.getElementById("count");
    let countNumber = Number(count.innerHTML);
    countNumber++;
    count.innerHTML = countNumber;
}
)
const audioBirdPlay = document.getElementById("audioBirdPlay");
const birdIcon = document.getElementById("birdIcon");

birdIcon.addEventListener("click", function()
{
    if(audioBirdPlay.paused)
    {
        audioBirdPlay.play();
        birdIcon.className = "fa-solid fa-music";
    }
    else
    {
        audioBirdPlay.pause();
        birdIcon.className = "fa-solid fa-dove";
    }
}
)

const audioCoffeePlay = document.getElementById("audioCoffeePlay");
const coffeeIcon = document.getElementById("coffeeIcon");

coffeeIcon.addEventListener("click", function(){
if (audioCoffeePlay.paused)
{
    audioCoffeePlay.play();
    coffeeIcon.className = "fa-solid fa-music";
}
else audioCoffeePlay.pause();
coffeeIcon.className = "fa-solid fa-mug-saucer";
})

const audioRestaurantPlay = document.getElementById("audioRestaurantPlay");
const restaurantIcon = document.getElementById("restaurantIcon");

restaurantIcon.addEventListener("click", function(){
if (audioRestaurantPlay.paused)
{
    audioRestaurantPlay.play();
    restaurantIcon.className = "fa-solid fa-music";
}
else audioRestaurantPlay.pause();
restaurantIcon.className = "fa-solid fa-martini-glass-citrus";  
})

const volumeInput = document.getElementById("volume-input");
volumeInput.addEventListener("input", function()
{
    audioBirdPlay.volume = volumeInput.value / 100;
    audioCoffeePlay.volume = volumeInput.value  / 100;
    audioRestaurantPlay.volume = volumeInput.value / 100;
})

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function()
{
    const count = document.getElementById("count");
    count.innerHTML = 0;
})