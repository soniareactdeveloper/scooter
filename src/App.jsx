import './App.css'

function App() {


  return (
  <>
   <section id='main_menu'>
     <div className="container">
     <div className="navBar">
        <img src='./images/logo.png' alt="logo"/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <div className="navButton">
          <a href="#">Login</a>
          <a href="#">Book Scooter</a>
        </div>
      </div>
     </div>
   </section>
   <section id='banner'>
      <div className="container">
       <div className="left">
       <div className="banner_left_content">
        <h2>Fair price ride</h2>
        <h1>Rent our <span>Scooter</span></h1>
        <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
      <div className="circle">
        <img src='./images/circle.png' alt="circle"/>
      </div>
      <div className="counter">
          <h5>Location</h5>
          <div className="line"></div>
          <h5>Pickup Date</h5>
          <div className="line"></div>
          <h5>Kilometers</h5>
         <a href="#">Book Scooter</a>
       </div>
       <div className="leaf">
        <img src='./images/leaf.png' alt="circle"/>
       </div>
      </div>
      <div className="right">
        <div className="banner_right_content">
         <img src='./images/banner.png' alt="circle"/>
         <h3>Starting From <span>$40</span></h3>
        </div>
      </div>
      </div>
   </section>
  </>
  )
}

export default App
