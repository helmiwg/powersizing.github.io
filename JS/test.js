
$(document).ready(function(){

$('.edit').editable(function(value, settings) { 
     console.log(this);
     console.log(value);
     console.log(settings);
     return(value);
  }, { 
     tooltip   : "Click to edit...",
      style  : "inherit"
 })    
	// Get items
	function getItems(exampleNr)
	{
		var columns = [];

		$(exampleNr + ' ul.sortable-list').each(function(){
			columns.push($(this).sortable('toArray').join(','));				
		});

		return columns.join('|');
	}

	// Render items
	function renderItems(items)
	{
		var html = '';
	
		var columns = items.split('|');
		
		for ( var c in columns )
		{
			html += '<div class="column left';

			if ( c == 0 )
			{
				html += ' first';
			}

			html += '"><ul class="sortable-list">';

			if ( columns[c] != '' )
			{
				var items = columns[c].split(',');

				for ( var i in items )
				{
					html += '<li class="sortable-item" id="' + items[i] + '">Sortable item ' + items[i] + '</li>';
				}
			}

			html += '</ul></div>';
		}

		$('#example-2-4-renderarea').html(html);
	}

	// Example 2.1: Get items
	$('#example-2-1 .sortable-list').sortable({
		connectWith: '#example-2-1 .sortable-list'
	});


	$('#btn-get').click(function(){
		//alert(getItems('#example-2-1'));
        
        

		$('#result').html(getItems('#example-2-1'));
	});



	


	
});
