// Haetaan elementti, johon tulokset lisätään
const target = document.getElementById("target");

// Selvitetään selain ja versio
const browser = navigator.userAgent;
let browserName = "Tuntematon selain";
let browserVersion = "";

if (browser.includes("Chrome")) {
  browserName = "Google Chrome";
  browserVersion = browser.match(/Chrome\/(\d+)/)?.[1] || "";
} else if (browser.includes("Firefox")) {
  browserName = "Mozilla Firefox";
  browserVersion = browser.match(/Firefox\/(\d+)/)?.[1] || "";
} else if (browser.includes("Safari") && !browser.includes("Chrome")) {
  browserName = "Apple Safari";
  browserVersion = browser.match(/Version\/(\d+)/)?.[1] || "";
} else if (browser.includes("Edg")) {
  browserName = "Microsoft Edge";
  browserVersion = browser.match(/Edg\/(\d+)/)?.[1] || "";
}

// Selvitetään käyttöjärjestelmä
const os = navigator.platform;

// Näytön tiedot
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const availWidth = window.screen.availWidth;
const availHeight = window.screen.availHeight;

// Haetaan päivämäärä ja aika suomeksi
const date = new Date();
const formattedDate = date.toLocaleDateString("fi-FI", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const formattedTime = date.toLocaleTimeString("fi-FI", {
  hour: "2-digit",
  minute: "2-digit",
});

// Lisätään tiedot HTML:ään
target.innerHTML = `
  <p><strong>Selain:</strong> ${browserName}, ${browserVersion}</p>
  <p><strong>Käyttöjärjestelmä:</strong> ${os}</p>
  <p><strong>Näytön koko:</strong> ${screenWidth} x ${screenHeight}</p>
  <p><strong>Selaimen käytettävissä oleva tila:</strong> ${availWidth} x ${availHeight}</p>
  <p><strong>Päivämäärä:</strong> ${formattedDate}</p>
  <p><strong>Kellonaika:</strong> ${formattedTime}</p>
`;
