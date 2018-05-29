$(function () {

    $('button:nth-child(1)').click(function () {
        let text = $('ul').text(); //getter
        $('p').text(text); //setter
    });

    $('button:nth-child(2)').click(function () {
        $('p').text('toujours rien pour l\'instant'); //setter
    });

    $('button:nth-child(3)').click(function () {
        let content = $('ul').html(); //getter
        alert(content);
    });

    $('button:nth-child(4)').click(function () {
        $('p').html('<b>toujours rien pour l\'instant</b>'); //setter
    });

    $('button:nth-child(5)').click(function () {
        let srcImg = ($('.img1').attr('src')); //getter
        console.log(srcImg);
    });

    $('button:nth-child(6)').click(function () {
        r
    });

    $('button:nth-child(7)').click(function () {
        let val = ($('#name').val()); //getter
        console.log(val);
    });

    $('button:nth-child(8)').click(function () {
        $('#name').val('Cédric'); //setter
    });

    //Exercice
    //Quand on clique sur l'img1, on change l'img2 pour afficher img1 à la place
    //Quand on clique sur l'img2, on affiche 2ximg2 à la place de img1 et img2
    $('img').click(function () {
        if (!$(this).hasClass('img3')) {
           let srcImg = $(this).attr('src');
            $('.img3').attr('src', srcImg);
        }
    });

    // stop propagation
    // quand on clique sur un li, on affiche son contenu html dans une alert
    $('li').click(function(e){
        e.stopPropagation();
        alert($(this).html());
    });


}); //pas touche !