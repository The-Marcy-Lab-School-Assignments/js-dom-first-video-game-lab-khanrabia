let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

document.addEventListener("keydown", function(e) {
  console.log(e.key)
});

let body = document.querySelector('body');

document.addEventListener("keydown", function(e){
  console.log(e);
  if(e.key === 'ArrowLeft' && square.style.left !== "0px"){
    let leftPixel = parseInt(square.style.left);
    leftPixel -= 10;
    square.style.left = leftPixel + "px";
  }
  if(e.key === 'ArrowRight' && square.style.left !== "300px"){
    let rightPixel = parseInt(square.style.left);
    rightPixel += 10;
    square.style.left = rightPixel + "px";
  }
  if(e.key === 'ArrowDown' && square.style.top !== "300px"){
    let downPixel = parseInt(square.style.top);
    downPixel += 10;
    square.style.top = downPixel + "px";
  }
  if(e.key === 'ArrowUp' && square.style.top !== "0px"){
    let upPixel = parseInt(square.style.top);
    upPixel -= 10;
    square.style.top = upPixel + "px";
  }
    
})
function randColo(){
  let chars = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}
square.addEventListener("click", () => {
  square.style.backgroundColor = randColo()
})

let button = document.createElement('button');
button.innerText = "Don't Click";

body.append(button);
button.style.textAlign = 'center';
button.addEventListener("click", () => {
  button.style.backgroundColor = randColo()
})


let div = document. createElement("div");
let p1 = document.createElement("p1");
let p2 = document.createElement("p2");
let p3 = document.createElement("p3");
let p4 = document.createElement("p4");

p1.innerText = "\n\nUse the arrow keys to move the square around. You cannot move it outside the black box.\n\n";

p2.innerText = "Click on the square to change its color.\n\n";

p3.innerText = "Click the Generate Opponent button to summon a white square.\n\n";

p4.innerText = "Move your square into the white square to defeat it.\n\n";



document.body.append(div)
div.append(p1, p2, p3);
