/*let header = window.document.querySelectorAll(".navBar")[0]
window.addEventListener("scroll", ()=>{
	if(window.pageYOffset>50 && header.classList.contains("navBar")){
		header.classList.remove("navBar")
		header.classList.add("min")

		console.log(`window.pageYOffset`)
	}else if(window.pageYOffset==0 && header.classList.contains("min")){
		header.classList.remove("min")
		header.classList.add("navBar")
		console.log(`window.pageYOffset`)
	}
})*/

function updateYear() {
	let yearCorrent = document.querySelector(".yearCorrent");
	let date = new Date();
	let year = date.getFullYear();
	yearCorrent.innerHTML = year;
}
updateYear();