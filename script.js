// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


// Fecha o menu depois de clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


// ==============================
// NOTIFICAÇÃO
// ==============================

const toast = document.getElementById("toast");

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 2400);

}


// ==============================
// DADOS DO PAINEL
// ==============================

const views = {

  visao: {

    title: "Visão geral",

    html: `

      <div class="metric-grid">

        <div class="metric">

          <span>Alunos</span>

          <strong>28</strong>

          <small>
            Turma em demonstração
          </small>

        </div>


        <div class="metric">

          <span>Uso controlado</span>

          <strong>24</strong>

          <small>
            Dispositivos
          </small>

        </div>


        <div class="metric">

          <span>Ocorrências</span>

          <strong>04</strong>

          <small>
            Registros no período
          </small>

        </div>

      </div>


      <div class="chart-card">

        <div class="chart-title">

          <strong>
            Uso por período
          </strong>

          <span>
            Expectativa do projeto
          </span>

        </div>


        <div class="fake-chart">

          <div style="height:45%">
            <span>7h</span>
          </div>

          <div style="height:65%">
            <span>8h</span>
          </div>

          <div style="height:35%">
            <span>9h</span>
          </div>

          <div style="height:78%">
            <span>10h</span>
          </div>

          <div style="height:52%">
            <span>11h</span>
          </div>

          <div style="height:30%">
            <span>12h</span>
          </div>

        </div>

      </div>

    `

  },


  horarios: {

    title: "Horários",

    html: `

      <div class="metric-grid">

        <div class="metric">

          <span>07:00 – 08:00</span>

          <strong>Restrito</strong>

          <small>
            Aula
          </small>

        </div>


        <div class="metric">

          <span>08:00 – 09:00</span>

          <strong>Restrito</strong>

          <small>
            Aula
          </small>

        </div>


        <div class="metric">

          <span>10:00 – 11:00</span>

          <strong>Liberado</strong>

          <small>
            Atividade pedagógica
          </small>

        </div>

      </div>


      <div class="chart-card">

        <div class="chart-title">

          <strong>
            Configuração proposta
          </strong>

          <span>
            Exemplo
          </span>

        </div>

        <p style="color:#667085">

          A escola poderá definir períodos específicos
          para restringir ou permitir o uso dos dispositivos.

        </p>

      </div>

    `

  },


  ocorrencias: {

    title: "Ocorrências",

    html: `

      <div class="chart-card">

        <div class="chart-title">

          <strong>
            Registros recentes
          </strong>

          <span>
            Exemplo
          </span>

        </div>


        <p style="padding:12px 0;border-bottom:1px solid #e6eaf0">

          Uso durante aula

          <strong style="float:right">
            Hoje
          </strong>

        </p>


        <p style="padding:12px 0;border-bottom:1px solid #e6eaf0">

          Uso não autorizado

          <strong style="float:right">
            Ontem
          </strong>

        </p>


        <p style="padding:12px 0">

          Orientação registrada

          <strong style="float:right">
            Ontem
          </strong>

        </p>

      </div>

    `

  },


  relatorios: {

    title: "Relatórios",

    html: `

      <div class="metric-grid">

        <div class="metric">

          <span>Registros</span>

          <strong>04</strong>

          <small>
            Período demonstrativo
          </small>

        </div>


        <div class="metric">

          <span>Horários</span>

          <strong>06</strong>

          <small>
            Configurados
          </small>

        </div>


        <div class="metric">

          <span>Turmas</span>

          <strong>01</strong>

          <small>
            Em demonstração
          </small>

        </div>

      </div>


      <div class="chart-card">

        <div class="chart-title">

          <strong>
            Resumo
          </strong>

          <span>
            Dados ilustrativos
          </span>

        </div>


        <p style="color:#667085">

          O sistema poderá organizar informações para apoiar
          a análise de professores e gestão escolar.

        </p>

      </div>

    `

  }

};


// ==============================
// PAINEL INTERATIVO
// ==============================

const dashTitle =
  document.getElementById("dashTitle");

const dashContent =
  document.getElementById("dashContent");


document.querySelectorAll(".side-link").forEach(button => {

  button.addEventListener("click", () => {

    // Remove o destaque dos outros botões

    document.querySelectorAll(".side-link")
      .forEach(item => {

        item.classList.remove("active");

      });


    // Ativa o botão clicado

    button.classList.add("active");


    // Identifica a tela escolhida

    const view =
      views[button.dataset.view];


    // Altera o título

    dashTitle.textContent =
      view.title;


    // Altera o conteúdo

    dashContent.innerHTML =
      view.html;


    // Mostra mensagem

    showToast(
      `${view.title} selecionado.`
    );

  });

});


// ==============================
// BOTÃO "VER PROPOSTA"
// ==============================

document
  .getElementById("proposalBtn")
  .addEventListener("click", () => {

    document
      .getElementById("proposta")
      .scrollIntoView({
        behavior: "smooth"
      });

    showToast(
      "Confira a proposta do projeto."
    );

  });