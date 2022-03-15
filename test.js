let k = 1;
let n = 5;
let sqrtOut = 50;

function test() {
	for (let i = 1; i * i <= n; i++) {
		if (n % (i * i) == 0) {
			k = 1;
		}
	}
	if (n / (k * k) === null) {

		sqrtOut = k;
	}
	if (n / (k * k) == 1) {
		sqrtOut = k;
	} else if (n / (k * k) > 1) {
		if (k.ToString == "1") {
			sqrtOut = "√" + (n / (k * k));
		} else {
			sqrtOut = k + "√" + (n / (k * k));
		}
	}

	console.log(n, sqrtOut)
}

test();