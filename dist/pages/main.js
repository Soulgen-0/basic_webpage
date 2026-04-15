import { generateColor } from "../utils/color.js";
const strongElements = document.querySelectorAll("strong");
let lastTimestamp;
function update(time) {
    if (!lastTimestamp) {
        lastTimestamp = time;
        requestAnimationFrame(update);
    }
    if (time - lastTimestamp >= 1 / 30) {
        let color = generateColor((time % 2000) / 2000);
        for (let i = 0; i < strongElements.length; i++) {
            let header = strongElements[i];
            header.style.color = color;
        }
        lastTimestamp = time;
    }
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
//# sourceMappingURL=main.js.map