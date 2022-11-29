import Link from 'next/link';

export default function ProductTile2 () {
  return (
  <article className="product-tile">
    <header className="product-tile-header">
      <div className="product-tile-image">
      <Link href="/" title="Thread Affair Gingham Suit">
        <picture>
          <img src="/images/products/product-01b.jpg" alt="Suit"></img>
        </picture>
      </Link>

      <span className="badge">new entry</span>
      </div>

      <h1 className="product-tile-title">
        <Link href="/" title="Thread Affair Gingham Suit">
        Thread Affair <span>Gingham</span> <span>Suit</span>
        </Link>
      </h1>

      <h2 className="product-tile-subtitle">
        <Link href="/" title="Thread Affair Gingham Suit">
          Berlin fit-Regular
        </Link>
      </h2>

    </header>

    <section className="product-tile-pricing">
      <span className="product-price-regular">399.00</span>

      <span className="product-price">USD <span>270.00</span></span>

    </section>

  <footer className="product-tile-footer">
    <button className="button" title="Add to Cart" type="button">
      Add to Cart
    </button>
  </footer>
  </article>
  );
}
