const btn = document.getElementById("btn");


btn.addEventListener('click', ()=>{
    const container = document.getElementById("container");
    const randomArray = quotes[Math.floor(Math.random() * 4)];
    const p = document.createElement('p');
    p.textContent= randomArray;
    
   container.replaceChild(p, container.firstElementChild);
   const img = document.querySelector('img');
   img.classList.add('active');
});

let quotes = ['The man who says he can, and the man who says he can not… Are both correct',
'Your life is what your thoughts make it',
'Real knowledge is to know the extent of one’s ignorance',
'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life'
];