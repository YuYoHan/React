const rootDiv = document.getElementById("root");
if (rootDiv) {
    rootDiv.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e;
        console.log(
            "mouse on click occurs on rootDiv",
            isTrusted,
            target,
            bubbles
        );
    };
}
