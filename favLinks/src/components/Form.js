import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"", 
            URL:""
        };
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       const {name, value} = event.target;
       this.setState({[name]: value});
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        var data = {name: this.state.name, URL: this.state.URL};
        
        // props.fLStore.push(this.state);
        this.props.onFormSubmit(data);
        this.setState(
            {
                name: "", 
                URL: ""
            }
        );        
    }

    render() {
        const data = {name: this.state.name, URL: this.state.URL};
        return(
            <form onSubmit={this.onFormSubmit}>
                <label>Website Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange}name="name" />
                </label>

                <label> Website URL
                    <input type="text" value={this.state.URL} onChange={this.handleChange}name="URL"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    
    }
}

export default Form;
