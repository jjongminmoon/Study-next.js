import Image from "next/image";
import os from "os"; // 노드 APIs

export default function Home() {
  console.log("안녕! - 서버");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다! 버전3</h1>
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
