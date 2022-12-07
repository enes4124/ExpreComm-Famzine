export function getMusic() {
    return fetch('/musics')
    .then(res => res.json())
    .then(musics => musics)
}

export function getMusicById(id) {
    return fetch(`/musics/${id}`)
    .then(res => res.json())
    .then(music => music)
}