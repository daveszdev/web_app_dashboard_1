const alertPop = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');


alertPop.innerHTML =
	`
	<div class="alert-banner">
		<p><strong>Alert: </strong>new member joined.</p>
		<p class="close-banner">x</p>
	</div>
	`
;

alertPop.addEventListener('click', e => {
	alertPop.style.display = 'none';
});



let trafficData = {
	labels: [
		'',
		'16-22',
		'23-29',
		'30-5',
		'6-12',
		'13-19',
		'20-26',
		'27-3',
		'4-10',
		'11-17',
		'18-24',
		'25-31'
	],
	datasets: [
		{
			data: [
				0,
				250,
				370,
				560,
				430,
				780,
				820,
				610,
				1110,
				1340,
				1550,
				1230,
				1350
			],
			backgroundColor: 'rgba(68, 65, 64, .3)',
			borderWidth: 1
		}
	]
};

let trafficOptions = {
	aspectRatio: 3,
	scales: {
		yAxes: [{
			gridLines: {
				drawTicks: false
			}
		}],
		xAxes: [{
			gridLines: {
				drawTicks: false
			}
		}]
	},
	legend: {
		display: false
	},
	elements: {
		line: {
			tension: 0
		}
	}
};

let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});


let dailyData = {
	labels: [
		'S',
		'M',
		'T',
		'W',
		'T',
		'F',
		'S'
	],
	datasets: [
		{
			label: '# of Hits',
			data: [
				50,
				24,
				140,
				235,
				128,
				157,
				189,
				250
			],
			backgroundColor: '#CCD5AE',
			borderWidth: 1
		}
	]
};

let dailyOptions = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	},
	legend: {
		display: false
	}
};

let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});


let mobileData = {
	labels: [
		'Phones',
		'Tablets',
		'Desktop'
	],
	datasets: [
		{
			label: '# of Users',
			data: [
				500,
				520,
				2300
			],
			backgroundColor: [
				'#FAEDCD',
				'#FEFAE0',
				'#E9EDC9'
			],
			borderWidth: 0,
			borderColor: '#f7ebe8'
		}
	]
};

let mobileOptions = {
	rotation: (-0.5*Math.PI) - (10/180 * Math.PI),
	legend: {
		position: 'right',
		labels: {
			fontSize: 16,
			fontStyle: 'normal',
			fontFamily: 'Roboto',
			boxWidth: 15,
			padding: 20
		}
	}
};

let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});



send.addEventListener('click', () => {
	if (user.value === '' && message.value === '') {
		alert('Please fill out the user and message fields before submiting');
	} else if (user.value === '') {
		alert('Please fill out the user');
	} else if (message.value === '') {
		alert('Please fill out the message');
	} else {
		alert('Message successfuly sent');
		user.value = "";
		message.value = "";
	}
});
