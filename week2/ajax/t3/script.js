// Funktio virheiden käsittelyyn
async function makeRequest() {
    const url = 'https://reqres.in/api/unknown/23'; // Ei-olemassa oleva URL
    const method = 'GET'; // Tässä pystyy kokeilla myös POST, PUT, DELETE 

    try {
        // Lähetetään pyyntö Fetch API:lla
        const response = await fetch(url, { method: method });

        // Tarkistetaan, että pyyntö onnistui (status koodin tarkistus)
        if (!response.ok) {
            throw new Error(`Virheellinen vastaus: ${response.status}`);
        }

        // Jos pyyntö onnistuu, haetaan JSON-vastaus
        const data = await response.json();

        // Logataan onnistunut vastaus konsoliin
        console.log('Vastaus:', data);
    } catch (error) {
        // Virheen käsittely (logataan virhe konsoliin)
        console.error('Virhe API-kutsussa:', error);

        // Näytetään virhe HTML-sivulla
        document.getElementById('error-container').style.display = 'block';
        document.getElementById('error-message').textContent = error.message;
    }
}

// Suoritetaan pyyntö
makeRequest();
