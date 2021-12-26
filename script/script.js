const openPopUp = document.querySelector('#open_pop_up');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})


closePopUp.addEventListener('click', function(e) {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);
        
        let response = await fetch('sendmail.php', {
            method = 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
        } else {
            alert("Ошибка");
        }
    }

    popUp.classList.remove('active');
})

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

