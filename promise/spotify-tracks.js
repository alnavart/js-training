const searchInput = document.querySelector('#buscador .suggest input');
const searchResults = document.querySelector('#buscador .suggest nav');
const searchSelections = document.querySelector('#buscador .tracks');
const player = document.querySelector('#playing audio');
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
    //console.log('List track Name:', track.name);
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
    let trackNode = document.createElement('a');
    trackNode.href = '';
    let trackName = document.createElement('div');
    trackName.innerText = track.name;
    trackNode.appendChild(trackName);
    track.artists.forEach(
        artist => {
            let trackArtist = document.createElement('div');
            trackArtist.innerText = artist.name;
            trackNode.appendChild(trackArtist);
        }
    );
    return trackNode;
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
    player.setAttribute('src', track.preview_url);
}

searchInput.addEventListener('input' , event => { waitAndSearch() });
player.addEventListener('ended',function() { endedSong(); },true);


