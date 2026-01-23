


let btnBars = document.getElementById('bars')
	btnBars.addEventListener('click',function(){

		document.querySelectorAll('.navegation').forEach(function(el){
			let place = document.getElementById('screen-nav')
			place.appendChild(el)
		})

		document.getElementById('screen').classList.replace('void', 'active')
		document.querySelectorAll('.spaces').forEach(function(element){
			element.classList.replace('active','void')
			
		})
		
	})

let btnCloseBars = document.getElementById('screen-btn')
	btnCloseBars.addEventListener('click', Closebars)

function Closebars(){
	document.querySelectorAll('.navegation').forEach(function(el,index){
		if(index == 0){
			let placeh1 = document.getElementById('place-nav-home')
			placeh1.appendChild(el)
			return
		}
		let place = document.getElementById('nav-contant')
		place.appendChild(el)
	})


	document.getElementById('screen').classList.replace('active','void')
	document.querySelector('.checked').classList.replace('void','active')

}


let btnsList = document.querySelectorAll('.list')
	btnsList.forEach(function(element){
		element.addEventListener('click', ShowSection )
	})

function ShowSection(listClicked){
	Closebars()
	let WhichListClicked = listClicked.currentTarget.dataset.target;
	
	document.querySelectorAll('.spaces').forEach(el => {
		el.classList.remove('active','checked');
		el.classList.add('void');
	});

	document.getElementById(WhichListClicked).classList.add('active','checked')
	

	
}