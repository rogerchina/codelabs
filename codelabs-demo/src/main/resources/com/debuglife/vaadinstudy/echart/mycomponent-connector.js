window.com_debuglife_vaadinstudy_echart_MyComponent = function(){
	// Create the component
	var mycomponent = new mylibrary.MyComponent(this.getElement());
	// Handle changes from the server-side
	this.onStateChange = function() {
		mycomponent.setValue(this.getState().mycomData.value);
	};
	// Pass user interaction to the server-side
	var self = this;
	mycomponent.click = function() {
		self.onClick(mycomponent.getValue());
	};
}