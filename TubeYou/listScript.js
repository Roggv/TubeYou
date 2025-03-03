let items = {
    "volume": 0.5,
    "videos": [
        {
            "id": 1,
            "thumbnail": "./img/thumbnail/video1.png",
            "videoSource": "./vid/video1.mp4",
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
            "videoSource": "./vid/video2.mp4",
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
            "videoSource": "./vid/video3.mp4",
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

function checkSubscriptions() {
    let subscriptionList = JSON.parse(localStorage.getItem("subscription-list")) || [];

    // Update your subscriptions
    items.videos.forEach(video => {
        video.chanelSubscribed = subscriptionList.includes(video.chanelName);
    });

    localStorage.setItem("subscription-list", JSON.stringify(subscriptionList));
}
checkSubscriptions();

// Gets the video container and fills it with all videos
let videoContainer = document.getElementById("video-container");

// Get what array of videos has to display (Home / Subscribed)
let indexOption = localStorage.getItem("index-option");

function loadVideos() {
    videoContainer.innerHTML = "";
    items.videos.forEach(video => {
        if (indexOption == "all" || (indexOption == "subscribed" && video.chanelSubscribed == true) || indexOption == null) {
            let videoDiv = document.createElement("div");
            videoDiv.classList.add("video-item");
            videoDiv.style.display = "flex";
            videoDiv.style.alignSelf = "stretch";
            videoDiv.style.gap = "10px";
            videoDiv.style.marginBottom = "10px";

            let img = document.createElement("img");
            img.src = video.thumbnail;
            img.alt = video.title;
            img.style.width = "250px";

            let title = document.createElement("p");
            title.textContent = video.title;
            title.style.fontWeight = "bold";

            videoDiv.appendChild(img);
            videoDiv.appendChild(title);

            videoContainer.appendChild(videoDiv);

            videoDiv.addEventListener("click", function () {
                localStorage.setItem("video-id", video.id);
                window.open("video.html", "_self");
            });
        }
    });
};
loadVideos();

// Add event listeners to the buttons
document.getElementById("house").addEventListener("click", function () {
    localStorage.setItem("index-option", "all");
    indexOption = "all";
    loadVideos();
});
document.getElementById("person").addEventListener("click", function () {
    localStorage.setItem("index-option", "subscribed");
    indexOption = "subscribed";
    loadVideos();
});