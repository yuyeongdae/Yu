import Image from "next/image";
import { useRouter } from "next/router";

export default function OnmarupetHome() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* 배경 영상 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      >
        <source src="/dog-field.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 콘텐츠 레이어 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight drop-shadow-md">온마루펫</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
          장어 부산물 기반 프리미엄 반려견 간식의 새로운 기준
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/subscribe")}
            className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            구독 시작하기
          </button>
          <button
            onClick={() => router.push("/admin")}
            className="bg-[#222] text-white border border-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            관리자 로그인
          </button>
        </div>
      </div>

      {/* 제품 카드 섹션 */}
      <section className="relative z-10 px-6 py-20 bg-[#fffaf2] text-[#432818]">
        <h2 className="text-3xl font-bold text-center mb-12">프리미엄 제품 라인업</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { src: "/stick-illust.png", title: "에너지 스틱", desc: "장어 단백질을 쫀득한 스틱으로! 활력 충전" },
            { src: "/treat-illust.png", title: "바삭 트릿", desc: "껍질 그대로! 칼슘 풍부하고 고소한 트릿" },
            { src: "/jerky-illust.png", title: "건강 져키", desc: "천연 재료를 저온건조로 살린 프리미엄 육포" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 text-center transition duration-300">
              <Image src={item.src} width={180} height={140} alt={item.title} className="mx-auto mb-4 rounded" />
              <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-[#5c4533]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 후기 섹션 */}
      <section className="bg-[#fff4e6] text-[#432818] px-6 py-16">
        <h3 className="text-2xl font-bold text-center mb-8">고객들이 사랑하는 이유</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "처음엔 생소했는데, 강아지가 너무 좋아해요!",
            "사료 거부하던 아이가 이 간식만큼은 잘 먹어요.",
            "냄새도 안 나고 포장도 예뻐요. 재구매 의사 100%!"
          ].map((txt, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-[#f1dcc4]">
              <p className="text-sm">“{txt}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black text-center text-sm py-8 text-white border-t border-[#333] relative z-10">
        © 2025 온마루펫 | 장어 부산물을 활용한 지속가능한 반려동물 간식 브랜드 | 한 마음으로, 한 가족처럼
      </footer>
    </div>
  );
}
