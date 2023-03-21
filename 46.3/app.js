const loadCountires = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
        .catch(err => console.log(err))
}

const displayCountries = countries => {
    // console.log(countries);
    const countryContainer = document.getElementById('countryContainer');
    const countryHTML = countries.map( country => {
        return `
            <div class="singleCountry">
               <h2 class="text-center">${country.name.common}</h2>
               <img src="${country.flags.png}">
            </div>
        `;
    });
    // console.log(countryHTML);

    countryContainer.innerHTML = countryHTML.join(' ');
}

loadCountires();