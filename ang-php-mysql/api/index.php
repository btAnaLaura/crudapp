<?php
include 'database.php';
$clientes = [];
 
if( empty($_GET['id'])){

	$sql = "SELECT * FROM clientes";
	if($result = $db->query($sql))
	{
		$i = 0;
		while($row = $result->fetch_assoc())
		{
			$clientes[$i]['id'] = $row['id'];
			$clientes[$i]['nome'] = $row['nome'];
			$clientes[$i]['telefone'] = $row['telefone'];
			$clientes[$i]['cad_pessoa']=$row['cad_pessoa'];
			$clientes[$i]['cpfcnpj'] = $row['cpfcnpj'];
			$clientes[$i]['estado'] = $row['estado'];
			$clientes[$i]['rua'] = $row['rua'];
			$clientes[$i]['bairro'] = $row['bairro'];
			$clientes[$i]['numero'] = $row['numero'];
			$clientes[$i]['cep'] = $row['cep'];
			$clientes[$i]['telefone'] = $row['telefone'];
			$clientes[$i]['datanascimento'] = $row['datanascimento'];
			$clientes[$i]['complemento'] = $row['complemento'];


			$i++;
		}
		echo json_encode($clientes);
	}
	else
	{
		http_response_code(404);
	}
}else{
	$id=$_GET['id'];
	
	$sql = "SELECT * FROM clientes where id=".$id;
	if($result = $db->query($sql))
	{
		$i = 0;
		while($row = $result->fetch_assoc())
		{
			$clientes[$i]['id'] = $row['id'];
			$clientes[$i]['nome'] = $row['nome'];
			$clientes[$i]['telefone'] = $row['telefone'];
			$clientes[$i]['cad_pessoa']=$row['cad_pessoa'];
			$clientes[$i]['cpfcnpj'] = $row['cpfcnpj'];
			$clientes[$i]['estado'] = $row['estado'];
			$clientes[$i]['rua'] = $row['rua'];
			$clientes[$i]['bairro'] = $row['bairro'];
			$clientes[$i]['numero'] = $row['numero'];
			$clientes[$i]['cep'] = $row['cep'];
			$clientes[$i]['telefone'] = $row['telefone'];
			$clientes[$i]['datanascimento'] = $row['datanascimento'];
			$clientes[$i]['complemento'] = $row['complemento'];


			$i++;
		}
		echo json_encode($clientes);
	}
	else
	{
		http_response_code(404);
	}
}
