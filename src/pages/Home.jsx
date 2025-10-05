import {useState, useRef} from 'react';
import { supabase } from '../supabaseClient'
import { trackEvent } from '../amplitudeClient'
import { useTranslation } from 'react-i18next'

function Home() {
    const { t, i18n } = useTranslation()

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
                trackEvent('Email Signup Failed', { error: error.message })
            } else {
                console.log('Success:', data)
                setSubmitted(true)
                setEmail('')
                trackEvent('Email Signup Success')  // 🎯 성공 이벤트 추적
            }
        }
    }

    // 언어 전환 함수
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)  // 언어 변경
        localStorage.setItem('language', lang)  // localStorage에 저장
    }

    return (
        <>
            {/*히어로 섹션*/}
            <div className="hero">
                {/* 언어 전환 버튼 */}
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

                <h1>{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
                <button onClick={scrollToEmailSection}>{t('hero.cta')}</button>
            </div>

            {/*피처 섹션*/}
            <div className="features">
                <h2>{t('features.title')}</h2>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>{t('features.realConnections.title')}</h3>
                        <p>{t('features.realConnections.description')}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t('features.weeklyCurated.title')}</h3>
                        <p>{t('features.weeklyCurated.description')}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t('features.realisticMatching.title')}</h3>
                        <p>{t('features.realisticMatching.description')}</p>
                    </div>
                </div>
            </div>

            {/*이메일 제출 섹션*/}
            <div className="email-signup" ref={emailSectionRef}>
                <h2>{t('emailSignup.title')}</h2>
                <p>{t('emailSignup.subtitle')}</p>

                {submitted ? (
                    <p className="success-message">{t('emailSignup.successMessage')}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder={t('emailSignup.placeholder')}
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit">{t('emailSignup.button')}</button>
                    </form>
                )}

                {error && <p className="error-message">{t('emailSignup.errorMessage')}</p>}
            </div>
        </>
    )
}

export default Home