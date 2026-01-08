console.log("Accident Hotspot Prediction Frontend Loaded")
var map=L.map('map').setView([12.923,80.227],13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map)

var marker=L.marker([12.923,80.227]).addTo(map)

marker.bindPopup(
"<b>OMR – Thoraipakkam Signal</b><br>"+
"Risk Score: 6.8 / 10<br>"+
"Total Accidents: 73<br>"+
"<span style='color:red'>Fatal: 5</span>"
)
