function verificar()
{
    const clave = document.getElementById("clave").value;

    if(clave === "Amparito2026")
        window.location.href = "personas/mama.html";

    else if(clave === "Te_quiero_poquito")
        window.location.href = "personas/papa.html";

    else if(clave === "Papa_de_Bocacho")
        window.location.href = "personas/Ana.html";

    else if(clave === "Helados_del_Simoncho")
        window.location.href = "personas/Daniela.html";

    else if(clave === "Claramardete")
        window.location.href = "personas/Guevara.html";

    else if(clave === "Silla_del_jardin")
        window.location.href = "personas/Bocacho.html"

    else if(clave === "Su_Papa")
        window.location.href = "personas/Camilo.html"

    else if(clave === "Parchaito")
        window.location.href = "personas/Juanita.html"

   else if(clave === "Si_a_Todo")
        window.location.href = "personas/Davzay.html"

   else if(clave === "Dafne2026")
        window.location.href = "personas/Dafne.html"

    else
        document.getElementById("error").innerText = "Clave incorrecta";
}
