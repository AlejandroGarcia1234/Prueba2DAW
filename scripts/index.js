
const convertTemperature = () => {

    const celsius = parseFloat(document.getElementById('celsius').value);

    console.log(typeof(celsius))

    if (isNaN(celsius)) {
        alert('Ingrese una temperatura válida.');
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
}

const changeColorBtn = document.getElementById("changeColorBtn");