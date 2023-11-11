fetch("/menu")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        drawResult(myJson);
    });

fetch("/hostname")
    .then(function (response) {
        return response.text();
    })
    .then(function (myText) {
        console.log(myText);
        drawHostname(myText);
    });    

function drawResult(myJson) {
    let elem = '';

    elem += '<table>';

    for (const row of myJson) {
        elem += `<tr>
            <td>${row.MENU_DATE}</td>
            <td>${row.FOOD}</td>
        </tr>`
    }

    elem += '</table>';

    document.body.insertAdjacentHTML('beforeend', elem);
}

function drawHostname(myText) {
    document.getElementById('hostname').textContent = myText;
}

