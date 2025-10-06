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
  - `VITE_AMPLITUDE_API_KEY`
- Environment: Production, Preview, Development 모두 선택
- 환경변수 변경 후 재배포 필요

---

## Amplitude Analytics 통합

### Amplitude란?

**이벤트 기반 사용자 행동 분석 플랫폼:**
- 페이지뷰, 클릭, 제출 등 모든 사용자 행동 추적
- UTM 파라미터 자동 수집 (트래픽 소스 분석)
- 퍼널 분석, 코호트 분석, 리텐션 분석
- 무료 플랜: 월 10M 이벤트

### 설정 과정

**1. Amplitude 계정 생성**
- amplitude.com 가입
- 프로젝트 생성
- API Key 복사

**2. 패키지 설치**

```bash
npm install @amplitude/analytics-browser
```

**3. Amplitude 클라이언트 생성**

`src/amplitudeClient.js`:
```javascript
import * as amplitude from '@amplitude/analytics-browser'

const AMPLITUDE_API_KEY = import.meta.env.VITE_AMPLITUDE_API_KEY

export const initAmplitude = () => {
    amplitude.init(AMPLITUDE_API_KEY, {
        defaultTracking: {
            sessions: true,
            pageViews: true,
            formInteractions: true,
            fileDownloads: false
        }
    })
}

export const trackEvent = (eventName, eventProperties = {}) => {
    amplitude.track(eventName, eventProperties)
}

export { amplitude }
```

**defaultTracking 옵션:**
- `sessions`: 세션 자동 추적
- `pageViews`: 페이지뷰 자동 추적
- `formInteractions`: 폼 인터랙션 자동 추적
- `fileDownloads`: 파일 다운로드 추적 (비활성화)

**4. 앱 초기화**

`src/main.jsx`:
```javascript
import { initAmplitude } from './amplitudeClient'

// Amplitude 초기화
initAmplitude()

createRoot(document.getElementById('root')).render(...)
```

**5. 커스텀 이벤트 추적**

`src/pages/Home.jsx`:
```javascript
import { trackEvent } from '../amplitudeClient'

const handleSubmit = async (e) => {
    e.preventDefault()

    if (email) {
        const { data, error } = await supabase
            .from('emails')
            .insert([{ email: email }])

        if (error) {
            trackEvent('Email Signup Failed', { error: error.message })
        } else {
            trackEvent('Email Signup Success')
        }
    }
}
```

### UTM 파라미터 추적

**UTM 파라미터란:**
- URL 뒤에 붙이는 추적 코드
- 트래픽 소스 분석에 사용
- Amplitude가 자동으로 수집

**주요 파라미터:**
- `utm_source`: 출처 (todayhumor, everytime, instagram 등)
- `utm_medium`: 매체 (post, ad, story, email 등)
- `utm_campaign`: 캠페인명 (launch, beta 등)
- `utm_content`: 세부 구분 (button1, banner2 등)
- `utm_term`: 검색어 (광고용)

**사용 예시:**
```
https://matchandmeet.vercel.app/?utm_source=todayhumor&utm_medium=post&utm_campaign=launch
https://matchandmeet.vercel.app/?utm_source=instagram&utm_medium=story&utm_campaign=launch
https://matchandmeet.vercel.app/?utm_source=everytime&utm_medium=post&utm_campaign=launch
```

**Amplitude 대시보드:**
- Analytics → Segmentation
- Event 선택: Page View
- Group by: UTM Source, UTM Medium, UTM Campaign
- 어느 채널에서 가장 많이 유입되었는지 확인 가능

---

## 다국어 지원 (i18n) 구현

### react-i18next란?

**React 전용 국제화(Internationalization) 라이브러리:**
- 가장 많이 사용되는 React i18n 라이브러리 (주간 500만+ 다운로드)
- 번역 관리, 언어 전환, 브라우저 언어 감지 자동 지원
- Hook 기반으로 사용하기 쉬움

### 설정 과정

**1. 패키지 설치**

```bash
npm install react-i18next i18next
```

- `i18next`: 핵심 국제화 라이브러리
- `react-i18next`: React에서 사용하기 위한 래퍼

**2. 번역 파일 생성**

