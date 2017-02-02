
	//for(var i = 0; i <= 10; i++){

//console.log(i);
//}



//var i = 0;
//while(i<10){

//console.log('ower value is'+i)

//i++;
//}


//var numbers=[34,76,67,65,12,2];
//numbers.forEach(function(number){

	
//console.log(number);



//});


//var numbers=[5,7,9,3,6,5,3];
//numbers.reverse();
//for(var i=0; i<numbers.length;i++){

//console.log(numbers[i]);


//}


//var ali =5;
//if(ali<1 || ali==5){

//console.log('this is true');



//}else{


	//console.log('is not true');

//}


//var fruit = 'orange';

//switch(fruit){

//case "benana":

//alert('i hate benana');

//break;
//case "apple":

//alert('i love apple');

//break;
//case "orange" :

//alert('orange is ok');

//break;

//default:

//alert('i love all other fruits');
//break;

//}


//var person ={

//firstname:'ali',
//lastname:'nosratipour',
//age: 8,

//children:['parsa','masumeh'],

//fullname: function(){

//return this.firstname +" "+ this.lastname;

//}

//}

//console.log(person.fullname());


//var apple = new Object();

//apple.color= 'red';
//apple.shape ='round';

//apple.describe = function(){


	//return 'apple IS color '+ this.color+' and is the shape '
	 //+ this.shape;

	
//}
//console.log(apple.describe());


//contractors pattern
//=====================================================
//function fruit(name,color,shape){
// this.name = name;
 //this.color= color;
 //this.shape= shape;

//this.describe = function(){
//return 'a' +this.name+' is the color '+this.color+' and is the shape '+this.shape;


//}
//}

//var apple = new fruit('apple','red', 'round');
//var melon = new fruit('melon','green', 'round');
//console.log(melon.describe());
//==================================================
//function changebackground(x){

	

//var body = document.getElementById('body');
//body.style.backgroundColor= x.value;








//}


//function validateform(){
//var firstname = document.forms["myform"]["firstname"].value;

//if (firstname == null || firstname == "" ) {

//alert('first name is requierd');
//return false;


 //}else if (firstname.length<8)   {

	
//alert('text is too short');

//return false;


//};

//};

//
//function textcolor(){
//var firstname = document.getElementById('firstname');

//firstname.style.borderColor="black";

//firstname.style.backgroundColor=firstname.value;
//}

//practic for 
//var name=['ali','parsa','masumeh'];

//for(i=0; i<name.length; i++){

	//console.log(name);
//}


document.getElementById('wform').addEventListener('submit',savebookmark);


function savebookmark(e){

//e.preventDefault();
// get form values

var sitename =document.getElementById('sitename').value;
var siteurl =document.getElementById('siteurl').value;


if(!validation(sitename,siteurl)){

return false;
}




var bookmark ={

	name:sitename,
	url:siteurl
}



if(localStorage.getItem('bookmarks')===null){

//inin arry
var bookmarks=[];
//add to array
bookmarks.push(bookmark);

//setlocal storage

localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


}else{

	// fetch from local storage

var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

//add bookmark to array
bookmarks.push(bookmark);

//reset back to local storage
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

}

//clear form

document.getElementById('wform').reset();

fetchbookmark();
}

//delet bookmark


function deletebookmark(url){

	//get url from localstorage

var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

//loop thrugh bookmarks

for(i=0; i<bookmarks.length; i++){

if(bookmarks[i].url==url){

	//remove gfrom array
	bookmarks.splice(i,1)

}

}
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

//refetch bookmark

fetchbookmark();


}



// fetch bookmarks

function fetchbookmark(){

var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

//get output id

var bookmarksres = document.getElementById('bookmarksres');

//build the output

bookmarksres.innerHTML='';


for(var i=0;i<bookmarks.length;i++ ){

	var name= bookmarks[i].name;
	var url= bookmarks[i].url;

	bookmarksres.innerHTML += '<div class="well">' +
	'<h3>'+name+
	'<a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> '+

	'<a  onclick="deletebookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> '+
	'</h3>'+
'</div>';


	



}

}

function validation(sitename,siteurl){



	if(!sitename || !siteurl){

	alert('please fill the form');
	return false;
}	


var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

if(!siteurl.match(regex)){
alert('invalid url');

return false;

}

return true;
}