import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

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
     <Head>
       <title>ID!</title>
      </Head>
      <div>
 <h3 className={styles.header}>Search for ID</h3>
        <input type="text" id="idInput" className={styles.input} />
        <button className={styles.button} onClick={() => { this.getId() } }></button>
        <div id="idresults" className={styles.results}></div>
      </div>

     <div className={styles.links}>
      <Link href="/NameSearch">
          <a>Name Search</a>
        </Link>
     </div>

          <div className={styles.links}>
      <Link href="/index">
          <a>Home</a>
        </Link>
     </div>

     <div className={styles.links}>
      <Link href="/TypeSearch">
         <a>Type Search</a>
        </Link>
     </div>

    </div>

    );
  }

}

export default IdSearch;