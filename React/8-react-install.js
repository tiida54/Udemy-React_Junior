window.addEventListener("load", () => {
    let reactElement = React.createElement("h1", null, "Hello");
    ReactDOM.render(
        reactElement, document.body
    );
});