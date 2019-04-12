class MyHead extends React.Component {
    render() {
        // console.log(this.props.level);
        // return React.createElement(`h${this.props.level}`, null, "Hello Component")
        return <div className="head" style={{ color: this.props.color }}>Hello JSX {this.props.level}</div>;
    }
}
class MyHeadList extends React.Component {
    render() {
        return <div>
            <MyHead level="1" color="red" />
            <MyHead level="2" color="green" />
            <MyHead level="3" color="blue" />
        </div>;
    }
}
window.addEventListener("load", () => {
    let myComponent = <MyHeadList />;
    ReactDOM.render(myComponent, document.body);
});