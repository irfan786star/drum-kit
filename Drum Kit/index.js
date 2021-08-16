let sounds=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]
//console.log(sounds)
let numOfDrums = document.querySelectorAll(".drum").length
for (let i=0;i<numOfDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         //basically, the iterations of i through the drums will give you what you want
       //from the addeventlistener!ie, style, change html, sound,etc!
    
//same result  
// document.querySelector(".set").addEventListener("mouseover", function(){
//     console.log(this)
    // let audio=new Audio("sounds/tom-1.mp3")
    // audio.play()
// })  


       this.style.color="red"//iterations of each this.drum class
       let btn_content =this.innerHTML;//this.innerhtml refers to the innerhtml of each drum class item!
       //using if/else!!
    //    let audio=new Audio("sounds/tom-1.mp3")
    //    if(btn_content === "w"){
    //        audio=new Audio("sounds/crash.mp3")
    //        audio.play()
    //    }else if(btn_content === "a"){
    //        audio=new Audio("sounds/snare.mp3")
    //        audio.play()
    //    }
    //using switch/case!
    makeSound(btn_content);
    buttonAnimation(btn_content)
});
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
    })//will tell what key was pressed!
    
    
    function makeSound(key){
        switch(key){//if the iteration of i (this.innerhtml is "w"), then play crash.mp3
           case 'w': 
            let crash=new Audio(sounds[0])//created an array of the sounds!!
            crash.play();
           break;
            
           case "a": 
            let kickBass=new Audio(sounds[1])
            kickBass.play();
           break;

           case "s":
            let snare=new Audio("sounds/snare.mp3")//or access sounds from its folder
            snare.play();
           break;

            case "d":
             let tom1=new Audio("sounds/tom-1.mp3")
             tom1.play();
            break;

           case "j":
            let tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
           break;

            case "k":
             let tom3=new Audio("sounds/tom-3.mp3")
             tom3.play();
            break;

           case "l":
            let tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
           break;

           default:console.log(btn_content)
       }
       }
}   
function buttonAnimation(currentKey){
    document.querySelector(`.${currentKey}`).innerHTML="HIT";
    setTimeout(function(){
        document.querySelector(`.${currentKey}`).innerHTML=currentKey; //switch back to
        //currentkey
    },100)
}
//had to concatenate .with currentKey as it has to be same format as the button class
//eg, ".w", etc

