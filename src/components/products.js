
import React, { useState } from 'react';

const Product = ({ products }) => {
  // Exclude specific indexes from the products array
  const excludedIndexes = [1, 7, 12, 3, 16, 8, 10, 13, 14, 15, 19, 18,20,21,22,23,24,25,26,27,28,29];
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Find delicious dishes and <br />
          Choose what you like."
        </h2>

        <div className="products__content grid">
          {products
            .filter((_, index) => !excludedIndexes.includes(index))
            .map((product, index) => (
              <article key={index} className="products__card" onClick={() => handleProductClick(product)}>
                <div className="products__shape">
                  <img src={product.image} alt={product.title} className="products__img" />
                </div>
                <div className="products__data">
                  <h2 className="products__title">{product.title}</h2>
                  <button className="button products__button">
                    <i className="bx bx-shopping-bag"></i>
                  </button>
                </div>
              </article>
            ))}
        </div>
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
};

// Separate component for the detailed view or modal
const Modal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        {/* Additional details or styling for the modal */}
      </div>
    </div>
  );
};

export default Product;