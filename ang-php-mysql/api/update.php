<?php
require 'database.php';
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
$method = $_SERVER['REQUEST_METHOD'];

 

 $id = $_GET['id'];
 $postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata, true);
	 
	if($request['nome'] === '' || $request['cpfcnpj'] === '')
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

	$sql = "UPDATE clientes SET nome='$nome',rua='$rua', cad_pessoa='$cad_pessoa', cpfcnpj='$cpfcnpj', status='$status', cep='$cep', telefone='$telefone', bairro='$bairro', numero='$numero', estado='$estado', complemento ='$complemento', datanascimento='$datanascimento'  WHERE id = $id";
	echo $sql;
	if($db->query($sql))
	{
		
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}