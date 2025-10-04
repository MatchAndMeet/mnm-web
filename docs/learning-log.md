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

---

## 학습 키워드

### Git
- `.gitignore`: 버전 관리 제외 파일 설정
- `git commit`: 변경사항 저장

### React & 빌드 도구
- **Vite**: 최신 React 개발 도구
- **CRA (Create React App)**: 전통적인 React 설정 도구
- **HMR (Hot Module Replacement)**: 코드 수정 시 페이지 새로고침 없이 반영
- **번들러**: 여러 파일을 하나로 묶는 도구 (Rollup, Webpack 등)

### 용어
- **랜딩페이지**: 서비스 소개 및 사용자 유입을 위한 첫 페이지
- **후킹 (Hooking)**: 사용자 관심 유도 및 확보

---

## 다음 단계
- [ ] React 프로젝트 구조 이해
- [ ] 개발 서버 실행 (`npm run dev`)
- [ ] 기본 컴포넌트 학습
