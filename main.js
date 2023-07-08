// change navbar styles on scroll

window.addEventListener('scroll',function(){
    this.document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',function(){
        faq.classList.toggle('open');


        // change icon
        const icon = faq.querySelector('.faq_icon i');
if(icon.className==='uil uil-plus'){
    icon.className='uil uil-minus';
}
else{
    icon.className='uil uil-plus';
}
    })


})

// show/hide nav menu
const menu=document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click',function(){
    menu.style.display='flex';
    closeBtn.style.display='inline-block';
    menubtn.style.display='none';
})

const closeNav = ()=>{
    menu.style.display='none';
    closeBtn.style.display = 'none';
    menubtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click',closeNav);
