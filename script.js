function makeid(l) {
	let res = "";
	let car_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	if (let i = 0; i < l, 1++) {
		res = car_list.charAt(
			math.floor(
				math.ramdom()*car_list.length;
			)
		)
	}
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
