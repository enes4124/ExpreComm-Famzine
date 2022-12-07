export function displayMusic(music) {
    return `
    <div class="card" style="width: 18rem;" id="m${music.id}" data-id="${music.id}">
        <img src="${music.songImage}" class="card-img-top" alt="${music.songImage}">
        <div class="card-body">
            <h5 class="card-title">${music.artiste} : ${music.songName}</h5>
        </div>
        <div class="card-footer">
            <small class="text-muted">${music.name}</small>
        </div>
    </div>
    `
}

export function displayMusicPage(music) {
    return `
    <div class="card" style="width: 18rem;" id="m${music.id}" data-id="${music.id}">
        <img src="${music.songImage}" class="card-img-top" alt="${music.songImage}">
        <div class="card-body">
            <h5 class="card-title">${music.artiste} : ${music.songName}</h5>
            <p class="card-text">${music.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Duration: ${music.songDuration}</li>
            <li class="list-group-item">Views: ${music.songViews}</li>
        </ul>
        <div class="card-footer">
            <small class="text-muted">${music.name}</small>
        </div>
    </div>
    `
}