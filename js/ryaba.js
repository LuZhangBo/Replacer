function crtPar() {
	let newPar = document.createElement('p');

	let temp1 = document.querySelector('.result');

	temp1.appendChild(newPar);

	let temp2 = document.querySelector('p');

	temp2.innerHTML = 'Жили-были {var1} да {var2},Была у них {var3},Снесла {var3} {var4}, не простое - золотое,- {var1} бил, бил - не разбил,- {var2} била, била - не разбила,{var5} бежала, {var6} задела, {var4} упало и разбилось.,{var1} плачет, {var2} плачет, а {var3} кудахчет:, {speach}'
}

function handleData() {
	let var1 = $("input[name=var1")[0].value
	let var2 = $("input[name=var2")[0].value
	let var3 = $("input[name=var3")[0].value
	let var4 = $("input[name=var4")[0].value
	let var5 = $("input[name=var5")[0].value
	let var6 = $("input[name=var6")[0].value
	let speach = $("input[name=speach")[0].value
	let str = `Жили-были ${var1} да ${var2},Была у них ${var3},Снесла ${var3} ${var4}, не простое - золотое,- ${var1} бил, бил - не разбил,- ${var2} била, била - не разбила,${var5} бежала, ${var6} задела, ${var4} упало и разбилось.,${var1} плачет, ${var2} плачет, а ${var3} кудахчет:, ${speach}`
	$('p').html(str)
	$('form').hide()
	}


function init() {
	$("#button-fetch").click(crtPar);
	$("#button-fetch").click(handleData);
}


$(document).ready(init);