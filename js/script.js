

let btnsNav = document.querySelectorAll('.lista');

btnsNav.forEach(function(btn){
  btn.addEventListener('click', (element) => {

    let subId = "nav-";

    let idname = element.currentTarget.id; 
    // ou: let idname = btn.id;

	let result = idname.startsWith(subId)
		? idname.slice(subId.length)
		: idname;
    show(result);
  });
});



function show(eleSec) {
	
	document.querySelectorAll("section").forEach(eleSec => eleSec.classList.add('void'));
	document.getElementById(eleSec).classList.remove('void');

	navegation(eleSec);
}

function navegation(section){
	
	if (document.getElementById('screen').style.display == 'block') {
		document.getElementById('screen').style.display = 'none'
	
		let PlscreenNav = document.getElementById('nav-contant')
		document.querySelectorAll('.lista').forEach(function(element){
			element.style.display = 'block'
			PlscreenNav.appendChild(element)
			
		})
		PlscreenNav.children[0].style.display = "none"
	}

	let btnbar = document.getElementById('bars')

	if(btnbar.style.display != 'none'){return}

	document.querySelectorAll('.lista').forEach( function(element){
		element.style.display = 'block'
	} )
	
	const item = document.getElementById('nav-' + section);
	if (item) {
		item.style.display = "none";
	}
	
}

let btnbar = document.getElementById('bars')
	btnbar.addEventListener('click', ()=>{
		document.getElementById('screen').classList.remove('void')
		console.log('lido');

		let PlscreenNav = document.getElementById('screen-nav')

		document.querySelectorAll('.lista').forEach(function(element){
			element.style.display = 'block'
			PlscreenNav.appendChild(element)
		})
		
	})

let btnCloseBar = document.getElementById('screen-btn')
	btnCloseBar.addEventListener('click',function closeBar(){
		document.getElementById('screen').classList.add('void')
	
		let PlscreenNav = document.getElementById('nav-contant')
		document.querySelectorAll('.lista').forEach(function(element){
			element.style.display = 'block'
			PlscreenNav.appendChild(element)
			
		})
		PlscreenNav.children[0].style.display = "none"
		 
	})

let btnHome = document.getElementById('home-icon')
	btnHome.addEventListener('click', function (params) {
		
	})
/* 
document.getElementById("btnDownload").addEventListener("click", () => { 
    const link = document.createElement("a");
    link.href = "file/Currículo - Nicolas Santos Do Nascimento.pdf"; // caminho ou URL do arquivo
    link.download = "Currículo - Nicolas Santos Do Nascimento"; // nome do arquivo
    link.click();
});
*/