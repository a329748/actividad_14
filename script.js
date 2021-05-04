const acquireHelmet = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Acquiring helmet");
		}, 1*1000)		
	})
}

const acquireGloves = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Acquiring gloves");
		}, 2*1000)		
	})
}

const ride = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Riding bicycle");
		}, 8*1000)		
	})
}

const update = (message) => {
	console.log(message);
	document.getElementById("update")
		.innerHTML = `Current task: ${message}`;
}

const bikeRiding = async () => {
	const helmet = await acquireHelmet();
	update(helmet);
	const gloves = await acquireGloves();
	update(gloves);
	const bike = await ride();
	update(bike);
}

bikeRiding();