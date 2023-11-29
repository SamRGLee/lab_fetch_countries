const getCountryByName = async (countryName) => {
    const response = await fetch("https://restcountries.com/v3.1/name/" + countryName)
    const jsonData = await response.json()
    console.log(jsonData)
    showData(jsonData)
    
}

const countryContainer = document.querySelector('#country')
const showData = (jsonData) => {
    const name = document.createElement("p")
    name.innerText = "Country Name: " + jsonData[0].name.common
    countryContainer.appendChild(name)

    const capital = document.createElement("p")
    capital.innerText = "Capital City: " + jsonData[0].capital[0]
    countryContainer.appendChild(capital)

    const languages = document.createElement("p")
    languages.innerText = "Langauges Spoken: " + jsonData[0].languages.eng
    countryContainer.appendChild(languages)

    const population = document.createElement("p")
    population.innerText = " Population: " + jsonData[0].population
    countryContainer.appendChild(population)

}
    


getCountryByName("Guyana")