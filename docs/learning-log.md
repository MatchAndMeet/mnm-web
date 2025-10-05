# MatchAndMeet 개발 학습 일지

## 2025-10-04

### 프로젝트 초기 설정

#### 1. 프로젝트 개요 정리
- **프로젝트명**: MatchAndMeet (매치앤밋)
- **목적**: 소개팅 앱 서비스 랜딩페이지 제작
- **학습 방식**: 웹 기초부터 단계적으로 학습하며 직접 코딩
- **기술 스택**: React
- **언어 지원**: 한국어, 영어

#### 2. Git 초기화 및 첫 커밋

**Git이란?**
- 버전 관리 시스템
- 코드 변경 이력을 추적하고 관리
- 협업 시 필수 도구

**진행 내용:**
1. `.gitignore` 파일 생성
   - 버전 관리에서 제외할 파일/폴더 지정
   - `node_modules/`, `build/`, `.DS_Store` 등
   - IDE 설정 파일 (`.vscode/`, `.idea/`, `.claude/`)

2. 첫 커밋 생성
   ```bash
   git add .gitignore README.md
   git commit -m "Initial commit: MatchAndMeet 랜딩페이지 프로젝트 설정"
   ```

#### 3. React 프로젝트 설정

**React란?**
- 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리
- 컴포넌트 기반 개발
- Facebook(Meta)에서 개발

**Vite 선택 이유:**
- Create React App(CRA)보다 빠른 개발 서버
- 최신 빌드 도구 (Rollup 기반)
- 가볍고 빠른 HMR (Hot Module Replacement)

**설치 명령어:**
```bash
npm create vite@latest . -- --template react
```

**Rolldown-vite (실험적 기능):**
- Rust로 작성된 새로운 번들러
- Rollup + esbuild를 하나로 합친 것
- 더 빠른 성능 목표
- **선택**: No (안정적인 기본 설정 사용)

#### 4. 프로젝트 파일 정리

**문제 상황:**
- Vite 설치 시 기존 README.md와 .gitignore가 덮어씌워짐

**해결:**
1. README.md → Git으로 원래 버전 복원
2. .gitignore → Vite 기본 설정 + 기존 설정 병합
   - `.claude/` 추가
   - 환경변수 파일 명시
   - 테스트 커버리지 폴더 추가

#### 5. JavaScript vs TypeScript 선택

**JavaScript 선택 이유:**
- 웹 기초부터 학습 중
- React 기본 개념에 집중
- 타입 문법 없이 간단하게 시작
- 나중에 필요시 TypeScript로 전환 가능

#### 6. React 프로젝트 커밋
```bash
git add .
git commit -m "React 프로젝트 설정 완료 (Vite + JavaScript)"
```

---

## React 프로젝트 기본 구조

### 핵심 파일 설명

```
mnm-web/
├── index.html          # HTML 진입점 (웹 페이지의 시작)
├── package.json        # 프로젝트 정보 & 사용하는 패키지 목록
├── vite.config.js      # Vite 빌드 도구 설정
│
├── public/             # 정적 파일 (이미지, 아이콘 등)
│   └── vite.svg
│
└── src/                # 실제 코드 작성하는 곳
    ├── main.jsx        # JavaScript 진입점 (React 시작)
    ├── App.jsx         # 메인 컴포넌트
    ├── App.css         # App 컴포넌트 스타일
    └── index.css       # 전역 스타일
```

### 파일별 역할

**1. index.html**
- 브라우저가 처음 읽는 파일
- `<div id="root"></div>`: React 앱이 여기에 그려짐
- `<script src="/src/main.jsx">`: JavaScript 파일 연결

**2. package.json**
- 프로젝트 이름, 버전 정보
- 사용하는 라이브러리(의존성) 목록
- 실행 명령어 (`npm run dev`, `npm run build`)

**3. src/main.jsx**
- React 앱의 시작점
- `ReactDOM.render()`: React를 HTML에 연결
- `App` 컴포넌트를 `root`에 렌더링

**4. src/App.jsx**
- 메인 컴포넌트
- 화면에 보이는 내용을 여기서 작성
- 다른 컴포넌트들을 조합하는 곳

