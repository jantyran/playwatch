<?php
$com_img = $_POST[‘complete_img’];

?>
<!DOCTYPE html>
<html lang = “ja”>
	<head>
		<meta charset = “UFT-8”>
		<title>フォームからデータを受け取る</title>
	</head>
	<body>
		<?php echo '<img src="'+ $com_img +'">';?>
	</body>
</html>