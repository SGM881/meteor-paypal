Package.describe({
	summary: "A paypal package that helps make restful API calls to Paypal",
	version: "1.0.1",
	name: "sgm881:paypal",
	git: "https://github.com/SGM881/meteor-paypal.git"
});

Npm.depends({
	"paypal-rest-sdk": "0.6.3"
});

Package.on_use(function(api) {
	api.use('arunoda:npm');
	api.use('templating');
	api.add_files("paypal.js", ["client", "server"]);
	api.add_files(["paypal_credit_card_form.html", "paypal_credit_card_form.js"], "client");
	api.export("Paypal", ["client", "server"]);
});

Package.on_test(function(api) {
	//need to add some tests
});
