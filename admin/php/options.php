<?php
require_once( "../../config.php");
require_once( "../../system/includes/auth.lib.php");
require_once( "../../system/includes/license.lib.php");
require_once("../../system/includes/utils.lib.php");
auth_check_point(); 
?>
<div class="row">
	<div class="col-md-12" id="dashboard">
	     <h2><?php echo _('Options'); ?></h2>
	     <div class="comfirm-box">
   		     <span class="fa fa-times"></span>
		     <div class="content-box-message">
		     </div>
	     </div>
		 <hr />
	</div>
	<div class="col-md-12 col-sm-12 col-xs-12">
	    <div class="panel panel-default">
	        <div class="panel-heading">
	            Fad <strong><?php echo get_info('version');?></strong><button class="pull-right btn btn-primary btn-xs" ><?php echo _('Save options');?></button>
	        </div>
	        <div class="panel-body">
<?php foreach(list_info() as $info){ 
	echo $info['value']."<br />";
	
	}?>				
			</div>
		</div>
	</div>
</div>
