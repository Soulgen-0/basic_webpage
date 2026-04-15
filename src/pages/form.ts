const element: HTMLElement | null = document.getElementById("form");

function handleSubmit(event: SubmitEvent) {
    const form = event.currentTarget as HTMLFormElement
    const resultParagraph: HTMLParagraphElement | null = document.querySelector("#form-result")
    if (!resultParagraph) {
        console.log("Could not find the 'form-result' paragraph element.")
        return
    }

    const data = new FormData(form)
    resultParagraph.innerHTML = "You submitted: " + data.get("name_field")
    event.preventDefault()
}

if (element instanceof HTMLFormElement) {
    const form: HTMLFormElement = element
    form.addEventListener("submit", handleSubmit)
    console.log("Successfuly listening..")
} else {
    console.log("Could not find the form element.")
}