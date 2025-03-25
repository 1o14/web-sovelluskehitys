// Funktio POST-pyynnön tekemiseen
async function postUserData() {
    const userData = {
        name: 'John Doe',
        job: 'Developer'
    };

    try {
        // POST-pyyntö
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        // Tarkistetaan, että pyyntö onnistui
        if (!response.ok) {
            throw new Error('Pyyntö epäonnistui: ' + response.status);
        }

        // Vastauksen käsittely (JSON-muotoon)
        const data = await response.json();

        // Logataan data konsoliin
        console.log(data);

        // Näytetään data HTML-sivulla
        document.getElementById('response-data').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Virheen käsittely
        console.error('Virhe API-kutsussa:', error);
    }
}

// Suoritetaan funktio heti kun skripti ladataan
postUserData();
