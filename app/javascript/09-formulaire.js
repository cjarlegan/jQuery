/**
 * MASQUER LES ICONS CHECK AU CHARGEMENT DE LA PAGE
 * 
 * RECUPER VAL DE DATA-DEFAULT POUR L AFFICHER DANS CHAQUE CHAMPS
 * Etape 1 : pour chaque champs de saisie
 * - récupérer (variable) la val de l'attr data-default
 * - affecter au champ la valeur de l'attr data-default
 * 
 * VIDER UN CHAMPS DE SAISIE AU FOCUS SI PAR REMPLI
 * Etape 1 : au focus si user n'a pas deja saisi quelque chose
 * - on vide le champs
 * - sinon on laisse ce que l'user a saisi
 * 
 * REMETTRE VAL PAR DEFAUT DANS UN CHAMP SI NON REMPLI
 * Etape 1 : au blur, si champs non rempli par user
 * - on remet la valeur par defaut
 * - afficher le span .validation
 * - remplacer .icon-check par .icon-close
 * 
 * QUAND LE FORMULAIRE EST ENVOYE
 * Etape 1 : si un seul champs required n'est pas rempli
 * - on annule l'envoi du formulaire
 * - on affiche .icon-close dans les champs non remplis
 * Etape 2 : envoi des datas du formulaire avec ajax vers script php
 * 
 * FACTORISER LE CODE
 * Etape 1 : créer une fonction pour le changement des icons
 * et l'appeler dans notre code à chaque fois que nécessaire
 */

'use strict';

$(function () {
    
    let listInputs = $('.formulaire [data-default]'); //list des input avec datadefault
    let listRequired = $('.formulaire [required]'); //list des input avec required
    
    listInputs.each(function(){//pour chaque input...
        $(this).val($(this).attr('data-default'));//...on veut lui attribuer son data-default
    });

    listInputs.focus(function(){
        if ( $(this).val() === $(this).attr('data-default') ) {
            $(this).val('');
        }
    });

    listInputs.blur(function(){
        if ( $(this).val() === '' ) {
            $(this).val($(this).attr('data-default'));//si le champ est vide on lui remet sa valeur par defaut
            if($(this).prop('required')){//test d'une propriété
                $(this).siblings('.formulaire .validation').addClass('icon-close');//si required on ajoute la classe icon-close et on affiche le .validation
            }
        }else{
            //if ( $(this).val() != $(this).attr('data-default') ) {
                $(this).siblings('.formulaire .validation').removeClass('icon-close').addClass('icon-check');
            //}
        }
    });

    $('.formulaire').submit(function(){
        let valid = true;
        listRequired.each(function(){
            if ( $(this).val() === $(this).attr('data-default')){
                valid = false;
                $(this).siblings('.formulaire .validation').addClass('icon-close');
            }
        });
        if (valid) {
            //envoi du formulaire
            $.ajax({
                method: 'POST',//POST ou GET
                url: 'envoi-form.php',
                data: $('.formulaire').serialize()
            }).done(function(msg) {//récupération de la réponse du script php
                //alert('reponse : ' + msg);
                if (msg==='yes'){
                    $('.formulaire .success').text('email envoyé avec succès').show();
                }else{
                    $('.formulaire .alert').text(`échec d'envoi`).show();
                }
            });
        }
        return false;
    });

}); //pas touche !