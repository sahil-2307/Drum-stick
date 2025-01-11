var len = document.getElementsByTagName('button').length;


for (var i = 0;i<len;i++){
    document.getElementsByTagName('button')[i].addEventListener('click',function(){
        if (this.innerHTML==='w'){
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='a'){
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='a'){
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='s'){
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='d'){
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='j'){
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='k'){
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            animate(this.innerHTML);
        }else if (this.innerHTML==='l'){
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            animate(this.innerHTML);
        }


    }
    )

}

document.addEventListener('keypress',function(event){
    var keyboard = event.key
    if (keyboard==='w'){
        var audio = new Audio("sounds/crash.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='a'){
        var audio = new Audio("sounds/crash.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='a'){
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='s'){
        var audio = new Audio("sounds/snare.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='d'){
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='j'){
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='k'){
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play()
        animate(keyboard);
    }else if (keyboard==='l'){
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play()
        animate(keyboard);
    }
})

function animate(keyboard){
    var a = document.querySelector('.'+ keyboard);
    a.classList.add('pressed');

    setTimeout(function(){
        a.classList.remove('pressed');
    },100);
}



