$(document).ready(function() {
    var email = $("#email");
    var password = $("#password");
    console.log("the page works");
    $(document).on("click", "#login", userInfo);


    function userInfo(event) {
        console.log("I started the process");
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!email.val().trim().trim()) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        getUser({
            email: email
                .val()
                .trim()
        },
        {
            password: password
                .val()
                .trim()
        },
        console.log("something happened")
        );
        console.log(getUser)
    } 

    function createUserRow(userData) {
        var newTr = $("<tr>");
        newTr.data("user", userData);
        newTr.append("<td>" + userData.firstName + "</td>");
        newTr.append("<td> " + userData.lastName + "</td>");
        newTr.append("<td>" + userData.id + "</td>");
        newTr.append("<td>" + userData.username + "</td>");
        newTr.append("<td>" + userData.password + "</td>");
        newTr.append("<td>" + userData.city + "</td>");
        newTr.append("<td>" + userData.state + "</td>");
        newTr.append("<td>" + userData.Address + "</td>");
        newTr.append("<td>" + userData.zipCode + "</td>");
        console.log("an object was build, I think");
        // newTr.append("<td><a href='/blog?author_id=" + userData.id + "'>Go to Posts</a></td>");
        // newTr.append("<td><a href='/cms?author_id=" + userData.id + "'>Create a Post</a></td>");
        // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
        return newTr;
    }

    // A function for creating an author. Calls getAuthors upon completion
    function getUser(data) {
        $.get("/api/users", function(data) {
            var rows = [];
            console.log(Data);
            for (var i = 0; i < data.length; i++) {
                rows.push(createUserRow(data[i]));
                console.log("you did it!!!!");
            }
            if (data === userData.password && userData.username){
                window.location.href = "profile.html";
            } else {
                renderEmpty();
                console.log("error will robinson")
            }
        })
    }

        function renderEmpty() {
            var alertDiv = $("<div>");
            alertDiv.addClass("alert alert-danger");
            alertDiv.text("Your username or password was incorrect. Try again?");
            authorContainer.append(alertDiv);
        }

});        