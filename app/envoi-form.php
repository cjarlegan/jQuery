<?php
// var_dump($_POST);
$message="<p>prénom : ".$_POST['prenom']."</p>";
$message+="<p>nom : ".$_POST['nom']."</p>";
$message+="<p>email : ".$_POST['email']."</p>";
$message+="<p>tel : ".$_POST['tel']."</p>";
$message+="<p>message : ".$_POST['message']."</p>";

$dest="cjarlegan@gmail.com";
$subject="nouveau mail de ".$_POST['nom'];

$send = mail($dest, $subject, $message);

if ($send) {
    echo 'yes';
} else {
    echo 'no';
}
?>