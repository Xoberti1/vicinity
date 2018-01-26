$(document).ready(function() {
    var email = $("#email");
    var emailVal = "";
    var pass = "";
    var password = $("#password");
    var login = $('#login');
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
                    }
                }
                console.log(data);
                console.log("something happened")
            });
        }
        // function getCrimes(){
        //     $get("/api/posts")
            
        //     db.User.findAll({
        //         where: {
        //             password = req.body.password
        //         }
        //     }).then(function(req, res){
        //         db.Post.findAll({
        //             where: {
        //                 zipCode = req.body.zipCode
        //             }.then(function(dbPost) {
        //                 res.json(dbPost);
        //         })
        //     })

    });
})    
