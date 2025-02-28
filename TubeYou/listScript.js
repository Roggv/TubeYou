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
            "chanelSubscribed": false,
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
            "chanelSubscribed": true,
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
            "chanelSubscribed": true,
            "like": 693,
            "dislike": 2
        }
    ]
}

let indexOption = localStorage.getItem("index-option");

let videoContainer = document.getElementById("video-container");

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

document.getElementById("casa").addEventListener("click", function() {
    localStorage.setItem("index-option", "all");
    indexOption = "all";
    loadVideos();
});
document.getElementById("persona").addEventListener("click", function() {
    localStorage.setItem("index-option", "subscribed");
    indexOption = "subscribed";
    loadVideos();
});