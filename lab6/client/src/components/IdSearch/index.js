import React from "react";

class IdSearch extends React.Component {

    readId(event) {

 
        event.preventDefault();


        let element = document.querySelector("#pokemonid");

        fetch("http://localhost:80/id/" + element.value)
        .then((res) => {

            return res.json();
        })
        .then((processed) => {
            
            let reporting = document.querySelector("#reportingArea");

      
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
                    <input id="pokemonid" type="text" />
                    <button></button>
                </form>
            </div>
        );
    }
}

export default IdSearch;