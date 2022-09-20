//$.getJSON("./res/data.json", (data) => {
//})

const data = dataGenerator(14)

$.each(data, (i, value) => {

    // Media Cards
    $("#media-cards").append(`
        <div class="media-card tall">
            <header>
                <img src="${value.url}">
            </header>
            <main>
                <h1>${value.title}</h1>
                <p>${value.description}</p>
                <button class="hollow" onclick="displayImg(${i})">Click</button>
            </main>
        </div>
    `)

    // Images
    $("#images").append(`
        <img src="${value.url}" onclick="displayImg(${i})" id="image-${i}">
    `)
})

let current_image_index = 0
function displayImg (index) {
    $("#current-img").attr("src", data[index].url)
    $("#current-img-title").text(data[index].title)
    
    window.location.href = window.location.href = "#current-img"
    current_image_index = index
}

function nextImg () {
    let next_image_index = current_image_index + 1
    if (data.length - 1 <= next_image_index)
        displayImg(0)
    displayImg(next_image_index)
}

function prevImg () {
    let prev_image_index = current_image_index - 1
    if (prev_image_index < 0)
        displayImg(data.length - 1)
    displayImg(prev_image_index)
}

// Set current image on page reload
$("#current-img").attr("src", data[0].url)
$("#current-img-title").text(data[0].title)