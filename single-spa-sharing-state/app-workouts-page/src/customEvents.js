function addListener(eventType, listener) {
    window.addEventListener(eventType, listener);
}

function removeListener(eventType, listener) {
    window.removeEventListener(eventType, listener);
}
  
export { addListener, removeListener };
