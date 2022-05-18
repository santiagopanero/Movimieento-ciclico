window.onload = function() {
	const http = new XMLHttpRequest()

	http.open ('GET', 'http://api.weatherapi.com/v1/current.json?key=e971cb31f8454205a2d215458221505&q=Buenos Aires&aqi=no')
	http.send()

	let clima = document.querySelector('.temperture')
	let climaNum = document.querySelector('.climate')
	const climaYa = document.querySelector('.climActual')

	http.onreadystatechange = function() {
		http.responseText

		if(http.responseText === '') {
				return
			}

		const respuesta = JSON.parse(http.responseText)
		
		const calor = respuesta.current.temp_c

		clima.style.height = calor + 60

		climaYa.innerHTML = calor + ' °C'
	}
}