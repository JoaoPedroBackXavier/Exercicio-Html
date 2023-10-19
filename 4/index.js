    let botao = document.getElementById("botao")
    let elemento = document.body
    let elemento2 = document.getElementById("fonteFundoBranco")
    botao.addEventListener("click", function() {
        if (elemento.classList.contains("fundoBranco")) {
            elemento.classList.remove("fundoBranco");
            elemento.classList.add("fundoPreto");
        } else {
            elemento.classList.remove("fundoPreto");
            elemento.classList.add("fundoBranco");
        }
        if (elemento2.classList.contains("fonteFundoBranco")) {
            elemento2.classList.remove("fonteFundoBranco");
            elemento2.classList.add("fonteFundoPreto");
        } else {
            elemento2.classList.remove("fonteFundoPreto");
            elemento2.classList.add("fonteFundoBranco");
        }
    })
