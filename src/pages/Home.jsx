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

                {/* 왼쪽: 텍스트 콘텐츠 */}
                <div className="hero-content">
                    <h1 className="brand-name">Match And Meet</h1>
                    <h2 className="hero-headline">{t('hero.headline')}</h2>
                    <p className="hero-subtitle">{t('hero.subtitle')}</p>
                    <button className="cta-button" onClick={scrollToEmailSection}>
                        {t('hero.cta')}
                    </button>
                </div>

                {/* 오른쪽: 앱 목업 */}
                <div className="hero-mockup">
                    <div className="phone-container">
                        <img
                            src="/mockup.png"
                            alt="Match And Meet App"
                            className="phone-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Problem Section */}
            <div className="problem">
                <h2>{t('problem.title')}</h2>
                <div className="problem-grid">
                    <div className="problem-card">
                        <h3>{t('problem.swipeHell.title')}</h3>
                        <p>{t('problem.swipeHell.description')}</p>
                    </div>
                    <div className="problem-card">
                        <h3>{t('problem.ghosting.title')}</h3>
                        <p>{t('problem.ghosting.description')}</p>
                    </div>
                    <div className="problem-card">
                        <h3>{t('problem.topTen.title')}</h3>
                        <p>{t('problem.topTen.description')}</p>
                    </div>
                    <div className="problem-card">
                        <h3>{t('problem.fakeProfiles.title')}</h3>
                        <p>{t('problem.fakeProfiles.description')}</p>
                    </div>
                </div>
            </div>

            {/*피처 섹션*/}
            <div className="features">
                <h2>{t('features.title')}</h2>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>{t('features.noFlaking.title')}</h3>
                        <p>{t('features.noFlaking.description')}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t('features.timeSaving.title')}</h3>
                        <p>{t('features.timeSaving.description')}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t('features.realisticMatching.title')}</h3>
                        <p>{t('features.realisticMatching.description')}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t('features.personalGrowth.title')}</h3>
                        <p>{t('features.personalGrowth.description')}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t('features.safeDating.title')}</h3>
                        <p>{t('features.safeDating.description')}</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="how-it-works">
                <h2>{t('howItWorks.title')}</h2>
                <div className="steps-container">
                    <div className="step-card">
                        <h3>{t('howItWorks.step1.title')}</h3>
                        <p>{t('howItWorks.step1.description')}</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-card">
                        <h3>{t('howItWorks.step2.title')}</h3>
                        <p>{t('howItWorks.step2.description')}</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-card">
                        <h3>{t('howItWorks.step3.title')}</h3>
                        <p>{t('howItWorks.step3.description')}</p>
                    </div>
                </div>
            </div>

            {/* Social Proof Section */}
            <div className="social-proof">
                <h2>{t('socialProof.title')}</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-number">{t('socialProof.stat1.number')}</div>
                        <div className="stat-label">{t('socialProof.stat1.label')}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">💑</div>
                        <div className="stat-number">{t('socialProof.stat2.number')}</div>
                        <div className="stat-label">{t('socialProof.stat2.label')}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">⭐</div>
                        <div className="stat-number">{t('socialProof.stat3.number')}</div>
                        <div className="stat-label">{t('socialProof.stat3.label')}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">📊</div>
                        <div className="stat-number">{t('socialProof.stat4.number')}</div>
                        <div className="stat-label">{t('socialProof.stat4.label')}</div>
                    </div>
                </div>
            </div>

            {/*이메일 제출 섹션*/}
            <div className="email-signup" ref={emailSectionRef}>
                <h2>{t('emailSignup.title')}</h2>
                <p className="email-subtitle">{t('emailSignup.subtitle')}</p>

                <div className="benefits-box">
                    <p className="benefits-title">{t('emailSignup.benefitsTitle')}</p>
                    <div className="benefits-list">
                        <p>{t('emailSignup.benefit1')}</p>
                        <p>{t('emailSignup.benefit2')} <span className="benefit-sub">{t('emailSignup.benefit2Sub')}</span></p>
                        <p>{t('emailSignup.benefit3')}</p>
                    </div>
                </div>

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

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <h3>Match And Meet</h3>
                        <p>{t('footer.tagline')}</p>
                    </div>
                    <div className="footer-center">
                        <a href="#">{t('footer.about')}</a>
                        <a href="#">{t('footer.privacy')}</a>
                        <a href="#">{t('footer.terms')}</a>
                    </div>
                    <div className="footer-right">
                        <p>{t('footer.contact')}: hello@matchandmeet.com</p>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t('footer.copyright')}</p>
                </div>
            </footer>
        </>
    )
}

export default Home