**5. public/ 폴더**
- 그대로 사용되는 파일 (가공 안 됨)
- 이미지, 파비콘 등
- 빌드 시 그대로 복사됨

### 개발 서버 실행
```bash
npm install      # 패키지 설치 (최초 1회)
npm run dev      # 개발 서버 시작
```

---

## 학습 키워드

### Git
- `.gitignore`: 버전 관리 제외 파일 설정
- `git add .`: 모든 변경사항을 스테이징
- `git commit`: 변경사항 저장

### React 기본
- **컴포넌트 (Component)**: UI를 구성하는 독립적인 조각
- **JSX**: JavaScript 안에서 HTML 같은 문법 사용
- **렌더링 (Rendering)**: 화면에 그리는 것

### React & 빌드 도구
- **Vite**: 최신 React 개발 도구
- **CRA (Create React App)**: 전통적인 React 설정 도구
- **HMR (Hot Module Replacement)**: 코드 수정 시 페이지 새로고침 없이 반영
- **번들러**: 여러 파일을 하나로 묶는 도구 (Rollup, Webpack 등)

### 프로젝트 파일
- **package.json**: 프로젝트 설정 파일
- **node_modules**: 설치된 패키지들 (git에 올리지 않음)
- **public/**: 정적 파일 폴더
- **src/**: 소스 코드 폴더

### 용어
- **랜딩페이지**: 서비스 소개 및 사용자 유입을 위한 첫 페이지
- **후킹 (Hooking)**: 사용자 관심 유도 및 확보

#### 7. 프로젝트 클린업 (샘플 코드 제거)

**삭제한 파일:**
- `public/vite.svg` - 샘플 로고 이미지
- `src/assets/react.svg` - React 로고 이미지

**초기화한 파일:**
- `src/App.css` - 전부 삭제, 빈 파일로
- `src/index.css` - 전부 삭제, 빈 파일로
- `src/App.jsx` - 최소 구조로 단순화

**깨끗한 App.jsx:**
```jsx
function App() {
  return (
    <div>
      <h1>MatchAndMeet</h1>
    </div>
  )
}

export default App
```

**이유:**
- 학습용 샘플 코드 제거
- 깨끗한 상태에서 직접 작성
- 필요한 것만 추가하는 방식

---

## 다음 단계: 랜딩페이지 개발 시작

### 1단계: 페이지 구조 기획 (추천)
랜딩페이지에 어떤 섹션이 들어갈지 먼저 정리:
- Hero (메인 비주얼 + 핵심 메시지)
- 서비스 소개
- 주요 기능
- 이메일 수집 (대기자 명단)
- Footer

### 2단계: HTML/CSS 기본 학습
React 전에 기본기:
- HTML 태그 (`div`, `h1`, `p`, `button` 등)
- CSS 스타일링 (색상, 레이아웃, 폰트)
- Flexbox / Grid (레이아웃)

### 3단계: 컴포넌트로 나누기
- Header 컴포넌트
- Hero 컴포넌트
- Feature 컴포넌트
- EmailSignup 컴포넌트
- Footer 컴포넌트

**추천 순서:**
1. 먼저 `App.jsx`에서 전체 HTML 구조 작성
2. 스타일링 적용
3. 나중에 컴포넌트로 분리

---

## Hero 섹션 개발

### Hero 섹션이란?
- 랜딩페이지 **최상단 영역**
- 사용자가 **첫 번째로 보는 화면**
- 보통 화면 전체 높이(100vh) 차지
- 서비스 핵심 메시지 전달
- "Hero Image/Banner"에서 유래

### Hero 섹션 HTML 구조

**App.jsx:**
```jsx
import './App.css'  // CSS 파일 import 필수!

function App() {
    return (
        <div className="hero">
            <h1>Match And Meet</h1>
            <p>"We're currently improving our matching algorithm to accommodate a sudden spike in users."</p>
            <button>Sign up for the waitlist</button>
        </div>
    )
}

export default App
```

**포인트:**
- `className` 사용 (JSX에서 `class` 대신)
- `<h1>`: 페이지 메인 제목
- `<p>`: 설명 문구
- `<button>`: CTA (Call To Action)

### CSS 스타일링

#### 1. Flexbox로 가운데 정렬

**App.css:**
```css
.hero {
    height: 100vh;              /* 화면 전체 높이 */
    display: flex;              /* Flexbox 활성화 */
    flex-direction: column;     /* 세로 배치 */
    justify-content: center;    /* 세로 중앙 정렬 */
    align-items: center;        /* 가로 중앙 정렬 */
    padding: 20px;              /* 가장자리 여백 */
    background-color: #f8f9fa;  /* 배경색 */
}
```

**Flexbox 개념:**
- `display: flex`: 유연한 레이아웃 시작
- `flex-direction: column`: 자식을 세로로 배치
  - `row` (기본값): 가로 배치
  - `column`: 세로 배치
- `justify-content`: **주축** 방향 정렬
  - column이면 세로 정렬
- `align-items`: **교차축** 방향 정렬
  - column이면 가로 정렬

#### 2. 텍스트 스타일

```css
.hero h1 {
    font-size: 48px;         /* 글자 크기 */
    font-weight: 700;        /* 굵기 (400=보통, 700=굵게) */
    color: #333;             /* 글자 색 */
    margin-bottom: 20px;     /* 아래 여백 */
}

