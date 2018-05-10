$(function () {
    
    $('#pobierz').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#id-programisty').append('imię: ' + data.imie + '</br>' + 'nazwisko: ' + data.nazwisko + '</br>' + 'zawód: ' + data.zawod + '</br>' + 'firma: ' + data.firma);
        
        }); //end get JSON
    }); //end click
}); //end jq