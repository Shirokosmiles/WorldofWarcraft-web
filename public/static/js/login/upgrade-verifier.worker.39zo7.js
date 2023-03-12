onmessage = function(e) {
	var serverResourceUrl = e.data[0];
	var srpParams = e.data[1];
	var password = e.data[2];

	importScripts(serverResourceUrl);

	var arrayBufferToHexString = function(arrayBuffer) {
		var byteArray = arrayBuffer;
		var hexString = '';
		var nextHexByte;

		for (var i = 0; i < byteArray.byteLength; i++) {
			nextHexByte = byteArray[i].toString(16);
			if (nextHexByte.length < 2) {
				nextHexByte = '0' + nextHexByte;
			}
			hexString += nextHexByte;
		}
		return hexString;
	};

	var passwordVersion2 = new accountPassword.PasswordVersion2(15000);
	var passwordManager = new accountPassword.PasswordManager(srpParams.salt);
	passwordManager.generateVerifier(srpParams.username, password, passwordVersion2)
		.then(function (v) {
			var encodedVerifier  = passwordVersion2.encodeVerifier(v);
			var encodedVerifierHex = arrayBufferToHexString(new Uint8Array(encodedVerifier));
			postMessage([encodedVerifierHex]);
		});
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1cGdyYWRlLXZlcmlmaWVyLndvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJvbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG5cdHZhciBzZXJ2ZXJSZXNvdXJjZVVybCA9IGUuZGF0YVswXTtcblx0dmFyIHNycFBhcmFtcyA9IGUuZGF0YVsxXTtcblx0dmFyIHBhc3N3b3JkID0gZS5kYXRhWzJdO1xuXG5cdGltcG9ydFNjcmlwdHMoc2VydmVyUmVzb3VyY2VVcmwpO1xuXG5cdHZhciBhcnJheUJ1ZmZlclRvSGV4U3RyaW5nID0gZnVuY3Rpb24oYXJyYXlCdWZmZXIpIHtcblx0XHR2YXIgYnl0ZUFycmF5ID0gYXJyYXlCdWZmZXI7XG5cdFx0dmFyIGhleFN0cmluZyA9ICcnO1xuXHRcdHZhciBuZXh0SGV4Qnl0ZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZUFycmF5LmJ5dGVMZW5ndGg7IGkrKykge1xuXHRcdFx0bmV4dEhleEJ5dGUgPSBieXRlQXJyYXlbaV0udG9TdHJpbmcoMTYpO1xuXHRcdFx0aWYgKG5leHRIZXhCeXRlLmxlbmd0aCA8IDIpIHtcblx0XHRcdFx0bmV4dEhleEJ5dGUgPSAnMCcgKyBuZXh0SGV4Qnl0ZTtcblx0XHRcdH1cblx0XHRcdGhleFN0cmluZyArPSBuZXh0SGV4Qnl0ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGhleFN0cmluZztcblx0fTtcblxuXHR2YXIgcGFzc3dvcmRWZXJzaW9uMiA9IG5ldyBhY2NvdW50UGFzc3dvcmQuUGFzc3dvcmRWZXJzaW9uMigxNTAwMCk7XG5cdHZhciBwYXNzd29yZE1hbmFnZXIgPSBuZXcgYWNjb3VudFBhc3N3b3JkLlBhc3N3b3JkTWFuYWdlcihzcnBQYXJhbXMuc2FsdCk7XG5cdHBhc3N3b3JkTWFuYWdlci5nZW5lcmF0ZVZlcmlmaWVyKHNycFBhcmFtcy51c2VybmFtZSwgcGFzc3dvcmQsIHBhc3N3b3JkVmVyc2lvbjIpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHYpIHtcblx0XHRcdHZhciBlbmNvZGVkVmVyaWZpZXIgID0gcGFzc3dvcmRWZXJzaW9uMi5lbmNvZGVWZXJpZmllcih2KTtcblx0XHRcdHZhciBlbmNvZGVkVmVyaWZpZXJIZXggPSBhcnJheUJ1ZmZlclRvSGV4U3RyaW5nKG5ldyBVaW50OEFycmF5KGVuY29kZWRWZXJpZmllcikpO1xuXHRcdFx0cG9zdE1lc3NhZ2UoW2VuY29kZWRWZXJpZmllckhleF0pO1xuXHRcdH0pO1xufTtcbiJdLCJmaWxlIjoidXBncmFkZS12ZXJpZmllci53b3JrZXIuanMifQ==
