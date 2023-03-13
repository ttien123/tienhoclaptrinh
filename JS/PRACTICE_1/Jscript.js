

const listApi = 'http://localhost:3000/courses';
var isSuccess = false;
const headerSong = document.querySelector('.header-song');
const audio = document.querySelector('#audio');
const controlplay = document.querySelector('.control-play');
const stopPlaySong = document.querySelector('.stop-play');
const PlayingSong = document.querySelector('.playing');
const progrees = document.querySelector('#progrees');


const start = () => {
    getPlayList(renderPlayList)

    croll();

    loadCurrentSong()

    timeUpdate()

    seeking()
}

start()

function getPlayList(callback) {
    fetch(listApi)
        .then((response) => {
            return response.json()
        })

        .then(callback)
    }


// renderplaylist

function renderPlayList(songs) {
    var htmls = songs.map((songs, index) => {
        return `
            <div class="song song${index}">
                <div class="playlist-img-box__song">
                    <img src="${songs.img}" alt="hinh nen" class="playlist-img__song">
                </div>

                <div class="song-des">
                    <h2 class="name-song">${songs.name}</h2>
                    <p class="singer">${songs.singer}</p>
                </div>

                <div class="song-dots">
                    <i class="song-dots__icon ti-line-dotted"></i>
                </div>
            </div>
        `
    })

    document.querySelector('.playlist').innerHTML = htmls.join('');

}

// Dom-event

function croll() {
    var cd = document.querySelector('.main-box__img');
    var cdWidth = cd.offsetWidth;
   
    document.onscroll = function() {
        var scrolltop = window.scrollY || document.documentElement.scrollTop;
        var newCdWidth  = cdWidth - scrolltop;
        cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
        cd.style.opacity = newCdWidth / cdWidth;

    }
}

// phát bài hát đầu tiên


function loadCurrentSong() {

    fetch(listApi)
        .then((response) => {
            return response.json()
        })
        .then((listSong) => {
            headerSong.textContent = listSong[0].name;
            audio.src = listSong[0].song;
            controlplay.onclick = () => {
                if(isSuccess) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }
            audio.onplay = function () {
                stopPlaySong.style.display = 'none';
                PlayingSong.style.display = 'block';
                isSuccess = true;
            }

            audio.onpause = function () {
                stopPlaySong.style.display = 'block';
                PlayingSong.style.display = 'none';
                isSuccess = false;
            }

            loadSongChoose(listSong);
        })
}

// phát bài hát đc chọn

function loadSongChoose(listSong) {
    var songs = document.querySelectorAll('.song');
    songs.forEach((song, index) => {
        song.onclick = function () {
            headerSong.textContent = listSong[index].name;
            audio.src = listSong[index].song;
            audio.play();
        }
    })
}

// tiến độ bài hát

function timeUpdate() {
    audio.ontimeupdate = function () {
        var progressPercent = audio.currentTime / audio.duration * 100;
        progrees.value = progressPercent;
    }
}


// tua bài hát

function seeking() {
    audio.onseeking = function() {
        progrees.onchange = function (e) {
            audio.currentTime = (e.target.value / 100) * audio.duration;  
        };
        
             
    }
}