.hero p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
    max-width: 600px;        /* 최대 너비 제한 */
    line-height: 1.6;        /* 줄 간격 */
    text-align: center;      /* 텍스트 중앙 정렬 */
}
```

#### 3. 버튼 스타일

```css
.hero button {
    padding: 15px 40px;              /* 상하 15px, 좌우 40px */
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: #FF6B6B;       /* 배경색 */
    border: none;                    /* 기본 테두리 제거 */
    border-radius: 8px;              /* 모서리 둥글게 */
    cursor: pointer;                 /* 마우스 포인터 */
    transition: background-color 0.3s; /* 부드러운 색상 변화 */
}

.hero button:hover {
    background-color: #ff5252;       /* 마우스 올렸을 때 색상 */
}
```

**인터랙션:**
- `:hover`: 마우스 올렸을 때 스타일
- `transition`: 변화를 부드럽게
- `cursor: pointer`: 클릭 가능함을 표시

### CSS Reset (index.css)

브라우저 기본 스타일 제거:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}
```

**이유:**
- 브라우저 기본 `margin: 8px` 제거
- 모든 브라우저에서 동일하게 보이도록
- `box-sizing: border-box`: width에 padding/border 포함

### 모바일에서 확인

**package.json 수정:**
```json
"scripts": {
  "dev": "vite --host"
}
```

**실행:**
```bash
npm run dev
```

**모바일에서 접속:**
1. PC와 같은 WiFi 연결
2. 터미널의 `Network: http://192.168.x.x:5173/` 주소 확인
3. 모바일 브라우저에서 해당 주소 입력

---

## 학습한 주요 개념

### JavaScript/React
- **export default vs export**
  - `export default`: 파일당 1개, import 시 이름 자유
  - `export`: 여러 개 가능, import 시 정확한 이름
- **import './App.css'**: CSS 파일 연결 필수
- **className**: JSX에서 `class` 대신 사용

### CSS 단위
- **vh (Viewport Height)**: 화면 높이 기준
  - `100vh` = 화면 높이 100%
  - 기기마다 자동 조정
- **vw (Viewport Width)**: 화면 너비 기준

### CSS 레이아웃
- **Flexbox**: 유연한 레이아웃 시스템
  - `display: flex`
  - `flex-direction`: 배치 방향
  - `justify-content`: 주축 정렬
  - `align-items`: 교차축 정렬

### CSS 스타일링
- **padding**: 안쪽 여백 (콘텐츠와 테두리 사이)
- **margin**: 바깥 여백 (요소 간 간격)
- **border-radius**: 모서리 둥글게
- **transition**: 애니메이션 효과
- **:hover**: 마우스 올렸을 때 스타일

### 개발 도구
- **--host**: 네트워크의 다른 기기에서 접근 가능
- **HMR (Hot Module Replacement)**: 저장 시 자동 새로고침

---

## Features 섹션 개발

### Features 섹션 추가

Hero 아래에 서비스 특징을 소개하는 섹션을 추가했습니다.

### HTML 구조

