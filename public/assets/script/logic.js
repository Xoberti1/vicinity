$(document).ready(function() {
    var email = $("#email");
    var emailVal = "";
    var pass = "";
    var password = $("#password");
    var login = $('#login');
    var registry = $("#registry");
    var register = $("register");
    var name = $("name");
    var street = $("street");
    var city = $("city");
    var zip = $("zip");
    var username = $("user_name");
    var registerEmail = $("registeremail");
    var registerPassword = $("registerpassword")
    console.log("the page works");

    login.on('click', function (event) {
        console.log("login ran");
        //get email and password
        event.preventDefault();
            var emailVal = email.val();
            var pass = password.val();
        console.log(emailVal);
        console.log(pass);

        $.get("/api/users", function(data) {
            console.log(data);
        getUsers()    
        })

        function getUsers() {
            $.get("/api/users", function (data) {
                for (var i = 0; i < data.length; i++) {
                    var guy = data[i];
                    console.log(guy.username);
                    console.log(guy.password);
                    console.log(emailVal);
                    console.log(pass);
                    if (guy.username === emailVal && guy.password === pass) {
                        window.location.href = "profile";
                        console.log(guy.zipCode);
                    }
                }
                console.log(data);
                console.log("something happened")
            });
        }

    });

    registry.on('click', function(event){
        console.log("registry is on its way")
        window.location.href = "/registry";
    })

    register.on("click", function(event){
        console.log("signup is working")
        event.preventDefault();
        var nameVal = name.val();
        var streetVal = street.val();
        var cityVal = city.val();
        var usernameVal = username.val();
        var registerEmailVal = registerEmail.val();
        var registerPasswordVal = registerPassword.Val();

        $.post("/api/users", function (event) {
            
        })
    }) 



})