디렉토리 구조:
```
src/
  locales/
    en.json  (영어 번역)
    ko.json  (한국어 번역)
```

`src/locales/en.json`:
```json
{
  "hero": {
    "title": "Match And Meet",
    "subtitle": "We're currently improving our matching algorithm...",
    "cta": "Sign up for the waitlist"
  },
  "features": {
    "title": "Why Choose Match And Meet?",
    "realConnections": {
      "title": "💝 Real Connections, Not Swipes",
      "description": "Modern dating has become too superficial..."
    }
  }
}
```

**계층적 구조:**
- 섹션별로 정리 (hero, features, emailSignup)
- 키 이름은 영어로 (코드에서 사용)
- 값은 각 언어로 번역

**3. i18n 설정 파일 생성**

`src/i18n.js`:
```javascript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ko from './locales/ko.json'

// 초기 언어 결정
const getInitialLanguage = () => {
    // 1. localStorage에 저장된 언어 확인
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) return savedLanguage

    // 2. 브라우저 언어 확인
    const browserLanguage = navigator.language.split('-')[0]
    if (['ko', 'en'].includes(browserLanguage)) return browserLanguage

    // 3. 기본값
    return 'en'
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ko: { translation: ko }
        },
        lng: getInitialLanguage(),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
```

**언어 우선순위:**
1. **localStorage**: 사용자가 이전에 선택한 언어
2. **브라우저 언어**: `navigator.language`
3. **기본값**: 영어

**4. 앱 초기화**

`src/main.jsx`:
```javascript
import './i18n'  // import만 해도 자동 초기화
```

**5. 컴포넌트에서 사용**

`src/pages/Home.jsx`:
```javascript
import { useTranslation } from 'react-i18next'

function Home() {
    const { t, i18n } = useTranslation()

    // 언어 전환 함수
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
    }

    return (
        <div>
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.subtitle')}</p>
            <button onClick={() => changeLanguage('ko')}>한국어</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
    )
}
```

**useTranslation Hook:**
- `t()`: 번역 키로 텍스트 가져오기
- `i18n`: i18n 인스턴스 (언어 변경 등)
- `i18n.language`: 현재 언어
- `i18n.changeLanguage()`: 언어 변경

### 언어 토글 버튼 구현

**UI 구현:**
```jsx
<div className="language-toggle">
    <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
    >
        EN
    </button>
    <span>|</span>
    <button
        onClick={() => changeLanguage('ko')}
        className={i18n.language === 'ko' ? 'active' : ''}
    >
        한국어
    </button>
</div>
```

**스타일:**
```css
.language-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.language-toggle button.active {
    color: #FF6B6B;
    font-weight: 700;
}
```

### 주요 개념

**i18n (Internationalization):**
- 국제화 = 소프트웨어를 다양한 언어로 제공
- i18n = "i" + 18글자 + "n"

**localStorage 활용:**
- 사용자가 선택한 언어 저장
- 새로고침해도 유지
- 시크릿 모드에서는 초기화

**navigator.language:**
- 브라우저/OS 언어 설정
- 예: "ko-KR", "en-US"
- `split('-')[0]`로 언어 코드만 추출

**새로고침 vs localStorage:**
- Command+R, Command+Shift+R: localStorage 유지
- localStorage는 수동으로만 삭제 가능
- 테스트는 시크릿 모드 사용

---

## 앞으로 할 일

### 1. Open Graph 메타 태그 추가

**목적:**
- SNS(카톡, 인스타, 페북)에 링크 공유 시 미리보기 이미지/텍스트 표시
- 클릭률 향상

**구현 위치:**
- `index.html`의 `<head>` 태그 안

**필요한 태그:**
```html
<meta property="og:title" content="Match And Meet - Real Dating" />
<meta property="og:description" content="Meet one genuine person every week" />
<meta property="og:image" content="https://matchandmeet.vercel.app/og-image.png" />
<meta property="og:url" content="https://matchandmeet.vercel.app" />
<meta property="og:type" content="website" />
```

### 2. Favicon 추가

**목적:**
- 브라우저 탭에 브랜드 아이콘 표시
- 프로페셔널한 인상

**구현:**
- 16x16, 32x32 크기 아이콘 생성
- `public/favicon.ico` 파일 추가
- `index.html`에 링크

