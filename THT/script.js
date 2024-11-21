
const card_page_1 = document.getElementById('card_page_1')
const card_page_2 = document.getElementById('card_page_2')
const next_button = document.getElementById('next_button')
let current_page = 1

next_button.onclick = function(){
    if (current_page == 1){
        card_page_1.style.display = 'none';
        card_page_2.style.display = 'flex';
        current_page = 2;
        next_button.textContent = 'back'
    } else if (current_page == 2){
        card_page_1.style.display = 'flex';
        card_page_2.style.display = 'none';
        current_page = 1;
        next_button.textContent = 'next'
    }
}