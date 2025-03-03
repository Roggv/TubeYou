let items = {
  "volume": 0.5,
  "videos": [
      {
          "id": 1,
          "thumbnail": "./img/thumbnail/video1.png",
          "video": "./vid/video1.mp4",
          "title": "Volkswagen Beetle Tesla | Como Hacer un Coche Electrico Casero",
          "duration": 28,
          "elapsed": 0,
          "chanelLogo": "./img/logo/vicesatLogo.png",
          "chanelName": "vicesat",
          "chanelSubscribed": null,
          "like": 2,
          "dislike": 258
      },
      {
          "id": 2,
          "thumbnail": "./img/thumbnail/video2.png",
          "video": "./vid/video2.mp4",
          "title": "117-0 ¿YA?!! - Black Ops 2 - Road to 100 bajas - bysTaXx",
          "duration": 30,
          "elapsed": 0,
          "chanelLogo": "./img/logo/bysTaXxLogo.png",
          "chanelName": "bysTaXx",
          "chanelSubscribed": null,
          "like": 25,
          "dislike": 18
      },
      {
          "id": 3,
          "thumbnail": "./img/thumbnail/video3.png",
          "video": "./vid/video3.mp4",
          "title": "🔴-LA VENGANZA... DE... PUMMEL...",
          "duration": 27,
          "elapsed": 0,
          "chanelLogo": "./img/logo/NexxuzLogo.png",
          "chanelName": "Nexxuz World",
          "chanelSubscribed": null,
          "like": 693,
          "dislike": 2
      }
  ]
}

let videoId = localStorage.getItem("video-id");

document.getElementById("house").addEventListener("click", function() {
  localStorage.setItem("index-option", "all");
  window.open("index.html", "_self");
});
document.getElementById("person").addEventListener("click", function() {
  localStorage.setItem("index-option", "subscribed");
  window.open("index.html", "_self");
});

items.videos.forEach(video => {
  if(videoId == video.id) {
    // Insert video title
    document.getElementById("video-title").innerText = video.title;
    console.log(video.chanelLogo);
    // Insert chanel logo
    var logo = document.createElement("img");
    logo.src = video.chanelLogo;
    var chanel = document.getElementById("chanel-logo");
    chanel.appendChild(logo);
    // Insert channel name
    var name = document.getElementById("chanel-name")
    name.innerHTML = video.chanelName;
    // Add the subscribed functions
    var subscribedBtn = document.getElementById("subscribed");
    subscribedBtn.innerText = video.chanelSubscribed ? "Subscribed" : "Subscribe";
    subscribedBtn.addEventListener("click", function() {
      if(video.chanelSubscribed) {
        video.chanelSubscribed = false;
      } else {
        video.chanelSubscribed = true;
      }
      subscribedBtn.innerText = video.chanelSubscribed ? "Subscribed" : "Subscribe";
    });
    document.getElementById("like-number").innerHTML = video.like;
    document.getElementById("dislike-number").innerHTML = video.dislike;
  }
});
