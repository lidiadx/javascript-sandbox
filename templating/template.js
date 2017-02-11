//
// EXAMPLE:
// in the example below `*(` is the default opening delimiter and
//  `)*` is the default closing delimiter
// var string = "Hi, my name is Pete. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Pete. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
//
//
// Now it's your turn!



/**
 * Template renderer
 * @param  {[type]} str    String to be used during generation
 * @param  {[type]} delims Custom delimiters
 * @return {[type]} str    The generated template
 */
function template(str, delims) {
  //
  var open = "*(";
  var close = ")*";
  if (delims){
    open = delims.open;
    close = delims.close;
  }

  return function (/* value...*//* repeat */) {

    var placeholders = str.split(open);

    for (var i = 0; i < placeholders.length; i++){
        var indexOpen = str.indexOf(open);
        var indexClose = str.indexOf(close);
        if (indexOpen > 0 && indexClose > 0){
            str = str.slice(0, indexOpen) + arguments[i] + str.slice(indexClose+close.length);
        }
    }
    var repeat = arguments[arguments.length-1];
    for (var i = 0; i < repeat; i++){
        console.log(str);
    }
    return str;
  };

}

var string = "Is <<* thing *>> easy to <<* action *>> ?";

var logResult = template(string, {open: '<<*', close: '*>>'});
logResult("ice cream", "buy");

// All tests run!
