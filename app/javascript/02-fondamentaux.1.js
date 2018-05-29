$(function () {
    //cibler un element du dom et invoquer une méthode sur cet élément
    //$('selecteur css').methodeJQuery(1 ou plusieurs args);

    //écouter d'event sur un objet du DOM
    // $('selecteur css').evenement(function(){
    //code à executer quand on declanche l'événement sur cet objet
    //});

    $('p').css({
        'background': 'red',
        'color': 'blue',
        'fontStyle': 'bold'
    });

    $('button:nth-of-type(1)').click(function () {
        $('p').hide(3000);
    });
    $('button:nth-of-type(2)').click(function () {
        $('p').show();
    });

    $('button:first-child').click(function () {
        alert($(this).text());
        //retourne le texte à l'intérieur de l'élément ciblé
        //$this fait référence au boutton clické
    });

    $('#btn').dblclick(function () {
        alert('double click');
    });

    $('button:nth-child(3)').mouseenter(function () {
        alert('mouseenter');
    });

    $('button:nth-child(4)').mouseleave(function () {
        alert('mouseleave');
    });

    $('button:nth-child(5)').hover(function () {
            console.log('enter');
        },
        function () {
            console.log('enter');
        }
    );

}); //pas touche !