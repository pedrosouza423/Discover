console.log(convertToCelcius(86));

function convertToCelcius(f) {
    let c = (f-32) * 5/9;
    return c;
}

function convertToFahrenheit(c) {
    let f = c * 9/5 + 32;
    return f;
}