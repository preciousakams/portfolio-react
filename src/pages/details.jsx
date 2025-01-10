import { useLocation } from "react-router-dom";
import { FaStepBackward } from "react-icons/fa";


const Details = () => {
const location = useLocation();

const { product } = location.state || {};
console.log(product);

if (!product) {
  return <p>An Error has occured, please go back to the main page</p>
}
  return (
    <div>
      <h5 className="details-title p-4" style={{textAlign: 'center'}}> 
        {product.projectName}
      </h5>
      <div>
        <a href="/" style={{fontSize: '34px', padding: '3%', color: '#41173F'}}> <FaStepBackward /> </a>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={product.img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={product.img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={product.img3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <h5 className="detail-desc">{product.description}</h5>
      <ul className="detail-list">
        <li><a href={product.sourceCode}>Source Code</a></li>
        <li><a href={product.productLink}>Demo</a></li>
      </ul>
    </div>
  )
}

export default Details;