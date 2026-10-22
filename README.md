# 벨르뮤 눈썹문신 랜딩 페이지

배포 주소: https://chengju-eyetattoo.pages.dev

- https://chengju-eyetattoo.pages.dev/ — 가경동
- https://chengju-eyetattoo.pages.dev/cheongju/ — 청주
- https://chengju-eyetattoo.pages.dev/bokdae/ — 복대동
- https://chengju-eyetattoo.pages.dev/gangseo/ — 강서동

정적 HTML 4개. 빌드 과정 없음.

- index.html — 가경동 눈썹문신 (루트)
- cheongju/index.html — 청주 눈썹문신
- bokdae/index.html — 복대동 눈썹문신
- gangseo/index.html — 강서동 눈썹문신
- assets/ — 사진, 지도 캡처
- sitemap.xml / robots.txt / feed.xml — 색인 제출용 (하위 페이지는 ../assets/ 로 참조)

## GitHub + Cloudflare Pages 배포

1. 이 폴더 내용을 새 GitHub 저장소 루트에 올린다 (index.html이 루트에 있어야 함).
2. Cloudflare 대시보드 → Workers & Pages → Create → Pages → Connect to Git → 저장소 선택.
3. Framework preset: **None**, Build command: 비움, Build output directory: **/** (루트).
4. Save and Deploy. 이후 push하면 자동 재배포.

폰트(마루부리)는 jsDelivr CDN에서 불러옵니다. 완전 오프라인이 필요하면 woff2 파일을 assets/에 넣고 style의 @font-face url을 바꾸면 됩니다.


## 2026-10-22 업데이트: 청주 뷰티 키워드별 16개 페이지 추가

- 전체 안내 인덱스: `/topics/`
- 신규 페이지: `cheongju-eyebrow-semi/`, `cheongju-eyebrow-tattoo/`, `cheongju-mens-eyebrow-tattoo/`, `cheongju-eyebrow-recommendation/`, `cheongju-eyebrow-consulting/`, `cheongju-natural-eyebrow/`, `cheongju-eyebrow/`, `cheongju-lip-tattoo/`, `cheongju-lip-semi/`, `cheongju-eyeliner/`, `cheongju-eyeliner-semi/`, `cheongju-eyeliner-tattoo/`, `cheongju-hairline/`, `cheongju-hairline-tattoo/`, `cheongju-hairline-semi/`, `cheongju-beauty-mark/`
- 각 페이지마다 고유 제목, 메타 설명, canonical, OG, WebPage/브레드크럼 구조화 데이터를 적용했습니다.
- 기존 4개 지역 페이지(및 동등한 `.html` 경로)에 새 안내 링크를 삽입했습니다.
- `sitemap.xml`과 `feed.xml`을 신규 페이지 포함하도록 업데이트했습니다.
- 사진은 기존 `assets/`만 사용했습니다. 눈썹 외 시술 부위의 결과 사진은 기존 자료에 없어 해당 시술 사례인 것처럼 설명하지 않았습니다.
- 모든 페이지는 정적 HTML로 별도 빌드 없이 Cloudflare Pages에 배포 가능합니다.
- 이미지, 글, 예약 링크 및 제공 서비스 내용은 공개 전에 사업자가 최종 점검해 주세요.
