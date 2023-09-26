//Name: Akshay Kapoor, Email: ak4229@drexel.edu
//CS530: DUI, Assignment 4
function viewer(){
	this.update = (data) => {
			const x = data;
			const row = $(`
				<img src="${x.categoryImage}" style="width:150px;height:150px;">	
			`);
			const row2 = $(`
				<a style="color:black;"><b>${x.name}</b></a>	
			`);
			
			const row3 = $(`
				<img src="${x.ratingImage}" style="width:80px;height:20px;">	
			`);
			
			const row4 = $(`
				<p><a style="color:black;"></a><br>${x.mailStreet}<br>${x.mailCity}, ${x.mailState} ${x.mailZIP}</p>	
			`);
			
			const row5 = $(`
				<a style="color:black;">Organization Website:</a><a style="color:blue;" href="${x.websiteURL}" >${x.websiteURL}</a>	
			`);
			
			const row6 = $(`
				<a style="color:black;">Charity Navigator</a><a style="color:blue;" href="${x.charityNavigatorURL}" >Detailed Analysis</a>	
			`);
			
			const row7 = $(`
				<a style="color:black;">${x.mission}</a>	
			`);
			
			$('.image').append(row);
			$('.mainhead2').append(row2);
			$('.rating').append(row3);
			$('.address').append(row4);
			$('.URL').append(row5);
			$('.charitynavURL').append(row6);
			$('.mission').append(row7);

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
		
			
		}
			
	

    this.load = () => {	
			const params = new URLSearchParams(window.location.search);
			const unq = params.get('uid');
			var uid = {uid: unq};
			$.get('/api/get_viewer_data', uid, (data) => {
				console.log(data);
				this.update(data);
				this.related(data);
			});
	
	}
	
	this.related = (data) => {
		const x = data;
		var str = $(x.mission);
			var query = str	
			
			$.get('/api/get_data', query, (data) => {
				
			});
	}
	
	
}

	
