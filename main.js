//get model element
var model=document.getElementById('simplemodel');
//get open modal button
var modelbtn=document.getElementById('modelbtn');
//get close button
var closebtn=document.getElementsByClassName('closebtn')[0];

//listen for  open click
modelbtn.addEventListener('click',openmodel);
//listen for close click
closebtn.addEventListener('click',closemodal);

//function to open model
function openmodel(){
    // console.log(123);
    model.style.display='block';
}

//function to close model
function closemodal(){
    model.style.display='none';
}

//function to close modal if outside click
function outsideClick(e){;
if(e.targe==model);
model.style.display='none';
}
