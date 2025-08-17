"use strict";
$(document).ready(function () {




    $(document).on("keypress", function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#mycity").val()}&appid=d93403b35da76cc8c819933139eeaafd&units=metric`

            async function myweather() {
                let responce = await fetch(url);
                let data = await responce.json()

                $("#city").html(data.name);
                $("#temperature").html(data.main.temp);
                $("#feelslike").html(data.main.feels_like);
                $("#mycity").val("")
                console.log(data);
            }
            myweather();
        }
    });


    $(".btn").click(function (e) {
        e.preventDefault();

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#mycity').val()}&appid=d93403b35da76cc8c819933139eeaafd&units=metric`;

        async function myweather() {
            let responce = await fetch(url);
            let data = await responce.json();
            $("#city").html(data.name);
            $("#temperature").html(data.main.temp);
            $("#feelslike").html(data.main.feels_like);
            $("#mycity").val("")
            console.log(data);
        }
        myweather();

    });










});


