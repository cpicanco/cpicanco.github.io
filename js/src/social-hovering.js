function onHoverFacebook(e) {

  $(e).hover(mouseEnterCallback, mouseLeaveCallback);

  function mouseEnterCallback() {

    // guard clause
    if ($(this).hasClass('share-enabled'))
      return;

    // check if the sdk is loaded
    var isFBLoaded = (typeof (FB) != 'undefined');

    // ? is a ternary conditional operator...
    isFBLoaded ? parseSingleButton() : initFBandAllButtons();
  }

  // True 
  function parseSingleButton() {
    FB.XFBML.parse($(this)[0]); 
    $(this).addClass('share-enabled');
    $(this).find('#fb-fa').remove();
  }

  // False
  function initFBandAllButtons() {

    var facebook_sdk = '//connect.facebook.net/en_US/sdk.js';
    
    switch (document.documentElement.lang) {
    case 'pt-BR':
        facebook_sdk = '//connect.facebook.net/pt_BR/sdk.js';
        break;
    case 'en-GB':
        facebook_sdk = '//connect.facebook.net/en_GB/sdk.js';
        break;
    };

    $.getScript(facebook_sdk, function(){
      FB.init({
        appId   : 'facebook-id-goes-here',
        xfbml   : true,
        version : 'v2.4'
      });
    });
    $(this).addClass('share-enabled');
    $(document).find('[id=fb-fa]').each(function(){$(this).remove()});
  }

  function mouseLeaveCallback() {

    // do nothing for now

  }
};