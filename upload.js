window.onload = function() {
    var upload = document.getElementById("upload");
    upload.onclick = uploadFiles;
};

function uploadFiles() {
    req = new XMLHttpRequest(); 
    req.open("GET", "movie.csv");
    req.onreadystatechange = function() {
      console.log(req.responseText);
    };
    req.send(null);
}