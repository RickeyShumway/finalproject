$('#form').on('submit', function () {

    let nameVal = $("#displayName").val();
    let commentVal = $("#comment").val();
    console.log(nameVal, commentVal)
    if (nameVal || commentVal) {
    $('#commentSection').prepend(
                "<div class ='commentBox'><div><img src='/images/user Image.png'></div><div class = userComEdit><h4>" + nameVal + "</h4><div class = editing><button type='button' class = 'edit'>Edit</button><button type='button' class = 'delete'>Delete</button></div><br><h2>" + commentVal + "</h2><br><form class ='textAndSubmit'><input type = 'text' class = 'editComment' value ='" + commentVal + "'><input type='submit' class='submitButton2' value='Submit'></input></form></div></div>")
                $('#displayName, #comment').removeClass('redBorder');
    $('#form').get(0).reset();
    $(this).blur();
    return false;
    } else {
        if (nameVal ==='' && commentVal ==='') {
            $('#displayName, #comment').addClass('redBorder');
            return false;
        }
    }
});


$('#commentSection').on('click', '.edit', function () {
    let grandParent = $(this).parents()[1];
    let revealEdit = $(grandParent).children()[5];
    $(revealEdit).toggle();
    console.log(grandParent);
    let comVal = $(grandParent).children()[3];
    console.log(comVal)
    let treeTrav = $(grandParent).children()[5];
    let cursor = $(treeTrav).children()[0];
    $(cursor).focus();
})


$('#commentSection').on('click', '.delete', function () {
    let parent = $(this).parents()[2];
    console.log(parent)
    $(parent).remove();
});

$('#commentSection').on('submit', '.textAndSubmit', function () {
    let editedCom = $(this).children().val();
    console.log(editedCom)
    let parent = $(this).parent();
    let sibling = $(parent).children()[3];
    $(sibling).text(editedCom).val();
    $(this).toggle();
    return false;
})

// $('#submitButton').on('click', function () {
//     $('#commentSection').prepend(
//         "<div class ='commentBox'><div><img src='/images/user Image.png'></div><div class = userComEdit><h4>Username</h4><div class = editing><button type='button' class = 'edit'>Edit</button><button type='button' class = 'delete'>Delete</button></div><br><h2>This is a dope comment</h2><br><form class ='textAndSubmit'><input type = 'text' class = 'editComment' value ='this was the comment'><input type='button' class='submitButton2' value='Submit'></input></form></div></div>")

//     $('#form').get(0).reset();
// });
