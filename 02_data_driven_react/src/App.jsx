import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data.js"


export default function App(){

  const dataElement = data.map((item)=>{
    return <Entry 
    key={item.id}
    entry={item}
    />
  }) 

  return(
    <>
      <Header/>
      <main className="container">
       {dataElement}
      </main>
    </>
    

  )
}