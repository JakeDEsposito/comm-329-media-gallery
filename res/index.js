$.getJSON("./res/data.json", (data) => {
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
                    <button class="hollow" onclick="displayImg('${value.url}')">Click</button>
                </main>
            </div>
        `)

        // Images
        $("#images").append(`
            <img src="${value.url}">
        `)
    })

    // Current Image
    $("#current-img").attr("src", data[0].url)
})

function displayImg (url) {
    $("#current-img").attr("src", url)
}