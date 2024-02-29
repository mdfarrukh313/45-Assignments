function make_album(artist, title) {
    var album = {
        artist: artist,
        title: title
    };
    return album;
}
// Creating three albums
var album1 = make_album("Artist1", "Album Title1");
var album2 = make_album("Artist2", "Album Title2");
var album3 = make_album("Artist3", "Album Title3");
// Printing the albums
console.log(album1);
console.log(album2);
console.log(album3);
