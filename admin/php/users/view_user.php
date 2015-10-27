<?php
require_once( "../../../config.php");
require_once( "../../../system/includes/auth.lib.php");
require_once( "../../../system/includes/license.lib.php");
require_once("../../../system/includes/utils.lib.php");
list($status, $user) = auth_get_status();

if($status !== AUTH_LOGGED){ die(); }

$user_id = $user['id'];
if(is_admin($user_id) && is_numeric($_GET['id'])) {
$view_user = $_GET['id'];
$user_info = user_get_info($view_user);
$user_group = get_user_attr($view_user);
$user_roles_arr = get_user_attr($view_user, "r");
$roles_nums = count($user_roles_arr);
$user_roles = "";
$count = 0;
if($roles_nums == 0){
	$user_roles .= _("No special roles");
}else{
	foreach($user_roles_arr as $user_role){
		$user_roles .= $user_role;
		$count++;
		if($count > $roles_nums){$user_roles .= ",";}
	}
}
?>
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title text-center" id="user_view"><?php echo _("User informations");?></h4>
	</div>
	<form action="php/users/edit_user.php" method="POST" id="user_edit" class="modal-form" name="user_edit">
		<div class="modal-body">
			<div class="text-center">
				<?php echo profile_img($view_user, "clear", "../"); ?>
				<hr />
				<?php echo get_real_name($view_user).is_online($view_user); ?>
			</div>
			<hr />
			<ul class="zebra">
			<li class="even"><strong class="left"><?php echo _("Iscritto"); ?>:</strong><span class="right"><?php echo date("d/m/Y", $user_info['regdate']);?></span></li>
			<li class="odd"><strong class="left"><?php echo _("E-mail"); ?>:</strong><span class="right"><?php echo $user_info['mail'];?></span></li>

			<li class="even"><strong class="left"><?php echo _("Group"); ?>:</strong><span class="right">
			<select class="form-control selectpicker show-tick" id="group" name="group">
			<?php
			$opt ="";
			foreach(arr_groups() AS $single_group){
				$opt .= "<option value='".$single_group['id']."'";
				if(in_group($view_user, $single_group['name'])){ $opt .= 'selected'; }
				$opt .= ">".ucfirst($single_group['name'])."</option>";
			}
			echo $opt;
			?>
			</select>
			</span></li>
			<li class="odd"><strong class="left"><?php echo _("Roles"); ?>:</strong><span class="right">
			<select class="form-control selectpicker show-tick" id="role" name="role[]" multiple="multiple">
			<?php
			$opt ="";
			foreach(arr_roles() AS $single_roles){
				$opt .= "<option value='".$single_roles['id']."'";
				if(has_role($view_user, $single_roles['name'])){ $opt .= "selected "; }
				$opt .= ">".ucfirst($single_roles['name'])."</option>";
			}
			echo $opt;
			?>
			</select>
			</span></li>	
			</ul>
			<input type="hidden" name="user" id="user" value="<?php echo $view_user; ?>" />
			<input type="hidden" name="a" id="a" value="e" />
		</div>
		<div class="modal-footer">
			<button type="submit" class="btn btn-primary"><?php echo _('Save');?></button>
		</div>
	</form>
<?php
	require_once( "../admin_scripts.php");
}

