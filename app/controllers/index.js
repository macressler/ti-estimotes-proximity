var TiBeacons = require('org.beuckman.tibeacons');
Ti.API.info("module is => " + TiBeacons);

function updateInformation(event){
    if (event.identifier === "mint"){
        $.mintProximity.text = event.proximity;
        $.mintRSSI.text = event.rssi;
        if (event.proximity === 'near'){
            $.adspace.image = 'http://image.shutterstock.com/display_pic_with_logo/430459/105011834/stock-photo-mojito-lime-drink-cocktail-105011834.jpg';
        }

    } else if (event.identifier === "blueberry"){
        $.blueberryProximity.text = event.proximity;
        $.blueberryRSSI.text = event.rssi;
        if (event.proximity === 'near'){
            $.adspace.image = 'http://image.shutterstock.com/display_pic_with_logo/965987/108450557/stock-photo-freshly-picked-blueberries-108450557.jpg';
        }

    } else if (event.identifier === "marshmellow"){
        $.marshmellowProximity.text = event.proximity;
        $.marshmellowRSSI.text = event.rssi;
        if (event.proximity === 'near'){
            $.adspace.image = 'http://image.shutterstock.com/display_pic_with_logo/963767/142706050/stock-photo-marshmallows-142706050.jpg';
        }
    }

}

function addEventToScroller(event) {
    Ti.API.info(event);
    $.trace.add(Ti.UI.createLabel({
        text : JSON.stringify(event)
    }));
}

TiBeacons.addEventListener("beaconProximity", updateInformation);

function toggleRanging() {

    if ($.rangingSwitch.value) {

        TiBeacons.startRangingForBeacons({
            uuid : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            identifier : "mint",
            major: 32398,
            minor: 18351
        });

        TiBeacons.startRangingForBeacons({
            uuid : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            identifier : "blueberry",
            major: 36493,
            minor: 17925
        });

        TiBeacons.startRangingForBeacons({
            uuid : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            identifier : "marshmellow",
            major: 8702,
            minor: 11168
        });

    } else {
        TiBeacons.stopRangingForBeacons();
    }
}



$.win.open();




// var service = Ti.App.iOS.registerBackgroundService({
//     url: "bgService.js"
// });
    
    
