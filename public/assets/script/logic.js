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
<<<<<<< HEAD
=======



>>>>>>> f76a11f9f52dd3e1d8bf2cf5bfeeda94f7dcf31f
})

