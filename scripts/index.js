const sections = document.querySelectorAll('.section-beginning');
const navLi = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY + sectionHeight / 1.3 >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
})