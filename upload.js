window.onload = function() {
    var upload = document.getElementById("upload");
    upload.onclick = uploadFiles;
};

function uploadFiles() {
    req = new XMLHttpRequest();
    var myFirebaseRef = new Firebase("https://rcmd.firebaseio.com/movies"); 
    req.open("GET", "movies.csv");
    req.onload = function() {
      var movies = req.responseText;
      movies = movies.split("\n");
      console.log(movies);
      addSingleMovie(movies[0], myFirebaseRef)
    };
    req.send(null);
}

function addSingleMovie(movie, firebase) {
    var newPostRef = firebase.push();
      newPostRef.set({
        name: movie,
        totalUserLikes: 0,
        related: {}
      });
}