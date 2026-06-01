function verificar()
{
    const clave = document.getElementById("clave").value;

    if(clave === "mama2026")
        window.location.href = "personas/mama.html";

    else if(clave === "papa2026")
        window.location.href = "personas/papa.html";

    else if(clave === "ana2026")
        window.location.href = "personas/ana.html";

    else if(clave === "daniela2026")
        window.location.href = "personas/Daniela.html";

    else if(clave === "guevara2026")
        window.location.href = "personas/guevara.html";

    else if(clave === "bocacho2026")
        window.location.href = "personas/bocacho.html"

    else if(clave === "camilo2026")
        window.location.href = "personas/camilo.html"

    else if(clave === "juanita2026")
        window.location.href = "personas/juanita.html"

   else if(clave === "davzay2026")
        window.location.href = "personas/davzay.html"

   else if(clave === "dafne2026")
        window.location.href = "personas/dafne.html"

    else
        document.getElementById("error").innerText = "Clave incorrecta";
}
