//(function () {
function ProgrammersIHC() {
    this.html = {
        $home: $("#home"),
        $aboutus: $("#about-us")
    };
};

ProgrammersIHC.prototype = {
    
	SetClickEvents: function () {
        this.html.$home.click(this.ColorElement.bind(this,this.html.$home));
		this.html.$aboutus.click(this.ColorElement.bind(this,this.html.$aboutus));
       
    },
    ColorElement: function($elementID){
		$elementID.css("background-color",this.GetRandomColors());
	},
	GetRandomColors: function(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
};
//})();

function Start(){
	var a = new ProgrammersIHC();
	a.SetClickEvents();
}