class IdSearch extends React.Component {

//search for ID
    getId() {

    let id = document.querySelector("#idInput");

    fetch("/api/pokemon/id/" + id.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      

      let resultElement = document.querySelector("#idresults");


      if(processed.error) {
//id not found
        resultElement.innerHTML = "No pokemon with this ID could be found! :(";
      } else {
//id found! + tell ya the name
        resultElement.innerHTML = "ID found! Its name is " + processed.name;
      }

    });
  }


  render() {
    return (
      <div>
        <h3>ID Search</h3>
        <input type="text" id="idInput" />
        <button onClick={() => { this.getId() } }>Submit!</button>
        <div id="idresults"></div>
      </div>
    );
  }

}

export default IdSearch;