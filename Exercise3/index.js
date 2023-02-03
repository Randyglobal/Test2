//appending my body tag

let body = document.querySelector('.body');
//giving color to body tag
body.style.background = 'blue'

//creating my elements

//div element
let formContainer = constructElements('div', { class: 'formContainer' });


//form elements
let form = constructElements('form', { class: 'formElements' });

let profilePicture = constructElements('div', { class: 'profilePicture' });

let iconHead = constructElements('div', {class: 'iconHead'});

let iconBody = constructElements('div', {class: 'iconBody'})

let heading = constructElements('h1', {class: 'heading'});
heading.textContent = 'Sign In';

let formInput = constructElements('input', {class: 'formInput'});
formInput.placeholder = 'Type Your Username'
formInput.type = 'text';

let formInputPassword = constructElements('input', {class: 'formInput'});

formInputPassword.placeholder = 'Type Your Password'
formInputPassword.type = 'password';


let btn = constructElements('button', {class: 'btn'})
btn.textContent = 'Sign In';

let information = constructElements('div', {class: 'information'});

let reminder = constructElements('div', {class: 'reminder'})

let checkbox = constructElements('div', {class: 'checkbox'});

let paragraphOne = constructElements('p', {class: 'paragraph'})

paragraphOne.textContent = 'Remember Me'

let ancho = constructElements('a', {class: 'ancho'})
ancho.textContent = 'Forgot Password?'

let Bottom = constructElements('div', {class: 'bottom'})

let paragraphTwo = constructElements('p', {class: 'paragraph'})

paragraphTwo.textContent = 'Not a Member?Create an Account';

//appending children 
appendChildren(body, [formContainer]);
//appending child in parent
formContainer.appendChild(form);

form.appendChild(profilePicture);
profilePicture.appendChild(iconHead)
profilePicture.appendChild(iconBody)
form.appendChild(heading)
form.appendChild(formInput)
form.appendChild(formInputPassword)
form.appendChild(btn)
reminder.appendChild(checkbox)
reminder.appendChild(paragraphOne)
information.appendChild(reminder)
information.appendChild(ancho)
form.appendChild(information)
formContainer.appendChild(Bottom)
Bottom.appendChild(paragraphTwo)


//a function for their elements to create
function constructElements(tag = '', attribute = {}) {
    tag = tag == '' ? 'div' : tag;

    const createElement = document.createElement(tag);


    // loop that loops through the function
    for (let [key, value] of Object.values(attribute)) {
        if (key == 'class') {
            createElement.classList.add(value)
        } else {
            createElement.setAttribute(key, value)
        }
    }
    //i return my created element
    return createElement;
}


//function to append the children

function appendChildren(parent, children = []) {
    if (children.length == 1) {
        parent.appendChild(children[0]);
        return parent;

    } else {
        children.forEach(function (child) {
            parent.appendChild(child);
        })
    }
    return parent
}

