const x = document.getElementById("myAudio"); 

        function playAudio() { 
        x.play(); 
} 

let menuList = document.getElementById("menuList")
let cancel = document.getElementById('cancel')
let burger = document.getElementById('burger')
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
                burger.style.display = 'none' 
                cancel.style.display = 'block'
            }
            else{
                menuList.style.maxHeight = "0px";
                burger.style.display = 'block' 
                cancel.style.display = 'none'

            }
        }

        var my = document.getElementById("my");

function togglePlay() {
  return my.paused ? my.play() : my.pause();
};