//Check Loading
console.log('Script Loadded');

/////////// EXERCICE 1 ///////////

//Switch color by multiple click
$('#colorizer').click(function (e) {
    //console.log('#colorizer');
    clicknb++;

    switch (clicknb) {
        //click Number 1
        case 1:
            $('#tr1').css('background-color', '#FFFF00');
            $('#tr2').css('background-color', '#FFFFFF');
            $('#tr3').css('background-color', '#FFFFFF');
            break;

        //click Number 2
        case 2:
            $('#tr1').css('background-color', '#FFFFFF');
            $('#tr2').css('background-color', '#FF0000');
            $('#tr3').css('background-color', '#FFFFFF');
            break;

        //click Number 3
        case 3:
            $('#tr1').css('background-color', '#FFFFFF');
            $('#tr2').css('background-color', '#FFFFFF');
            $('#tr3').css('background-color', '#000000');
            break;

        //click Number 4
        case 4:
            $('#tr1').css('background-color', '#FFFF00');
            $('#tr2').css('background-color', '#FF0000');
            $('#tr3').css('background-color', '#000000');
            break;

        //click Number 5
        default:
            $('#tr1').css('background-color', '#FFFFFF');
            $('#tr2').css('background-color', '#FFFFFF');
            $('#tr3').css('background-color', '#FFFFFF');

            //REset click Number
            clicknb = 0;
            break;
    }
});

/////////// EXERCICE 2 ///////////

//Event on click Valid BTN
$('#checker').click(function (e) {
    //Get Value of Input
    let str = $("#inputText").val();
    //console.log(str);

    //If value match with expression const => alert "VALID" else alert "NON Valide"
    if (str.match(regex)) {
        $('#valid').text('Valide')
        alert('Valide');
        //console.log('Valid');
    } else {
        $('#valid').text('Non Valide')
        alert('Non Valide');
        //console.log('NOP');
    }
});