# 벨르뮤 눈썹문신 랜딩 페이지

정적 HTML 4개. 빌드 과정 없음.

- index.html — 가경동 눈썹문신
- cheongju.html — 청주 눈썹문신
- bokdae.html — 복대동 눈썹문신
- gangseo.html — 강서동 눈썹문신
- assets/ — 사진, 지도 캡처

## GitHub + Cloudflare Pages 배포

1. 이 폴더 내용을 새 GitHub 저장소 루트에 올린다 (index.html이 루트에 있어야 함).
2. Cloudflare 대시보드 → Workers & Pages → Create → Pages → Connect to Git → 저장소 선택.
3. Framework preset: **None**, Build command: 비움, Build output directory: **/** (루트).
4. Save and Deploy. 이후 push하면 자동 재배포.

폰트(마루부리)는 jsDelivr CDN에서 불러옵니다. 완전 오프라인이 필요하면 woff2 파일을 assets/에 넣고 style의 @font-face url을 바꾸면 됩니다.
