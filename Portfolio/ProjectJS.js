window.onload = pageLoad;

function pageLoad()
{
    document.getElementById("BackButton").onclick = GoBack;
}

function GoBack()
{
    window.location.href='index.html'
}