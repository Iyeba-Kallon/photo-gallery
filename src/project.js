const fullImgbox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");
    const galleryContainer = document.getElementById("galleryContainer");

    // Dummy data for image sources
    const imageSources = [
        "imgg15.jpg",
        "imgg14.jpg",
        "imgg17.jpg",
        "imgg 14.jpg",
       "imgg 15.jpg" ,
       "imgg 17.jpg" ,
        "imgg 18.jpg",
        "imgg 19.jpg" ,
        "imgg 20.jpg",
        "imgg 21.jpg", 
       "imgg 22.jpg" ,
       "imgg 23.jpg",
       "imgg 24.jpg" ,
        "imgg 24.jpg", 
      "imgg 27.jpg",
       "imgg 20.jpg" ,
       "imgg 30.jpg" ,
       "imgg 17.jpg" ,
        "imgg 30.jpg" ,
        "imgg 19.jpg" ,
       "imgg 15.jpg", 
        "imgg 17.jpg" ,
       "imgg 30.jpg" ,
        "imgg 20.jpg" ,
       "imgg 30.jpg",
        // Add more image sources as needed
    ];

    // Dynamically add images to the gallery
    imageSources.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => openFullImg(src);
        galleryContainer.appendChild(img);
    });

    function openFullImg(pic) {
        console.log("Clicked image. Image source:", pic);
        fullImgbox.style.display = "flex";
        fullImg.src = pic;
    }
     

    function closeFullImg() {
        fullImgbox.style.display = "none";
        console.log("Closed full image.");
    }

    function toggleFullScreen(element) {
        if (!document.fullscreenElement) {
            element.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }
