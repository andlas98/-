import React from 'react';
import Form from './Form';
import Table from './Table';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            favLinkStore:[]
        };
    }

    removeCharacter = index => {
        let temp = this.state.favLinkStore
        temp.splice(index, 1)
        this.setState({
            favLinkStore: temp
        })
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       console.log(favLink);
       this.setState(
           {
               favLinkStore: this.state.favLinkStore.concat([favLink])
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
                <Form favlink = {this.state.favLinkStore} onFormSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;