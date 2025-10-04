import './App.css'

// 자바 스크립트 역시 컴포넌트 대부분의 선언형 UI 개발 방식과 같이 컴포넌트 함수로 표현한다.
// App()은 전체 컴포넌트의 진입점 또는 웹앱의 최상위 컴포넌트
// 함수 안에 리턴 () 으로 html 반환
// 다른 파일에서 사용할 수 있도록 익스포트.
// 디폴트: 다른 파일에서 임포트 할 때 아무 이름이나 사용 가능
// 일반 익스포트 : export function add() {} | import { add } from './utils.js'
// 디폴트 익스포트 : export default App | import MyApp from './App.jsx'

function App() {
    return (
        <div className="hero">
            <h1>Match And Meet</h1>
            <p>“We’re currently improving our matching algorithm to accommodate a sudden spike in users.”</p>
            <button>Sign up for the waitlist</button>
        </div>
    )
}

export default App