/**
 * ACTIVER LA LIGHTBOX
 * Etape 1 : quand on clique sur une img on ouvre la lightbox
 * 
 * CLOSE LA LIGHTBOX
 * Etape 1 : quand on clique sur .cadre .icon-close on ferme la lightbox
 * 
 * REMPLACER IMG LIGHTBOX PAR IMG CLIQUEE
 * Etape 1 : Quand on clique sur une img de la galerie on récupère la 
 * valeur de son attribut src (variable)
 * Etape 2 : On remplace la valeur de l'attribut src de .lightbox img par 
 * la valeur de l'attribut src de l'img cliquée dans la galerie (variable)
 * 
 * FLECHES IMG SUIVANTE 
 * Etape 1 : compter le nombre d'img dans la galerie (variable)
 * Etape 2 : récupérer index de img cliquée dans la galerie (variable)
 * Etape 3 : quand on clique sur btn pour img suivante, récupérer la valeur 
 * de l'attribut src de l'img index++
 * Etape 4 : si l'index de l'img suivante est < au nombre total d'img dans 
 * la galerie, on incrémente l'index (variable indexImg), sinon on retourne
 * sur l'index 0 (variable indexImg = 0)
 * Etape 5 : remplacer la valeur de l'attribut src de .lightbox img par
 * la valeur de l'attribut src de l'img suivante dans la galerie (variable newSrc)
 * 
 * FLECHE IMG PRECEDENTE
 * Idem bouton next mais en décrémentant indexImg
 * 
 * FONCTION POUR FACTORISER LE CHANGEMENT D'IMG DANS LA LIGHTBOX
 * Etape 1 : créer une fonction qui remplace l'img dans la lightbox et l'appeler à chaque 
 * fois que nécessaire 
 * 
 * GENERER LES PUCES EN FONCTION DU NOMBRE D'IMAGES
 * Etape 1 : déclarer une variable qui contiendra un ensemble ul li 
 * Etape 2 : créer fonction pour générer l'ensemble ul li
 * Etape 3 : créer le bloc ul
 * Etape 4 : créer autant de li qu'il y a d'images dans la galerie
 * Etape 5 : Ajouter l'ensemble ul li dans le dom sous la lightbox
 * 
 * ACTIVER LA PUCE QUI CORRESPOND A L IMAGE CLIQUEE
 * Etape 1 : Créer fonction qui active une puce
 * - supprime class puce-active sur tous les li
 * - ajouter class puce-active sur le li qui a le meme index que indexImg
 * Etape 2 : Appeler la fonction quand on clique sur une img de la galerie
 * - appeler la fonction quand on clique sur les boutons next et before
 * 
 * CHANGER IMAGE QUAND ON CLIQUE SUR UNE PUCE
 * Etape 1 : récupérer index de puce cliquée et l'affecter à indexImg
 * Etape 2 : appeler changeImg() et activePuce()
 * 
 * 
 * AFFICHER LES LEGENDES DYNAMIQUEMENT DANS LA LIGHTBOX
 * Etape 1 : récupérer valeur de l'attr data-legend
 * Etape 2 : insérer le contenu textuel dans .lightbox figcaption
 * 
 */

$(function () {
    let index;
    let srcImg;
    let nbImg;
    let txtdatalegend;

   nbImg = $(".galerie img").length
   console.log(nbImg);

   //fonction de creation des puces
   generatePuces = () => {
       listPuces = '<ul class="list-puces">';
       for (let i = 0; i < nbImg; i++) {
       listPuces += '<li></li>';
        }
        listPuces += '</ul>';
        $(".lightbox .cadre").append(listPuces);
    }

    //fonction qui active la puce de l'image cliquée ou de la puce cliquée
    activepuce = () => {
        $('.lightbox ul li').removeClass('puce-active'); //suppression de la puce active
        $('.lightbox ul li').eq(index).addClass('puce-active');//ajout de la puce active sur l'index de l'image cliquée
    }

    adddatalegend = () =>{
        txtdatalegend = $('.galerie img').eq(index).attr('data-legend'); //getter src de l'image correspondante
        $('.lightbox figcaption').text(txtdatalegend);
    }

    changeimg = () =>{
        srcImg = $('.galerie img').eq(index).attr('src'); //getter src de l'image correspondante
        $('.lightbox img').attr('src',srcImg);
    }

    generatePuces();//à l'ouverture

    //click image
    $('.galerie img').click(function(){
        $('.lightbox').fadeIn(500);//on aurait pu utiliser show. fadeIn met en display block
        $('.lightbox').css({'display':'flex'});
        // les 2 lignes ci-dessus peuvent s'écrire $('.lightbox').fadeIn(500).css({'display':'flex'});
        index = $('.galerie img').index($(this));//index de l'image cliquée
        changeimg();//change l'image de la lightbox
        activepuce();//on lance activepuce
        adddatalegend();        
    })

    //click puce
    $('.list-puces li').click(function(e){
        index = $('.list-puces li').index($(this));//index de la puce cliquée
        changeimg();//change l'image de la lightbox
        activepuce();//on lance activepuce
        adddatalegend();
    })

    //bouton close
    $('.lightbox .icon-close').click(function(){
        $('.lightbox').fadeOut(500);//on aurait pu utiliser hide
    })

    //bouton next
    $('.lightbox .icon-navigate_next').click(function(e){
        index = (index+1) % nbImg;//modulo
        changeimg();//change l'image de la lightbox
        activepuce();//on lance activepuce
        adddatalegend();
    })

    //bouton prev
    $('.lightbox .icon-navigate_before').click(function(e){
        index = (index-1) % nbImg;//modulo
        changeimg();//change l'image de la lightbox
        activepuce();
        adddatalegend();
    })

    $('.lightbox').click(function(){//pour fermer la lightbox sur le click en dehors des boutons
        $('.lightbox').fadeOut();
    })

    $('.lightbox .cadre').click(function(e){//pour ne pas que la lightbox se ferme sur le click de l'image (du cadre)
        e.stopPropagation();//pour ne pas propager le click dans le DOM
    })

}); //pas touche !