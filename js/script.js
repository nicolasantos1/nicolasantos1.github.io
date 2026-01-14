

console.log("JS conectado com sucesso");

function mostrar(secao) {

	document.querySelectorAll("section").forEach(secao => secao.style.display = "none");
	document.getElementById(secao).style.display = "block";
	show(secao);
}

function show(secao){

	document.querySelectorAll('.lista').forEach( function(element){
		element.style.display = 'block'
	} )
	
	const item = document.getElementById('nav-' + secao);
	if (item) {
		item.style.display = "none";
	}
	
}

document.getElementById("btnDownload").addEventListener("click", () => { 
    const link = document.createElement("a");
    link.href = "date/Currículo - Nicolas Santos Do Nascimento.pdf"; // caminho ou URL do arquivo
    link.download = "Currículo - Nicolas Santos Do Nascimento"; // nome do arquivo
    link.click();
});