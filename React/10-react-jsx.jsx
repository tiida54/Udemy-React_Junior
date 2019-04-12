class MyHead extends React.Component {
    render() {
        // console.log(this.props.level);
        // return React.createElement(`h${this.props.level}`, null, "Hello Component")
        return <h1>Hello JSX</h1>;
    }
}

window.addEventListener("load", () => {
    let myComponent = <MyHead/>;
    ReactDOM.render(myComponent, document.body);
});