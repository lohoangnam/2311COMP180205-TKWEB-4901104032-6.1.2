document.addEventListener('DOMContentLoaded', function() {
    var toggleMusicBtn = document.getElementById('toggleMusicBtn');
    var backgroundMusic = document.getElementById('backgroundMusic');
    var changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
    var channgeBackground2 = document.getElementById('channgeBackground2');
    var aquarium = document.getElementById('aquarium');
  
    toggleMusicBtn.addEventListener('click', function() {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicBtn.textContent = 'XUỐNG NHẠC';
      } else {
        backgroundMusic.pause();
        toggleMusicBtn.textContent = 'LÊN NHẠC';
      }
    });
  
    changeBackgroundBtn.addEventListener('click', function() {
      aquarium.style.backgroundImage = 'url("đại dương.jpg")';
    });
  });
  channgeBackground2.addEventListener('click', function() {
    aquarium.style.backgroundImage = 'url("cc.jpg")';
  });