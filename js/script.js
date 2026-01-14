

console.log("JS conectado com sucesso");

function mostrar(secao) {
  document.querySelectorAll("section").forEach(secao => secao.style.visibility = "collapse");
  document.querySelectorAll("section").forEach(secao => secao.style.display = "none");

  document.getElementById(secao).style.visibility = "visible";
  document.getElementById(secao).style.display = "block";
}

document.getElementById("btnDownload").addEventListener("click", () => {
    console.log('foii');  
    const link = document.createElement("a");
    link.href = "date/Currículo - Nicolas Santos Do Nascimento.pdf"; // caminho ou URL do arquivo
    link.download = "Currículo - Nicolas Santos Do Nascimento"; // nome do arquivo
    link.click();
});