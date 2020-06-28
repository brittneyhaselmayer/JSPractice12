const sort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	console.log(arr);
};

// sort([2, 78, 8, 300, 0, 10]);

const elementReplace = (arr, obj) => {
	let replaced = [];

	arr.forEach((ele) => {
		{
			if (obj[ele]) {
				replaced.push(obj[ele]);
			} else {
				replaced.push(ele);
			}
		}
	});
	console.log(replaced);
};

// arr1 = ['LeBron James', 'Lionel Messi', 'Serena Williams'];
// hash1 = { 'Serena Williams': 'tennis', 'LeBron James': 'basketball' };
// elementReplace(arr1, hash1);

const mapByName = (arr) => {
	let names = [];
	arr.map((ele) => names.push(ele.name));
	console.log(names);
};

// pets = [
// 	{ type: 'dog', name: 'Rolo' },
// 	{ type: 'cat', name: 'Sunny' },
// 	{ type: 'rat', name: 'Saki' },
// 	{ type: 'dog', name: 'Finn' },
// 	{ type: 'cat', name: 'Buffy' },
// ];

// mapByName(pets);

const mapByKey = (arr, key) => {
	let vals = [];
	arr.map((ele) => vals.push(ele[key]));
	console.log(vals);
};

// locations = [
// 	{ city: 'New York City', state: 'New York', coast: 'East' },
// 	{ city: 'San Francisco', state: 'California', coast: 'West' },
// 	{ city: 'Portland', state: 'Oregon', coast: 'West' },
// ];

// mapByKey(locations, 'city');

const yellSentence = (sentence) => {
	let arr = sentence.split(' ');

	console.log(arr.map((ele) => ele.toUpperCase() + '!').join(' '));
};

// yellSentence('And everything is blue');

const whisperWord = (arr) => {
	console.log(arr.map((ele) => ele.toLowerCase() + '...'));
};

// whisperWord(['SHHHH!!', 'keeP', 'It', 'DOWN']);
