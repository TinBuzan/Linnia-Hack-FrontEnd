/*
* Function that gets called to send vital information to Linnia Protocol
*/
$(document).ready(function(){
  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    var senderData =
    $("#link1").text() + "\r\n" +
    $("#link2").text()  + "\r\n" +
    $("#link3").text()  + "\r\n" +
    $("#link4").text()  + "\r\n" +
    $("#link5").text()  + "\r\n" +
    $("#link6").text()  + "\r\n" +
    $("#link7").text() ;

    var senderPrivateKey = $("#senderPrivateKey").val() ;
    //$btn.button('reset')
  })
});
