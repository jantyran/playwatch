<?php
	ini_set("display_errors", On);
	error_reporting(E_ALL);
	header('Content-Type: text/html; charset=UTF-8');
	$test = $_POST['test'];
	$com_img = $_POST['complete_img'];
?>
<!DOCTYPE html>
<html lang = “ja”>
	<head>
		<meta charset = “UFT-8”>
		<title>dasign_complete</title>
		<meta name="keywords" content="オリジナル,腕時計,制作,作成,シェア">
		<meta name="description" content="tokei_design">
		<meta name="author" content="SitePoint">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta name="format-detection" content="telephone=no">
		  <!--[if IE]>
		  <link href="design.css" type="text/css" rel="stylesheet" />
		  <![endif]-->
		<link rel="stylesheet" type="text/css" href="css/reset.css">
		<link media="only screen and (max-device-width:639px)" href="css/complete_sp.css" type="text/css" rel="stylesheet" />
		<link media="screen and (min-device-width:640px)" href="css/complete.css" type="text/css" rel="stylesheet" />
		<!-- juicer tag -->
		<script src="//kitchen.juicer.cc/?color=H0ySAICY65M=" async></script>

	</head>

	<body>
		<div>
			 
		</div>
		<div>
			<?php 
				$img = "<img src='".$com_img."'>";
				// echo '<img src="'+ $com_img +'">';
				echo $img;
			?>
		</div>
	</body>
</html>