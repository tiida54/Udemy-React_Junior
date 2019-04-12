class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "male",
            story: ""
        }
    }
    render() {
        return <form
            onSubmit={this.handleSubmit.bind(this)
            }>
            Name <input type="text" value={this.state.name}
                onChange={this.handleNameChange.bind(this)
                } />
            <br />
            Gender <select value={this.state.gender}
                onChange={this.handleGenderChange.bind(this)
                }>
                <option value="male">Man</option>
                <option value="female">Woman</option>
            </select>
            <br />
            Story <textarea value={this.state.story}
                onChange={this.handleStoryChange.bind(this)
                } />
            <br />
            <input type="submit" value="Submit" />
        </form>;
    }
    handleStoryChange(e) {
        this.setState({ story: e.currentTarget.value });
    }
    handleGenderChange(e) {
        this.setState({ gender: e.currentTarget.value });
    }
    handleNameChange(e) {
        this.setState({ name: e.currentTarget.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("name: " + this.state.name);
        console.log("gender: " + this.state.gender);
        console.log("story: " + this.state.story);
    }
}
window.addEventListener("load", () => {
    ReactDOM.render(<MyForm />, document.body);
})