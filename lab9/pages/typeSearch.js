import Head from 'next/Head';
import Link from 'next/link';
import styles from './styles.module.css';

class TypeSearch extends React.Component {

//search for pokemon type
getType() {


    let type = document.querySelector('#typeInput');

        // Test if year is an empty string
        // If so, change it to a value
        if(type.length === 0) {
            type = "0";
        }

    fetch("/api/pokemon/type/" + type.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      

      let resultName = document.querySelector("#resultName")
      let resultType = document.querySelector("#typeresults");


      if(processed.error) {
//type not found
        resultName.innerHTML = processed.error;
        typeresults.innerHTML = processed.error;
      } else {
 //type found! + display names
 console.log(processed);      
        processed.forEach(index => {
          resultName.innerHTML += "<br>" + index.name;
         })
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