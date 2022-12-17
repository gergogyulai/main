const body = document.body;
setInterval(createSnowFlake, 19);

function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth -10 + 'px';
	snow_flake.style.animationDuration = Math.random() * 4 + 3 + 's';
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 4 + 'px';

	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 2738)
}