import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoHelp from "./HomeWhoHelp";
import HomeContact from "./HomeContact";

const Home = () => {    
     return (   
        <>    
         <HomeHeader />  
         <HomeThreeColumns/>
         <HomeSimpleSteps/>
         <HomeAbout/>
         <HomeWhoHelp/>
         <HomeContact/>
        </> 
    );   
 };
export default Home;