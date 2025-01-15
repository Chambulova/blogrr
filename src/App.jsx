import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

export default function App() {
  
  return (
    <div className="bg-gradient-to-r from-red-400 to-red-500">
      <div 
          style={{
          backgroundImage: "url(./images/bg-pattern-intro-desktop.svg)",
          backgroundSize: "cover",
          backgroundPosition: "65% center",
          backgroundRepeat: "no-repeat",
        }} >
      
        <NavBar />
        <Header />
        
        {/* NEW SECTION */}
        <div >
          {/* Here you will add the new section */}
          <h1>Hello</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
          <h5>Hello</h5>
          <h6>Hello</h6>
        </div>
      </div>
    </div>
    
  );
}
