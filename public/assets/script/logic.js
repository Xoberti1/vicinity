$(document).ready(function() {
    var email = $("#email");
    var emailVal = "";
    var pass = "";
    var password = $("#password");
    var login = $('#login');
    var registry = $("#registry");
    var register = $("#register");
    var searchCrime = $("#searchCrime");
    var reportCrime = $("#reportCrime");
    var navbarlogo = $("#navbarlogo");
    var sendCrimeReport = $("#sendCrimeReport")

    console.log("the page works");

    login.on('click', function (event) {
        //get email and password
        event.preventDefault();
            var emailVal = email.val();
            var pass = password.val();

        $.get("/api/users", function(data) {
            getUsers()
        })

        function getUsers() {
            $.get("/api/users", function (data) {
                for (var i = 0; i < data.length; i++) {
                    guy = data[i];

                    if (guy.username === emailVal && guy.password === pass) {
                        window.location.href = "profile";
                        // sessionStorage.setItem("zippy", guy.zipCode)
                        // $(window).load(() => sessionStorage.getItem("zippy"))
                        // console.log(guy.zipCode, "zippy")
                    }
                }
            });
        }

    });

    registry.on('click', function(event){
        window.location.href = "/registry";
    })

    register.on("click", function(userData){
        console.log("signup is working")
        event.preventDefault();
        var name = $("#name").val();
        var username = $("#registeremail").val();
        var password = $("#registerpassword").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var Address = $("#street").val();
        var zipCode = $("#zip").val();

        createUser({
            name: name,
            username: username,
            password: password,
            city: city,
            state: state,
            Address: Address,
            zipCode: zipCode
        })

    })

    function createUser(userData){
        $.post("/api/users", userData);
        window.location.href = "/";
    }

    sendCrimeReport.on("click", function(postData){
        console.log("reporting crime...")
        event.preventDefault();
        var posttype = $("#posttype").val();
        var poststreet = $("#poststreet").val();
        var postcity = $("#postcity").val();
        var poststate = $("#poststate").val();
        var postzip = $("#postzip").val();
        var postdate = $("#postdate").val();
        var postdescription = $("#postdescription").val();
        var posttime =$("#posttime").val();

        postCrime({
            IncidentType: posttype,
            address: poststreet,
            city: postcity,
            state: poststate,
            zipCode: postzip,
            IncidentDate: postdate,
            IncidentTime: posttime,
            IncidentDescription: postdescription
        })

    })

    function postCrime(postData){
        $.post("/api/posts", postData);
        window.location.href = "/profile";
    }

    searchCrime.on('click', function(event){
        window.location.href = "/maps";
    })

    reportCrime.on('click',function(event){
        window.location.href = "/report_crime";
    })

    navbarlogo.on('click',function(event){
        window.location.href ="/";
    })

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    })

    $('.timepicker').pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Clear', // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function(){} //Function for after opening timepicker
    });

})