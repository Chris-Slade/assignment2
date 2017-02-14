$(document).ready(function() {
    $('#submitButton').click(function() {
        console.log(arguments);
        $('#demoForm').hide();
        $('#afterSubmit').append('<p>File uploaded!</p>');
        return false;
    });
});
