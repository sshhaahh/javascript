const colors=["green", "red", "rgba(133,122,200)", "#f15025"];
const btn= document.getElementById("btn");
const color= document.querySelector("color");


btn.addEventListener("click", function (){
    const ranNum = () => {
        return Math.floor(Math.random()*colors.length);
    };
    document.body.style.backgroundColor = colors[ranNum()];
    document.getElementById("co").innerHTML=colors[ranNum()];
console.log(document.getElementById("co").innerHTML=colors[ranNum()]);

})