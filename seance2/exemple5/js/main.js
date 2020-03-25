$('p').animate({
    fontSize: '+=20px'
}).queue(function() {
    //alert('Bonjour');
    $(this).dequeue();
}).animate({
    fontSize: '-=10px',
    color: 'white',
    backgroundColor: 'green'
}).queue(function() {
    //alert('Au revoir !');
    $(this).dequeue();
}).animate({
    fontSize: '-=10px',
    color: 'blue',
    backgroundColor: 'yellow'
});