var playlist = new Playlist();

var chandelier = new Song("Chandelier", "Sia", "3:36");
var chicago = new Song("Chicago", "Sufjan Stevens", "6:05");

var boyhood = new Movie("Boyhood", 2014, "2:45:00");

playlist.add(chandelier);
playlist.add(chicago);

playlist.add(boyhood);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}