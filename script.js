const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close){
    bar.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('selected-rating');
const feedbackTextarea = document.getElementById('feedback');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        ratingValue.innerText = value;
        stars.forEach((s, i) => {
            if (i < value) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

feedbackTextarea.addEventListener('input', () => {
    const feedback = feedbackTextarea.value;
    // You can save the feedback to a database or perform any other actions here.
});
