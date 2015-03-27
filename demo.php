<!DOCTYPE html>
<html>
<head>
    <title>alt-checkbox PHP demo</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="jquery.alt-checkbox.js"></script>
    <link rel="stylesheet" href="jquery.alt-checkbox.icon-font.css">
    <link rel="stylesheet" href="jquery.alt-checkbox.css">
</head>
<body>
    <h1>alt-checkbox PHP demo</h1>

    <?php if (isset($_POST['checkbox1'])) : ?>
        <p style="color: #ffa500">Checked!</p>
    <?php endif; ?>

    <form action="demo.php" method="post">
        <input type="checkbox" id="checkbox1" name="checkbox1"<?php if (isset($_POST['checkbox1'])) : ?> checked<?php endif; ?>>
        <label for="checkbox1" >Check Me! I'm medium.</label>
        <br><br>
        <input type="submit">
    </form>

    <script>
        jQuery("#checkbox1").altCheckbox();
    </script>

</body>
</html>