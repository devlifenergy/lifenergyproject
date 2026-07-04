function preencherDataHora() {
  const agora = new Date();

  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();

  const hora = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");

  document.getElementById("dataAplicacao").value = `${dia}/${mes}/${ano}`;
  document.getElementById("horaInicial").value = `${hora}:${minutos}`;
}

function controlarAplicador() {
  const tipo = document.getElementById("tipoAplicacao").value;
  const campo = document.getElementById("campoAplicador");
  const nomeAplicador = document.getElementById("nomeAplicador");

  if (tipo === "Aplicação Assistida") {
    campo.classList.remove("hidden");
    nomeAplicador.required = true;
  } else {
    campo.classList.add("hidden");
    nomeAplicador.required = false;
    nomeAplicador.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  preencherDataHora();

  document
    .getElementById("tipoAplicacao")
    .addEventListener("change", controlarAplicador);
});
