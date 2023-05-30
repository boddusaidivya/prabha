const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','pink','blue','green','yellow','brown','red','black'];
body.style.backgroundColor='aqua';
document.addEventListener('click',function(){
const colorIndex=parseInt(Math.random()*color.length);
body.style.backgroundColor=color[colorIndex];
});