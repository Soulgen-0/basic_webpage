const formElement: HTMLElement | null = document.getElementById("form");

function handleSubmit(event: SubmitEvent) {
    const form = event.currentTarget as HTMLFormElement
    const nameParagraph: HTMLParagraphElement | null = document.querySelector("#form-result")
    const favLangParagraph: HTMLParagraphElement | null = document.querySelector("#fav-lang-result")
    if (!nameParagraph) {
        console.log("Could not find the 'form-result paragraph element.")
        return
    }
    if (!favLangParagraph) {
        console.log("Could not find the 'fav-lang-result' paragraph element.")
        return
    }

    const data = new FormData(form)
    const fav_lang = data.get("fav_lang") as string
    const name = data.get("name_field") as string
    nameParagraph.innerHTML = "You name is: " + name
    favLangParagraph.innerHTML = "Your favorite language is: " + fav_lang
    event.preventDefault()
}

if (formElement instanceof HTMLFormElement) {
    const form: HTMLFormElement = formElement
    form.addEventListener("submit", handleSubmit)
    console.log("Successfully listening..")
} else {
    console.log("Could not find the form element.")
}