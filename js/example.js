$(function() {
  
  // Create a list of JavaScript objects.
  // Each object represents a game.
var games = [
  { title: 'The Legend of Zelda: Breath of the Wild' },
  { title: 'God of War Ragnarök' },
  { title: 'Halo Infinite' },
  { title: 'Minecraft' },
  { title: 'Super Mario Odyssey' }
];

  var gameList, newItemForm, newItemButton;
  var item = '';                                 
  
  
  gameList = $('ul');                               
  newItemForm = $('#newItemForm');              
  newItemButton = $('#newItemButton');          

  // Render game titles as list items inside the <ul>.
  function renderGames() {
    gameList.empty();

    games.forEach(function(game) {
      var newItem = $('<li></li>');
      newItem.text(game.title);
      gameList.append(newItem);
    });
  }

  // Display the games when the page loads.
  renderGames();


  // Update the number of games displayed.
  function updateCount() {                      
    var items = $('#gameList li').length;
    $('#counter').text(`${items}`);                   
  }

  updateCount();                                 

  
  // Show/hide the new game form.
  newItemButton.show();                         
  newItemForm.hide();                           

  $('#showForm').on('click', function() {        
    newItemButton.hide();                       
    newItemForm.show();                         
  });

  
  // Add a new game to the list.
  newItemForm.submit(function(e) {       
    e.preventDefault();                         

    var text = $('input:text').val();           
    gameList.append(`<li>${text}</li>`);      

    $('input:text').val('');                    
    updateCount();                              
  });  

});


