import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class TypeSearch extends React.Component {

//search for pokemon name
  getType() {

    let type = document.querySelector("#typeInput");

    fetch("/api/pokemon/typeList/" + typeList.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      

      let resultElement = document.querySelector("#typeresults");


      if(processed.error) {
//name not found
        resultElement.innerHTML = "No pokemon with this type could be found! :(";
      } else {
 //name found! + display ID       
        resultElement.innerHTML = "Pokemon found! They are " + processed.name;
      }

    });
  }

  render() {
    return (
            <div>
     <Head>
       <title>Type!</title>
      </Head>

      <div>
        <h3 className={styles.header}>Search for Type</h3>
        <input type="text" id="typeInput" className={styles.input} />
        <button className={styles.button} onClick={() => { this.getType() } }></button>
        <div id="typeresults" className={styles.results}></div>


     <div className={styles.links}>
      <Link href="/IdSearch">
          <a>ID Search</a>
        </Link>
     </div>

          <div className={styles.links}>
      <Link href="/index">
          <a>Home</a>
        </Link>
     </div>

     <div className={styles.links}>
      <Link href="/NameSearch" >
         <a>Name Search</a>
        </Link>
     </div>

    </div>
    </div>


    );
  }

}

export default TypeSearch;