var drumCount = document.querySelectorAll('.drum').length
for (var i = 0; i <drumCount; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(event){
        playsound(this.innerHTML);
        btnActive(this.innerHTML);
    });
}

document.addEventListener('keydown',function(event){
    playsound(event.key);
    btnActive(event.key);
})


function playsound(btnSelect){
    switch (btnSelect){
      case 'w':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
         case 'a':
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;
          case 's':
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
            case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
              case 'j':
              var audio = new Audio('sounds/snare.mp3');
              audio.play();
              break;
                case 'k':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
                  case 'l':
                  var audio = new Audio('sounds/kick-bass.mp3');
                  audio.play();
                  break;
      default: console.log(btnSelect);
    }
}

function btnActive(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },100);
}