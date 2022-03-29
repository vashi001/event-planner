// const text = "Welcome To Paradise Planning"
// let idx = 0;

// function showletters(){
//     console.log("showing letters");
//     if (idx< text.length){
//         document.getElementById("text").innerHTML += text.charAt(idx);
//         idx++;
//         setTimeout(showletters,100);
//     }
// }

// window.addEventListener("load",showletters);


const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex=0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}
// Type Method
TypeWriter.prototype.type = function(){
   // current index of word
   const current = this.wordIndex % this.words.length;
// Get full text of curent word 
const fulltxt = this.words[current];
// check if deleting
if(this.isDeleting){
//Remove a character
this.txt = fulltxt.substring(0, this.txt.length - 1);
}else{
// Add a character
this.txt = fulltxt.substring(0, this.txt.length + 1);

}

// Insert txt into Element
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// type speed
let typespeed = 50;

if(this.isDeleting){
    typespeed = typespeed / 2;
}

//if word is complete
if(!this.isDeleting && this.txt === fulltxt)
{
    //Make a pause at end
   typespeed = this.wait;
    // set delete is true
    this.isDeleting = true;

}else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    //move to next word
this.wordIndex++;
//Pause before start typing
typespeed = 500;

}
setTimeout(() =>this.type(), typespeed)

}
// init on dom load
document.addEventListener('DOMContentLoaded', init);

//init app
function init(){
  const txtElement = document.querySelector('.text-change');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  //init type writer
new TypeWriter(txtElement, words, wait);
}