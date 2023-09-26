//Name: Akshay Kapoor, Email: ak4229@drexel.edu
//CS530: DUI, Assignment 4
function searcher(){
	this.update = (data) => {
		$('.table').empty();
		for (var i = 0; i < data.length; i++) {
			const x = data[i];
			const row = $(`
				<tr>
				<td><img src="${x.categoryImage}"></td>
				<td><p><a style="color:#00008b;" href="/view?uid=${x.uid}"><b>${x.name}</b></a><br>${x.mailStreet}<br>${x.mailCity}, ${x.mailState} ${x.mailZIP}</p></td>
				<td class='col-md-8 show-read-more'>${x.mission}</td>
				</tr>
					
				  
				
			`);
			
			$('.table').append(row);
		}
			
			var maxLength = 300;
			$(".show-read-more").each(function() {
			  var myStr = $(this).text();
			  if ($.trim(myStr).length > maxLength) {
				var newStr = myStr.substring(0, maxLength);
				var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
				$(this).empty().html(newStr);
				$(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
				$(this).append('<span class="more-text">' + removedStr + '</span>');
			  }
			  var search = $("#query").val();
			  var lowercasesearch = search.toLowerCase();
			  var filter = new RegExp(search, "ig");
			  var repstr = "<span class='highlight'>" + search + "</span>";
			   
			  $(this).html($(this).html().replace(filter, repstr));
			  
			  
			});
			$(".read-more").click(function() {
			  $(this).siblings(".more-text").contents().unwrap();
			  $(this).remove();
			});
			
	
	
}
    this.load = () => {	
			var str = $("#query").val();
			var query = {query: str};
			
			
			$.get('/api/get_data', query, (data) => {
				this.update(data);
			});
	
	}
	
	
	
		
	
	
}