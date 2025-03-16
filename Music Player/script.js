const songs = [     
    { name: 'Bohemian Rhapsody', category: 'Rock', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },     
    { name: 'Shape of You', category: 'Pop', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },     
    { name: 'Take Five', category: 'Jazz', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },     
    { name: 'Fur Elise', category: 'Classical', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },     
    { name: 'Lose Yourself', category: 'Hip-Hop', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },     
    { name: 'Strobe', category: 'Electronic', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' }
];

function displaySongs(songList) {
    const musicListElement = document.getElementById('music-list');
    musicListElement.innerHTML = '';

    songList.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song.name;
        li.onclick = function () {
            localStorage.setItem('songIndex', songs.indexOf(song));
            window.location.href = 'song.html';
        };
        musicListElement.appendChild(li);
    });
}

function searchMusic() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(searchTerm));
    displaySongs(filteredSongs);
}

function redirectToCategory(category) {
    const filteredSongs = songs.filter(song => song.category === category);
    localStorage.setItem('categorySongs', JSON.stringify(filteredSongs));
    window.location.href = 'category.html';
}

if (document.getElementById('category-songs')) {
    const categorySongs = JSON.parse(localStorage.getItem('categorySongs')) || [];
    displaySongs(categorySongs);
}

if (document.getElementById('music-list')) {
    window.onload = () => {
        displaySongs(songs);
    };
}

if (document.getElementById('audio')) {
    const songIndex = localStorage.getItem('songIndex');
    const song = songs[songIndex];
    document.getElementById('song-name').textContent = song.name;
    document.getElementById('audio-src').src = song.src;
    document.getElementById('audio').load();
}

function playPauseSong() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');

    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '❚❚ Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶ Play';
    }
}

function nextSong() {
    let songIndex = parseInt(localStorage.getItem('songIndex')) + 1;
    if (songIndex >= songs.length) songIndex = 0;
    localStorage.setItem('songIndex', songIndex);
    window.location.href = 'song.html';
}

function previousSong() {
    let songIndex = parseInt(localStorage.getItem('songIndex')) - 1;
    if (songIndex < 0) songIndex = songs.length - 1;
    localStorage.setItem('songIndex', songIndex);
    window.location.href = 'song.html';
}

function adjustVolume() {
    const audio = document.getElementById('audio');
    audio.volume = document.getElementById('volume').value / 100;
}
