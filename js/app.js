var i = 10;
var nombre ='Vivi';



var f = function (){

	alert('Saludar');

}



var app = {

	contar : function (){
		for (var i = 0; i < 5; i++) {
			alert ('Contador '+i);
		};
	},
	par:function(num){
		if(num%2==0){
			return true;
			}else{
				return false;
			}
		},
		ciclo:function(){
			for(var i=1; i <=5;i++){
				if(this.par(i)){
					alert(i+ ' es par');

				}else{
					alert (i+ ' es impar');
				}
			}
		}


	}
	app.ciclo();