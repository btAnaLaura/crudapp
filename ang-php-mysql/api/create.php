<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if($request['nome']) === '' || $request['cpf'] === '')
	{
		return http_response_code(400);
	}
 
	$nome= $request["nome"];
	$rua=$request["rua"];
	$cad_pessoa=$request["cad_pessoa"];
	$cpfcnpj=$request["cpfcnpj"];
	$status=$request["status"];
	$cep=$request["cep"];
	$bairro=$request["bairro"];
	$numero=(int)$request["numero"];
	$telefone=$request["telefone"];
	$estado=$request["estado"];
	$complemento=$request["complemento"];
	$datanascimento=$request["datanascimento"];

 $sql = "INSERT INTO clientes (nome,telefone, rua, cad_pessoa, cpfcnpj, status, cep, bairro, estado, numero, complemento, datanascimento, datacadastro)
	 VALUES ('$nome','$telefone', '$rua', '$cad_pessoa', '$cpfcnpj', '$status', '$cep', '$bairro', '$estado', '$numero', '$complemento', '$datanascimento', CURRENT_TIMESTAMP())";
	if($db->query($sql))
	{
		http_response_code(201);
		$clientes = [
		'nome' => $nome,
		'telefone' => $telefone,
		'cad_pessoa'=>$cad_pessoa,
		'cpfcnpj'=> $cpfcnpj,
		'status'=> $status,
		'cep'=>$cep,
		'bairro'=> $bairro,
		'estado'=> $estado,
		'numero'=>$numero,
		'complemento' => $complemento,
		'datanascimento'=> $datanascimento,
		'rua'=>$rua
];
		echo json_encode($clientes);
	}
	else
	{
		http_response_code(422);
	 
	}
}