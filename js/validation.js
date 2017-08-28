$("#booktitle,#author,#page,#publishdate").keyup(function() {
  if ($("#booktitle").val().length > 0 && $("#author").val().length > 0 && $("#page").val().length > 0 && $("#publishdate").val().length > 0) {
    $(".btn").removeAttr('disabled');
  }
  if ($("#booktitle").val().length === 0 || $("#author").val().length === 0 || $("#page").val().length === 0 || $("#publishdate").val().length === 0){
      $(".btn-default").attr('disabled', 'true');

    }
});

//code for enter-key
$("#publishdate").keyup(function(event) {
  if (event.keyCode === 13) {
    if ($("#booktitle").val().length > 0) {
      $(".btn-default").click();
    } else {
      swal({
         title: 'oops',
         text: 'please enter a value',
         type: 'warning'
      });
    }
  }
});
