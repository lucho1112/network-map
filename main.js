// qunad le DOM est loadé: run
$(document).ready(function() {

  //JQuery va chercher cet élément
  var $listItems = $('.NetworkElements')
              .children('.Menu')
              .children('li');

  //loop sur chacun des éléments
  $listItems.each(function(index, element) {
    //Binde un event-listener "click"
    $(element).on('click', function(){
      // Quand "click", exectue handleClick
      handleClick(element);
    });
  });

});

var handleClick = function(element) {
  // 1- quel elt a été clické
  console.log('clicked el', element);
  // 2- quelle valeur data-map
  var selectedElement = $(element).data('map');
  console.log('selectedElement', selectedElement);
  // 3- aller dans la Map
  var $Maps = $('.NetworkElements')
              .children('.Maps');
  $Maps.find('.Map.is-active').removeClass('is-active');
  // 4- trouver l'elt qui a le data-map correspondant
  var img = $Maps.find('[data-map="' + selectedElement + '"]');
  img.addClass('is-active');
  // 5- enlever la class "is-active" de l'ancien element

}
