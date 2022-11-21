export default function ProductTile3 () {
  return (
  <article className="product-tile">
    <header className="product-tile-header">
      <div className="product-tile-image">
        <picture>
          <img src="/images/products/product-02a.jpg" alt="Suit"></img>
        </picture>

      <span className="badge">new entry</span>
      </div>

      <h1 className="product-tile-title">Thread Affair <span>Chambray</span> <bdi>Suit</bdi></h1>
      <h2 className="product-tile-subtitle">Semi-slim fit</h2>

    </header>

    <section className="product-tile-pricing">
      <span className="product-price-regular">399.00</span>

      <span className="product-price">USD <bdi>270.00</bdi></span>

    </section>

  <footer className="product-tile-footer">
    <button className="button" title="Add to Cart" type="button">
      Add to Cart</button>
  </footer>

  </article>



  );
}
