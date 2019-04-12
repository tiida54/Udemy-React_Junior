class MyHead extends React.Component {
    render() {
        // console.log(this.props.level);
        return React.createElement(`h${this.props.level}`, null, "Hello Component")
    }
}

class MyHeadList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minLevel: props.start,
            maxLevel: props.start + 1
        };
        // window.setTimeout(() => {
        //     this.setState((currentState, currentProps) => ({
        //         maxLevel: currentState.maxLevel + 1
        //     }));
        // }, 2000)
    }
    componentWillMount() {
        this.intervalId = window.setInterval(() => {
            this.setState((currentState, currentProps) => {
                if (currentState.maxLevel > currentProps.end) {
                    return currentState;
                } else {
                    return {
                        maxLevel: currentState.maxLevel + 1
                    };
                }
            });
        }, 1000);
    }
    componentWillUnmount() {
        window.clearInterval(this.intervalId);
    }
    render() {
        let heads = [];
        let head;
        for (let i = this.state.minLevel; i < this.state.maxLevel; i++) {
            head = React.createElement(MyHead, {
                level: i
            });
            heads.push(head);
        }
        return React.createElement("div", null, heads);

    }
}

window.addEventListener("load", () => {
    let myComponent = React.createElement(MyHeadList, {
        start: 2,
        end: 5
    });
    ReactDOM.render(myComponent, document.body);
});