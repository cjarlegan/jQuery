$(function () {

    $('button:nth-child(1)').click(function () {
        $("ul").before("<p>Vive la Bretagne et les bretons !</p>");
    });

    $('button:nth-child(2').click(function () {
        $("ul").after("<p>Vive la Bretagne et les bretonnes !</p>");
    });

    $('button:nth-child(3').click(function () {
        $("ul").append("<li>item 5</li>");
    });

    $('button:nth-child(4').click(function () {
        $("ul").prepend("<li>item 0</li>");
    });

    //TP : pour le btn5, quand on clique dessus, on veut ajouter un li avec item1
    $('button:nth-child(5').click(function () {
        $("ul").prepend("<li>item 1</li>");
    });

    //TP : pour le btn6, quand on clique dessus, on veut ajouter un li avec item5
    $('button:nth-child(6').click(function () {
        $("ul").append("<li>item 5</li>");
    });

    // Part 2
    //amélioration : quand on ajoute un item au début, si on tente d'aller en dessous de item 1, alerte
    //amélioration : quand on ajoute un item à la fin, si on tente d'aller au dessus de item 10, alerte
    let mavariable = 1;
    $('button:nth-child(7').click(function () {
        //une variable qui commence à 1
        //tester si mavariable===1
        // ajouter un li avec item + mavariable si mavariable ==1, on décrémente mavariable.
        //else
        //Alerte si variable = 0
        if (mavariable === 1) {
            $("ul").prepend(`<li>item ${mavariable}</li>`);
            mavariable--
        } else {
            alert("Pas possible !");
        }
    });

    let mavariablesupp = 5;
    $('button:nth-child(8').click(function () {
        //une variable qui commence à 1
        //tester si mavariable===1
        // ajouter un li avec item + mavariable si mavariable ==1, on décrémente mavariable.
        //else
        //Alerte si variable = 0
        if (mavariablesupp <= 10) {
            $("ul").append(`<li>item ${mavariablesupp}</li>`);
            mavariablesupp++
        } else {
            alert(`Pas possible au dessus de ${mavariablesupp-1}!`);
        }
    });

    // Part 3
    $('button:nth-child(9').click(function () {
        // Récupérer le dernier caractère du li:first-child
        // Caster ce caractère en number
        // Si ce number est suprérieur à 0 on ajoute sinon alerte
        let n = $('ul li:first-child').text().substr($('ul li:first-child').text().length - 1);
        n = parseInt(n);
        if (n > 1) {
            $("ul").prepend(`<li>item ${n-1}</li>`);
        } else {
            alert("Pas possible !");
        }
    });
    $('button:nth-child(10').click(function () {
        // Récupérer le dernier caractère du li:first-child
        // Caster ce caractère en number
        // Si ce number est suprérieur à 0 on ajoute sinon alerte
        let n = $('ul li:last-child').text().substr($('ul li:first-child').text().length - 2);
        n = parseInt(n);
        if (n < 10) {
            $("ul").append(`<li>item ${n+1}</li>`);
        } else {
            alert("Pas possible !");
        }
    });

}); //pas touche !