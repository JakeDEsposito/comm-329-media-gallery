//$.getJSON("./res/data.json", (data) => {
//})

const data = dataGenerator(14, 60)

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
        <img src="${value.url}" onclick="displayMainImg(${i})" id="image-${i}">
    `)
})

let current_image_index = 0
function displayMainImg (index) {
    $("#current-img").attr("src", data[index].url)
    $("#current-img-title").text(data[index].title)
    
    window.location.href = window.location.href = "#current-img"
    current_image_index = index
}

function nextImg () {
    let next_image_index = current_image_index + 1
    if (data.length - 1 <= next_image_index)
        displayMainImg(0)
    else
        displayMainImg(next_image_index)
}

function prevImg () {
    let prev_image_index = current_image_index - 1
    if (prev_image_index < 0)
        displayMainImg(data.length - 1)
    else
        displayMainImg(prev_image_index)
}

// Set current image on page reload
$("#current-img").attr("src", data[0].url)
$("#current-img-title").text(data[0].title)

function displayImg (index) {
    $("#popup").show()
    $("#popup-image").attr("src", data[index].url)
    $("#popup-title").text(data[index].title)
    $("#popup-description").text(data[index].description)
}

/*
Make big image at top smaller at wider screen sizes to help with seeing that there is more on the page

Use scroll index and scroll snap for #images

When viewing images from media card, make thing pop up
*/