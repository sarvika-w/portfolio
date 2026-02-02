export default function Hobbies() {
  const paintingImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
  ];
  const travelImages = [
    "/t1.jpg",
    "/t2.jpg",
    "/t3.jpg",
  ];
  const socialImages = [
    "/social1.jpg", 
    "/social2.jpg", 
    "/social3.jpg"
  ];

  return (
    <section className="hobbies-section">
      <h2 className="hobbies-title">Beyond Coding ...</h2>
      <p className="hobbies-subtitle">
        A glimpse of me and my life!
      </p>

      <div className="hobbies-grid">
        {/* Painting Section */}
        <div className="hobby-card">
          <h3>Painting & Art</h3>
          <p>Expressing creativity through acrylics, watercolors, and sketches.</p>
          <div className="painting-gallery">
            {paintingImages.map((img, index) => (
              <img key={index} src={img} alt={`Painting ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* TRAVEL Section */}
        <div className="hobby-card">
          <h3>Personal Growth</h3>
          <p>Outside tech, I value reflection, learning, and building a balanced life by focusing on myself. I like to meditate, read, learn, travel and socialize.</p>
          <div className="painting-gallery">
            {travelImages.map((img, index) => (
              <img key={index} src={img} alt={`Travel ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* SOCIAL Section */}
        <div className="hobby-card">
          <h3>Social Sports</h3>
          <p>I like to keep myself active by going to the gym, playing football, tennis, badminton, pickleball with friends, and most importantly I LOVE playing basketball!</p>
          <div className="painting-gallery">
            {socialImages.map((img, index) => (
              <img key={index} src={img} alt={`Sport ${index + 1}`} />
            ))}
          </div>
        </div>
      </div> 
    </section> 
  );
} 