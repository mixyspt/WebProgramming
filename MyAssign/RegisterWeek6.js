window.onload = pageLoad;

function pageLoad()
{
    var form = document.getElementById("ProfileFormID");
    form.onsubmit = PressSubmit;
}

function PressSubmit()
{
    var Firstname = document.forms["ProfileFormID"]["firstname"];
    var Lastname = document.forms["ProfileFormID"]["lastname"];
    var Gender = document.forms["ProfileFormID"]["gender"];
    var Birthday = document.forms["ProfileFormID"]["birthday"];
    var Email = document.forms["ProfileFormID"]["email"];
    var Username = document.forms["ProfileFormID"]["username"];
    var Password = document.forms["ProfileFormID"]["password"];

    var ErrorMessage = document.getElementById("errorText");
    ErrorMessage.innerText = "";

    var approval = true;

    if( Firstname.value == "" )
    {
        ErrorMessage.innerText += "Required Firstname, ";
        approval = false;
    }
    if( Lastname.value == "" )
    {
        ErrorMessage.innerText += "Required Lastname, ";
        approval = false;
    }
    if( Gender.value == "" )
    {
        ErrorMessage.innerText += "Required Gender, ";
        approval = false;
    }
    if( Birthday.value == "" )
    {
        ErrorMessage.innerText += "Required Birthday, ";
        approval = false;
    }
    if( Email.value == "" )
    {
        ErrorMessage.innerText += "Required Email, ";
        approval = false;
    }
    if( Username.value == "" )
    {
        ErrorMessage.innerText += "Required username, ";
        approval = false;
    }
    if( Password[0].value != Password[1].value )
    {
        ErrorMessage.innerText += "Password does not matched, ";
        approval = false;
    }

    if( approval == false )
    {
        return false;
    }
}