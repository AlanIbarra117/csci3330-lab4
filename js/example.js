$(function() {
  
  // TODO: Create a list of JS Object each representing a game. 
  // Use the data contained in the <ul> to build this list of game titles.


  var gameList, newItemForm, newItemButton;
  var item = '';                                 
  
  
  gameList = $('ul');                               
  newItemForm = $('#newItemForm');              
  newItemButton = $('#newItemButton');          

  // TODO:  Render game titles as list items inside the <ul>. 
  // To do so, create a function that loops through each object in the game list, 
  // create a new node "list item" holding the game title and 
  // inject the new node inside the <ul>.



  function updateCount() {                      
    var items = $('li').length; 
    $('#counter').text(`${items}`);                   
  }
  updateCount();                                 

  
  newItemButton.show();                         
  newItemForm.hide();                           
  $('#showForm').on('click', function() {        
    newItemButton.hide();                       
    newItemForm.show();                         
  });

  
  newItemForm.submit(function(e) {       
    e.preventDefault();                         
    var text = $('input:text').val();           
    gameList.append(`<li>${text}</li>`);      
    $('input:text').val('');                    
    updateCount();                              
  });  



});