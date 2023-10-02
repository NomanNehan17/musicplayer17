let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let singer = document.getElementById("Singer");
let songList = document.getElementById("songList");

// Define an array of songs with their information
const songs = [
  {
      title: "Aankhein Khuli - Mohabbatein 128 Kbps",
      singer: "Artist Name",
      imgSrc: "Media/AankheinKhuliImage.jpg",
      audioSrc: "Media/Aankhein Khuli - Mohabbatein 128 Kbps.mp3",
  },
  {
      title: "Amay Deko Eka Bikele-(PagalWorld.Ink)",
      singer: "Artist Name",
      imgSrc: "Media/AmayDekoImage.jpg",
      audioSrc: "Media/Amay Deko Eka Bikele-(PagalWorld.Ink).mp3",
  },
  {
      title: "Baje Shobhab - Prithwi Raj ft Rehaan 320kbps(DJSathi)",
      singer: "Artist Name",
      imgSrc: "Media/BajeShobhabImage.jpg",
      audioSrc: "Media/Baje Shobhab - Prithwi Raj ft Rehaan 320kbps(DJSathi).mp3",
  },
  {
      title: "Barsaat Ke Mausam Mein - Naajayaz 128 Kbps",
      singer: "Artist Name",
      imgSrc: "Media/BarsaatKeMausamImage.jpg",
      audioSrc: "Media/Barsaat Ke Mausam Mein - Naajayaz 128 Kbps.mp3",
  },
  {
      title: "Choo Lo",
      singer: "Artist Name",
      imgSrc: "Media/ChooLoImage.jpg",
      audioSrc: "Media/Choo Lo.mp3",
  },
  {
      title: "Deora - Pritom Hasan-(DJMaza)",
      singer: "Artist Name",
      imgSrc: "Media/DeoraImage.jpg",
      audioSrc: "Media/Deora - Pritom Hasan-(DJMaza).mp3",
  },
  {
      title: "Kotha Koiyo Na - Coke Studio Bangla-(Banglagan.in)",
      singer: "Artist Name",
      imgSrc: "Media/KothaKoiyoNaImage.jpg",
      audioSrc: "Media/Kotha Koiyo Na - Coke Studio Bangla-(Banglagan.in).mp3",
  },
  {
      title: "Love Mashup 2019-(Mr-Jat.in)",
      singer: "Artist Name",
      imgSrc: "Media/LoveMashupImage.jpg",
      audioSrc: "Media/Love Mashup 2019-(Mr-Jat.in).mp3",
  },
  {
      title: "Mera-Dil-Hai-Tera-Tera-Hi-Rahega(PagalWorldl)",
      singer: "Artist Name",
      imgSrc: "Media/MeraDilHaiTeraImage.jpg",
      audioSrc: "Media/Mera-Dil-Hai-Tera-Tera-Hi-Rahega(PagalWorldl).mp3",
  },
  {
      title: "O Priyotoma - Shakib Khan-(DJMaza)",
      singer: "Artist Name",
      imgSrc: "Media/OPriyotomaImage.jpg",
      audioSrc: "Media/O Priyotoma - Shakib Khan-(DJMaza).mp3",
  },
  {
      title: "Old vs New Bangla Mashup-(Mr-Jat.in)",
      singer: "Artist Name",
      imgSrc: "Media/OldvsNewMashupImage.jpg",
      audioSrc: "Media/Old vs New Bangla Mashup-(Mr-Jat.in).mp3",
  },
  {
      title: "Rupkothar Jogote Mp3 Song Download 2021(SongsZilla.Net)",
      singer: "Artist Name",
      imgSrc: "Media/RupkotharJogoteImage.jpg",
      audioSrc: "Media/Rupkothar Jogote Mp3 Song Download 2021(SongsZilla.Net).mp3",
  },
  {
      title: "Taito Ailam Sagore(PagalWorld.com.se)",
      singer: "Artist Name",
      imgSrc: "Media/TaitoAilamImage.jpg",
      audioSrc: "Media/Taito Ailam Sagore(PagalWorld.com.se).mp3",
  },
  {
      title: "Tere Vaaste Zara Hatke Zara Bachke 128 Kbps",
      singer: "Artist Name",
      imgSrc: "Media/TereVaasteImage.jpg",
      audioSrc: "Media/Tere Vaaste Zara Hatke Zara Bachke 128 Kbps.mp3",
  },
  {
      title: "Teri-Aashiqui-Ne-Mara(PagalWorld)",
      singer: "Artist Name",
      imgSrc: "Media/TeriAashiquiNeMaraImage.jpg",
      audioSrc: "Media/Teri-Aashiqui-Ne-Mara(PagalWorld).mp3",
  },
  {
      title: "Tui Ki Amar Hobi Re-(Pagalworld.network)",
      singer: "Artist Name",
      imgSrc: "Media/TuiKiAmarImage.jpg",
      audioSrc: "Media/Tui Ki Amar Hobi Re-(Pagalworld.network).mp3",
  },
  {
      title: "Tumse Milke Dil Ka - Main Hoon Na 128 Kbps",
      singer: "Artist Name",
      imgSrc: "Media/TumseMilkeImage.jpg",
      audioSrc: "Media/Tumse Milke Dil Ka - Main Hoon Na 128 Kbps.mp3",
  },
  {
      title: "WhatsApp Audio 2021-03-10 at 11.19.25 AM",
      singer: "Artist Name",
      imgSrc: "Media/WhatsAppAudioImage.jpg",
      audioSrc: "Media/WhatsApp Audio 2021-03-10 at 11.19.25 AM.mp4",
  },
    // Add more songs here
];

// Initialize the current song index
let currentSongIndex = 0;

// Function to update the player with the current song
function updatePlayer() {
    const currentSong = songs[currentSongIndex];
    songTitle.textContent = currentSong.title;
    singer.textContent = currentSong.singer;
    songImg.src = currentSong.imgSrc; // Update the image source
    song.src = currentSong.audioSrc;
}

// Call the initial update to load the first song
updatePlayer();

// Dynamically populate the song list dropdown
songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title;
    listItem.addEventListener("click", () => {
        currentSongIndex = index;
        updatePlayer();
        song.play();
    });
    songList.appendChild(listItem);
});

// Function to play the next song
function playForward() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
    song.play();
}

// Function to play the previous song
function playBackward() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
    song.play();
}

// Function to play the next song when the current song ends
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
    song.play();
}

// Event listener for when the current song ends
song.addEventListener('ended', playNextSong);

// Play/Pause function
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");
    } else {
        song.pause();
        ctrlIcon.classList.add("bi-play-fill");
        ctrlIcon.classList.remove("bi-pause-fill");
    }
}

// Reset the progress bar to 0 when the song ends
song.addEventListener("ended", function () {
    progress.value = 0;
    ctrlIcon.classList.add("bi-play-fill");
    ctrlIcon.classList.remove("bi-pause-fill");
});

// Update the progress bar while playing
song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

// Update the song position when the progress bar changes
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Update the play/pause button based on song state
song.addEventListener("play", function () {
    ctrlIcon.classList.remove("bi-play-fill");
    ctrlIcon.classList.add("bi-pause-fill");
});

song.addEventListener("pause", function () {
    ctrlIcon.classList.add("bi-play-fill");
    ctrlIcon.classList.remove("bi-pause-fill");
});
