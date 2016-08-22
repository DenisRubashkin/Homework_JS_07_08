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
    $('.fields__tooltip').css('opacity', '0');

    $('.fields__field').hover( setDisplay(1), setDisplay(0) ).focusin( setDisplay(1) ).focusout( setDisplay(0) );

    $('#js-button-show').on('click', 
      function() {
        $('.fields__tooltip').css('opacity', '1');
      }
    ).mousedown(
      function() {
        $(this).css({'color':'#fff', 'background-color':'#44f', 'border-color':'#44f'});
      }
    ).mouseup(
      function() {
        $(this).css({'color':'#000', 'background-color':'#ccc'});
      }
    ).focusin( 
      function() {
        if(!($(this).css('color')=='rgb(255, 255, 255)')) {
          $(this).css({'border-color':'#44f', 'background-color':'#ccc'});
        }
      }
    ).focusout( 
      function() {
        $(this).css({'border-color':'', 'background-color':''});
      }
    ).hover(
      function() {
        if ( !$(this).is(':focus') ) {
          $(this).css('background-color', '#ccc');
        }
      },
      function() {
        if ( !$(this).is(':focus') ) {
          $(this).css('background-color', '');
        }
      }
    )

    function setDisplay(value) {
      return function() {
        var fieldId = $(this)[0].id;
        $('#js-' + fieldId).animate({opacity: value}, 250);
      }
    }

  }
  
})