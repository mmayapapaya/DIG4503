class NameSearch extends React.Component {

//search for pokemon name
  getName() {

    let name = document.querySelector("#nameInput");

    fetch("/api/pokemon/name/" + name.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      

      let resultElement = document.querySelector("#nameresults");


      if(processed.error) {
//name not found
        resultElement.innerHTML = "No pokemon with this name could be found! :(";
      } else {
 //name found! + display ID       
        resultElement.innerHTML = "Pokemon found! Its ID is " + processed.id;
      }

    });
  }

  render() {
    return (
      <div>
        <h3>Name Search</h3>
        <input type="text" id="nameInput" />
        <button onClick={() => { this.getName() } }>Submit!</button>
        <div id="nameresults"></div>

      </div>
    );
  }

}

export default NameSearch;