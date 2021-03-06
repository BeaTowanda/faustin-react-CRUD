import './App.css';

import Sidebar from "./components/sidebar";
import TopBar from "./components/topBar";
import PageHeading from "./components/pageHeading";
import ContRow from "./components/contRow";
import ContentRow2 from "./components/contentRow2";
import ContentRow3 from "./components/contentRow3";
import Footer from "./components/footer";
import Title from "./components/title";
import DataBase from "./components/dataBase";
import TittleUser from "./components/tittleUser";
import DataUsers from "./components/dataUsers";

function App() {
  return (

    <>
    <div id="wrapper"> 
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <PageHeading />
            <ContRow />
            <ContentRow2/>
            <Title />
            <DataBase />
            <ContentRow3/>
            <TittleUser />
            <DataUsers />
          </div>
        </div>
        <Footer />
      </div>
    </div>
    
  </>
);
}

export default App;
