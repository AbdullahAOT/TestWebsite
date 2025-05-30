const dropdownLinks = document.querySelectorAll('.dropdown-content li a');
const container = document.querySelector('.container');

dropdownLinks.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const paragraph = document.createElement('p');
        paragraph.textContent = `You clicked on ${this.textContent}`;
        container.appendChild(paragraph);
    });
});
