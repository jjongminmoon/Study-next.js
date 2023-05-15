import Link from "next/link";
import styles from "./page.module.css";

const products = ["shirts", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <div className={styles.category}>
        {products.map((product, index) => (
          <>
            <Link key={index} href={`/products/${product}`}>
              ● {product}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
