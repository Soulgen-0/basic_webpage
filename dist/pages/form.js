const element = document.getElementById("form");
function handleSubmit(event) {
    const form = event.currentTarget;
    const resultParagraph = document.querySelector("#form-result");
    if (!resultParagraph) {
        console.log("Could not find the 'form-result' paragraph element.");
        return;
    }
    const data = new FormData(form);
    resultParagraph.innerHTML = "You submitted: " + data.get("name_field");
    event.preventDefault();
}
if (element instanceof HTMLFormElement) {
    const form = element;
    form.addEventListener("submit", handleSubmit);
}
else {
    console.log("Could not find the form element.");
}
export {};
//# sourceMappingURL=form.js.map