'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
    const navRef = useRef(null);
    const particlesRef = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);
    const heroContentRef = useRef(null);

    useEffect(() => {
        // Navbar scroll effect + Parallax
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Navbar effect
            if (navRef.current) {
                if (scrollY > 50) {
                    navRef.current.classList.add(styles.scrolled);
                } else {
                    navRef.current.classList.remove(styles.scrolled);
                }
            }

            // Parallax effect for hero layers
            if (layer1Ref.current) {
                layer1Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
            if (layer2Ref.current) {
                layer2Ref.current.style.transform = `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.02}deg)`;
            }
            if (layer3Ref.current) {
                layer3Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            }

            // Parallax for hero content (slower scroll = floating effect)
            if (heroContentRef.current) {
                heroContentRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
                heroContentRef.current.style.opacity = Math.max(0, 1 - scrollY / 600);
            }
        };

        // Create particles
        const createParticles = () => {
            if (!particlesRef.current) return;
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = styles.particle;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                particlesRef.current.appendChild(particle);
            }
        };

        // Intersection Observer for animations
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        createParticles();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleMenu = () => {
        const navLinks = document.querySelector(`.${styles.navLinks}`);
        const hamburger = document.querySelector(`.${styles.hamburger}`);
        navLinks?.classList.toggle(styles.active);
        hamburger?.classList.toggle(styles.active);
    };

    return (
        <>
            {/* Floating Particles Background */}
            <div className={styles.particles} ref={particlesRef}></div>

            {/* Navigation */}
            <nav className={styles.navbar} ref={navRef}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>⚽</span>
                        <span className={styles.logoText}>OffSide</span>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#tech">Tech Stack</a></li>
                        <li><a href="#highlights">Highlights</a></li>
                        <li><a href="#download" className={styles.navCta}>Download</a></li>
                    </ul>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero} id="hero">
                <div className={`${styles.heroParallaxLayer} ${styles.layer1}`} ref={layer1Ref}></div>
                <div className={`${styles.heroParallaxLayer} ${styles.layer2}`} ref={layer2Ref}></div>
                <div className={`${styles.heroParallaxLayer} ${styles.layer3}`} ref={layer3Ref}></div>

                <div className={styles.heroContent} ref={heroContentRef}>
                    <div className={`${styles.heroBadge} ${styles.animateFadeIn}`}>
                        <span className={styles.badgeIcon}>🤖</span>
                        <span>AI-Powered Football Analytics</span>
                    </div>
                    <h1 className={`${styles.heroTitle} ${styles.animateSlideUp}`}>
                        <span className={styles.titleLine}>Football Match</span>
                        <span className={`${styles.titleLine} ${styles.gradientText}`}>Simulator & AI</span>
                        <span className={styles.titleLine}>Prediction Platform</span>
                    </h1>
                    <p className={`${styles.heroDescription} ${styles.animateSlideUp} ${styles.delay1}`}>
                        Replay historic matches with beautiful 2D visualization and use machine learning
                        to predict upcoming game outcomes. Your football analytics studio on desktop.
                    </p>
                    <div className={`${styles.heroButtons} ${styles.animateSlideUp} ${styles.delay2}`}>
                        <a href="#download" className={`${styles.btn} ${styles.btnPrimary}`}>
                            <span className={styles.btnIcon}>📦</span>
                            Download Now
                        </a>
                        <a href="#features" className={`${styles.btn} ${styles.btnSecondary}`}>
                            <span className={styles.btnIcon}>✨</span>
                            Explore Features
                        </a>
                    </div>
                    <div className={`${styles.heroStats} ${styles.animateFadeIn} ${styles.delay3}`}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>75%</span>
                            <span className={styles.statLabel}>Prediction Accuracy</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>0.97</span>
                            <span className={styles.statLabel}>MAE Score</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>3+</span>
                            <span className={styles.statLabel}>Leagues</span>
                        </div>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollMouse}>
                        <div className={styles.scrollWheel}></div>
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features} id="features">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionBadge}>🎮 Core Features</span>
                    <h2 className={styles.sectionTitle}>What OffSide <span className={styles.gradientText}>Does</span></h2>
                    <p className={styles.sectionSubtitle}>A comprehensive football analytics application combining real-time simulation with AI predictions</p>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard} data-aos="fade-up">
                        <div className={styles.featureIconWrapper}>
                            <div className={styles.featureIcon}>🎬</div>
                            <div className={styles.featureGlow}></div>
                        </div>
                        <h3>Live Match Replay</h3>
                        <p>Watch real matches unfold with smooth player movement, tactical formations, and precise ball tracking powered by StatsBomb data.</p>
                        <div className={styles.featureTag}>Real-time Visualization</div>
                    </div>

                    <div className={styles.featureCard} data-aos="fade-up">
                        <div className={styles.featureIconWrapper}>
                            <div className={styles.featureIcon}>🧠</div>
                            <div className={styles.featureGlow}></div>
                        </div>
                        <h3>AI Predictions</h3>
                        <p>Random Forest classifier achieving 75% accuracy on LaLiga home win predictions with advanced Elo rating integration.</p>
                        <div className={styles.featureTag}>Machine Learning</div>
                    </div>

                    <div className={styles.featureCard} data-aos="fade-up">
                        <div className={styles.featureIconWrapper}>
                            <div className={styles.featureIcon}>⚡</div>
                            <div className={styles.featureGlow}></div>
                        </div>
                        <h3>Dynamic Tactics</h3>
                        <p>Players respond intelligently to ball position—pushing forward when attacking, dropping back when defending.</p>
                        <div className={styles.featureTag}>Tactical AI</div>
                    </div>

                    <div className={styles.featureCard} data-aos="fade-up">
                        <div className={styles.featureIconWrapper}>
                            <div className={styles.featureIcon}>📊</div>
                            <div className={styles.featureGlow}></div>
                        </div>
                        <h3>Player Stats</h3>
                        <p>Track individual touches, passes, shots, and tackles in real-time as the match simulation progresses.</p>
                        <div className={styles.featureTag}>Analytics</div>
                    </div>

                    <div className={`${styles.featureCard} ${styles.featured}`} data-aos="fade-up">
                        <div className={styles.featuredBadge}>⭐ Multi-League</div>
                        <div className={styles.featureIconWrapper}>
                            <div className={styles.featureIcon}>🏆</div>
                            <div className={styles.featureGlow}></div>
                        </div>
                        <h3>Multiple Leagues</h3>
                        <p>FIFA World Cup, La Liga, Premier League — all powered by comprehensive StatsBomb open data.</p>
                        <div className={styles.leagueIcons}>
                            <span className={styles.leagueIcon}>🌍</span>
                            <span className={styles.leagueIcon}>🇪🇸</span>
                            <span className={styles.leagueIcon}>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Highlights Section */}
            <section className={styles.highlights} id="highlights">
                <div className={styles.parallaxBg}></div>
                <div className={styles.highlightsContent}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>🧠 Technical Highlights</span>
                        <h2 className={styles.sectionTitle}>Under the <span className={styles.gradientText}>Hood</span></h2>
                        <p className={styles.sectionSubtitle}>Advanced algorithms and techniques powering the platform</p>
                    </div>

                    <div className={styles.highlightsShowcase}>
                        <div className={`${styles.highlightItem} ${styles.visible}`}>
                            <div className={styles.highlightNumber}>01</div>
                            <div className={styles.highlightContent}>
                                <h3>Hermite Curve Interpolation</h3>
                                <p>Smooth animations using Hermite curve interpolation for natural, fluid player movement across the pitch.</p>
                                <div className={styles.curveVisual}>
                                    <svg viewBox="0 0 200 100" className={styles.curveSvg}>
                                        <defs>
                                            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#00ff88' }} />
                                                <stop offset="100%" style={{ stopColor: '#00d4ff' }} />
                                            </linearGradient>
                                        </defs>
                                        <path className={styles.curvePath} d="M10,80 C50,10 150,90 190,20" fill="none" stroke="url(#curveGradient)" strokeWidth="3" />
                                        <circle className={styles.curvePoint} cx="10" cy="80" r="5" fill="#00ff88" />
                                        <circle className={`${styles.curvePoint} ${styles.moving}`} cx="190" cy="20" r="5" fill="#00d4ff" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.highlightItem} ${styles.visible}`}>
                            <div className={styles.highlightNumber}>02</div>
                            <div className={styles.highlightContent}>
                                <h3>Elo Rating System</h3>
                                <p>Dynamic team strength estimation using chess-inspired Elo ratings adapted for football predictions.</p>
                                <div className={styles.eloVisual}>
                                    <div className={styles.eloBar}>
                                        <div className={styles.eloFill} style={{ '--elo-width': '85%' }}><span>1847</span></div>
                                    </div>
                                    <div className={styles.eloBar}>
                                        <div className={styles.eloFill} style={{ '--elo-width': '72%' }}><span>1723</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.highlightItem} ${styles.visible}`}>
                            <div className={styles.highlightNumber}>03</div>
                            <div className={styles.highlightContent}>
                                <h3>Rolling Form Features</h3>
                                <p>5-match rolling averages for goals, points, and win rates to capture team momentum and form.</p>
                                <div className={styles.formVisual}>
                                    <div className={styles.formDots}>
                                        <span className={`${styles.formDot} ${styles.win}`}>W</span>
                                        <span className={`${styles.formDot} ${styles.win}`}>W</span>
                                        <span className={`${styles.formDot} ${styles.draw}`}>D</span>
                                        <span className={`${styles.formDot} ${styles.win}`}>W</span>
                                        <span className={`${styles.formDot} ${styles.loss}`}>L</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.highlightItem} ${styles.visible}`}>
                            <div className={styles.highlightNumber}>04</div>
                            <div className={styles.highlightContent}>
                                <h3>XGBoost Regression</h3>
                                <p>Goal difference prediction with Mean Absolute Error of just 0.97, providing accurate scoreline forecasts.</p>
                                <div className={styles.xgbVisual}>
                                    <div className={styles.accuracyRing}>
                                        <svg viewBox="0 0 100 100">
                                            <circle className={styles.ringBg} cx="50" cy="50" r="40" />
                                            <circle className={styles.ringProgress} cx="50" cy="50" r="40" />
                                        </svg>
                                        <span className={styles.accuracyValue}>0.97<small>MAE</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className={styles.techStack} id="tech">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionBadge}>🛠️ Tech Stack</span>
                    <h2 className={styles.sectionTitle}>Built With <span className={styles.gradientText}>Modern Tools</span></h2>
                    <p className={styles.sectionSubtitle}>Powerful technologies powering every aspect of the platform</p>
                </div>

                <div className={styles.techOrbit}>
                    <div className={styles.orbitCenter}>
                        <span className={styles.centerIcon}>⚽</span>
                        <span className={styles.centerText}>OffSide</span>
                    </div>

                    <div className={styles.techItems}>
                        {[
                            { icon: '🐍', name: 'Python' },
                            { icon: '🎮', name: 'Pygame' },
                            { icon: '🔬', name: 'scikit-learn' },
                            { icon: '🚀', name: 'XGBoost' },
                            { icon: '📊', name: 'kloppy' },
                            { icon: '⚽', name: 'mplsoccer' },
                            { icon: '🐼', name: 'pandas' },
                            { icon: '🔢', name: 'NumPy' },
                        ].map((tech, i) => (
                            <div
                                key={tech.name}
                                className={styles.techItem}
                                style={{ '--i': i, '--total': 8 }}
                            >
                                <div className={styles.techIcon}>{tech.icon}</div>
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className={styles.download} id="download">
                <div className={styles.downloadBg}>
                    <div className={`${styles.downloadGlow} ${styles.glow1}`}></div>
                    <div className={`${styles.downloadGlow} ${styles.glow2}`}></div>
                </div>

                <div className={styles.downloadContent}>
                    <div className={`${styles.downloadIcon} ${styles.animatePulse}`}>
                        <span>📦</span>
                    </div>
                    <h2 className={styles.downloadTitle}>Ready to <span className={styles.gradientText}>Experience</span> OffSide?</h2>
                    <p className={styles.downloadDescription}>
                        Download the complete package and run it on your device.
                        Includes all source code, dependencies, and sample match data.
                    </p>

                    <div className={styles.downloadRequirements}>
                        <h4>System Requirements</h4>
                        <div className={styles.requirementsGrid}>
                            <div className={styles.requirement}>
                                <span className={styles.reqIcon}>🐍</span>
                                <span>Python 3.8+</span>
                            </div>
                            <div className={styles.requirement}>
                                <span className={styles.reqIcon}>💾</span>
                                <span>500MB Free Space</span>
                            </div>
                            <div className={styles.requirement}>
                                <span className={styles.reqIcon}>🖥️</span>
                                <span>Windows/Mac/Linux</span>
                            </div>
                        </div>
                    </div>

                    <a href="https://github.com/yasinULLAH/OffSide/archive/refs/heads/main.zip" className={`${styles.btn} ${styles.btnDownload}`} download>
                        <span className={styles.btnIcon}>⬇️</span>
                        <span className={styles.btnText}>
                            <strong>Download OffSide</strong>
                            <small>ZIP Package (~50MB)</small>
                        </span>
                    </a>

                    <div className={styles.downloadInstructions}>
                        <h4>Quick Start</h4>
                        <div className={styles.instructionSteps}>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>1</span>
                                <span>Extract the ZIP file</span>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>2</span>
                                <span>Run <code>pip install -r requirements.txt</code></span>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>3</span>
                                <span>Execute <code>python main.py</code></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <span className={styles.logoIcon}>⚽</span>
                        <span className={styles.logoText}>OffSide</span>
                    </div>
                    <p className={styles.footerTagline}>Football Analytics Studio on Your Desktop</p>
                    <div className={styles.footerDivider}></div>
                    <p className={styles.footerCopyright}>
                        Built with ❤️ using StatsBomb Open Data
                    </p>
                </div>
            </footer>
        </>
    );
}