### 3. 랜딩 페이지 전면 개편

**목적:**
- 더 매력적이고 전문적인 디자인
- 서비스 가치 명확하게 전달
- 사용자 전환율 향상

---

#### 📐 새로운 페이지 구조

**1. Hero 섹션 (개선)**
- **왼쪽**: 서비스명 "Match And Meet" 크게 표시 + 강력한 헤드라인 + CTA
- **오른쪽**: 앱 스크린샷 목업 (iPhone 프레임 3개 겹쳐서)

**헤드라인 옵션:**
```
옵션 1: "Stop Swiping. Start Dating."
옵션 2: "One Real Date Every Week. No More Games."
옵션 3: "매주 한 번, 진짜 만남"
```

**앱 목업 구성:**
가로로 3개 이미지 배치:
- **이미지 1 (왼쪽)**: 앱에서 3명의 이성이 추천되는 화면
  - 프로필 카드 3개 표시
  - "이번 주 매칭 3명" 헤더
- **이미지 2 (중앙)**: 매칭 확정 화면
  - 선택한 사람과 매칭 성공
  - "매칭 완료! 만남 날짜를 정하세요"
- **이미지 3 (오른쪽)**: 실제 만남 이미지
  - 카페에서 만나는 장면 일러스트
  - 또는 만남 후기 화면

**구현 방식:**
- CSS로 iPhone 프레임 + 샘플 UI 구현
- 또는 실제 디자인 목업 이미지 삽입
- 약간 겹치게 배치하여 입체감

**현재 구현:**
- 임시 mockup.png 사용
- Figma로 실제 디자인 제작 예정

**디자인 요구사항 (Figma 작업):**

**화면 구성:**
- "이번주 당신의 데이팅 파트너" 헤더 문구
- 1~3명의 이성 추천 화면

**이미지:**
- 매력적인 여성 또는 남성
- 현실감 있는 실제 사진 느낌 (모델급 아님)
- 사진이 크게 배치

**화면 개수 고민:**
- **옵션 1**: 2개 화면 (남성용/여성용 각각)
  - 남성 사용자 → 여성 프로필 화면
  - 여성 사용자 → 남성 프로필 화면
- **옵션 2**: 1개 화면에 3명 선택
  - 여러 명 중 한 명 선택하는 느낌
  - 카드 스택 또는 리스트

**Figma 작업 순서:**
1. iPhone 14 Pro 프레임 (375x812px)
2. 상단: 헤더 + "이번주 당신의 데이팅 파트너"
3. 프로필 카드 디자인
4. 실제 느낌 프로필 사진 (Unsplash 인물 사진)
5. Export → PNG (2x 또는 3x)

**상세 가이드:**
- `docs/figma-mockup-guide.md` 참고

**언어별 스크린샷 대응:**
- 한국어 사용자 → `mockup-ko.png` 표시
- 영어 사용자 → `mockup-en.png` 표시

**구현 방법:**
```jsx
// Home.jsx
const mockupImage = i18n.language === 'ko' ? '/mockup-ko.png' : '/mockup-en.png'

<img src={mockupImage} alt="Match And Meet App" />
```

**필요한 이미지:**
- `public/mockup-ko.png` (한국어 버전)
- `public/mockup-en.png` (영어 버전)

**텍스트 내용:**
- **한국어**: "이번주 당신의 데이팅 파트너"
- **영어**: "Your Dating Partners This Week"

---

**향후 개선: 3개 iPhone 겹치기 레이아웃**

**HTML 구조:**
```jsx
<div className="hero-mockup">
    <div className="phone-stack">
        <div className="phone phone-1">
            <img src="/mockup-1.png" alt="매칭 추천" />
        </div>
        <div className="phone phone-2">
            <img src="/mockup-2.png" alt="매칭 확정" />
        </div>
        <div className="phone phone-3">
            <img src="/mockup-3.png" alt="만남 성사" />
        </div>
    </div>
</div>
```

