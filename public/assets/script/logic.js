$(document).ready(function() {
    var email = $("#email");
    var emailVal = "";
    var pass = "";
    var password = $("#password");
    var login = $('#login');
    var registry = $("#registry");
    var register = $("#register");

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
        })

    })

    function createPost(postData) {
        $.post("/api/posts", postData);
        // window.location.href = "/";
    }
        })
})
