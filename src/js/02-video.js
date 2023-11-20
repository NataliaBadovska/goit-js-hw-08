import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
//const playerId = document.getElementById('vimeo-player')

// console.log(player.getCurrentTime());


    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

player.on('timeupdate', function () {
    currentTime = player.getCurrentTime();
    console.log(currentTime);
    // this.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});




// $(document).ready(function(){
//   $("#video").on(
//     "timeupdate", 
//     function(event){
//       onTrackedVideoFrame(this.currentTime, this.duration);
//     });
// });

// function formatTime(time) {
//   var minutes = Math.floor(time / 60);  
// var seconds = Math.floor(time - minutes * 60);
//   var x = minutes < 10 ? "0" + minutes : minutes;
// var y = seconds < 10 ? "0" + seconds : seconds;
  
//   return x + ":" + y;
// }

// function onTrackedVideoFrame(currentTime, duration){
//   var total = formatTime(duration);
//     $("#currentTime").text(formatTime(currentTime)); 
//     $("#totalTime").text(total)
// }
