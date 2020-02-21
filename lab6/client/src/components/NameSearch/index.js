import React from "react";

class NameSearch extends React.Component {

    readName(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="score"'
        let element = document.querySelector("#pokename");

        fetch("http://localhost:80/name/" + element.value)
        .then((res) => {
            // Parse the string into a JavaScript object and return it
            return res.json();
        })
        .then((processed) => {
            
            // Find the element with 'id="reportingArea"'
            let reporting = document.querySelector("#reportingArea");

            // Does the 'processed' object have a property called 'error'?
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }

        });

        element.value = "";
    }

    render() {
        return(
            <div>
                 <h2>Search for Name:</h2>
                 <form onSubmit={this.readName}>
                    <input id="pokename" type="text" />
                    <button>Click Here!</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;