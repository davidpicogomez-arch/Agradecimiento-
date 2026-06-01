function verificar()
{
    const clave = document.getElementById("clave").value;

    if(clave === "mama2026")
        window.location.href = "personas/mama.html";

    else if(clave === "papa2026")
        window.location.href = "personas/papa.html";

    else if(clave === "ana2026")
        window.location.href = "personas/Ana.html";

    else if(clave === "daniela2026")
        window.location.href = "personas/Daniela.html";

    else if(clave === "guevara2026")
        window.location.href = "personas/Guevara.html";

    else if(clave === "bocacho2026")
        window.location.href = "personas/Bocacho.html"

    else if(clave === "camilo2026")
        window.location.href = "personas/Camilo.html"

    else if(clave === "juanita2026")
        window.location.href = "personas/Juanita.html"

   else if(clave === "davzay2026")
        window.location.href = "personas/Davzay.html"

   else if(clave === "dafne2026")
        window.location.href = "personas/Dafne.html"

    else
        document.getElementById("error").innerText = "Clave incorrecta";
}
