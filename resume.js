displayAsWhiteText('Name: ' + 'Nicole Pasquale'.toUpperCase());
console.log('Career: Aspiring Full Stack Web Developer');
console.log('Description: Part-time Paramore Enthusiast');

// Function to print white text to console
function displayAsWhiteText(text) {
	console.log('%c' + text, 'color: white; font-weight: bold');
}

// Function to display a fire emoji is skill is cool
function displaySkill(skill, isCool) {
	if(isCool) {
		console.log(`* 🔥 ${skill}`);
	} else {
		console.log(`* ${skill}`);
	}
}

// Function to format work history & education
function displayPosition(companyName, jobTitle, description) {
	console.log(`* ${companyName} - ${jobTitle} - ${description}`);
}

console.log(' ');
displayAsWhiteText('My Skills:');

const mySkills = [
	{
		name: 'Web Development',
		coolness: true
	},
	{
		name: 'Guitar Player',
		coolness: true
	},
	{
		name: 'Australian Shepherd Wrangler',
		coolness: false
	}
];

mySkills.forEach((mySkills) => {
	displaySkill(mySkills.name, mySkills.coolness);
});

console.log(' ');
displayAsWhiteText('My Previous Experience:');

let workHistory = [
	{
		company: 'Bonnie Management Corporation',
		title: 'Assistant Property Manager',
		description: '08/18/2015 - 05/31/2019'
	},
	{
		company: 'Laser Spine Institute',
		title: 'Project Assistant',
		description: '4/2014 - 5/2015'
	}
];

workHistory.forEach((workHistory) => {
	displayPosition(workHistory.company, workHistory.title, workHistory.description);
});

console.log(' ');
displayAsWhiteText('Education:');

let education = [
	{
		school: 'Queens University of Charlotte',
		major: 'Pre-Med/Business',
		dates:	'2007 - 2008',
	},
	{
		school: 'University of South Florida',
		major: 'Biomedical Science',
		dates: '2009 - 2013',
	},
	{
		school: 'Covalence',
		major: 'Full Stack Web Development',
		dates:  'Currently Enrolled',
	}
];

education.forEach((education) => {
	if (education.school === 'Covalence') {
		console.log(`* 🔥 ${education.school} - ${education.major} - ${education.dates}`);
	} else {
		displayPosition(education.school, education.major, education.dates);
	}	
});