**App.jsx:**
```jsx
function App() {
    return (
        <>
            {/* Hero 섹션 */}
            <div className="hero">...</div>

            {/* Features 섹션 */}
            <div className="features">
                <h2>Why Choose Match And Meet?</h2>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>🤖 AI Matching</h3>
                        <p>Our advanced AI algorithm finds your perfect match...</p>
                    </div>

                    <div className="feature-card">
                        <h3>🔒 Safe & Secure</h3>
                        <p>Verified profiles and secure messaging...</p>
                    </div>

                    <div className="feature-card">
                        <h3>⚡ Fast & Easy</h3>
                        <p>Simple interface gets you matched...</p>
                    </div>
                </div>
            </div>
        </>
    )
}
```

**Fragment (`<>...</>`):**
- 여러 요소를 묶을 때 사용
- 불필요한 div 추가 없이 그룹화
- `<React.Fragment>...</React.Fragment>`의 축약형

### CSS Grid 레이아웃

**App.css:**
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3개 열 균등 분할 */
    gap: 30px;                              /* 간격 */
    max-width: 1200px;
    margin: 0 auto;                         /* 중앙 정렬 */
}
```

**Grid 개념:**
- `display: grid`: Grid 레이아웃 활성화
- `grid-template-columns`: 열 구조 정의
  - `repeat(3, 1fr)`: 3개 열을 1:1:1 비율로
  - `1fr` = 1 fraction (사용 가능한 공간의 1 비율)
- `gap`: 그리드 아이템 간 간격
- Flexbox vs Grid:
  - Flexbox: 1차원 (행 또는 열)
  - Grid: 2차원 (행과 열)

### 카드 스타일 & 인터랙션

```css
.feature-card {
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);  /* 위로 5px 이동 */
}
```

**transform 속성:**
- `translateY(-5px)`: Y축으로 -5px 이동 (위로)
- `translateX()`: X축 이동
- `scale()`: 크기 변경
- `rotate()`: 회전

### 반응형 디자인 (@media)

```css
@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;  /* 모바일: 1열 */
    }

    .features h2 {
        font-size: 28px;
    }

    .hero h1 {
        font-size: 36px;
    }
}
```

**미디어 쿼리:**
- `@media (max-width: 768px)`: 화면 너비 768px 이하일 때
- 일반적인 브레이크포인트:
  - 모바일: 0-768px
  - 태블릿: 768-1024px
  - 데스크톱: 1024px+
- 모바일 퍼스트 vs 데스크톱 퍼스트
  - 모바일 퍼스트: 기본 스타일은 모바일, `@media (min-width)`로 큰 화면
  - 데스크톱 퍼스트: 기본 스타일은 데스크톱, `@media (max-width)`로 작은 화면

---

## 학습한 주요 개념 (추가)

### React Fragment
- `<>...</>`: 여러 요소를 불필요한 DOM 없이 그룹화
- 컴포넌트가 하나의 루트 요소만 반환해야 할 때 유용

### CSS Grid
- **2차원 레이아웃 시스템**
- `grid-template-columns`: 열 정의
- `grid-template-rows`: 행 정의
- `gap`: 간격
- `repeat()`: 반복 패턴
- `fr` 단위: 비율 기반 크기

### CSS Transform
- **요소의 위치, 크기, 회전 변경**
- `translateX()`, `translateY()`: 이동
- `scale()`: 크기 조절
- `rotate()`: 회전
- hover와 함께 사용하면 동적 효과

### 반응형 웹 디자인
- **@media 쿼리**: 화면 크기에 따라 다른 스타일 적용
- 모바일/태블릿/데스크톱 대응
- 브레이크포인트 설정

---

## Email Signup 섹션 및 인터랙티브 기능 개발

### Email Signup 섹션 추가

대기자 명단 등록을 위한 폼 섹션 추가

**HTML 구조:**
```jsx
<div className="email-signup">
    <h2>Join the Waitlist</h2>
    <p>Be the first to know when we launch</p>

    <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Notify Me</button>
    </form>
