var cor_default = '#444';
var cor_um = 'orange';
var cor_dois = 'moccasin';
var btnDefault = document.querySelectorAll('.cor')[0];
var btnUm = document.querySelectorAll('.cor')[1];
var btnDois = document.querySelectorAll('.cor')[2];

const corDefault = () => (document.body.style.backgroundColor = cor_default);
const corUm = () => (document.body.style.backgroundColor = cor_um);
const corDois = () => (document.body.style.backgroundColor = cor_dois);

btnDefault.addEventListener('click', corDefault);
btnUm.addEventListener('click', corUm);
btnDois.addEventListener('click', corDois);


