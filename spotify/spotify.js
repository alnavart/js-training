const searchInput = document.querySelector('#buscador .suggest input');
const searchResults = document.querySelector('#buscador .suggest nav');
const searchSelections = document.querySelector('#buscador .tracks');
const player = document.querySelector('#playing audio');
const playerInfo = document.querySelector('#playing .info');
const writingDelay = 900;
let playlist = [];
let isPlaying = false;
let writingTimeout;
searchResults.innerText= '';
searchSelections.innerText= '';

function waitAndSearch() {
    clearTimeout(writingTimeout);
    writingTimeout = setTimeout(search, writingDelay) ;
}

function search() {
    if(searchInput.value){
        searchResults.innerText= '';
        console.log('search!', searchInput.value);
        fetch(`https://api.spotify.com/v1/search?q=${searchInput.value}&type=track`)
            .then(response => response.json())
            .then(fullResult => fullResult.tracks.items)
            .then(tracks => tracks.forEach(track => showTrack(track)));
    }
}

function showTrack(track){
    //console.log('List track Name:', track);
    let trackNode = buildTrackDetail(track);
    trackNode.addEventListener('mousedown', () => selectTrack(track));
    searchResults.appendChild(trackNode);
}

function selectTrack(track){
    console.log('Select track Name:', track.name);
    let trackNode = buildTrackDetail(track);
    searchSelections.appendChild(trackNode);
    addToPlaylist(track);
}

function buildTrackDetail(track){
    let trackDiv = document.createElement('div');
    trackDiv.className = "track";
    let trackLink = document.createElement('a');
    trackLink.href = '';

    let trackImageContainer = document.createElement('div');
    trackImageContainer.className = "track-image";
    let trackImage = document.createElement('img');
    trackImage.setAttribute('src', track.album.images[2].url);
    trackImageContainer.appendChild(trackImage);
    trackLink.appendChild(trackImageContainer);

    let trackTextContainer = document.createElement('div');
    trackTextContainer.className = "track-text";
    let trackName = document.createElement('div');
    trackName.innerText = track.name;
    trackTextContainer.appendChild(trackName);
    track.artists.forEach(
        artist => {
            let trackArtist = document.createElement('div');
            trackArtist.innerText = artist.name;
            trackTextContainer.appendChild(trackArtist);
        }
    );
    trackLink.appendChild(trackTextContainer);
    trackDiv.appendChild(trackLink);
    return trackDiv;
}

function addToPlaylist(track)
{
    playlist.push(track);
    if(!isPlaying){
        nextTrack();
    }
}

function endedSong()
{
    isPlaying = false;
    nextTrack();
}

function nextTrack(){
    let nextTrack = playlist.shift();
    if(nextTrack){
        play(nextTrack);
    }
}

function play(track){
    isPlaying = true;
    playerInfo.innerText= '';
    let trackNode = buildTrackDetail(track);
    playerInfo.appendChild(trackNode);
    player.setAttribute('src', track.preview_url);
}

searchInput.addEventListener('input' , event => { waitAndSearch() });
player.addEventListener('ended',function() { endedSong(); },true);


