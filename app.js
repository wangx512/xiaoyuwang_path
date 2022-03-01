const cursor = document.querySelector ('.cursor');

window.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrolly))
});
window.addEventListener('scroll', ()=>{
  const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
  cursor.style.top = scrolly + fromTop + 'px';
  console.log(fromTop)
});

window.addEventListener('click', ()=>{
  cursor.classList.add('click')
});

window.addEventListener('click', ()=>{
  if (cursor.classList.contains('click')) {
    cursor.classList.remove('click');

    void cursor.offsetWidth;
    cursor.classlist.add('click');
  } else {
    cursor.classList.add('click')
  }
})
