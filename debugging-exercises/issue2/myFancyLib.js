function safeAdd(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	}
	throw new Error("can only add numbers, got '" + a + "' and '" + b + "'");
}