// ==================================
// BOTÃO DA CONCLUSÃO
// ==================================

function mostrarConclusao() {

    alert(
        "Nossa expectativa é que o EduControl " +
        "contribua para um uso mais consciente e " +
        "organizado dos smartphones no ambiente escolar."
    );

}


// ==================================
// EFEITO NO MENU
// ==================================

const links = document.querySelectorAll(".links a");


links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {

            item.style.color = "#475467";

        });


        this.style.color = "#155eef";

    });

});


// ==================================
// MENSAGEM NO CARREGAMENTO
// ==================================

console.log(
    "EduControl - Projeto de TCC carregado."
);