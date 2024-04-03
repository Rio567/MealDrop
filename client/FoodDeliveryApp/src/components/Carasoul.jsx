
function Carousel() {
  return (
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ objectFit: "contain" }}>
          <div className="carousel-inner" style={{ maxHeight: "700px" }}>
              <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2 bg-dark placeholder-white" type="search"  placeholder="Search" style={{height:"52px",color:"white"}} aria-label="Search" />
                      <button className="btn btn-primary" type="submit">Search</button>
                  </form>
              </div>
              {/* Carousel items with object-fit: contain applied directly to images */}
              <div className="carousel-item active">
                  <img src="https://media.istockphoto.com/id/1043604388/photo/creamy-butter-chicken-curry.jpg?s=1024x1024&w=is&k=20&c=kYFg7eK1Shr54Bvth2wrvfVxsBpgKKbqMOmdwiuo1G4=" className="d-block w-100" alt="..." style={{ objectFit: "contain", height:"90%",width:"90%" }} />
              </div>
              <div className="carousel-item">
                  <img src="https://media.istockphoto.com/id/520947300/photo/chicken-stew.jpg?s=1024x1024&w=is&k=20&c=hetIk19QgCcwz8EOyaEarnjiYEb8MTi9Ke5PwNUfQKM=" className="d-block w-100" alt="..." style={{  objectFit: "contain", height:"90%",width:"90%" }} />
              </div>
              <div className="carousel-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUG0ngEfrQ5zJzaTwXZFZtNXZP82w5e-HdQ&s" className="d-block w-100" alt="..." style={{ objectFit: "contain", height:"auto",width:"100%" }} />
              </div>
              <div className="carousel-item">
                  <img src="https://thumbs.dreamstime.com/b/lot-food-wooden-table-georgian-cuisine-top-view-flat-lay-khinkali-georgian-dishes-96049794.jpg?w=768" className="d-block w-100" alt="..." style={{ objectFit: "contain", height:"auto",width:"100%" }} />
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  );
}
export default Carousel;
