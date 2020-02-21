import React from "react";

class IdSearch extends React.Component {

    readId(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="score"'
        let element = document.querySelector("#pokeid");

        fetch("http://localhost:80/id/" + element.value)
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
                reporting.innerHTML = processed.id;
            }

        });

        element.value = "";
    }

    render() {
        return(
            <div>
                 <h2>Search for ID:</h2>
                 <form onSubmit={this.readId}>
                    <input id="pokeid" type="text" />
                    <button>Click Here!</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;