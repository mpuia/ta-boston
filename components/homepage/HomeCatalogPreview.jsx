import ProductTile from "./catalog/ProductTile";
import ProductTile2 from "./catalog/ProductTile2";
import ProductTile3 from "./catalog/ProductTile3";

export default function HomeCatalogPreview () {
  return (
  <section className="home-catalog-preview container">
    <header>
      <h1>
        <span>Glamour</span> suits
      </h1>

      <p>
      Accomplish new achievements with a bold new style from the brilliant
      collection of men's designer suits. <br></br>
      For the finest custom tailored experience, be sure to explore our
      selection of premium fabrics from one of the world's oldest fabric
      mills, Vitale Barberis Canonico.
      </p>
    </header>

    <ul className="product-tiles">
      <li>
        <ProductTile></ProductTile>
      </li>
      <li>
        <ProductTile2></ProductTile2>
      </li>
      <li>
        <ProductTile3></ProductTile3>
      </li>
    </ul>
  </section>
  );
}
