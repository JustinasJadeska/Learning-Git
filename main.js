document.querySelectorAll('#spalvos button').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const sectionElement = document.querySelector('#spalvos');
        const buttonColor = button.innerText.toLowerCase().trim();

        if (buttonColor === 'red') {
            sectionElement.style.backgroundColor = 'red';
        } else if (buttonColor === 'green') {
            sectionElement.style.backgroundColor = 'green';
        } else if (buttonColor === 'blue') {
            sectionElement.style.backgroundColor = 'blue';
        } else {
            // Handle any other cases or provide a default color
            sectionElement.style.backgroundColor = 'white';
        }
    });
});






