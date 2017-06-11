var mostrarAlert = function(data){
	alert(data);
}

mostrarAlert('aqui 1');

var fazer = function(funcaoQualquer, parametro){
	funcaoQualquer(parametro);
}

fazer(mostrarAlert, 'aqui 2');