var len = document.getElementsByTagName('button').length;
var sound = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3",
"sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]
for (var i = 0;i<len;i++){
    document.getElementsByTagName('button')[i].addEventListener('click',function(){
        if (this.innerHTML==='w'){
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
        }else if (this.innerHTML==='a'){
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
        }else if (this.innerHTML==='a'){
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
        }else if (this.innerHTML==='s'){
            var audio = new Audio("sounds/snare.mp3")
            audio.play()
        }else if (this.innerHTML==='d'){
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
        }else if (this.innerHTML==='j'){
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
        }else if (this.innerHTML==='k'){
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
        }else if (this.innerHTML==='l'){
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
        }


    }
    )

}
document.addEventListener('keypress',function(event){
    var keyboard = event.key
    if (keyboard==='w'){
        var audio = new Audio("sounds/crash.mp3")
        audio.play()
    }else if (keyboard==='a'){
        var audio = new Audio("sounds/crash.mp3")
        audio.play()
    }else if (keyboard==='a'){
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play()
    }else if (keyboard==='s'){
        var audio = new Audio("sounds/snare.mp3")
        audio.play()
    }else if (keyboard==='d'){
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    }else if (keyboard==='j'){
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play()
    }else if (keyboard==='k'){
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play()
    }else if (keyboard==='l'){
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play()
    }
})





