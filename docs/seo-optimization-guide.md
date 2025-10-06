# SEO 최적화 가이드

Match And Meet 랜딩페이지 SEO 최적화 단계별 가이드입니다.

---

## 1️⃣ Meta 태그 추가 (가장 기본)

**위치**: `index.html` 파일의 `<head>` 섹션

**추가할 내용**:
```html
<!-- 기본 Meta 태그 -->
<title>Match And Meet - Stop Swiping, Start Dating</title>
<meta name="description" content="진짜 만남을 위한 데이팅 앱. 매주 3명 매칭, 바람맞히기 금지. 현실적인 매칭 알고리즘으로 진정한 인연을 찾으세요.">
<meta name="keywords" content="데이팅앱, 소개팅, 매칭, 진짜만남, 바람맞히기금지">
<meta name="author" content="Match And Meet">

<!-- 언어 설정 (현재 프로젝트는 단일 페이지에서 언어 전환하므로 불필요) -->
<meta name="language" content="Korean">
```

**왜 중요한가?**
- `title`: 검색 결과에 표시되는 제목 (50-60자 권장)
- `description`: 검색 결과 아래 요약문 (155자 이내 권장)
- `keywords`: 검색 엔진이 페이지 주제 파악
- `hreflang`: 다국어 사이트일 경우 언어별 URL 지정

---

## 2️⃣ Open Graph 태그 (소셜 미디어 공유)

**위치**: 같은 `index.html`의 `<head>` 섹션

**추가할 내용**:
```html
<!-- Open Graph (카카오톡, 페이스북 공유 시) -->
<meta property="og:type" content="website">
<meta property="og:title" content="Match And Meet - 진짜 만남을 위한 데이팅">
<meta property="og:description" content="매주 한 번, 진짜 만남. 끝없는 스와이프도, 잠수도 없는 진정한 인연만.">
<meta property="og:image" content="https://matchandmeet.vercel.app/og-image.png">
<meta property="og:url" content="https://matchandmeet.vercel.app">
<meta property="og:site_name" content="Match And Meet">

<!-- Twitter 카드 -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Match And Meet - 진짜 만남을 위한 데이팅">
<meta name="twitter:description" content="매주 한 번, 진짜 만남. 끝없는 스와이프도, 잠수도 없는 진정한 인연만.">
<meta name="twitter:image" content="https://matchandmeet.vercel.app/og-image.png">
```

**필요한 작업**:
1. `og-image.png` 제작 (1200x630px 권장)
   - Canva, Figma 등에서 제작
   - 브랜드 로고 + 핵심 메시지 포함
2. `public/` 폴더에 저장

**카카오톡/페이스북 공유 테스트**:
- 카카오톡: https://developers.kakao.com/tool/debugger/sharing
- 페이스북: https://developers.facebook.com/tools/debug/

---

## 3️⃣ Favicon 추가

**위치**: `public/` 폴더

**필요한 파일들**:
```
public/
  favicon.ico (16x16, 32x32)
  favicon-96x96.png
  apple-touch-icon.png (180x180)
```

**index.html에 추가**:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

**Favicon 만드는 법**:
1. https://favicon.io 접속
2. "Text" 또는 "Image" 선택
3. 로고 업로드 또는 텍스트 입력 (예: "M&M")
4. 다운로드 → public 폴더에 복사

---

## 4️⃣ robots.txt 파일 생성

**위치**: `public/robots.txt` (새 파일)

**내용**:
```txt
User-agent: *
Allow: /

Sitemap: https://matchandmeet.vercel.app/sitemap.xml
```

**의미**:
- `User-agent: *`: 모든 검색 엔진 크롤러
- `Allow: /`: 모든 페이지 크롤링 허용
- `Sitemap`: sitemap.xml 위치 알려줌

**특정 페이지 차단 (선택사항)**:
```txt
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://matchandmeet.vercel.app/sitemap.xml
```

---

## 5️⃣ sitemap.xml 생성

**위치**: `public/sitemap.xml` (새 파일)

**내용**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://matchandmeet.vercel.app</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://matchandmeet.vercel.app/admin</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

**의미**:
- `<loc>`: 페이지 URL
- `<lastmod>`: 마지막 수정일 (YYYY-MM-DD)
- `<changefreq>`: 업데이트 빈도 (always, hourly, daily, weekly, monthly, yearly, never)
- `<priority>`: 페이지 중요도 (0.0~1.0)

