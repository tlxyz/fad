<?php
require_once( "../../../config.php");
require_once("../../../system/includes/utils.lib.php");
require_once( "../../../system/includes/auth.lib.php");
require_once( "../../../system/includes/license.lib.php");
require_once("../../../system/includes/reg.lib.php");
if(!isset($status)){$user_id = auth_check_point();}

$user_edit = isset($_POST['id']) ? $_POST['id'] : "0";
$action = isset($_POST['a']) ? $_POST['a'] : "0";
if($action=="d"){//delete user
	delete_user($user_edit);
}elseif($action=="e"){
	if(edit_group($_POST['user'], $_POST['group']) == true || edit_roles($_POST['user'], $_POST['role']) == true){
		echo '<div class="alert alert-success" role="alert">'._("User updated!").'</div>';
	}else{
		echo '<div class="text-center alert alert-danger" role="alert">'._("Error:")." "._("User mofification failed!").'</div>';
	}
}elseif($action=="n"){
		$rec = reg_register($_POST);
	if($rec === REG_FAILED){
		echo '<div class="alert alert-danger" role="alert">'._("Error: Registration failed!").'</div>';
		exit;
	}elseif($rec === REG_SUCCESS){
		echo '<div class="alert alert-info" role="alert">'._("Registration completed, comfirm link sent!").'</div>';
		exit;
	}
}else{
	die('<div class="text-center alert alert-danger" role="alert">'._("Error:")." "._("Malformed data!").'</div>');
}
