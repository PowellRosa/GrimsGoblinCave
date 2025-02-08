const audio = document.getElementById('audio');
        const songTitle = document.getElementById('song-title');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

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
        ];

        let currentSongIndex = 0;

        function loadSong(index) {
            audio.src = songs[index].src;
            songTitle.textContent = songs[index].title;
            audio.play(); // Automatically play the song when loaded
        }

        // Play the next song
        nextBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(currentSongIndex);
        });

        // Play the previous song
        prevBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            loadSong(currentSongIndex);
        });

        // Play the next song when the current one ends
        audio.addEventListener('ended', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(currentSongIndex);
        });

        // Load the first song on page load
        loadSong(currentSongIndex);


    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change slide every 4 seconds
    }

    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }


