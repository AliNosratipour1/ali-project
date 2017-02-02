var imgcount = 1;
var total =5;

function slide(x) {
var image =document.getElementById('img');
         
imgcount= imgcount + x;
if(imgcount>total){imgcount=1;}

if(imgcount<1){imgcount=total;}
image.src="cut/img"+ imgcount +".png";
}

window.setInterval(function slide(x) {
var image =document.getElementById('img');
         
imgcount= imgcount + x;
if(imgcount>total){imgcount=1;}

if(imgcount<1){imgcount=total;}
image.src="cut/img"+ imgcount +".png";
},5000);
