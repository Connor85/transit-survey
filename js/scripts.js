$(document).ready(function(){
  $("#firstForm").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transit]:checked").each(function() {
      var response = $(this).val();
      $("#work-responses").append(response + " ");
    })
    $("#work-responses").show();
    $("#firstForm").hide();
    $("#secondForm").show();
  });
  $("#secondForm").submit(function(event){
    event.preventDefault();
    $("#weekend-responses").show();
    $("input:checkbox[name=weekend]:checked").each(function(){
      var activity = $(this).val();
      $("#weekend-responses").append(activity +" ! ");
    })
    $("#weekend-responses").show();
    $("#secondForm").hide();
  });
});
