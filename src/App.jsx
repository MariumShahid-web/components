import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
  function dummyAlert(){
    alert("I am working")
  }
  return(
 <>
 <h2>These are components</h2>
 <Header username={"Marium Shahid"} dummyAlert={dummyAlert}/>
 <Footer />
 </>
  )
}
export default App;