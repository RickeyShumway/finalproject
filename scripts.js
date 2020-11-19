let userComment ="";
console.log(userComment);
$('#submitButton').on('click', function () {

    let name = $("#displayName").val();
    let comment =$("#comment").val();

    $('#commentSection').prepend(

        "<div class = commentBox><div class = user>"
        + name +
        "</div><div class = editing><button type='button' class = edit>Edit</button><button type='button' class = delete>Delete</button></div><div class = commentDisplay>"
        + comment +
        "</div><form><input type = 'text' value ="
        + userComment +
        "></form><input type='button' id='submitButton2' value='Submit'><form><input type='text' class='editComment' name='editComment' value ='</div>")

    $('#form').get(0).reset();
    //console.log($('.commentBox'))
    console.log($('.commentDisplay').text())
    userComment =($('.commentDisplay').text())
    console.log(userComment)
});

$('#commentSection').on('click', '.edit', function () {

    console.log(userComment)
    	
$( ".editComment" ).toggle( display );
    $('.commentBox').append(
                "<form><input type = 'text' value ="
                + userComment +
                "></form><input type='button' id='submitButton2' value='Submit'><form><input type='text' class='editComment' name='editComment' value ='"
                + userComment+
                "'><input type='button' id='submitButton2' value='Submit'>"
    )
});