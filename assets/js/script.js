import { myfetch } from "./helper.js";

const login = async() => {
        //henter vores html elementer og laver dem til en const
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;


        //Der hentes en token fra skolens api med brugernavn og password.
        //new FormData = interface 
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);


        //Option objekt.
        const options = {
            method: 'POST',
            body: formData
        }

        //fetch med option - Vi henter vores api som bliver konstaen 'data'
        const data = await myfetch('https://api.mediehuset.net/token', options);

        //gemmer data inde i token i sessionStorage  med setItem - Json laves om til string (er vores data)
        sessionStorage.setItem('token', JSON.stringify(data));
    }
    //Giver vores knap et clickevent
document.querySelector('#sendLogin').addEventListener('click', () => {
    login();

    // Hent det data vi har gemt i token.Vi  konvertere vores JSON-string med JSON.parse - gør det til javascript
    const loginData = JSON.parse(sessionStorage.getItem('token'));
    console.log(loginData.username);

    //Hvis vores token er gemt - skriv "du er logget ind" - som hent username
    if (sessionStorage.getItem('token')) {
        console.log(`Du er logget ind ${loginData.username}`);
    } else {
        console.log('Du skal logge ind');
    }
})