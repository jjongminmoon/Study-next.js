import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";

export default async function ProductsPage() {
  const products = await getProducts();
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <div className={styles.category}>
        {products.map((product, index) => (
          <>
            <Link key={index} href={`/products/${product.id}`}>
              ● {product.name}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
