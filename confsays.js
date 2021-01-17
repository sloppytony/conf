const btn = document.getElementById("btn");


btn.addEventListener('click', ()=>{
    const container = document.getElementById("container");
    const randomArray = quotes[Math.floor(Math.random() * 22)];
    const p = document.createElement('p');
    p.textContent= randomArray;
    
   container.replaceChild(p, container.firstElementChild);
   const img = document.querySelector('img');
   img.classList.add('active');
});

const i = document.getElementById('icon');

i.addEventListener('click', ()=>{
    location.reload(false);
})