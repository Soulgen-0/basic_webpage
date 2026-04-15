export { generateColor };
function generateColor(alpha) {
    let phase_shift = Math.PI / 3;
    let r = Math.round(127.5 + 127.5 * Math.sin(Math.PI * 2 * alpha));
    let g = Math.round(127.5 + 127.5 * Math.sin(Math.PI * 2 * alpha + phase_shift));
    let b = Math.round(127.5 + 127.5 * Math.sin(Math.PI * 2 * alpha + phase_shift * 2));
    // console.log(alpha, r, g, b)
    return "rgb(" + String(r) + ", " + String(g) + ", " + String(b) + ")";
}
//# sourceMappingURL=color.js.map