const letterElements = document.getElementsByClassName("letter") as HTMLCollectionOf<HTMLElement>;
console.log(letterElements);

function phaseShiftFromIndex(frequency: number, i: number): number {
    let step = (Math.PI*2)/frequency;
    return step*i;
}

function getYTransform(alpha: number, frequency: number, index: number, maxY: number): number {
    let phase = phaseShiftFromIndex(frequency, index);
    return maxY * Math.sin(((Math.PI*2) * alpha) + phase);
}

function animate(time: number) {
    let alpha = (time % 1000) / 1000
    for (let i = 0; i < letterElements.length; i++) {
        let letter = letterElements[i] as HTMLElement;
        let y = getYTransform(alpha, 20, i, 4);
        letter.style.transform = `translateY(${Math.round(y)}px)`;
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);