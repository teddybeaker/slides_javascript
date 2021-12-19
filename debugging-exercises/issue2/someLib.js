function add(a, b) {
	var x = a, y = b;
	if (Math.random() > 0.5) {
		return a + y;
	} else {
		return x + b;
	}
}