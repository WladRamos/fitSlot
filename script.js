function enviarEvento() {
    gtag('event', 'clique_baixar_app', {
      'event_category': 'interacao',
      'event_label': 'botao_landing_page'
    });
  }
  
  document.getElementById("download-btn").addEventListener("click", function () {
    enviarEvento();
    setTimeout(() => {
      window.location.href = "obrigado.html";
    }, 300);
  });
  
  document.getElementById("download-btn-bottom").addEventListener("click", function () {
    enviarEvento();
    setTimeout(() => {
      window.location.href = "obrigado.html";
    }, 300);
  });
  