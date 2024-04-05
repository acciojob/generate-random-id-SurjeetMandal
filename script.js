function makeid(l) {
	let res = "";
	let car_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	if (let i = 0; i < l; i++) {
		res += car_list.charAt(
			math.floor(
				math.random()*car_list.length;
			)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));