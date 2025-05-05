(function init() {
	const drumkitContainer = document.getElementById("drumkit-container");
	const drumElements = [
		{
			name: "Crash Symbal",
			audio: "./assets/crash-cymbal.wav",
			trigger: "KeyA",
		},
		{
			name: "Hi-Hat",
			audio: "./assets/hi-hat.wav",
			trigger: "KeyS",
		},
		{
			name: "High Tom",
			audio: "./assets/high-tom.wav",
			trigger: "KeyD",
		},
		{
			name: "Mid Tom",
			audio: "./assets/mid-tom.wav",
			trigger: "KeyF",
		},
		{
			name: "Snare Drum",
			audio: "./assets/snare.wav",
			trigger: "KeyJ",
		},
		{
			name: "Bass Drum",
			audio: "./assets/bass.wav",
			trigger: "KeyK",
		},
		{
			name: "Ride Cymbal",
			audio: "./assets/ride.wav",
			trigger: "KeyL",
		},
		{
			name: "Crash Cymbal",
			audio: "./assets/crash-cymbal.wav",
			trigger: "Semicolon",
		},
	];

	drumElements.map((element) => {
		const drumElement = document.createElement("div");

		drumElement.id = `${element.name}`;
		drumElement.innerHTML += `<span>${element.name}</span>`;
		drumElement.innerHTML += `<audio src="${element.audio}"></audio>`;

		drumkitContainer.append(drumElement);
	});

	window.addEventListener("keydown", (event) => {
		const drumElement = drumElements.find((element) => element.trigger === event.code);
		const domDrumElement = document.getElementById(drumElement.name);
		domDrumElement.className = "pounded";

		if (drumElement) {
			const audio = new Audio(drumElement.audio);
			audio.play().then(() => {
				domDrumElement.classList.remove("pounded");
			});
		}
	});
})();

