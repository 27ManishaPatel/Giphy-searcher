const searchGify = document.getElementById("search-gifs");
const gifyBtn = document.getElementById("search-btn");
const numOfGify = document.getElementById("number-of-gifs");
const gifyContainer = document.getElementById("container");

const apiKey = "V8V02wFyIrDZPBpfeY18HaDyPAKXikHL";
//add event 
gifyBtn.addEventListener("click", function() {
    const gifySearch = searchGify.value.toUpperCase();
    const gifyTotal = numOfGify.value;
    if (!gifySearch) {
        alert("Write something for GIF")
    } else {
        gifyContainer.innerHTML = ""
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${gifyTotal}&q=${gifySearch}`)
            .then(response => response.json())
            .then(data => {
                displayGif(data);
            });
    }
});