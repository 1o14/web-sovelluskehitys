// Funktio GET-pyynnön tekemiseen
async function fetchUserData() {
    try {
        // API-pyyntö
        const response = await fetch('https://reqres.in/api/users/1');
        
        // Tarkistetaan, että pyyntö onnistui
        if (!response.ok) {
            throw new Error('Pyyntö epäonnistui: ' + response.status);
        }

        // Vastauksen käsittely (JSON-muotoon)
        const data = await response.json();
        
        // Logataan data konsoliin
        console.log(data);

        // Näytetään data HTML-sivulla
        const user = data.data;

        // Päivitetään HTML-elementit saadulla datalla
        document.getElementById('user-name').textContent = `${user.first_name} ${user.last_name}`;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-avatar').src = user.avatar;
        
    } catch (error) {
        // Virheen käsittely
        console.error('Virhe API-kutsussa:', error);
    }
}

// Suoritetaan funktio heti kun skripti ladataan
fetchUserData();
