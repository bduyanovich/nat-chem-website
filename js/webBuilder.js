var natChem = {
	"name" : "Natural Chemistry Pool Services",
	"contact" : [
		{
			"phone" : "916-956-0764",
			"email" : "naturalchem@live.com",
			"yelp" : "http://www.yelp.com/biz/natural-chemistry-pool-services-rancho-cordova"
		}
	],
	"location" : "11315 Sunrise Gold Circle, Suite J, Rancho Cordova, CA 95742",
	"serviceArea" : ["Folsom", "El Dorado Hills", "Rancho Cordova", "Gold River", "Elk Grove", "Fair Oaks"],
	"fee" : "Annual conditioner fee only $25",
	"businessInfo" : ["Fully Insured", "Licensed", "30 Years Experience", "Weekly Pool Services", "Repairs", "Discounted Equipment Sales"],
	"disclaimer" : "Disclaimer: Natural Chemistry Pool Services uses Natural Chemistry L.P. products but is not affiliated or associated with Natural Chemistry L.P. in any way."
}

var logo = '<img src="images/200x100.png" alt="natural chemistry pool services logo" />'
$("#logo").append(logo);

var weeklyServices = '<li><a href="#">Weekly Services</a></li>'
var contactUs = '<li><a href="#">Contact Us</a></li>'
$("#siteLinks").append(weeklyServices);
$("#siteLinks").append(contactUs);

var phoneContact = natChem.contact[0].phone;
$("#phone").append(phoneContact);
var emailContact = '<a href="mailto:#" target="_blank">%data%</a>';
var formattedEmail = emailContact.replace("#", natChem.contact[0].email).replace("%data%", natChem.contact[0].email);
$("#email").append(formattedEmail);

var bannerImg = '<img class="img-responsive" src="images/eco-drought-friendly-banner.jpg" alt="eco and drought friendly pool services" />'
$("#ecoFriendly").append(bannerImg);

var serviceAreaUL = '<h3>Service Areas</h3><ul id="serviceArea" class="list-inline"></ul>';
$("#banner").append(serviceAreaUL);

var natChemLI = '<li>%data%</li>';

for (var area in natChem.serviceArea) {
	var formattedServiceArea = natChemLI.replace("%data%", natChem.serviceArea[area]);
	$("#serviceArea").append(formattedServiceArea);
}

var weeklyServiceOne = '<div class="col-md-4"><h3>Chemical Only Service</h3><ul id="chemService"></ul></div>';
var weeklyServiceTwo = '<div class="col-md-4"><h3>Chemical Filter Service</h3><ul id="filterService"></ul></div>';
var weeklyServiceThree = '<div class="col-md-4"><h3>Chemical Filter <em>Service Plus</em></h3><ul id="servicePlus"></ul></div>';
$("#weeklyServices").append(weeklyServiceOne);
$("#weeklyServices").append(weeklyServiceTwo);
$("#weeklyServices").append(weeklyServiceThree);

var chemicalOnlyService = ["Weekly balancing of Ph, Alkalinity and Chlorine levels", "Stain and Scale prevention", "Cover Free liquid pool cover", "Natural Chemistry Pool Perfect", "Phosphate treatment to control Alagae", "Chlorine stabilizer", "Special discounts on repairs, parts and equipment"];
var chemicalFilterService = ["Includes Chemical Only Service!", "Empty skimmer baskets and pool cleaner bag", "Weekly check of pump basket", "Clean filter cartridges or backwash filter (DE, Sand) as needed", "Special discounts on repairs, parts and equipment"];
var chemicalFilterServicePlus = ["Includes all other services!", "Brush steps, swim outs and attached spa", "Skim top of pool as needed", "Special discounts on repairs, parts and equipment"];

var service;
for (service in chemicalOnlyService) {
	var formattedServiceOne = natChemLI.replace("%data%", chemicalOnlyService[service]);
	$("#chemService").append(formattedServiceOne);
}

for (service in chemicalFilterService) {
	var formattedServiceTwo = natChemLI.replace("%data%", chemicalFilterService[service]);
	$("#filterService").append(formattedServiceTwo);
}

for (service in chemicalFilterServicePlus) {
	var formattedServiceThree = natChemLI.replace("%data%", chemicalFilterServicePlus[service]);
	$("#servicePlus").append(formattedServiceThree);
}

var businessInfo = '<ul id="busInfo" class="list-inline"></ul>';
$("#businessInfo").append(businessInfo);

for (var info in natChem.businessInfo) {
	var formattedBusinessInfo = natChemLI.replace("%data%", natChem.businessInfo[info]);
	$("#busInfo").append(formattedBusinessInfo);
}

var conditionerFee = natChem.fee;
$("#conditionerFee").append(conditionerFee);

var disclaimer = natChem.disclaimer;
$("#disclaimer").append(disclaimer);