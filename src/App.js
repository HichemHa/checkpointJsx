
import image from './imageInSrc.jpg'
import './App.css';


function App() {
  return (
    <div className="App" style={{backgroundImage: "url(sea.jpg)",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
    <div style={{border: 'solid 1px black', maxWidth: '100vw', }}>
      
      <h1 className="title red">fishing day</h1>
      <br />
      <img src={image} alt="fish" style={{width:"500px"}}/>
      <br />
      <img src="/imageInPublic.jpg" alt="fish" style={{marginLeft:"500px" }}/>
    </div>
    <video width={1903}  controls>
      <source src="/video1.mp4" type="video/mp4" />
      
    </video>
  </div>
  );
}

export default App;
