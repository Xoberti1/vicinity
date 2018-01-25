// Initialize Firebase
var config = {
    apiKey: "AIzaSyDuoao9FtYGSQVC26j7tD8Ek1qXbRdDC-o",
    authDomain: "train-schuduler.firebaseapp.com",
    databaseURL: "https://train-schuduler.firebaseio.com",
    projectId: "train-schuduler",
    storageBucket: "",
    messagingSenderId: "189953521156"
};
// create a variable to reference the database
firebase.initializeApp(config);

var database = firebase.database();

// creating variables from the html ids in form group
var crime = "";
var location = "";
var offender = "";
var percentage = "";

// creates an event listener with a click event for the submit button
$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    var cName = $("#crimename").val().trim();
    var cLocation = $("#location").val().trim();
    var cOffender = $("#offender").val().trim();
    var cPercentage = $("#percentage").val().trim();

    database.ref().push({
        name: tName,
        destination: tDestination,
        starttime: tStartTime,
        frequency: tFrequency
    });

    clearForm();

});
//this indicates that the value is nothing
function clearForm() {
    $("#trainname").val("");
    $("#destination").val("");
    $("#firsttraintime").val("");
    $("#frequency").val("");
}
//calc next train
database.ref().on("child_added", function (snapshot) {
    $("#trainInfo").append(`
            <tr>
                <td>${snapshot.val().name}</td>
                <td>${snapshot.val().destination}</td>
                <td>${snapshot.val().frequency}</td>
                <td>${calcNextTrain(snapshot.val().frequency, snapshot.val().starttime)[0]}</td>
                <td>${calcNextTrain(snapshot.val().frequency, snapshot.val().starttime)[1]}</td>
    
            </tr>
            `);
});
 