**Google Search Console 등록**:
1. https://search.google.com/search-console 접속
2. 속성 추가 → URL 입력
3. Sitemap 제출: https://matchandmeet.vercel.app/sitemap.xml

---

## 6️⃣ Structured Data (JSON-LD)

**위치**: `index.html`의 `<head>` 안 또는 `<body>` 끝

**내용**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Match And Meet",
  "description": "진짜 만남을 위한 데이팅 앱",
  "url": "https://matchandmeet.vercel.app",
  "applicationCategory": "LifestyleApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1200"
  }
}
</script>
```

**의미**:
- 구글이 페이지를 더 잘 이해
- 검색 결과에 리치 스니펫(별점, 가격 등) 표시 가능

**테스트 도구**:
- https://search.google.com/test/rich-results

---

## 7️⃣ 성능 최적화 (Core Web Vitals)

### 이미지 최적화

**Lazy Loading**:
```jsx
// 현재
<img src="/mockup.png" alt="Match And Meet App" />

// 개선 (이미 적용됨!)
<img src="/mockup.png" alt="Match And Meet App" loading="lazy" />
```

**이미지 포맷 변환**:
- PNG → WebP (용량 30% 감소)
- 도구: https://squoosh.app

**이미지 압축**:
- TinyPNG: https://tinypng.com
- 화질 유지하며 용량 50-80% 감소

### 폰트 최적화

**Google Fonts Preconnect**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 8️⃣ 접근성 (Accessibility)

**Alt 텍스트 추가**:
- 모든 이미지에 `alt` 속성 필수
- 스크린 리더 사용자를 위함

**시맨틱 HTML**:
```html
<!-- 현재 -->
<div className="hero">

<!-- 권장 -->
<section className="hero">
  <h1>Match And Meet</h1>
</section>
```

**ARIA Labels**:
```jsx
<button aria-label="우선 가입 신청">
  {t('emailSignup.button')}
</button>
```

---

## 🚀 작업 순서 (우선순위별)

### ✅ 지금 당장 (5분)
1. `index.html`에 기본 meta 태그 추가
2. Title, Description 설정

### ✅ 오늘 중 (15분)
3. `robots.txt` 생성
4. `sitemap.xml` 생성
5. Google Search Console 등록

### ✅ 이번 주 (1시간)
6. OG 이미지 제작 (1200x630px)
7. Favicon 제작 및 추가
8. Open Graph 태그 추가

### ✅ 다음 주 (선택사항)
9. JSON-LD 추가
10. 이미지 WebP 변환
11. 접근성 개선

---

## 📊 SEO 체크리스트

- [ ] `<title>` 태그 (50-60자)
- [ ] `<meta name="description">` (155자 이내)
- [ ] `<meta name="keywords">`
- [ ] Open Graph 태그 (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card 태그
- [ ] Favicon (favicon.ico, apple-touch-icon.png)
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] JSON-LD Structured Data
- [ ] 이미지 `alt` 텍스트
- [ ] 이미지 `loading="lazy"`
- [ ] Google Search Console 등록
- [ ] 모바일 반응형 확인
- [ ] 페이지 속도 테스트 (PageSpeed Insights)

---

## 🔗 유용한 도구

**SEO 분석**:
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev

**이미지 최적화**:
- Squoosh: https://squoosh.app
- TinyPNG: https://tinypng.com

**Favicon 생성**:
- Favicon.io: https://favicon.io

**OG 이미지 제작**:
- Canva: https://canva.com
- Figma: https://figma.com

**테스트**:
- Rich Results Test: https://search.google.com/test/rich-results
- 카카오톡 공유 디버거: https://developers.kakao.com/tool/debugger/sharing
- 페이스북 디버거: https://developers.facebook.com/tools/debug/

---

## 💡 팁

**커뮤니티 홍보용 UTM 파라미터**:
```
https://matchandmeet.vercel.app?utm_source=todayhumor&utm_medium=post&utm_campaign=launch
```

**Vercel에서 커스텀 도메인 연결 시**:
1. Vercel 프로젝트 → Settings → Domains
2. 도메인 추가 → DNS 레코드 설정
3. 모든 URL 업데이트 (sitemap.xml, robots.txt 등)

**정기적으로 업데이트**:
- `sitemap.xml`의 `<lastmod>` 날짜
- 새로운 페이지 추가 시 sitemap에 URL 추가
- Google Search Console에서 크롤링 요청
