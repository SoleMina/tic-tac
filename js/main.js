$(document).ready(function(){
	var numero=0
		$(".box").click(function(){
		numero+=1
		if(numero%2){
				$(this).text("x");
				$(this).off("click");
					var resultado = jugar("x");
					if (numero==9){
						if(resultado==false) {
							alert("YOU LOSE");
						}
					}
				}else{
					$(this).text("o");
					$(this).off("click")
					var resultado = jugar("o");
					if (numero==9){
						if(resultado==false) {
							alert("YOU LOSE");
						}
					}	

				}
			
		});
function jugar(valor){
	var bna=$("#bna").text()
    var bnb=$("#bnb").text()
    var bnc=$("#bnc").text()
    var bnd=$("#bnd").text()
    var bne=$("#bne").text()
    var bnf=$("#bnf").text()
    var bng=$("#bng").text()
    var bnh=$("#bnh").text()
    var bni=$("#bni").text()
    var ganador = true;
    if(bna==bnb && bna==bnc && bna  == valor){
    	alert("YOU WIN!")
    }else if(bna==bnd && bna==bng && bna == valor){
    	alert("YOU WIN!")
    }else if(bna==bne && bna==bni && bna == valor){
    	alert("YOU WIN!")
    }else if(bnb==bne && bnb==bnh && bnb == valor){
    	alert("YOU WIN!")
    }else if(bnc==bnf && bnc==bni && bnc == valor){
    	alert("YOU WIN!")
    }else if(bng==bnh && bng==bni && bng == valor){
    	alert("YOU WIN!")
    }else if(bnc==bne && bnc==bng && bnc == valor){
    	alert("YOU WIN!")
    }else if(bnd==bne && bnd==bnf && bnd == valor){
    	alert("YOU WIN!")
    }else{
    	ganador = false;
    }
    return ganador;
}
    
});
$(document).ready(function() {
        $('.boton').click(function() {
            location.reload();
     });
});
/*
$(document).ready(function() {
        $('.boton').click(function() {
            $('.box').text("+");
     });
});
*/
$(document).ready(function() {
        $('.boton').click(function() {
            location.reload();
     });
});