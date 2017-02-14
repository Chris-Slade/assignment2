$(document).ready(function() {

  $('#submitButton').click(function(event) {
    $('#demoForm').submit();
    event.preventDefault();
  });

  $('#demoForm').submit(function(event) {

    var notDefined = function(arg) {
      return typeof arg === undefined || arg.val() == '';
    };

    // Clear submission message
    var afterSubmit = $('#afterSubmit');
    afterSubmit.val('');

    // Handle required fields before hiding the form
    var title = $('input#titleInput');

    // If there's no title, do nothing about the submission
    if (notDefined(title)) {
      console.log('Returning because of no title');
      return false;
    }

    var rating = $('input[name=rating]:checked');

    var file = $('input#fileInput');
    if (notDefined(file)) {
      console.log('Returning because of no file');
      return false;
    }

    $('#demoForm').hide();

    afterSubmit.append(
      '<h2>You submitted a form with:</h2>'
      + '<p>Title: '  + title.val()  + '</p>'
      + '<p>Rating: ' + rating.val() + '</p>'
    );

    var desc = $('#descInput');
    if (!notDefined(desc)) {
      afterSubmit.append('<p>Description: <i>' + desc.val() + '</i></p>');
    }

    afterSubmit.append('<p>File: "' + file.val() + '"</p>');

    event.preventDefault();
    return true;
  });

});
