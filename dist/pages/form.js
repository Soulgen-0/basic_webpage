const formElement = document.getElementById("form");
function handleSubmit(event) {
    const form = event.currentTarget;
    const nameParagraph = document.querySelector("#form-result");
    const favLangParagraph = document.querySelector("#fav-lang-result");
    if (!nameParagraph) {
        console.log("Could not find the 'form-result paragraph element.");
        return;
    }
    if (!favLangParagraph) {
        console.log("Could not find the 'fav-lang-result' paragraph element.");
        return;
    }
    const data = new FormData(form);
    const fav_lang = data.get("fav_lang");
    const name = data.get("name_field");
    nameParagraph.innerHTML = "You name is: " + name;
    favLangParagraph.innerHTML = "Your favorite language is: " + fav_lang;
    event.preventDefault();
}
if (formElement instanceof HTMLFormElement) {
    const form = formElement;
    form.addEventListener("submit", handleSubmit);
    console.log("Successfully listening..");
}
else {
    console.log("Could not find the form element.");
}
export {};
//# sourceMappingURL=form.js.map