const id = document.querySelector("#id");
const password = document.querySelector('#password');
const loginbtd = document.querySelector('#loginbtd');


loginbtd.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        password: password.value
    }
    fetch('/login', {
        method: "POST",
        headers: {
            'contenet-type': "application/json"
        },
        body: JSON.stringify(req)
    });
}