const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
music_list = ["cJnO-Y_YnFg","3NGdEiuTloM", "LjGSAEVLsB4","0n7CLHiuA0c",
"yQI2K8MlHU8", "9CdJOV2DPWU","MgY-OY3RjUM", "nGY19DwskCg","FQHHA4SSXtg" ]
const chosenMusic = music_list[Math.floor(Math.random() * music_list.length)];
// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '350',  //변경가능-영상 높이
    width: '400',  //변경가능-영상 너비
    videoId: chosenMusic,  //변경-영상ID
    playerVars: {
        'rel': 0,    //연관동영상 표시여부(0:표시안함)
      'controls': 1,    //플레이어 컨트롤러 표시여부(0:표시안함)
      'autoplay' : 0,   //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      'mute' : 0,   //음소거여부(1:음소거 함)
      'loop' : 1,    //반복재생여부(1:반복재생 함)
      'playsinline' : 1   //iOS환경에서 전체화면으로 재생하지 않게
         //재생할 영상 리스트
    },
    events: {
      'onReady': onPlayerReady, //onReady 상태일 때 작동하는 function이름
      'onStateChange': onPlayerStateChange //onStateChange 상태일 때 작동하는 function이름
    }
  });
}

// 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. API는 플레이어의 상태가 변화될 때 아래의 function을 불러올 것이다.
//    이 function은 비디오가 재생되고 있을 때를 가르킨다.(state=1),
//    플레이어는 6초 이상 재생되고 정지되어야 한다.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}