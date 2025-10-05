import {useState, useRef} from 'react';
import { supabase } from '../supabaseClient'

function Home() {
    // 상태 변수 선언
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    // Ref 생성
    const emailSectionRef = useRef(null);

    // 스크롤 함수
    const scrollToEmailSection = () => {
        emailSectionRef.current?.scrollIntoView({
            behavior: 'smooth'  // 부드러운 스크롤
        });
    };

    // 이메일 입력 시
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(null);  // 입력 시 에러 초기화
    }

    // 폼 제출 시
    const handleSubmit = async (e) => {
        e.preventDefault()  // 페이지 새로고침 방지

        if (email) {
            // Supabase에 저장
            const { data, error } = await supabase
                .from('emails')
                .insert([{ email: email }])

            if (error) {
                console.error('Error:', error)
                setError('Already registered or invalid email')
            } else {
                console.log('Success:', data)
                setSubmitted(true)
                setEmail('')
            }
        }
    }

    return (
        <>
            {/*히어로 섹션*/}
            <div className="hero">
                <h1>Match And Meet</h1>
                <p>“We’re currently improving our matching algorithm to accommodate a sudden spike in users.”</p>
                <button onClick={scrollToEmailSection}>Sign up for the waitlist</button>
            </div>

            {/*피처 섹션*/}
            <div className="features">
                <h2>Why Choose Match And Meet?</h2>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>💝 Real Connections, Not Swipes</h3>
                        <p>Modern dating has become too superficial with endless swiping and ghosting. The more meaningful dates you have, the better you become at understanding what you truly want. Meet one genuine person every week and find your real
                            match.</p>
                    </div>

                    <div className="feature-card">
                        <h3>📅 Weekly Curated Matches</h3>
                        <p>Receive three carefully selected matches every week. Choose one and commit to meeting them - no flaking allowed. If you don't follow through, you won't receive next week's matches. We're serious about real dates.</p>
                    </div>

                    <div className="feature-card">
                        <h3>🎯 Realistic Matching Algorithm</h3>
                        <p>Unlike other apps dominated by top 10% profiles and fake accounts, we match you with real people at your level. Get genuine, compatible matches that actually lead to meaningful relationships.</p>
                    </div>

                    {/*<div className="feature-card">
                        <h3>🤖 만남이 부족한 사회 문제</h3>
                        <p>점점 인스턴트 만남이 만아지고 만남 자체도 줄어들었습니다. 많이 만날수록 더 이성을 보는 눈도 좋아지고 자신의 이성에 대한 매너도 좋아집니다. 매주 한 명의 이성을 만나면서 진짜 인연을 찾길 바랍니다.</p>
                    </div>

                    <div className="feature-card">
                        <h3>🔒 매주 매칭 상대 선정</h3>
                        <p>매주 세 명의 매칭 상대를 선정해드립니다. 여기서 한 명을 선택하게 되면 해당 주에 무조건 만남을 가져야합니다. 만남이 성사되지 않을 경우에 다음 매칭이 제공되지 않습니다.</p>
                    </div>

                    <div className="feature-card">
                        <h3>⚡ 현실적인 매칭 상대 선정</h3>
                        <p>상위 10%로 남성, 여성 알바가 독식하는 다른 데이팅 앱과는 다릅니다. 현실적인 상대를 추천해드립니다.</p>
                    </div>*/}
                </div>
            </div>

            {/*이메일 제출 섹션*/}
            <div className="email-signup" ref={emailSectionRef}>
                <h2>Join the Waitlist</h2>
                <p>Be the first to know when we launch</p>

                {submitted ? (
                    <p className="success-message">✅ Thank you! We'll notify you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit">Notify Me</button>
                    </form>
                )}
            </div>
        </>
    )
}

export default Home