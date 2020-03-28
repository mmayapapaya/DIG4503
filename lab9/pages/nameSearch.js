import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

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
     <Head>
       <title>Name!</title>
      </Head>
      <div>
        <h3 className={styles.header}>Search for Name</h3>
        <input type="text" id="nameInput" className={styles.input} />
        <button className={styles.button} onClick={() => { this.getName() } }></button>
        <div id="nameresults" className={styles.results}></div>


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
      <Link href="/TypeSearch" >
         <a>Type Search</a>
        </Link>
     </div>

    </div>
    </div>


    );
  }

}

export default NameSearch;