import './App.css';
import image from "./images/go.jpg";
import './style.css';
function App() {
    return (
<>
<div style={{border:'solid 1 black', maxWidth:'100 vw'}}>
   
<h1 className='title  red'> Hajer Benzarti</h1>
<div className='container'>
   
<img src={image} className='image'></img>
<img src="images/img2.png" className='image'></img>  
</div>

    </div> 
    
    <video style={{ display: 'block', margin: '0 auto', width:"320", heigth:"240"}} controls>
    <source src ="myVideo.mp4" type= "video/mp4"/>
</video>


</>
    )
}


export default App;