</div>
```

**CSS:**
- Flexbox로 입력 필드와 버튼 가로 배치
- 모바일에서는 세로 배치 (flex-direction: column)
- input focus 시 테두리 색상 변경

---

## React State 관리 (useState)

### useState란?

**React의 핵심 Hook:**
- 컴포넌트가 기억하는 데이터
- 상태가 변경되면 컴포넌트 자동 재렌더링
- 사용자 입력, 클릭 등의 상호작용 처리

**사용법:**
```jsx
const [value, setValue] = useState(initialValue)
//     ↑       ↑              ↑
//   현재값  변경함수      초기값
```

### 이메일 폼에 적용

```jsx
import { useState } from 'react'

function App() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setError(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  // 페이지 새로고침 방지

        if (email) {
            console.log('이메일 제출:', email)
            setSubmitted(true)
            setEmail('')  // 입력 필드 초기화
        }
    }
}
```

**주요 개념:**
- `e.preventDefault()`: 폼 기본 동작(새로고침) 방지
- `e.target.value`: 입력 필드의 현재 값
- 상태 변경 → 화면 자동 업데이트

### 조건부 렌더링

```jsx
{submitted ? (
    <p className="success-message">✅ Thank you!</p>
) : (
    <form>...</form>
)}
```

삼항 연산자로 조건에 따라 다른 UI 표시

---

## useRef와 스크롤 기능

### useRef란?

**DOM 요소를 직접 참조하는 Hook:**
- JavaScript의 `getElementById` 같은 역할
- 렌더링에 영향을 주지 않음
- `.current`로 실제 DOM 요소 접근

### 스크롤 기능 구현

```jsx
import { useRef } from 'react'

