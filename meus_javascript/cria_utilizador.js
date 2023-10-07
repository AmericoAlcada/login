function criar_user()
	{
		var modal=document.getElementById("criarUtilizador");
		var botao=document.getElementById("criar");
		var span = document.getElementsByClassName("close")[0];
		botao.onclick = function() 
		{
			modal.style.display = "block";
		}
		span.onclick = function() 
		{
			modal.style.display = "none";
		}
		window.onclick = function(event) 
		{
			if (event.target == modal) 
			{
				modal.style.display = "none";
			}
		}
		/*var q=false;
		do
		{
			q=false;
			var user_a_criar = prompt("Introduza o nome do utilizador a criar");
			for(var k=0; k<utilizadores.length; k++)
			{
				if(user_a_criar==utilizadores[k])
				{
					q=true;
				}
			}
			if(q==true)
			{
				alert("O utilizador já existe!");
			}
			else if(user_a_criar==null)
			{
				alert("O nome de utilizador não foi inserido!");
				q=true;
			}
			else
			{
				utilizadores.push(user_a_criar);
			}
		}
		while(q==true);
		var f=false;
		do
		{
			f=false;
			var password_a_criar = prompt("Introduza a palavra-passe do utilizador '"+user_a_criar+"' ");
			if(password_a_criar!=null)
			{
				if(password_a_criar.length<8)
				{
					alert("Erro! A palavra passe deve ter pelo menos 8 caracteres!");
					f=true;
				}
				else
				{
					pass.push(password_a_criar);
				}
			}
			else
			{
				alert("A palavra-passe não foi inserida!");
				f=true;
			}
		}
		while(f==true);
		var w=false;
		do
		{
			w=false;
			var permissaoUtilizador = prompt("Defina a permissão do utilizador '"+user_a_criar+"' ");
			if(permissaoUtilizador!=null)
			{
				if(permissaoUtilizador=="Administrador" || permissaoUtilizador=="Colaborador" || permissaoUtilizador=="administrador" || permissaoUtilizador=="colaborador")
				{
					permissao.push(permissaoUtilizador);
					var table=document.getElementById("tabela_utilizadores");
					var row = table.insertRow(utilizadores.length);
					if(utilizadores.length%2==0)
					{
						row.className="linhas_tabela";
					}
					var cell0 = row.insertCell(0);
					var cell1 = row.insertCell(1);
					var cell2 = row.insertCell(2);
					var cell3 = row.insertCell(3);
					var cell4 = row.insertCell(4);
					var cell5 = row.insertCell(5);
					cell0.innerHTML = utilizadores[utilizadores.length-1];
					cell1.innerHTML = pass[utilizadores.length-1];
					cell2.innerHTML = tentativas;
					cell3.innerHTML = "";
					cell4.innerHTML = permissao[utilizadores.length-1];
					cell5.innerHTML = "";
					var select=document.getElementById("users_select");
					var c=document.createElement("option");
					c.text=utilizadores[utilizadores.length-1];
					select.add(c);
				}
				else
				{
					alert("O utilizador deve ser administrador ou colaborador!");
					w=true;
				}
			}
			else
			{
				alert("Deve inserir a sua permissão!");
				w=true
			}
		}
		while(w==true);*/
	}
	function verificar_criar_user()
	{
		var modal=document.getElementById("criarUtilizador");
		var q=false;
		var p=false;
		var r=false;
		var s=false;
		var t=false;
		for(var k=0; k<utilizadores.length; k++)
			{
				if(document.getElementById("nomeUtilizador").value==utilizadores[k])
				{
					q=true;
				}
			}
			if(q==true)
			{
				alert("O utilizador já existe!");
			}
			else if(document.getElementById("nomeUtilizador").value=="")
			{
				alert("O nome de utilizador não foi inserido!");
			}
			else
			{
				p=true;
			}
			if(document.getElementById("passUtilizador").value.length>=8)
				{
					r=true;
				}
				else if(document.getElementById("passUtilizador").value.length<8 && document.getElementById("passUtilizador").value!="")
				{
					alert("Erro! A palavra passe deve ter pelo menos 8 caracteres!");
					
				}
				else if(document.getElementById("passUtilizador").value=="")
				{
					alert("A palavra-passe não foi inserida!");
					
				}
				if(document.getElementById("permissaoUtilizador").value=="Administrador" || document.getElementById("permissaoUtilizador").value=="Colaborador" || document.getElementById("permissaoUtilizador").value=="administrador" || document.getElementById("permissaoUtilizador").value=="colaborador")
					{
						s=true;
					}
					else if(document.getElementById("permissaoUtilizador").value=="")
					{
						alert("Deve inserir a sua permissão!");
						
					}
					else
					{
						alert("O utilizador deve ser administrador ou colaborador!");
					}
					if(document.getElementById("nomeRealUtilizador").value!="")
						{
							t=true;
						}
						else
						{
							alert("Deve inserir o seu nome verdadeiro!");
						}
			if(p==true && r==true && s==true && t==true)
			{
				const ss = new Date();
				var ano=ss.getFullYear();
				var mes=ss.getMonth()+1;
				var dia=ss.getDay()+1;
				utilizadores.push(document.getElementById("nomeUtilizador").value);
				pass.push(document.getElementById("passUtilizador").value);
				permissao.push(document.getElementById("permissaoUtilizador").value);
				nome.push(document.getElementById("nomeRealUtilizador").value)
				var table=document.getElementById("tabela_utilizadores");
					var row = table.insertRow(utilizadores.length);
					if(utilizadores.length%2==0)
					{
						row.className="linhas_tabela";
					}
					var cell0 = row.insertCell(0);
					var cell1 = row.insertCell(1);
					var cell2 = row.insertCell(2);
					var cell3 = row.insertCell(3);
					var cell4 = row.insertCell(4);
					var cell5 = row.insertCell(5);
					cell0.innerHTML = utilizadores[utilizadores.length-1];
					cell1.innerHTML = pass[utilizadores.length-1];
					cell2.innerHTML = tentativas;
					cell3.innerHTML = nome[nome.length-1];
					cell4.innerHTML = permissao[utilizadores.length-1];
					cell5.innerHTML = dia+"-"+mes+"-"+ano;
					var select=document.getElementById("users_select");
					var c=document.createElement("option");
					c.text=utilizadores[utilizadores.length-1];
					select.add(c);
					modal.style.display = "none";
			}
			else
			{
				document.getElementById("nomeUtilizador").value=null;
				document.getElementById("passUtilizador").value=null;
				document.getElementById("permissaoUtilizador").value=null;
				document.getElementById("nomeRealUtilizador").value=null;
			}
	}