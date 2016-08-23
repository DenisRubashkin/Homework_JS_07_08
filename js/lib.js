$( function() {
  createTabs();
  createTooltip();

  function createTabs() {
    $('.tabs__tab:not(.active)').hide();   
    var bookmarks = $('.tabs__bookmark').hover(setBookmarkColor('#ddd'), setBookmarkColor('#eee'));
    
    bookmarks.on('click', changeActiveTab(bookmarks));

    function changeActiveTab(bookmarks) {
      return function() {
        if ( !$(this).hasClass('active') ) {
          bookmarks.removeClass('active');

          var tabs = $('.tabs__tab').hide();
          tabs.removeClass('active');

          $(this).css('background-color', '');
          $(this).addClass('active');

          var activeBookmarkId = $(this)[0].id;

          $('#js-tab' + activeBookmarkId.slice(-3)).addClass('active').show();
        }
      }
    }
    
    function setBookmarkColor(color) {
      return function() {
        if( !$(this).hasClass('active') ) {
          $(this).css('background-color', color);
        }
      }
    }
 
  }

  function createTooltip() {
    var COLOR_BLUE = '#44f';
    var COLOR_GREY = '#ccc';

    $('.fields__tooltip').css('opacity', '0');

    $('.fields__field').hover( setDisplay(1), setDisplay(0) ).focusin( setDisplay(1) ).focusout( setDisplay(0) );

    $('#js-button-show').on('click', 
      function(e) {
        e.preventDefault();
        $('.fields__tooltip').css('opacity', '1');
      }
    ).mousedown(
      function() {
        $(this).css({'color':'#fff', 'background-color':COLOR_BLUE, 'border-color':COLOR_BLUE});
      }
    ).mouseup(
      function() {
        $(this).css({'color':'#000', 'background-color':COLOR_GREY});
      }
    ).focusin( 
      function() {
        if(!($(this).css('color')=='rgb(255, 255, 255)')) {
          $(this).css({'border-color':COLOR_BLUE, 'background-color':COLOR_GREY});
        }
      }
    ).focusout( 
      function() {
        $(this).css({'border-color':'', 'background-color':''});
      }
    ).hover(
      function() {
        if ( !$(this).is(':focus') ) {
          $(this).css('background-color', COLOR_GREY);
        }
      },
      function() {
        if ( !$(this).is(':focus') ) {
          $(this).css('background-color', '');
        }
      }
    );

    function setDisplay(value) {
      return function() {
        var fieldId = $(this)[0].id;
        $('#js-' + fieldId).animate({opacity: value}, 700);
      }
    }

  }
  
});
