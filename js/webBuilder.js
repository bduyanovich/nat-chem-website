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

var serviceAreaUL = '<h1>Pool Service Areas</h1><ul id="serviceArea" class="list-inline"></ul>';
$("#bannerLeft").append(serviceAreaUL);

var contactInfo = '<p style="padding-top: 45px;"><i class="fa fa-phone"></i> 916-956-0764' + '<br>' + '<a href="mailto:naturalchem@live.com" target="_blank">naturalchem@live.com</a>' + '</p>';
$("#bannerRight").append(contactInfo);

var natChemLI = '<li><i class="fa fa-tint margin-right"></i>%data%</li>';
var locationLI = '<li class="margin-right marker-font"><i class="fa fa-map-marker">%data%</i>';
var busInfoLI = '<li>%data%</li>'

for (var area in natChem.serviceArea) {
	var formattedServiceArea = locationLI.replace("%data%", natChem.serviceArea[area]);
	$("#serviceArea").append(formattedServiceArea);
}

var weeklyServiceOne = '<div class="col-lg-4"><h3>Chemical Only Service <span class="label label-primary">$59</span></h3><ul id="chemService" class="list-unstyled"></ul></div>';
var weeklyServiceTwo = '<div class="col-lg-4"><h3>Chemical Filter Service <span class="label label-primary">$69</span></h3><ul id="filterService" class="list-unstyled"></ul></div>';
var weeklyServiceThree = '<div class="col-lg-4"><h3>Chemical Filter <em>Service Plus</em> <span class="label label-primary">$89</span></h3><ul id="servicePlus" class="list-unstyled"></ul></div>';
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
	var formattedBusinessInfo = busInfoLI.replace("%data%", natChem.businessInfo[info]);
	$("#busInfo").append(formattedBusinessInfo);
}