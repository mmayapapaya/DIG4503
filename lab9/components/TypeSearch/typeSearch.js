import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class TypeSearch extends React.Component {

//search for pokemon name
  getType() {

    let type = document.querySelector("#typeInput");

    fetch("/api/pokemon/type/" + type.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      

      let resultName = document.querySelector("#resultName")
      let resultType = document.querySelector("#typeresults");


      if(processed.error) {
//name not found
        resultName.innerHTML = processed.error;
        typeresults.innerHTML = processed.error;
      } else {
 //name found! + display ID       
        typeresults.innerHTML = processed.typeList;
        resultName.innerHTML = processed.name;
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
        <div id="resultName" className={styles.results}></div>


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