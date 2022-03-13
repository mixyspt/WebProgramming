var topic_edit;
var comment1_edit;
var comment2_edit;

window.onload = setOnLoad;
function setOnLoad()
{
    topic_edit = document.getElementById("topic");
    comment1_edit = document.getElementById("comment1");
    comment2_edit =document.getElementById("comment2");
}

function postComment()
{
    var text_inbox_post = document.getElementById("InputComment").value;  

    if( topic_edit.innerText == "" )
    {
        topic_edit.innerText = text_inbox_post;
        text_inbox_post.SetText("");
    }
    else if( comment1_edit.innerText == "" )
    {
        comment1_edit.innerText = text_inbox_post; 
        text_inbox_post = "";
    }
    else if( comment2_edit.innerText == "" )
    {
        comment2_edit.innerText = text_inbox_post;
        text_inbox_post = "";
    }
    else return;
}
function clearComment()
{
    topic_edit.innerText = "";
    comment1_edit.innerText = "";
    comment2_edit.innerText = "";
}
