window.onload = login;

function login()
{
    var Login = document.getElementById("LoginID");
    Login.onsubmit = Verify;
}

function Verify()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const UsernameRegist = urlParams.get("username");
    const PasswordRegist = urlParams.get("password");

    var LogUsername = document.forms["LoginID"]["UsernameLogin"];
    var LogPassword = document.forms["LoginID"]["PasswordLogin"];

    if( UsernameRegist != LogUsername.value )
    {
        alert("Don't have this username");
        return false;
    }
    if( PasswordRegist != LogPassword.value )
    {
        alert("Wrong Password");
        return false;
    }
    else
    {
        alert("Login Successfully");
    }
}