document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-full-video');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');    
    const fullVideo = document.getElementById('full-video');
    const previewVideo = document.getElementById('preview-video');
    const previewVideo2 = document.getElementById('preview-video-2');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let currentVideoIndex = 0;
    const videos = [previewVideo, previewVideo2];
    const fullVideos = ['images/video2.mp4', 'images/video-sound-2.mp4'];

    videos[0].classList.add('active');
    
    previewVideo.addEventListener('loadedmetadata', function() {
        previewVideo.play();
    });

    function updateArrows() {
        leftArrow.style.display = currentVideoIndex === 0 ? 'none' : 'flex';
        rightArrow.style.display = currentVideoIndex === videos.length - 1 ? 'none' : 'flex';
    }
    function switchVideo(direction) {
        videos[currentVideoIndex].classList.remove('active');
        currentVideoIndex = direction === 'next' ? currentVideoIndex + 1 : currentVideoIndex - 1;
        videos[currentVideoIndex].classList.add('active');
        fullVideo.src = fullVideos[currentVideoIndex];
       
        updateArrows();
    }
    leftArrow.addEventListener('click', () => {
        if (currentVideoIndex > 0) {
            switchVideo('prev');
        }
    });
    rightArrow.addEventListener('click', () => {
        if (currentVideoIndex < videos.length - 1) {
            switchVideo('next');
        }
    });
    playButton.addEventListener('click', function () {
        // console.log('Button clicked'); // Add debugging
        modal.style.display = 'block';
        fullVideo.src = fullVideos[currentVideoIndex];
        fullVideo.play();
        document.body.classList.add('modal-open');
        // previewVideo.play();
    });
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        // fullVideo.pause();
        // fullVideo.currentTime = 0;
        document.body.classList.remove('modal-open');
        // previewVideo.play();
        videos[currentVideoIndex].play();
    });
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            // fullVideo.pause();
            // fullVideo.currentTime = 0;
            document.body.classList.remove('modal-open');
            // previewVideo.play();
            videos[currentVideoIndex].play();
        }

        
    });

    
});
