const container = document.getElementById('cloning')
const template = document.getElementById('blob');
const music = data.playlists

let modal = document.getElementById("playlistModal");
let span = document.getElementsByClassName("close")[0];
const scontainer = document.getElementById('scloning')
const stemplate = document.getElementById('sblob');

while (scontainer.firstChild) {
    scontainer.firstChild.remove();
  }
for (let i = 0; i < music.length; i++) {
    const playlist = music[i];

    const generated = template.content.cloneNode(true);

    const title = generated.querySelector('.title');
    const name = generated.querySelector('.name');
    const imgsrc = generated.querySelector('.albumcover');
    const likeButton = generated.querySelector('.like-btn')
    
    imgsrc.src = playlist.playlist_art;
    name.textContent = playlist.playlist_creator;
    title.textContent = playlist.playlist_name

    likeButton.addEventListener('click',() => {
        playlist.likeCount++
        likeButton.textContent = playlist.likeCount;
    })

    likeButton.textContent = playlist.likeCount;

    title.addEventListener('click', () => {
        const smusic = playlist.songs;
    
        while (scontainer.firstChild) {
            scontainer.firstChild.remove();
          }

        for (let i = 0; i < smusic.length; i++) {
            const songlist = smusic[i];
        
            
            const generated = stemplate.content.cloneNode(true);
            

            const title = generated.querySelector('.title');
            const name = generated.querySelector('.name');
            const album = generated.querySelector('.album');
            const imgsrc = generated.querySelector('.songcover');
            const time = generated.querySelector('.duration');


            imgsrc.src = songlist.cover_art;
            name.textContent = songlist.artist;
            title.textContent = songlist.title;
            album.textContent = songlist.album;
            time.textContent = songlist.duration;
            
            scontainer.appendChild(generated);
          }

          const shuffle = document.getElementById('shuffle-btn');
          shuffle.addEventListener("click", () => {
            while (scontainer.firstChild) {
                scontainer.firstChild.remove();
              }

              shuffleArray(smusic);

              for (let i = 0; i < smusic.length; i++) {
                const songlist = smusic[i];
            
                
                const generated = stemplate.content.cloneNode(true);
                
    
                const title = generated.querySelector('.title');
                const name = generated.querySelector('.name');
                const album = generated.querySelector('.album');
                const imgsrc = generated.querySelector('.songcover');
                const time = generated.querySelector('.duration');
    
    
                imgsrc.src = songlist.cover_art;
                name.textContent = songlist.artist;
                title.textContent = songlist.title;
                album.textContent = songlist.album;
                time.textContent = songlist.duration;
                
                scontainer.appendChild(generated);
              }
    


        })

          modal.style.display = "inline-block";

  });

    container.appendChild(generated);

  }

const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', event => {
  const searchText = event.target.value;
  while (container.firstChild) {
    container.firstChild.remove();
  }
for (let i = 0; i < music.length; i++) {
    const playlist = music[i];

    const generated = template.content.cloneNode(true);

    const title = generated.querySelector('.title');
    const name = generated.querySelector('.name');
    const imgsrc = generated.querySelector('.albumcover');
    const likeButton = generated.querySelector('.like-btn')
    
    imgsrc.src = playlist.playlist_art;
    name.textContent = playlist.playlist_creator;
    title.textContent = playlist.playlist_name

    likeButton.addEventListener('click',() => {
        playlist.likeCount++
        likeButton.textContent = playlist.likeCount;
    })

    likeButton.textContent = playlist.likeCount;

    title.addEventListener('click', () => {
        const smusic = playlist.songs;
    
        while (scontainer.firstChild) {
            scontainer.firstChild.remove();
          }

        for (let i = 0; i < smusic.length; i++) {
            const songlist = smusic[i];
        
            
            const generated = stemplate.content.cloneNode(true);
            

            const title = generated.querySelector('.title');
            const name = generated.querySelector('.name');
            const album = generated.querySelector('.album');
            const imgsrc = generated.querySelector('.songcover');
            const time = generated.querySelector('.duration');


            imgsrc.src = songlist.cover_art;
            name.textContent = songlist.artist;
            title.textContent = songlist.title;
            album.textContent = songlist.album;
            time.textContent = songlist.duration;
            
            scontainer.appendChild(generated);
          }

          const shuffle = document.getElementById('shuffle-btn');
          shuffle.addEventListener("click", () => {
            while (scontainer.firstChild) {
                scontainer.firstChild.remove();
              }

              shuffleArray(smusic);

              for (let i = 0; i < smusic.length; i++) {
                const songlist = smusic[i];
            
                
                const generated = stemplate.content.cloneNode(true);
                
    
                const title = generated.querySelector('.title');
                const name = generated.querySelector('.name');
                const album = generated.querySelector('.album');
                const imgsrc = generated.querySelector('.songcover');
                const time = generated.querySelector('.duration');
    
    
                imgsrc.src = songlist.cover_art;
                name.textContent = songlist.artist;
                title.textContent = songlist.title;
                album.textContent = songlist.album;
                time.textContent = songlist.duration;
                
                scontainer.appendChild(generated);
              }
    


        })

          modal.style.display = "inline-block";

  });

  if (searchText === '' || searchText === null) {
      container.appendChild(generated);
    } else if (searchText === playlist.playlist_name || searchText === playlist.playlist_creator) {
      container.appendChild(generated);
    }

  }

});



// function openModal() {
// //    document.getElementById('festivalName').innerText = festival.name;
// //    document.getElementById('festivalImage').src = festival.imageUrl;
// //    document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;
// //    document.getElementById('festivalLocation').innerText = `Location: ${festival.location}`;
// //    document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;



// for (let i = 0; i < music.length; i++) {
//     const playlist = music[i];

//     const generated = template.content.cloneNode(true);

//     const title = generated.querySelector('.title');
//     const name = generated.querySelector('.name');
//     const album = generated.querySelector('.album');
//     const imgsrc = generated.querySelector('.songcover');
    
//     imgsrc.src = playlist.playlist_art;
//     name.textContent = playlist.playlist_creator;
//     title.textContent = playlist.playlist_name
//     album.textContent = 
    
//     container.appendChild(generated);
//   }

//    modal.style.display = "inline-block";


// }

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
