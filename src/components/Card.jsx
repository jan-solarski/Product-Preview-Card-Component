import image from "../assets/images/image-product-desktop.jpg";
import icon from "../assets/images/icon-cart.svg";

export const Card = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={image} alt="Channel perfume" class="main-img" />
      </div>

      <div className="details">
        <p class="p-desc">Perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price-container">
          <span class="curr-price">$149.99</span>
          <span class="old-price">$169.99</span>
        </div>
        <button>
          <img src={icon} alt="icon" class="icon" /> Add to Cart
        </button>
      </div>
    </div>
  );
};
