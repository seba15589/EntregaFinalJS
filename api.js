const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '8d65351608msh3bf1904a815da8bp1db2efjsn3189ee442953',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        const textDiv = document.getElementById('chuck');
        const p = document.createElement ('P');
        const pText = document.createTextNode(response.value)
        textDiv.appendChild(p);
        p.appendChild(pText);

    })
	.catch(err => console.error(err));