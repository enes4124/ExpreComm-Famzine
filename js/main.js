import { displayMusic, displayMusicPage } from '/display';
import { getMusic, getMusicById } from '/ajax';
import { Music } from '/music';

const cardList = document.getElementById('cardList')

let musics = []

document.addEventListener('DOMContentLoaded', () => {

    getMusic()
        .then(musics => {
            musics.forEach(music => {
                musics.push(new Music(music.id, music.name, music.artiste, music.songName, music.songUrl, music.songImage, music.songDuration, music.songViews, music.description))
                cardList.innerHTML += displayMusic(music)

                let card = document.querySelectorAll('.card')

                card.forEach(card => {
                    card.addEventListener('click', () => {
                        let id = card.getAttribute('data-id')
                        let music = musics.find(music => music.id == id)
                        cardList.innerHTML = displayMusicPage(music)
                    })
                })
            })
            console.log(musics)
        })
})

