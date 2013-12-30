define(function() {

	return {

prep: function(){

R = "var data = [];";
R += "			var series = Math.floor(Math.random() * 6) + 3;";
R += "			data[0] = {";
R += "				label: 'Series0',";
R += "				data: Math.floor(Math.random() * 100) + 1 };";
				
R += "				data[1] = {";
R += "				label: 'Series1' ,";
R += "				data: Math.floor(Math.random() * 100) + 1 };";

return R;
}
}
});