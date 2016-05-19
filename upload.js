window.onload = function() {
    var upload = document.getElementById("upload");
    upload.onclick = uploadFiles;
};

function uploadFiles() {
    movies = new XMLHttpRequest();
    var myFirebaseRef = new Firebase("https://rcmd.firebaseio.com/Movies");
    movies.open("GET", "imdb1000movies.csv");
    movies.onload = function() {
      var movies = this.responseText;
      movies = movies.split("\n");
      console.log(movies);
      for(var i = 0; i < 20; i++) {
        //if(media[i] != "")
          //addSingleMovie(media[i], myFirebaseRef, "movie");
      }
    };
    movies.send(null);
    artists = new XMLHttpRequest();
    artists.open("GET", "uniqueArtists.csv");
    artists.onload = function() {
      var artists = this.responseText;
      artists = artists.split("\n");
      console.log(artists);
      //for(var i = 0; i < 20; i++)
        //addSingleMedia(artists[i], myFirebaseRef, "music");
    };
    artists.send(null);

    books = new XMLHttpRequest();
    books.open("GET", "goodReadsTop1000.csv");
    books.onload = function() {
      var books = this.responseText;
      books = movies.split("\n");
      console.log(books);
      //for(var i = 0; i < 20; i++)
        //addSingleMedia(books[i], myFirebaseRef, "book");
    };
    books.send(null);
}

function addSingleMedia(media, firebase, type) {
    var newPostRef = firebase.push();
    var mediaName = media.substring(0, media.length - 1).replace(/['"]+/g, '');
      newPostRef.set({
        name: mediaName,
        nameLowerCase: mediaName.toLowerCase(),
        totalUserLikes: 0,
        related: {},
        type: type
    });
}
