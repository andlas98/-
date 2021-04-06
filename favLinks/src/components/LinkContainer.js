import React from 'react';
import Form from './Form';
import Table from './Table';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        // TODO completed here:
        this.state ={
            favLinkStore:[{name: "Test", URL:"test.com"}]
        };
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            this.setState({
                favLinkStore: this.state.favLinkStore.map((item)=>{
                    if (item.name === index.name && item.URL === index.URL){
                        this.state.favLinkStore.splice(this.state.favLinkStore.indexOf(item));
                    }
                })
            })
        
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState(
           {
               favLinkStore: this.state.favLinkStore.push(favLink)
            }
        )
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table favLinkStore = {this.state.favLinkStore} removeCharacter = {this.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form favlink = {this.state.favLinkStore} onFormSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;