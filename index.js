const navlinks = document.getElementById('navlink');

function showMenu(){
    navlinks.style.right="0";
    console.log("working");
}
function hideMenu(){
    navlinks.style.right="-200px"
}

const s_prod = document.getElementById("second-product");
const des2 = document.getElementById("des-2")
const lower_des =  document.getElementById("lower-des")


const prodFun = () =>{
    des2.show();
}
s_prod.addEventListener("click",prodFun);

const parallax = document.getElementById("our-service");

parallax.addEventListener("scroll",function(){
    let offset = windows.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1.5 +"px" ; 
});