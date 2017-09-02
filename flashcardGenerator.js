//requre API's
var basicCard = require('./BasicCard');
var clozeCard = require('./ClozeCard');

//instanctiate a new basic card object
var newFirstPres = new basicCard("Who was the first President of the United States","George Washington");

//console log front and back attribute values
console.log("newFirstPres Object Front: " +  newFirstPres.front);
console.log("newFirstPres Object Back: " + newFirstPres.back);

//instanctiate basic card object using scope safe constructor
var firstPres = basicCard("Who was the first Pres of the United States","George Washington");

//console log front and back attribute values
console.log("firstPres Object Front: " + firstPres.front);
console.log("firstPres Object Front: " + firstPres.back);

//instanctiate a new first president clozed object
var newFirstPresClozed = new clozeCard("George Washington was the first Pres of the United States","George Washington");

//console log cloze, partical, fulltext attribute values
console.log("newFirstPresClozed Cloze: " + newFirstPresClozed.cloze);
console.log("newFirstPresClozed Partial: " + newFirstPresClozed.partial);
console.log("newFirstPresClozed FullText: " + newFirstPresClozed.fullText);

//instanctiate a new first president clozed object using scope safe constructor
var firstPresClozed = clozeCard("George Washington was the first Pres of the United States","test");

//console log cloze, partical, fulltext attribute values
console.log("firstPresClozed Cloze: " + firstPresClozed.cloze);
console.log("firstPresClozed Partial: " + firstPresClozed.partial);
console.log("firstPresClozed FullText: " + firstPresClozed.fullText);
