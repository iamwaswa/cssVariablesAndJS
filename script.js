let inputs = document.querySelectorAll(`input`);

function updateImage(){

    let suffix = this.dataset.sizing || ``;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener(`change`, updateImage));
inputs.forEach(input => input.addEventListener(`mouseover`, updateImage));