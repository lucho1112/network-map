// qunad le DOM est loadé: run
$(document).ready(function() {

  //JQuery va chercher cet élément
  var $listItems = $('.NetworkElements')
              .children('.NetworkElements-nav')
              .children('li');

  //loop on each element
  $listItems.each(function(index, element) {
    //Binde with "click" event-listener
    $(element).on('click', function(){
      // when "click"--> execute handleClick
      handleClick(element);
    });
  });

});

var handleClick = function(element) {
  // 1- which elt has been clicked on
  console.log('clicked el', element);
  // 2- which value for data-map
  var selectedElement = $(element).data('map');
  console.log('selectedElement', selectedElement);
  // 3-  go to Map
  var $Medias = $('.NetworkElements').children('.NetworkElements-medias');
 $Medias.find('.Map.is-active').removeClass('is-active');
  // 4- find the elt with the correponding data-map
  var img = $Medias.find('[data-map="' + selectedElement + '"]');
  img.addClass('is-active');
  // 5- take out class "is-active" from former element
}
