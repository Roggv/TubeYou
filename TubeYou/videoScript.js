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
};

  var clip = document.getElementById("video"); 
  function playVideo()
  {
    clip.play();
  }
  
  function pauseVideo()
  {
    clip.pause();
  }


function play()
{
  let video = document.getElementById("video");
  video.play();
}

function checkSubscriptions() {
  let subscriptionList = JSON.parse(localStorage.getItem("subscription-list")) || [];
  
  // Update the subscription status for each video
  items.videos.forEach(video => {
      video.chanelSubscribed = subscriptionList.includes(video.chanelName);
  });

  localStorage.setItem("subscription-list", JSON.stringify(subscriptionList));
}
checkSubscriptions();

// Retrieve the video ID from localStorage
let videoId = localStorage.getItem("video-id");

// Add event listeners for navigation buttons
document.getElementById("house").addEventListener("click", function() {
  localStorage.setItem("index-option", "all");
  window.open("index.html", "_self");
});
document.getElementById("person").addEventListener("click", function() {
  localStorage.setItem("index-option", "subscribed");
  window.open("index.html", "_self");
});

items.videos.forEach(video => {
  if (videoId == video.id) {
    // Insert video title
    document.getElementById("video-title").innerText = video.title;

    // Insert the video source
    let videoElement = document.querySelector("video");
    let sourceElement = document.createElement("source");
    sourceElement.src = video.video;
    sourceElement.type = "video/mp4";
    videoElement.appendChild(sourceElement);
    videoElement.load(); // Reload the video to reflect changes

    // Insert channel logo
    let logo = document.createElement("img");
    logo.src = video.chanelLogo;
    document.getElementById("chanel-logo").appendChild(logo);

    // Insert channel name
    document.getElementById("chanel-name").innerText = video.chanelName;

    // Subscribe button logic
    let subscribedBtn = document.getElementById("subscribed");
    let subscriptionList = JSON.parse(localStorage.getItem("subscription-list")) || [];

    // Set initial button state
    video.chanelSubscribed = subscriptionList.includes(video.chanelName);
    subscribedBtn.innerText = video.chanelSubscribed ? "Subscribed" : "Subscribe";

    subscribedBtn.addEventListener("click", function() {
      if (video.chanelSubscribed) {
        // Unsubscribe
        subscriptionList = subscriptionList.filter(name => name !== video.chanelName);
      } else {
        // Subscribe
        subscriptionList.push(video.chanelName);
      }

      // Toggle the subscription state
      video.chanelSubscribed = !video.chanelSubscribed;
      subscribedBtn.innerText = video.chanelSubscribed ? "Subscribed" : "Subscribe";

      // Save updated subscription list
      localStorage.setItem("subscription-list", JSON.stringify(subscriptionList));
    });

    // Set like and dislike numbers
    document.getElementById("like-number").innerText = video.like;
    document.getElementById("dislike-number").innerText = video.dislike;
  }
});
