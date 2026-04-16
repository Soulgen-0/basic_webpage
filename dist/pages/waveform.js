const letterElements = document.getElementsByClassName("letter");
console.log(letterElements);
function phaseShiftFromIndex(frequency, i) {
    let step = (Math.PI * 2) / frequency;
    return step * i;
}
function getYTransform(alpha, frequency, index, maxY) {
    let phase = phaseShiftFromIndex(frequency, index);
    return maxY * Math.sin(((Math.PI * 2) * alpha) + phase);
}
function animate(time) {
    let alpha = (time % 1000) / 1000;
    for (let i = 0; i < letterElements.length; i++) {
        let letter = letterElements[i];
        let y = getYTransform(alpha, 20, i, 4);
        letter.style.transform = `translateY(${Math.round(y)}px)`;
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
export {};
//# sourceMappingURL=waveform.js.map