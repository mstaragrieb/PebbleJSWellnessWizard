
/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Clock = require('clock');

var main = new UI.Menu({
    sections: [{
        items: [{title:'Wellness Wizard'},{title: 'Anxiety'}, {title: 'Mood'},{title:'Quick Log'}]
    }]
});

main.show();

main.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
});

//main.on('click', 'down', function(e) {
//  var card = new UI.Card();
//  card.title('A Card');
//  card.subtitle('Is a Window');
//  card.body('The simplest window type in Pebble.js.');
//  card.show();
//});