**CSS 스타일:**
```css
.phone-stack {
    position: relative;
    width: 400px;
    height: 600px;
}

.phone {
    position: absolute;
    width: 280px;
    height: 580px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    transition: transform 0.3s;
}

.phone-1 {
    left: 0;
    top: 20px;
    z-index: 1;
    transform: rotate(-8deg);
}

.phone-2 {
    left: 60px;
    top: 0;
    z-index: 2;
}

.phone-3 {
    left: 120px;
    top: 20px;
    z-index: 1;
    transform: rotate(8deg);
}

/* 호버 효과 */
.phone:hover {
    transform: scale(1.05) translateY(-10px);
    z-index: 3;
}
```

**효과:**
- 3개 iPhone이 카드처럼 펼쳐진 모양
- 가운데가 가장 앞에 (z-index: 2)
- 양옆이 살짝 회전 (rotate ±8deg)
- 호버 시 확대 + 앞으로 이동

---

**2. Problem 섹션 (신규 추가)**
**"왜 기존 데이팅 앱은 실패하는가?"**

4가지 문제점 제시:
- 🔄 **끝없는 스와이프 지옥** - 매일 수백 명을 스와이프하지만 실제 만남은 0
- 👻 **고스팅 문화** - 대화는 많은데 만남으로 이어지지 않음
- 💸 **상위 10% 독식** - 매력적인 프로필 몇 명이 모든 매칭 독점
- 🤖 **가짜 프로필 범람** - 사진 사기, 알바, 봇 계정 가득

**디자인:**
- 2x2 그리드 레이아웃
- 각 카드에 아이콘 + 문제점
- 어두운 배경 또는 회색 톤

---

**3. Solution - Features 섹션 (대폭 개선)**

**A. 무조건 일주일에 1번 만남**
```
제목: 📅 No Flaking. Real Dates Only.
내용:
- 매주 3명 매칭 → 1명 선택 → 무조건 만남
- 바람맞추면? 다음 주 매칭 정지
- 약속 지키는 사람들만 남습니다
```

**B. 시간 절약**
```
제목: ⏰ 하루 5분이면 충분
내용:
- 스와이프에 시간 낭비 NO
- 일주일에 한 번만 확인
- 선택 → 만남 → 끝
```

**C. 현실적인 매칭**
```
제목: 🎯 당신 수준의 진짜 사람
내용:
- 모델급 프로필 NO
- 상위 10% 독식 NO
- 비슷한 수준끼리 매칭
- 실제 만남으로 이어지는 현실적 인연
```

**D. 데이팅 실력 향상**
```
제목: 📈 만날수록 성장
내용:
- 매주 새로운 사람과 만남
- 이성 보는 눈 향상
- 데이팅 매너 개선
- 원하는 스타일 명확해짐
```

**E. 검증된 사용자만**
```
제목: ✅ 안전한 만남
내용:
- 실명 인증
- 프로필 검증
- 신고 시스템
- 가짜 계정 즉시 차단
```

**디자인:**
- 3열 그리드 (모바일: 1열)
- 그라디언트 배경 카드
- 아이콘 크게 표시
- 호버 시 그림자 효과

---

**4. How It Works 섹션 (신규 추가)**
**"간단한 3단계로 진짜 만남"**

```
1️⃣ 매주 월요일 오전 9시
   → 3명의 매칭 상대 도착

2️⃣ 화요일 자정까지
   → 1명 선택 + 만남 날짜 확정

3️⃣ 주말까지
   → 만남 진행 (카페, 식사 등)
```

**디자인:**
- 타임라인 스타일 또는 스텝 카드
- 각 단계별 일러스트/아이콘
- 화살표로 플로우 표시

---

**5. Social Proof 섹션 (신규 추가)**
**"숫자로 증명하는 성공"**

통계 4개:
- 👥 활성 사용자 1,200명
- 💑 성사된 첫 데이트 340건
- ⭐ 만남 성공률 87%
- 📊 바람맞히기율 3% (일반 앱 40%)

**영어 버전:**
- 👥 1,200+ Active Users
- 💑 340 Successful First Dates
- ⭐ 87% Meeting Success Rate
- 📊 3% Flake Rate (vs 40% avg)

**디자인:**
- 1열로 큰 숫자 표시
- 카운터 애니메이션 (숫자 올라가는 효과)
- 그라디언트 배경

---

**6. Email Signup 섹션 (개선)**

