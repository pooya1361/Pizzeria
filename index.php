<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>The first php page</title>

<link rel="stylesheet" type="text/css" href="style.css"></link>

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script
	src="http://jqueryrotate.googlecode.com/svn/trunk/jQueryRotate.js"></script>
<script src="IngredientsSlideBar.js"></script>
<script src="main.js"></script>
</head>
<body id='page'>
	<div>
		<section id='header'>
<?php
include 'header.php';
?>

<?php
include 'menu.php';
?>

	</section>
		<section id='content'>
	<?php
	include 'PizzaMaker.php';
	?>
	</section>
	</div>
</body>
</html>
