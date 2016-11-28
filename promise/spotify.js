const searchInput = document.querySelector('#buscador .suggest input');
const searchResults = document.querySelector('#buscador .suggest nav');
const searchSelections = document.querySelector('#buscador .albums');
const writingDelay = 900;
const searchType = 'album';
let writingTimeout;
searchResults.innerText= '';
searchSelections.innerText= '';

function waitAndSearch() {
    clearTimeout(writingTimeout);
    writingTimeout = setTimeout(search, writingDelay) ;
}

function search() {
    searchResults.innerText= '';
    console.log('search!', searchInput.value);
    fetch(`https://api.spotify.com/v1/search?q=${searchInput.value}&type=album`)
        .then(response => response.json())
        .then(fullResult => fullResult.albums.items)
        .then(albums => albums.forEach(album => showAlbum(album)));
    //.then(fullResult => fullResult.albums.map(album => showAlbum(album)));
}

function showAlbum(album){
    //console.log('Album:', album);
    console.log('List album Name:', album.name);
    let albumNode = document.createElement('a');
    albumNode.href = '';
    let albumName = document.createElement('div');
    albumName.innerText = album.name;
    let albumArtist = document.createElement('div');
    albumArtist.innerText = album.artists[0].name;
    albumNode.appendChild(albumName);
    albumNode.appendChild(albumArtist);
    albumNode.addEventListener('mousedown', () => selectAlbum(album));
    searchResults.appendChild(albumNode);
}

function selectAlbum(album){
    console.log('Select album Name:', album.name);
    let albumNode = document.createElement('a');
    albumNode.href = '';
    let albumName = document.createElement('div');
    albumName.innerText = album.name;
    let albumArtist = document.createElement('div');
    albumArtist.innerText = album.artists[0].name;
    albumNode.appendChild(albumName);
    albumNode.appendChild(albumArtist);
    searchSelections.appendChild(albumNode);
}

// audio con autoplay y controls
// buscar tracks con preview url para que haga autoplay cuando haya uno
// con playlist cuando acabe una y otra...
//<audio id="player" controls autoplay>

searchInput.addEventListener('input' , event => { waitAndSearch() });

