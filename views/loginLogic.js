$(document.readyState(function() {
    var email = $("#email");
    var password = $("#password");

    $(document).on("submit", "#login", userInfo);

    function userInfo(event) {
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
        });
    }

    // A function for creating an author. Calls getAuthors upon completion
    function getUser(userData) {
        $.get("/api/users", userData);
        if (userDate !== string) {
            
        }
    }


}))