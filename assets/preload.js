// bruh
function preload(level) {
  //  console.log("preloading ...");
    var start = Date.now();
    let leve = window[level];
    let keys = Object.keys(leve);
    let index = 0;

    document.getElementsByClassName("loading")[0].style.display = "block";

    function preloadNextImage() {
        if (index < keys.length) {
            let key = keys[index];
            let image = "questions/" + leve[key].image;
            //console.log(image);
            preloadImage(image, preloadNextImage);
            index++;
        } else {
            if ( (Date.now() - start) < 2000 ) {
                setTimeout(() => {
                    document.getElementsByClassName("loading")[0].style.display = "none";
                }, 2000);
            } else { 
                document.getElementsByClassName("loading")[0].style.display = "none";

            }
        }
    }

    preloadNextImage();
}

function preloadImage(url, callback) {
    var cache = document.getElementsByTagName("cache")[0];
    var img = new Image();
    img.src = url;
    img.style = "position:absolute";
    cache.appendChild(img);

    // Execute the callback once the image is preloaded
    img.onload = function() {
        if (callback) {
            callback();
        }
    };
}

// function preloadSounds() {
//     let sounds = ["assets/correct.mp3","assets/button.mp3","assets/busted.mp3", "assets/pick.mp3","assets/mixkit-retro-arcade-game-over-470.mp3",
// "assets/success-fanfare-trumpets-6185.mp3", "assets/wrong.mp3"];
//     sounds.forEach((e)=> {
//         preloadAudio(e);
//     });
// }

function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren't downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.
    if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
        return false;
    }

    // No other way of checking: assume it's ok.
    return true;
}

function preloadSounds() {

}

// const cacheName = 'audio-cache';
// const audioFilesToCache = [
//     'correct.mp3',
//     'button.mp3',
//     'busted.mp3',
//     'pick.mp3',
//     'mixkit-retro-arcade-game-over-470.mp3',
//     'success-fanfare-trumpets-6185.mp3',
//     'wrong.mp3'
// ];

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(cacheName)
//             .then((cache) => cache.addAll(audioFilesToCache))
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then((response) => response || fetch(event.request))
//     );
// });
