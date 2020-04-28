

function showAge() {

    var enterAge = prompt("PLease enter your age.!!");
    var ageInDays = enterAge * 365;

    var h1 = document.createElement('h1');
    var textReply = document.createTextNode('You have lived ' + ageInDays + ' days');
    h1.setAttribute('id', 'age-day');
    h1.setAttribute('class', 'flex-container-1');
    h1.appendChild(textReply);
    console.log('hell');
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('age-day').remove();
}