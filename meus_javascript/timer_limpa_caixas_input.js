var timer1=0;
	function contagem_decrescente()
	{
		clearTimeout(timer1);
		timer1=setTimeout(limpa_caixas_entrada, 3000);
	}
	function limpa_caixas_entrada()
	{
		document.getElementById("user").value=null;
		document.getElementById("pass").value=null;
	}