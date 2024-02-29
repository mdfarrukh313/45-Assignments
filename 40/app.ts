interface Album {
    artist: string;
    title: string;
}

function make_album(artist: string, title: string): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    return album;
}

// Creating three albums
let album1: Album = make_album("Artist1", "Album Title1");
let album2: Album = make_album("Artist2", "Album Title2");
let album3: Album = make_album("Artist3", "Album Title3");

// Printing the albums
console.log(album1);
console.log(album2);
console.log(album3);