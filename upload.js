window.onload = function() {
    var upload = document.getElementById("upload");
    upload.onclick = uploadFiles;
};

function uploadFiles() {
    movies = new XMLHttpRequest();
    var myFirebaseRef = new Firebase("https://rcmd.firebaseio.com/Movies"); 
    movies.open("GET", "movies.csv");
    movies.onload = function() {
      var movies = req.responseText;
      movies = movies.split("\n");
      console.log(movies);
      for(var i = 0; i < 20; i++)
        addSingleMovie(movies[i], myFirebaseRef);
    };
    movies.send(null);
    books = new XMLHttpRequest();
    req.onload = function() {
      var movies = req.responseText;
      movies = movies.split("\n");
      console.log(movies);
      for(var i = 0; i < 20; i++)
        addSingleMovie(movies[i], myFirebaseRef);
    };
    req.send(null);
}

function addSingleMovie(movie, firebase) {
    var newPostRef = firebase.push();
      newPostRef.set({
        name: movie.substring(0, movie.length - 1),
        totalUserLikes: 0,
        related: {}
    });
}