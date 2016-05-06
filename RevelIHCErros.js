//(function () {
function ProgrammersIHC() {
    this.html = {
        $home: $("#home"),
        $aboutus: $("#about-us"),
		$worngButton: $("#wrong-button"),
		$wrongPlace: $("#wrong-place"),
		$warningColor: $("#warning-collor"),
		$btn1: $("#btn1"),
		$wrongRightMenu: $("#wrong-menu-right"),
		$showError: $("#showError"),
		$what: $("#what"),
		$unordenated: $("#desordenado"),
		$footer: $(".mdl-mega-footer"),
		$inputSobrenome : $("#input-sobrenome")
    };
};

ProgrammersIHC.prototype = {
    
	SetClickEvents: function () {
        this.html.$home.click(this.ColorElement.bind(this,this.html.$home));
		this.html.$aboutus.click(this.ColorElement.bind(this,this.html.$aboutus));
		this.html.$worngButton.click(this.ColorElement.bind(this,this.html.$worngButton));
		this.html.$wrongPlace.click(this.ColorElement.bind(this,this.html.$wrongPlace));
		this.html.$warningColor.click(this.ColorElement.bind(this,this.html.$warningColor));
		this.html.$btn1.click(this.ColorElement.bind(this,this.html.$wrongRightMenu));
		this.html.$showError.click(this.ShowError.bind(this,this.html.$what));
		this.html.$unordenated.click(this.ColorElementAndShowError.bind(this,this.html.$unordenated,this.html.$inputSobrenome));
		this.html.$footer.click(this.ColorElement.bind(this,this.html.$footer));
    },
    ColorElement: function($elementID){
		$elementID.css("background-color",this.GetRandomColors());
	},
	ShowError: function($elementID){
		$elementID.show();
	},
	GetRandomColors: function(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	},
	ColorElementAndShowError: function($elementID, $errorID){
		$elementID.css("background-color",this.GetRandomColors());
		$errorID.show();
	}
};
//})();

function Start(){
	var a = new ProgrammersIHC();
	a.SetClickEvents();
}