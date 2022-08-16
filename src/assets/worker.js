self.postMessage("Hello from the worker");

self.onmessage = (event) => {
	self.postMessage(`I am the worker and I received: ${event.data}`);
}
