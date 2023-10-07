function test_user()
	{
		var w=false;
		var x="";
		var y="";
		var z="";
		var a="";
		var b="";
		x=null;
		y=null;
		z=document.getElementById("user").value;
		a=document.getElementById("pass").value;
		for(var k=0; k<utilizadores.length; k++)
		{
			if(document.getElementById("user").value==utilizadores[k])
			{
				if(document.getElementById("pass").value==pass[k])
				{
					x=utilizadores[k];
					y=pass[k];
					w=true;
					b=permissao[k];
				}
				else
				{
					x=utilizadores[k];
				}
			}
		}
		if(z!="" && a!="")
		{
			if(w==true)
			{
				if(tentativas!=0)
				{	
					tentativas=5;
					if(b=="Administrador" || b=="administrador")
					{
						window.location.href="inicial_administracao.html";
					}
					else if(b=="Colaborador" || b=="colaborador")
					{
						window.location.href="inicial_colaborador.html";
					}
				}
				else
				{
					alert("Não é possível entrar, porque se esgotaram as tentativas!");
				}
			}
			else
			{
				if(x!=null)
				{
					if(tentativas!=0)
					{
						alert("A palavra-passe está errada!");
						tentativas=tentativas-1;
					}
				}
				else
				{
					if(tentativas!=0)
					{
						alert("O utilzador não se encontra registado na nossa base de dados!");
						tentativas=tentativas-1;
					}
				}
				if(tentativas==0)
				{
					alert("Esgotaram-se as tentativas!");
				}
				else
				{
					alert("Sobra(m) "+tentativas+" tentativa(s)!");
				}
			}
		}
		else if(z=="" && a!="")
		{
			if(tentativas==0)
			{
				alert("Esgotaram-se as tentativas!");
			}
			else
			{
				alert("Insira o nome do utilizador!");
			}
		}
		else if(z!="" && a=="")
		{
			if(tentativas==0)
			{
				alert("Esgotaram-se as tentativas!");
			}
			else
			{
				alert("Insira a palavra-passe!");
			}
		}
		else if(z=="" && a=="")
		{
			if(tentativas==0)
			{
				alert("Esgotaram-se as tentativas!");
			}
			else
			{
				alert("Insira o nome do utilizador e a palavra-passe!");
			}
		}
	}