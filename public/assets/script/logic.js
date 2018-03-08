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
            console.log(pass)
            console.log(emailVal)

        $.get("/api/users", function(data) {
            getUsers()
        })

        function getUsers() {
            console.log("you made it to getUser")
            $.get("/api/users", function (data) {
                for (var i = 0; i < data.length; i++) {
                    guy = data[i];
                    console.log(guy);
                    if (guy.username === emailVal && guy.password === pass) {
                        window.location.href = "profile";
                        console.log("verification ran");
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

<<<<<<< HEAD
        function createUser(userData){
            $.post("/api/users", userData);
            window.location.href = "/";
        }

        $("#reportCrime").on("click", function (event){
            window.location.href = "/crimeform";
        })

        $("#crimeSubmit").on("click", function (event){
            event.preventDefault();
            
            var incidentType = $("#crimeType").val();
            var location = $("#location").val();
            var incidentDate = $("#datepicker").val();
            var crimeDescription = $("#icon_prefix2");

            console.log(incidentType);
            console.log(location);
            console.log(incidentDate);
            console.log(crimeDescription);

        createPost({
            incidentType: name,
            location: username,
            incidentDate: password,
            crimeDescription: crimeDescription,
            city: "Houston",
            state: "Tx",
            Address: "7523 Fake Place",
            zipCode: "77084"
=======
    function createUser(userData){
        $.post("/api/users", userData);
        window.location.href = "/";
    }

    sendCrimeReport.on("click", function(postData){
        console.log("reporting crime...")
        event.preventDefault();
        var IncidentType = $("#posttype").val();
        var address = $("#poststreet").val();
        var city = $("#postcity").val();
        var state = $("#poststate").val();
        var zipCode = $("#postzip").val();
        var IncidentDate = $("#postdate").val();
        var IncidentTime = $("#postdescription").val();
        var IncidentDescription = $("#posttime").val();

        postCrime({
            IncidentType: IncidentType,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            IncidentDate: IncidentDate,
            IncidentTime: IncidentTime,
            IncidentDescription: IncidentDescription
>>>>>>> 00586e69c54de0589d7652423b0c246d02c631b6
        })

    })

<<<<<<< HEAD
    function createPost(postData) {
        $.post("/api/posts", postData);
        // window.location.href = "/";
    }
        })
})
=======
    function postCrime(postData){
        $.post("/api/posts", postData);
        console.log("Crime Reported! You're a Local Hero");
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
>>>>>>> 00586e69c54de0589d7652423b0c246d02c631b6
