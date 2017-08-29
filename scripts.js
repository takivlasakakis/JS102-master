//Use this file to implement Part One of your project


console.log('BOOYAH');

var myAnimal = { sound: "bahh"};

var animal = {};

animal.username = "Bobert";

animal.tagline = "I'm gonna butter yo' bread!"

var noises = [];

animal.noises = noises;

console.log(animal);

var count = 0;

for (var key in animal) {
	// var i = '';
	count++;

	if (key == 'username') {
		console.log('hi! name is ' + animal.username);
	} else if (key == 'tagline') {
		console.log('I like to say ' + animal.tagline);
	}
	console.log(key, 'key');
	console.log(count, 'count');
};

var noiseArray = [ "Yearrgh"];

noiseArray.unshift("Hohohoho");
noiseArray.push("yipyipyip");

console.log(noiseArray);

noiseArray[3] = "ANOTHERNOISE!";

console.log(noiseArray);

animal.noises = noiseArray;

console.log(animal);

var animals = [];

animals.unshift(animal);

console.log(animals);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

animals.push(quackers);

console.log(animals, "quackers");

var bobBarker = { username: 'Bob Barker', tagline: 'the woof is right', noises: ['gaf gaf', 'roof roof', 'bark']};

var kittyKabootle = { username: 'kittyKabootle', tagline: 'meow is the right time', noises: ['neow', 'meeeow', 'shut the fuck up dog']};

animals.push(bobBarker,kittyKabootle);

console.log(animals, 'added two more objects', animals.length);


