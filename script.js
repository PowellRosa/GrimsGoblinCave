const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');

const songs = [
    { src: 'Music/9am in calabasas (remix) (1).MP3', title: 'Ayesha Erotica-9am in Clabasas (Remix)' },
    { src: 'Music/Funny Thing (1).MP3', title: 'Thundercat-Funny Thing' },
    { src: 'Music/HIT EM WHERE IT HURTS (1).MP3', title: 'Paw Paw Rod-HIT EM WHERE IT HURTS' },
    { src: 'Music/RYD-DARK RED (1).MP3', title: 'STEVE LACY-RYD/DARK RED' },
    { src: 'Music/Omen (ft. Sam Smith) (1).MP3', title: 'Disclosure (ft. Sam Smith)-Omen' },
    { src: 'Music/When I R.I.P (1).MP3', title: 'Labrinth-When I R.I.P' },
    { src: 'Music/Nangs (1).MP3', title: 'Tame Impala-Nangs' },
    { src: 'Music/Doo Wap (1).MP3', title: 'Lauryn Hill-Doo Wop' },
    { src: 'Music/Roslyn (1).MP3', title: 'Bon Iver&St. Vincent-Roslyn ' },
    { src: 'Music/Work Out(1).MP3', title: 'J. Cole-Work Out' },
    { src: 'Music/On My Mind (1).MP3', title: 'Jorji Smith X Preditah-On My Mind' },
    
    // Add more songs here
];

let currentSongIndex = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.textContent = songs[index].title;
}

audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

loadSong(currentSongIndex);
