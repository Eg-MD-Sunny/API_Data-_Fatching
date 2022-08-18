const dataFatching = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>loadData(data))
}

const loadData = (countries)=>{
    console.log(countries);
    const singleData = countries.map((country)=>displayData(country))
    const innerContant = document.getElementById('countries')
    innerContant.innerHTML = singleData.join(" ")
}

const displayData = (country)=>{
    return `
        <div>
            <p>${country.name.common}</p>
            
        </div>
    `
}

dataFatching();