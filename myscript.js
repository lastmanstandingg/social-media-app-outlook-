const videoInput = document.getElementById('videoInput');
const videoPreview = document.getElementById('videoPreview');
const uploadBtn = document.getElementById('uploadBtn');

// 1. Handle File Selection and Preview
videoInput.addEventListener('change', () => {
    const file = videoInput.files[0];
    if (file) {
        // Create a temporary local URL for the preview
        videoPreview.src = URL.createObjectURL(file);
        videoPreview.style.display = 'block';
    }
});

// 2. Handle the Upload
uploadBtn.addEventListener('click', async () => {
    const file = videoInput.files[0];
    if (!file) {
        alert("Please select a video first!");
        return;
    }

    // Prepare the data to be sent
    const formData = new FormData();
    formData.append('video', file);

    try {
        const response = await fetch('/your-upload-endpoint', {
            method: 'POST',
            body: formData,
            // Note: Fetch automatically sets 'Content-Type' to 'multipart/form-data'
        });

        if (response.ok) {
            alert("Upload successful!");
        } else {
            alert("Upload failed.");
        }
    } catch (error) {
        console.error("Error uploading video:", error);
    }
});


//this other page
     
        const pics = [ ];
        const pic = document.querySelector('section');

        function showImage() {
            var a = Math.floor(Math.random() * pics.length);
            var img = pics[a];
            pic.style.backgroundImage = img;
        }

        setInterval(showImage, 1000);








//next page
    const image = document.getElementById('thumb');
    const video = document.getElementById('vid');

    image.addEventListener('click', function() {
        image.style.display = 'none'; // Hide the image
        video.style.display = 'block'; // Show the video
        video.play();                  // Start playback automatically
    });


   let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
} 







const vid = document.getElementById("myVideo");

function playVid() {
  vid.play(); // Starts playback
}

function pauseVid() {
  vid.pause(); // Pauses playback
}
