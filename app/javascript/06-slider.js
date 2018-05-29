/**
 * FUNCTION SLIDENEXT 
 * Etape 1 : positionner le ul en left -(largeur du slider)
 * avec une animation
 * Etape 2 : Une fois l'animation terminée, passer le 1er li après 
 * le dernier li
 * Etape 3 : repositionner le ul en left 0
 * Etape 4 : appeler notre fonction toutes les 3 secondes
 * 
 * FUNCTION SLIDEPREV
 * Etape 1 : positionner ul en left - (largeur du slider)
 * Etape 2 : simultanément, passer le dernier li devant le premier li
 * Etape 3 : repositionner le ul en left 0 avec une animation
 * 
 * DEFILEMENT AUTO AU CHARGEMENT DE LA PAGE
 * appeler slideNext dans un setInterval toutes les 3000ms
 * 
 * CLICK SUR BTN BEFORE
 * Etape 1 : clearInterval pour stoper defilement
 * Etape 2 : appel function slidePrev juste une fois
 * 
 * CLICK SUR BTN NEXT
 * Etape 1 : clearInterval pour stoper defilement
 * Etape 2 : appel function slideNext juste une fois
 * 
 * EMPECHER LE SLIDE TANT QUE L ANIMATION N EST PAS TERMINEE
 * Etape 1 : declarer un boolean a true au chargement de la page
 * Etape 2 : quant on clique sur un bouton on passe le boolean à false
 * Etape 3 : accepter le click si boolean à true
 * Etape 4 : à la fin de l'animation repasser boolean à true
 * 
 * PASSER EN RESPONSIVE
 * Etape 1 : w100% pour .slider dans le scss
 * Etape 2 : récupérer avec jquery le width de .slider dans variable
 * Etape 3 : avec jquery affecter aux li le width de .slider (variable)
 * Etape 4 : modifier les fonctions slideNext et slidePrev pour que 
 * le ul se positionne en - width du .slider (variable)
 * Etape 5 : recalculer le width du slider et ajuster le width des li
 * au resize de window

 */
$(function () {

    //declaration variables
    let auth = true;
    let w = $('.slider').width();//getter
    $('.slider li').width(w);//setter

    //recalculer w au window resize et redonner un width au li
    $(window).resize(function(){
        w = $('.slider').width();//getter
        $('.slider li').width(w);//setter
    })

    //les fonctions
    //defilement vers left
    let defilLeft = function () {
        $('.slider ul').animate({'left': -w}, 1000, function () { 
            $('.slider li:last').after($('.slider li:first')); 
            $(this).css({'left': 0}); 
            auth = true;
        });
    }
    //defilement vers right
    let defilRight = function () {
        $('.slider ul').css({ 'left': -w });
        $('.slider li:first').before($('.slider li:last'))
        $('.slider ul').animate({ 'left': 0 },1000,function(){
            auth = true;;
        });
    }

    let id = setInterval(defilLeft, 3000);

    //les actions

    //quand on survol un boutton on stop le défilement
    $('.slider span').mouseenter(function(){
        clearInterval(id);
    })

    //quand on quitte le bouton on relance
    $('.slider span').mouseleave(function(){
        id = setInterval(defilLeft, 3000);
    })

    //quand on clique sur icon-navigate_before
    $('.slider .icon-navigate_before').click(function(){
        if(auth){
            auth = false;
            defilLeft();
        }        
    })

    //quand on clique sur icon-navigate_next
    $('.slider .icon-navigate_next').click(function(){
        if(auth){
            auth = false;
            defilRight();
        }
    })


}); //pas touche !