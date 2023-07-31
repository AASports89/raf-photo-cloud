import React from "react"

const Home = ({ pictures = 
[
  {"title":"Welcome to Raf's Photo Cloud!","image":"https://res.cloudinary.com/dhqsixgmo/image/upload/v1687761690/fam_w9ojas.png"},
  {"title":"Share photos w/ friends & family!","image":"https://res.cloudinary.com/dhqsixgmo/image/upload/v1687766800/IMG_3821_cyaa4x.jpg"},
  {"title":"New Photos!","image":"https://res.cloudinary.com/dhqsixgmo/image/upload/v1687760596/fam_pic_nmkmze.png"},
  {"title":"More photos!","image":"https://res.cloudinary.com/dhqsixgmo/image/upload/v1687159819/file_logo_m7jfpl.svg"},
  {"title":"Europe Trip!","image":"https://res.cloudinary.com/dhqsixgmo/image/upload/v1687159819/file_logo_m7jfpl.svg"}
] 
}) => {
    if (!pictures.length) {
      return <h3>No Pictures Yet</h3>;
    }

    <div className="flex-row justify-center home" id="sport">
   
    <tbody id="sport-body">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
        <h1 id="title-head"><i className="fa-solid fa-football" id="football"></i><img id="par-list" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1670251085/cooltext424908928422040_lyvsia.png" alt="parlays"></img><i className="fa-solid fa-football" id="football"></i></h1>
          <tr id="par-t">
            <th id="main-t">Title</th>
            <th id="main-t">Photo</th>
            <th id="main-t">Comments</th>
            <th id="main-t"><i className="fa-regular fa-clock" id="icon"></i> Date & Time</th>
          </tr>
  
            {pictures && pictures.map(picture => (
              
        
          <tr key={picture.id}>
    
            <td className="card" id="prices">{picture.title}</td>
            <td className="card" id="prices">{picture.image}</td>
            <td className="card" id="prices">{picture.comment}</td>
            <td className="card" id="clock">{picture.post_time}</td>
          </tr>
        ))}
        </tbody>
    </div>
  }
  
  export default Home