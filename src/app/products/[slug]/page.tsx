import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  };
}

export default function ProductInfoPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{params.slug} 정보 페이지입니다!</h1>;
}

// 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌 (SSG)
export function generateStaticParams() {
  const products = ["pants", "skirt"];

  return products.map((product) => ({
    slug: product
  }));
}
