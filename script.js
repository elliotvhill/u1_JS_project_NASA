const apiKey = 'c0k0WgD2uCtdB03NGxld02oBokOdV9SUgKLpRhow'
const mainContent = document.querySelector('.main-content')
const button = document.querySelector('#search')
const marsRoverPic = document.querySelector('#roverPic')
const description = document.querySelector('#description')

// const i = function getRandomPic() {
//     return Math.round(Math.random() * 10)
// }

button.addEventListener('click', async () => {
    let searchInput = document.querySelector('input').value;
    let response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=${searchInput}`)
    console.log(response)
    let marsPicArray = response.data.photos
    console.log(marsPicArray)
    if (marsPicArray.length > 0) {
        let marsPic = response.data.photos[0].img_src
        marsRoverPic.innerHTML = `<img src="${marsPic}" />`
    }
    else {
        description.innerHTML = `No photo found. Please try a different Sol.`
    }
})