**전략:**
- 서비스가 이미 운영 중인 것처럼 표현
- 현재 사용자 폭주로 신규 가입 제한 중
- 우선 가입 혜택 제공

**메시지:**
```
🔥 현재 사용자 폭주로 알고리즘 개선 중
신규 가입이 일시 제한되었습니다.

우선 가입 신청하시면:
✅ 개선 완료 시 즉시 가입 가능
✅ 슈퍼매칭 이용권 3장 제공
   (일주일에 2번 매칭 선택 가능)
✅ 첫 매칭 무료
```

**영어 버전:**
```
🔥 Currently Improving Algorithm
New signups temporarily paused.

Priority Access Benefits:
✅ Immediate access when ready
✅ 3 Super Match credits
   (2 matches per week)
✅ First match free
```

**디자인:**
- 현재 디자인 기본 유지
- 혜택 내용 강조 (체크마크 + 박스)
- "🔥" 아이콘으로 긴급성 표현
- "슈퍼매칭 이용권" 강조 배지
- 위치: 페이지 최하단 (Footer 바로 위)

**번역 파일 업데이트 필요:**
- ko.json, en.json에 새로운 메시지 추가

---

**7. Footer 섹션 (신규 추가)**
```
왼쪽:
- Match And Meet 로고
- 짧은 설명 "Stop Swiping. Start Dating."

가운데:
- About
- Privacy Policy
- Terms of Service

오른쪽:
- 소셜 링크 (Instagram, Twitter 등)
- 문의: hello@matchandmeet.com
```

---

#### 🎨 디자인 시스템

**컬러 팔레트:**
```css
/* Primary */
--primary: #FF6B6B;        /* 빨강 (기존) */
--secondary: #4ECDC4;      /* 청록 */
--accent: #FFE66D;         /* 노랑 */

/* Gradients */
--gradient-pink: linear-gradient(135deg, #FF6B9D 0%, #C44569 100%);
--gradient-blue: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-warm: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Neutral */
--background: #FAFAFA;
--text-dark: #2D3436;
--text-light: #636E72;
```

**타이포그래피:**
- 제목: Google Fonts "Poppins" (Bold 700)
- 본문: "Inter" (Regular 400)
- Font size scale: 48px/36px/24px/18px/16px/14px

**Feature 카드 개선:**
```
기존: 회색 박스 (#f8f9fa)
개선:
- 그라디언트 배경 (투명도 10%)
- 아이콘 64px 크기
- box-shadow: 0 10px 30px rgba(0,0,0,0.1)
- hover: transform: translateY(-10px) + 그림자 증가
```

**애니메이션:**
- Fade-in on scroll (Intersection Observer API)
- Hero 섹션 타이핑 효과
- 통계 숫자 카운터 애니메이션
- 버튼 호버 ripple 효과

---

#### 🚀 구현 순서

1. **Hero 섹션 개편** (왼쪽/오른쪽 레이아웃 + 앱 목업)
2. **Problem 섹션 추가** (4가지 문제점)
3. **Features 섹션 개선** (5개 카드 + 새로운 내용)
4. **How It Works 추가** (3단계 플로우)
5. **Social Proof 추가** (통계 4개)
6. **Footer 추가**
7. **애니메이션 효과 적용**
8. **디자인 시스템 통일** (컬러, 폰트, 스페이싱)

### 4. SEO 최적화

**목적:**
- 검색 엔진 노출 향상
- 자연 유입(Organic Traffic) 증가

**구현 항목:**
- **메타 태그 추가** (`index.html`):
  - `<title>` 최적화
  - `<meta name="description">` 추가
  - `<meta name="keywords">` 추가
- **시맨틱 HTML 사용**:
  - `<header>`, `<main>`, `<section>`, `<footer>` 태그
  - 제목 태그 계층 구조 (`h1` → `h2` → `h3`)
- **robots.txt 생성** (`public/robots.txt`):
  - 검색 엔진 크롤러 허용 설정
- **sitemap.xml 생성** (`public/sitemap.xml`):
  - 사이트 구조 정보 제공
- **페이지 로딩 속도 최적화**:
  - 이미지 압축 및 lazy loading
  - CSS/JS 번들 최적화
- **모바일 친화성 확인**:
  - 반응형 디자인 검증
  - 터치 영역 크기 확인