function App() {
    const emailSectionRef = useRef(null)

    const scrollToEmailSection = () => {
        emailSectionRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <>
            <button onClick={scrollToEmailSection}>Sign up</button>
            <div ref={emailSectionRef}>...</div>
        </>
    )
}
```

**주요 메서드:**
- `scrollIntoView({ behavior: 'smooth' })`: 부드러운 스크롤
- `?.` (Optional Chaining): null이면 에러 없이 스킵

---

## Supabase 데이터베이스 연동

### Supabase란?

**오픈소스 Firebase 대안:**
- PostgreSQL 기반 실시간 데이터베이스
- REST API 자동 생성
- Row Level Security (RLS)로 보안 관리
- 무료 플랜: 50,000 rows, 500MB DB

### 설정 과정

**1. Supabase 프로젝트 생성**
- supabase.com 가입
- 새 프로젝트 생성
- Region: Northeast Asia (Seoul)
- Database 비밀번호 설정

**2. emails 테이블 생성**

SQL:
```sql
CREATE TABLE emails (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- 누구나 이메일 제출 가능
CREATE POLICY "Enable insert for anon users"
ON emails FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 누구나 읽기 가능 (나중에 제한 가능)
CREATE POLICY "Enable read for all users"
ON emails FOR SELECT
TO anon, authenticated
USING (true);
```

**RLS (Row Level Security):**
- 테이블 수준의 보안 정책
- `anon`: 익명 사용자 (로그인 안 함)
- `authenticated`: 로그인한 사용자
- `WITH CHECK (true)`: 모든 삽입 허용
- `USING (true)`: 모든 읽기 허용

**3. React에 Supabase 클라이언트 설치**

```bash
npm install @supabase/supabase-js
```

**4. 환경변수 설정**

`.env` 파일:
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
VITE_ADMIN_PASSWORD=your_secure_password
```

**중요:**
- `.env` 파일은 Git에 절대 올리지 않음 (.gitignore)
- `VITE_` 접두사 필수 (Vite 환경변수)
- Vercel 배포 시 Dashboard에서 환경변수 별도 설정 필요

**5. Supabase 클라이언트 생성**

`src/supabaseClient.js`:
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 데이터 저장 기능

```jsx
import { supabase } from './supabaseClient'

const handleSubmit = async (e) => {
    e.preventDefault()

    if (email) {
        const { data, error } = await supabase
            .from('emails')
            .insert([{ email: email }])

        if (error) {
            setError('Already registered or invalid email')
        } else {
            setSubmitted(true)
            setEmail('')
        }
    }
}
```

**async/await:**
- 비동기 작업 처리
- `await`로 Supabase 응답 대기
- `{ data, error }` 구조분해 할당

---

## React Router로 페이지 라우팅

### React Router란?

**SPA(Single Page Application)에서 페이지 전환:**
- URL에 따라 다른 컴포넌트 표시
- 새로고침 없이 페이지 전환
- 브라우저 히스토리 관리

### 설치 및 설정

```bash
npm install react-router-dom
```

**main.jsx:**
```jsx
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
    <App />
</BrowserRouter>
```

**App.jsx:**
```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}
```

**주요 컴포넌트:**
- `BrowserRouter`: 전체 앱 감싸기
- `Routes`: 라우트 그룹
- `Route`: 개별 경로 정의
  - `path`: URL 경로
  - `element`: 렌더링할 컴포넌트

---

## 관리자 페이지 개발

### 페이지 구조

**src/pages/Home.jsx:**
- 기존 랜딩페이지 컴포넌트
- App.jsx에서 분리

**src/pages/Admin.jsx:**
- 이메일 목록 표시
- Supabase에서 데이터 조회
- 테이블 형태로 표시

### 데이터 조회

```jsx
import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

function Admin() {
    const [emails, setEmails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchEmails()
    }, [])

    const fetchEmails = async () => {
        const { data, error } = await supabase
            .from('emails')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error) {
            setEmails(data)
        }
        setLoading(false)
    }

    return (
        <table>
            {emails.map((item) => (
                <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>{new Date(item.created_at).toLocaleString()}</td>
                </tr>
            ))}
        </table>
    )
}
```

**useEffect:**
- 컴포넌트 마운트 시 실행
- `[]` 빈 의존성 배열 = 한 번만 실행
- 데이터 가져오기에 주로 사용

**배열 렌더링:**
- `.map()`: 배열을 JSX로 변환
- `key` prop 필수 (고유 ID)

---

## 비밀번호 보호 기능

### localStorage 활용

```jsx
const [authenticated, setAuthenticated] = useState(false)
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

useEffect(() => {
    const isAuth = localStorage.getItem('admin_authenticated')
    if (isAuth === 'true') {
        setAuthenticated(true)
    }
}, [])

const handleLogin = (e) => {
    e.preventDefault()

    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('admin_authenticated', 'true')
        setAuthenticated(true)
    } else {
        alert('Wrong password!')
    }
}

const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    setAuthenticated(false)
}
```

**localStorage:**
- 브라우저에 데이터 영구 저장
- 세션 유지 (페이지 새로고침해도 유지)
- 문자열만 저장 가능

**조건부 렌더링:**
```jsx
if (!authenticated) {
    return <LoginForm />  // 로그인 화면
}

return <AdminDashboard />  // 관리자 화면
```

---

## 학습한 주요 개념 (추가)

### React Hooks
- **useState**: 상태 관리
- **useRef**: DOM 참조
- **useEffect**: 사이드 이펙트 (데이터 가져오기 등)

### JavaScript 문법
- **async/await**: 비동기 처리
- **구조분해 할당**: `const { data, error } = result`
- **Optional Chaining**: `obj?.property`
- **삼항 연산자**: `condition ? true : false`
- **템플릿 리터럴**: `` `Hello ${name}` ``

### 환경변수
- `.env`: 민감한 정보 관리
- `import.meta.env`: Vite에서 환경변수 접근
- `.gitignore`: `.env` 파일 제외
- Vercel: Dashboard에서 환경변수 별도 설정

### 데이터베이스
- **PostgreSQL**: 관계형 데이터베이스
- **RLS**: Row Level Security (행 수준 보안)
- **CRUD**: Create (INSERT), Read (SELECT), Update, Delete
- **Primary Key**: 고유 식별자

### SPA (Single Page Application)
- **라우팅**: URL에 따라 컴포넌트 전환
- **페이지 전환**: 새로고침 없이
- **History API**: 브라우저 뒤로가기/앞으로가기

### 따옴표 컨벤션
- **JavaScript**: 작은 따옴표 `'`
- **JSX 속성**: 큰 따옴표 `"`
- **템플릿 리터럴**: 백틱 `` ` ``

---

## 배포 환경변수 설정

**Vercel Dashboard:**
- Settings → Environment Variables
- 모든 환경변수 추가:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_ADMIN_PASSWORD`
- Environment: Production, Preview, Development 모두 선택
- 환경변수 변경 후 재배포 필요
