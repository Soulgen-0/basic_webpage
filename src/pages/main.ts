import {generateColor} from "../utils/color.js";
const strongElements = document.querySelectorAll("strong");

let lastTimestamp: number
function update(time: number) {
    if (!lastTimestamp) {
        lastTimestamp = time;
        requestAnimationFrame(update);
    }

    if (time - lastTimestamp >= 1/30) {
        let color: string = generateColor((time % 2000) / 2000);
        for (let i = 0; i < strongElements.length; i++) {
            let header = strongElements[i] as HTMLElement;
            header.style.color = color;
        }

        lastTimestamp = time;
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update)