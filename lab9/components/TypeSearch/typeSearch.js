class TypeSearch extends React.Component {

//search for pokemon type
  getType() {

    let type = document.querySelector("#typeInput");

    fetch("/api/pokemon/typeList" + type.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      

      let resultElement = document.querySelector("#typeresults");


      if(processed.error) {
//type not found
        resultElement.innerHTML = "No pokemon with this type could be found! :(";
      } else {
 //type found! + display pokemon with that type       
        resultElement.innerHTML = "Pokemon found! Its type is " + filter.type;
      }

    });
  }

  render() {
    return (
      <div>
        <h3>Type Search</h3>
        <input type="text" id="typeInput" />
        <button onClick={() => { this.getType() } }>Submit!</button>
        <div id="typeresults"></div>

      </div>
    );
  }

}

export default TypeSearch;