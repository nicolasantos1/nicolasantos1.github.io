

console.log("JS conectado com sucesso");

function mostrar(secao) {
  document.querySelectorAll("section").forEach(secao => secao.style.visibility = "collapse");
    document.querySelectorAll("section").forEach(secao => secao.style.display = "none");

  document.getElementById(secao).style.visibility = "visible";
  document.getElementById(secao).style.display = "block";
}