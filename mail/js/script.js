const bottone = document.getElementById('conferma-email');
bottone.addEventListener('click', function()
{
    const guests = [ "nicolasd.pippo@gmail.com", "marco.pippo@gmail.com", "paolo.pippo@gmail.com", "fabrizio.pippo@gmail.com" ]
    let user = document.getElementById('email').value;
    let found = false;
    for (let i = 0; i < guests.length; i++){
        const guestName = guests[i];
        if (guestName == user) {
            found = true;
        }
    }
    if (found) {
        document.getElementById('verifica').innerText = "Puoi partecipare"
    } else {
        document.getElementById('verifica').innerText = "Non puoi partecipare"
    }
})
