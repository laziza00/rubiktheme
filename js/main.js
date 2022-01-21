
let elsearchmodalbox=document.getElementById('modalboxsearch');
let elsearchbox=document.getElementById('openmodalsearch');
let elremove=document.getElementById('removeid');

elsearchbox.addEventListener('click',function () {
elsearchmodalbox.classList.add('show');
});

elremove.addEventListener('click',function () {
elsearchmodalbox.classList.remove('show');
 });



let elpersonmodalbox=document.getElementById('modalboxperson');
let elpesonbtn=document.getElementById('btnpersonid');
let elremove2=document.getElementById('removeid2');

elpesonbtn.addEventListener('click',function () {
elpersonmodalbox.classList.add('show');
});

elremove2.addEventListener('click',function () {
elpersonmodalbox.classList.remove('show');
 });




let elkorzinamodalbox=document.getElementById('modalboxkorzina');
let elkorzina=document.getElementById('korzinaid');
let elremove3=document.getElementById('removeid3');

elkorzina.addEventListener('click',function () {
elkorzinamodalbox.classList.add('show');
});

elremove3.addEventListener('click',function () {
elkorzinamodalbox.classList.remove('show');
 });