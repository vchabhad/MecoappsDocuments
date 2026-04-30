// @ts-nocheck
"use client";
import React from "react";
import Script from "next/script";

        import { useState, useEffect, useRef, useCallback } from "react";
        

        // ============================================
        // BACKGROUND EFFECTS: HIGH-RES OCEAN WAVES
        // ============================================
        const BackgroundEffects = () => (
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#03101f]">
                {/* High-Resolution Minimalist Wave Background */}
                <div 
                    className="absolute inset-0 w-full h-full opacity-60"
                    style={{
                        backgroundImage: 'url(/assets/ocean_waves_bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* God Rays - Only at the top */}
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    {[18, 42, 68].map((left, i) => (
                        <div key={i} className="absolute" style={{ left: `${left}%`, top: '-5%', width: i === 1 ? '40px' : '45px', height: '40%', transform: `rotate(${i === 1 ? '-5' : i === 2 ? '12' : '8'}deg)`, background: `linear-gradient(180deg, ${i === 1 ? 'rgba(56,189,248,0.3)' : 'rgba(94,234,212,0.4)'} 0%, transparent 100%)`, opacity: 0.1, animation: `godRay${i + 1} ${20 + i * 4}s ease-in-out infinite ${i === 2 ? 'alternate-reverse' : 'alternate'}` }} />
                    ))}
                </div>

                {/* Bubbles - Rising from bottom */}
                <div className="absolute inset-0 overflow-hidden opacity-70">
                    {[[8, 8, 10, 24, 0], [5, 5, 25, 30, 5], [11, 11, 42, 26, 2], [6, 6, 56, 32, 7], [9, 9, 72, 22, 1], [4, 4, 86, 34, 9], [7, 7, 16, 28, 11], [10, 10, 62, 21, 4], [5, 5, 80, 31, 8]].map((b, i) => (
                        <div key={i} className="absolute rounded-full" style={{ width: `${b[0]}px`, height: `${b[1]}px`, left: `${b[2]}%`, bottom: '-20px', border: '1px solid rgba(94,234,212,0.06)', background: 'radial-gradient(circle at 30% 30%, rgba(94,234,212,0.04), transparent 70%)', animation: `bubbleRise ${b[3]}s linear infinite ${b[4]}s` }} />
                    ))}
                </div>
            </div>
        );

        // ============================================
        // SLIDE COMPONENT WITH STAGGERED ANIMATIONS
        // ============================================
        const Slide = ({ isActive, children }) => {
            return (
                <div className={`absolute inset-0 overflow-y-auto overflow-x-hidden ${isActive ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`} style={{ transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <div className="min-h-full flex flex-col items-center p-8 md:p-12" style={{ zoom: 1.15 }}>
                        <div className="w-full max-w-6xl mx-auto my-auto py-12 flex flex-col items-center">
                        {React.Children.map(children, (child, index) => (
                            <div 
                                key={index}
                                className={`stagger-${Math.min(index + 1, 12)}`}
                                style={{
                                    opacity: isActive ? 1 : 0,
                                    transform: isActive ? 'translateY(0)' : 'translateY(24px)',
                                    transition: isActive 
                                        ? `opacity 0.5s ease ${(index) * 0.05}s, transform 0.5s ease ${(index) * 0.05}s`
                                        : 'opacity 0.3s ease, transform 0.3s ease'
                                }}
                            >
                                {child}
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            );
        };

        // ============================================
        // ANIMATED COUNTER COMPONENT - FULLY FUNCTIONAL
        // ============================================
        const AnimatedCounter = ({ target, suffix = '', isActive = true }) => {
            const [count, setCount] = useState(0);
            const hasAnimated = useRef(false);

            useEffect(() => {
                if (!isActive) {
                    setCount(0);
                    hasAnimated.current = false;
                    return;
                }

                if (hasAnimated.current) return;

                const startTime = performance.now();
                const duration = 1100;

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Cubic ease-out for smooth animation
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.round(target * eased));

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        hasAnimated.current = true;
                    }
                };

                requestAnimationFrame(animate);
                hasAnimated.current = true;

            }, [isActive, target]);

            return <span>{count}{suffix}</span>;
        };

        // ============================================
        // NAVIGATION CONTROLS
        // ============================================
        const NavigationControls = ({ currentSlide, totalSlides, onNavigate }) => (
            <>
                <div className="fixed bottom-9 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-1 px-4 py-2.5 rounded-full" style={{ background: 'rgba(3,16,31,0.85)', border: '1px solid rgba(56,189,248,0.08)' }}>
                    <button 
                        onClick={() => onNavigate(currentSlide - 1)} 
                        disabled={currentSlide === 0}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-20 disabled:cursor-default mr-2"
                        style={{ color: '#7dd3fc' }}
                    ><i data-lucide="chevron-left" style={{width: '18px', height: '18px'}}></i></button>
                    {Array.from({ length: totalSlides }, (_, i) => (
                        <button 
                            key={i} 
                            onClick={() => onNavigate(i)} 
                            className="transition-all duration-300 cursor-pointer rounded-full"
                            style={{ 
                                width: i === currentSlide ? '28px' : '7px', 
                                height: '7px', 
                                background: i === currentSlide ? 'linear-gradient(90deg, #0d9488, #0ea5e9)' : 'rgba(56,189,248,0.1)',
                                transition: 'width 0.3s ease, background 0.3s ease'
                            }}
                        />
                    ))}
                    <button 
                        onClick={() => onNavigate(currentSlide + 1)} 
                        disabled={currentSlide === totalSlides - 1}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-20 disabled:cursor-default ml-2"
                        style={{ color: '#7dd3fc' }}
                    ><i data-lucide="chevron-right" style={{width: '18px', height: '18px'}}></i></button>
                </div>
            </>
        );

        const ProgressBar = ({ currentSlide, totalSlides }) => (
            <div className="fixed top-0 left-0 h-[3px] z-50 transition-all duration-300 ease-out" style={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%`, background: 'linear-gradient(90deg, #0d9488, #0ea5e9)' }} />
        );

        const SlideCounter = ({ currentSlide, totalSlides }) => (
            <div className="fixed top-5 right-9 z-50 text-xs font-semibold tracking-widest" style={{ color: '#94a3b8' }}>
                {String(currentSlide + 1).padStart(2, '0')} <span className="opacity-40">/ {String(totalSlides).padStart(2, '0')}</span>
            </div>
        );

        // ============================================
        // REUSABLE UI COMPONENTS
        // ============================================
        const SectionDivider = ({ number, title, subtitle }) => (
            <div className="relative overflow-hidden flex flex-col items-center text-center">
                <div className="relative z-10 flex flex-col items-center">
                    <p className="text-base font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#64748b' }}>Section {number.padStart(2, '0')}</p>
                    <div className="w-13 h-px mx-auto mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.25), transparent)' }} />
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">THE <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{title}</span></h2>
                    {subtitle && <p className="text-lg mt-5 max-w-xl text-center mx-auto" style={{ color: '#64748b' }}>{subtitle}</p>}
                </div>
            </div>
        );

        const Card = ({ children, hover = true }) => (
            <div 
                className="rounded-xl p-6 md:p-8 transition-all duration-300" 
                style={{ background: 'rgba(6,26,53,0.6)', border: '1px solid rgba(56,189,248,0.05)' }}
                onMouseEnter={(e) => { if (hover) { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.12)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(56,189,248,0.03)'; } }}
                onMouseLeave={(e) => { if (hover) { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.05)'; e.currentTarget.style.boxShadow = 'none'; } }}
            >{children}</div>
        );

        const IconBox = ({ icon, color = '#00d4aa', bg = 'rgba(0,212,170,0.08)' }) => (
            <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center" style={{ background: bg, color }}>
                <i data-lucide={icon} style={{width: '18px', height: '18px'}}></i>
            </div>
        );

        const DangerIconBox = ({ icon }) => (
            <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.05)', color: '#f87171' }}>
                <i data-lucide={icon} style={{width: '18px', height: '18px'}}></i>
            </div>
        );

        const Tag = ({ children, variant = 'teal' }) => {
            const colors = {
                teal: { bg: 'rgba(0,212,170,0.05)', color: '#5eead4', border: 'rgba(0,212,170,0.08)' },
                blue: { bg: 'rgba(14,165,233,0.05)', color: '#7dd3fc', border: 'rgba(14,165,233,0.08)' },
                red: { bg: 'rgba(239,68,68,0.05)', color: '#f87171', border: 'rgba(239,68,68,0.08)' }
            };
            const c = colors[variant];
            return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold uppercase tracking-wider" style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>{children}</span>;
        };

        const FlowConnector = ({ delay = 0 }) => (
            <div className="flex items-center flex-1 min-h-[60px] relative mx-[-4px] z-0">
                <svg className="w-full h-2 absolute inset-0 my-auto overflow-visible pointer-events-none" preserveAspectRatio="none">
                    <line x1="0" y1="4" x2="100%" y2="4" stroke="rgba(14, 165, 233, 0.25)" strokeWidth="0.8" strokeDasharray="2, 2" />
                    <circle r="2" fill="#5eead4">
                        <animate attributeName="cx" values="0%; 100%" dur="2.5s" repeatCount="indefinite" begin={`${delay}s`} />
                        <animate attributeName="cy" values="4; 4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        );

        // ============================================
        // SLIDE 0: TITLE WITH ANIMATED LOGO
        // ============================================
        const TitleSlide = () => (
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <div className="relative inline-flex flex-col items-center justify-center mb-8">
                    <img src="/assets/mecoapps_logo.png" alt="MecoApps" style={{ height: '110px', position: 'relative', zIndex: 1 }} />
                </div>
                <p className="text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#5eead4' }}>Unified Ecosystem Proposal</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5">
                    <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mangalam's Digital</span><br />
                    <span className="text-white">Nervous System</span>
                </h1>
                <p className="text-lg max-w-xl mb-10" style={{ color: '#94a3b8' }}>One ecosystem. One truth. One platform — replacing fragmented legacy tools with a unified, secure, and intelligent operating system.</p>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#64748b', animation: 'pulseAnim 2.5s ease-in-out infinite' }}>
                    <i data-lucide="arrow-right" style={{width: '14px', height: '14px'}}></i>
                    <span>Press → or click to begin</span>
                </div>
            </div>
        );

        // ============================================
        // SLIDE 1: AGENDA
        // ============================================
        const AgendaSlide = ({ onNavigate }) => {
            const items = [
                { num: '01', title: 'The Problem', desc: 'Manual overload, fragmented tools, security gaps', slide: 2 },
                { num: '02', title: 'The Solution', desc: 'MecoApps unified ecosystem', slide: 3 },
                { num: '03', title: 'Business Impact', desc: 'Saved hours, efficiency, security', slide: 4 },
                { num: '04', title: 'Current Progress', desc: 'Mproduction, Security & Unified Chat', slide: 5 },
                { num: '05', title: 'The Plan', desc: 'Roadmap & Next steps', slide: 6 }
            ];
            return (
                <div className="w-full max-w-3xl">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#64748b' }}>Overview</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">What We'll <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cover</span></h2>
                    <div className="flex flex-col gap-2">
                        {items.map((item) => (
                            <div key={item.num} onClick={() => onNavigate(item.slide)} className="flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-250" style={{ border: '1px solid transparent' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(6,26,53,0.5)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.06)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                            >
                                <div className="w-8 h-8 min-w-[32px] rounded-lg text-xs font-bold flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.08)', color: '#7dd3fc', border: '1px solid rgba(14,165,233,0.15)' }}>{item.num}</div>
                                <div><p className="text-base font-semibold text-white">{item.title}</p><p className="text-sm mt-1" style={{ color: '#64748b' }}>{item.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

// ============================================
        // SLIDE 2: THE PROBLEM (Combined)
        // ============================================
        const ProblemSlide = ({ isActive }) => {
            const failures = [
                { icon: 'puzzle', title: 'Tool Fragmentation', desc: 'No standardization.' },
                { icon: 'clock', title: 'Manual Burden', desc: 'Repetitive tasks eat time.' },
                { icon: 'messages-square', title: 'Scattered Comms', desc: 'Messages lost across apps.' },
                { icon: 'shield-alert', title: 'Security Risk', desc: 'Unsecured VPN access.' },
            ];
            return (
            <div className="w-full max-w-5xl">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#64748b' }}>01 / The Problem</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Systemic <span style={{ color: '#f87171' }}>Failures</span> & Lost Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                        [1000, '+', 'hrs / year', 'Spent on manual entry'],
                        [5, '+', 'tools', 'Scattered communication'],
                        [100, '%', 'exposed', 'Unsecured devices']
                    ].map(([target, suffix, unit, desc], idx) => (
                        <Card key={idx} hover className="text-center p-4">
                            <div className="text-4xl font-extrabold tracking-tight" style={{ color: '#f87171' }}>
                                <AnimatedCounter target={target} suffix={suffix} isActive={isActive} />
                            </div>
                            <div className="text-sm font-medium mt-1" style={{ color: '#fca5a5' }}>{unit}</div>
                            <div className="text-xs mt-2" style={{ color: '#64748b' }}>{desc}</div>
                        </Card>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {failures.map((f, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.08)' }}>
                            <DangerIconBox icon={f.icon} />
                            <p className="text-sm font-semibold text-white mt-2 mb-1">{f.title}</p>
                            <p className="text-xs" style={{ color: '#64748b' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        )};

// ============================================
        // SLIDE 3: THE SOLUTION (Ecosystem + Flow)
        // ============================================
        const SolutionSlide = () => {
            const portals = [
                { name: 'Mproduction', desc: 'Prod & QC', icon: 'factory', pos: { top: '10%', left: '50%' } },
                { name: 'Reporting', desc: 'Analytics', icon: 'file-bar-chart', pos: { top: '35%', left: '85%' } },
                { name: 'HRMS', desc: 'People', icon: 'users', pos: { top: '80%', left: '80%' } },
                { name: 'Management', desc: 'Dashboards', icon: 'bar-chart-3', pos: { top: '80%', left: '20%' } },
                { name: 'Admin', desc: 'Settings', icon: 'settings', pos: { top: '35%', left: '15%' } }
            ];
            
            return (
                <div className="w-full max-w-5xl flex flex-col items-center" style={{ zoom: 0.9 }}>
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#64748b' }}>02 / The Solution</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">The MecoApps <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ecosystem</span></h2>
                    <p className="text-sm mb-6 text-center" style={{ color: '#64748b' }}>One secure platform. Data flows from Entry → Single DB → Auto Reports.</p>
                    
                    <div className="flex items-center gap-0 mb-6 px-1 w-full max-w-3xl">
                        <div className="flex flex-col items-center p-4 rounded-xl relative z-10" style={{ background: '#03101f', border: '1px solid rgba(56,189,248,0.15)', borderRadius: '14px 0 0 14px', flex: 1 }}>
                            <p className="text-sm font-semibold text-white">1. Enter Once</p>
                        </div>
                        <FlowConnector delay={0} />
                        <div className="flex flex-col items-center p-4 rounded-xl relative z-10" style={{ background: '#03101f', border: '1px solid rgba(14,165,233,0.22)', flex: 1 }}>
                            <p className="text-sm font-semibold text-white">2. Central DB</p>
                        </div>
                        <FlowConnector delay={0.8} />
                        <div className="flex flex-col items-center p-4 rounded-xl relative z-10" style={{ background: '#03101f', border: '1px solid rgba(14,165,233,0.22)', borderRadius: '0 14px 14px 0', flex: 1 }}>
                            <p className="text-sm font-semibold text-white">3. Auto-Flows</p>
                        </div>
                    </div>

                    <div className="relative w-full max-w-[400px] aspect-square mx-auto mt-2">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {portals.map((p, i) => {
                                const t = parseFloat(p.pos.top);
                                const l = parseFloat(p.pos.left);
                                const angle = Math.atan2(t - 50, l - 50);
                                const r = 10;
                                const startX = 50 + r * Math.cos(angle);
                                const startY = 50 + r * Math.sin(angle);
                                return (
                                    <g key={`line-${i}`}>
                                        <line x1={startX} y1={startY} x2={l} y2={t} stroke="rgba(14, 165, 233, 0.25)" strokeWidth="0.4" strokeDasharray="1, 1" />
                                    </g>
                                );
                            })}
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                            <img src="/assets/mecoapps_logo.png" alt="MecoApps Core" className="relative z-10 w-28 h-auto" />
                        </div>
                        {portals.map((p, i) => (
                            <div key={p.name} className="absolute z-10 flex flex-col items-center justify-center p-2 rounded-xl" 
                                style={{ top: p.pos.top, left: p.pos.left, background: 'rgba(3, 16, 31, 0.95)', border: '1px solid rgba(56,189,248,0.15)', width: '100px', transform: 'translate(-50%, -50%)' }}>
                                <i data-lucide={p.icon} style={{width: '16px', height: '16px', color: '#5eead4', marginBottom: '4px'}}></i>
                                <span className="text-xs font-bold text-white text-center leading-tight">{p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

// ============================================
        // SLIDE 4: BUSINESS IMPACT
        // ============================================
        const BusinessImpactSlideNew = ({ isActive }) => {
            const impacts = [
                { icon: 'check-check', title: 'Reduction in Errors', desc: 'Structured data replaces Excel.', color: '#5eead4' },
                { icon: 'gauge', title: 'Faster Decisions', desc: 'Real-time dashboards.', color: '#7dd3fc' },
                { icon: 'users', title: 'Live Management', desc: 'TLs see real-time performance.', color: '#a78bfa' },
                { icon: 'shield', title: 'Strong Security', desc: 'Zero-trust model.', color: '#5eead4' }
            ];

            return (
                <div className="w-full max-w-5xl">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#64748b' }}>03 / Impact</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-7">Business <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Impact</span></h2>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <Card hover className="text-center p-6">
                            <div className="text-[2.5rem] font-extrabold tracking-tight leading-none" style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <AnimatedCounter target={1000} suffix="+" isActive={isActive} />
                            </div>
                            <div className="text-sm mt-2" style={{ color: '#64748b' }}>Leadership hours saved</div>
                        </Card>
                        <Card hover className="text-center p-6">
                            <div className="text-[2.5rem] font-extrabold tracking-tight leading-none" style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <AnimatedCounter target={100} suffix="%" isActive={isActive} />
                            </div>
                            <div className="text-sm mt-2" style={{ color: '#64748b' }}>Operational visibility</div>
                        </Card>
                        <Card hover className="text-center p-6">
                            <div className="text-[2.5rem] font-extrabold tracking-tight leading-none" style={{ color: '#f87171' }}>
                                <AnimatedCounter target={0} suffix="" isActive={isActive} />
                            </div>
                            <div className="text-sm mt-2" style={{ color: '#64748b' }}>Risk exposure</div>
                        </Card>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {impacts.map((imp, i) => (
                            <Card key={i} hover className="p-4 flex items-center gap-4">
                                <i data-lucide={imp.icon} style={{width: '24px', height: '24px', color: imp.color}}></i>
                                <div>
                                    <p className="text-sm font-semibold text-white">{imp.title}</p>
                                    <p className="text-xs" style={{ color: '#64748b' }}>{imp.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            );
        };

// ============================================
        // SLIDE 5: CURRENT PROGRESS
        // ============================================
        const ProgressSlide = ({ isActive }) => (
            <div className="w-full max-w-5xl">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#64748b' }}>04 / Current Progress</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">What We've <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Built So Far</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mproduction */}
                    <div className="p-6 rounded-2xl" style={{ background: 'rgba(6,26,53,0.6)', border: '1px solid rgba(56,189,248,0.1)' }}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Mproduction</h3>
                            <Tag variant="teal">70% Complete</Tag>
                        </div>
                        <div className="w-full h-1.5 rounded-full mb-5 overflow-hidden" style={{ background: 'rgba(56,189,248,0.1)' }}>
                            <div className="h-full rounded-full" style={{ width: isActive ? '70%' : '0%', background: 'linear-gradient(90deg, #0d9488, #0ea5e9)', transition: 'width 1s ease-out 0.3s' }} />
                        </div>
                        <ul className="text-sm space-y-2 text-[#94a3b8]">
                            <li className="flex items-center gap-2"><i data-lucide="check" style={{width:'14px',color:'#5eead4'}}></i> Digital Timesheets</li>
                            <li className="flex items-center gap-2"><i data-lucide="check" style={{width:'14px',color:'#5eead4'}}></i> Live Team Dashboards</li>
                            <li className="flex items-center gap-2"><i data-lucide="check" style={{width:'14px',color:'#5eead4'}}></i> QC Module & Training</li>
                        </ul>
                    </div>

                    {/* Security & Chat */}
                    <div className="space-y-6">
                        <div className="p-5 rounded-2xl flex items-start gap-4" style={{ background: 'rgba(0,212,170,0.05)', border: '1px solid rgba(0,212,170,0.15)' }}>
                            <div className="p-2 rounded-lg" style={{ background: 'rgba(0,212,170,0.1)' }}><i data-lucide="shield-check" style={{color:'#5eead4'}}></i></div>
                            <div>
                                <h3 className="text-md font-bold mb-1">Credential Vault</h3>
                                <p className="text-xs text-[#94a3b8]">Replaces personal device/VPN risk with encrypted, role-based, zero-trust portal access.</p>
                            </div>
                        </div>
                        <div className="p-5 rounded-2xl flex items-start gap-4" style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.15)' }}>
                            <div className="p-2 rounded-lg" style={{ background: 'rgba(14,165,233,0.1)' }}><i data-lucide="message-circle" style={{color:'#7dd3fc'}}></i></div>
                            <div>
                                <h3 className="text-md font-bold mb-1">Unified Chat</h3>
                                <p className="text-xs text-[#94a3b8]">Replaces scattered tools (Teams, Spark) with one auditable, context-aware communication layer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

// ============================================
        // SLIDE 6: THE PLAN
        // ============================================
        const PlanSlide = () => (
            <div className="w-full max-w-5xl">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#64748b' }}>05 / The Plan</p>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Roadmap & <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Needs</span></h2>
                        <div className="space-y-5 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#0ea5e9]/20 before:to-transparent">
                            {[
                                { phase: 'NOW', title: 'Mproduction Pilot', desc: 'Finish 30% → Advita Pilot', active: true },
                                { phase: 'PHASE 2', title: 'HRMS Portal', desc: 'Recruitment, payroll, attendance' },
                                { phase: 'PHASE 3', title: 'Management', desc: 'Dashboards & analytics' },
                                { phase: 'PHASE 4', title: 'Full Rollout', desc: 'All departments live.' }
                            ].map((p, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#03101f] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow flex-col ${p.active ? 'bg-[#0d9488]' : 'bg-[#0ea5e9]'}`}></div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#0ea5e9]/10 bg-[#061a35]/60 shadow">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className={`font-bold ${p.active ? 'text-[#5eead4]' : 'text-[#7dd3fc]'}`}>{p.phase}</div>
                                        </div>
                                        <div className="text-white font-semibold">{p.title}</div>
                                        <div className="text-[#64748b] text-sm">{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-5 mt-2">What we Need To Execute this plan</h3>
                        <div className="space-y-3">
                            {[
                                'Official Sanction & Approval',
                                'Pilot Authorization (Advita)',
                                'Infrastructure Support',
                                'Small Support Team for Feedback',
                                'Supporting members under my team for faster and proper structured development and implementations'
                            ].map((need, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#061a35]/50 border border-[#38bdf8]/10">
                                    <div className="w-6 h-6 rounded-full bg-[#0d9488] text-[#041428] flex items-center justify-center text-xs font-bold">{i+1}</div>
                                    <span className="text-sm font-medium">{need}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 rounded-xl text-center bg-[#0ea5e9]/5 border border-[#0ea5e9]/10">
                            <p className="text-sm font-medium text-[#94a3b8]">I will personally oversee every aspect — development through rollout.</p>
                        </div>
                    </div>
                </div>
            </div>
        );

// ============================================
        // SLIDE 7: CLOSING
        // ============================================
        const ClosingCombinedSlide = () => (
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <p className="text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#5eead4' }}>The Path Forward</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">LET'S BUILD <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>THE FUTURE</span></h2>
                
                <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-snug mb-8 text-[#e2e8f0]">"The foundation is already built, with your support, MecoApps will transform how Mangalam operates."</h2>
                
                <a href="https://dev.mecoapps.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer no-underline mb-6" style={{background:'linear-gradient(135deg, rgba(8,145,178,0.06), rgba(3,105,161,0.06))',border:'1px solid rgba(14,165,233,0.15)',color:'#7dd3fc'}}
                    onMouseEnter={(e)=>{e.currentTarget.style.background='linear-gradient(135deg, rgba(8,145,178,0.12), rgba(3,105,161,0.12))';e.currentTarget.style.borderColor='rgba(14,165,233,0.25)';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 20px rgba(14,165,233,0.06)'}}
                    onMouseLeave={(e)=>{e.currentTarget.style.background='linear-gradient(135deg, rgba(8,145,178,0.06), rgba(3,105,161,0.06))';e.currentTarget.style.borderColor='rgba(14,165,233,0.15)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}
                ><i data-lucide="external-link" style={{width:'16px',height:'16px'}}></i><span>dev.mecoapps.in</span></a>
                
                <div className="flex gap-4">
                    <div className="text-left px-4 py-2 rounded border border-[#0ea5e9]/20 bg-[#0ea5e9]/5">
                        <p className="text-xs text-[#64748b]">User ID</p>
                        <p className="text-sm font-bold text-[#7dd3fc]">vp_demo</p>
                    </div>
                    <div className="text-left px-4 py-2 rounded border border-[#0ea5e9]/20 bg-[#0ea5e9]/5">
                        <p className="text-xs text-[#64748b]">Password</p>
                        <p className="text-sm font-bold text-[#7dd3fc]">Demo@123</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 mt-10"><div className="w-6 h-px" style={{background:'rgba(56,189,248,0.12)'}}></div><p className="text-sm" style={{color:'#475569'}}>Prepared by Vishal Chabhad · April 2026 · Confidential</p><div className="w-6 h-px" style={{background:'rgba(56,189,248,0.12)'}}></div></div>
            </div>
        );

// ============================================
        // MAIN APP - CONDENSED
        // ============================================
        const App = () => {
            const [currentSlide, setCurrentSlide] = useState(0);
            const totalSlides = 8;
            const touchStartX = useRef(0);
            const isBusy = useRef(false);

            const goToSlide = useCallback((idx) => {
                if (isBusy.current || idx === currentSlide || idx < 0 || idx >= totalSlides) return;
                isBusy.current = true;
                setCurrentSlide(idx);
                setTimeout(() => { isBusy.current = false; }, 550);
            }, [currentSlide, totalSlides]);

            const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
            const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

            const slides = [
                <TitleSlide />,
                <AgendaSlide onNavigate={goToSlide} />,
                <ProblemSlide isActive={currentSlide === 2} />,
                <SolutionSlide />,
                <BusinessImpactSlideNew isActive={currentSlide === 4} />,
                <ProgressSlide isActive={currentSlide === 5} />,
                <PlanSlide />,
                <ClosingCombinedSlide />
            ];

            useEffect(() => {
                const handleKeyDown = (e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); nextSlide(); }
                    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevSlide(); }
                };
                window.addEventListener('keydown', handleKeyDown);
                return () => window.removeEventListener('keydown', handleKeyDown);
            }, [nextSlide, prevSlide]);

            useEffect(() => {
                const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
                const handleTouchEnd = (e) => { const dx = e.changedTouches[0].screenX - touchStartX.current; if (Math.abs(dx) > 50) goToSlide(currentSlide + (dx < 0 ? 1 : -1)); };
                window.addEventListener('touchstart', handleTouchStart, { passive: true });
                window.addEventListener('touchend', handleTouchEnd, { passive: true });
                return () => { window.removeEventListener('touchstart', handleTouchStart); window.removeEventListener('touchend', handleTouchEnd); };
            }, [currentSlide, goToSlide]);

            const handleFirstSlideClick = useCallback(() => { if (currentSlide === 0) goToSlide(1); }, [currentSlide, goToSlide]);

            useEffect(() => {
                const frame = requestAnimationFrame(() => {
                    try { if (window.lucide) window.lucide.createIcons(); } catch (e) {}
                });
                return () => cancelAnimationFrame(frame);
            });

            return (
                <div className="w-full h-screen relative bg-[#03101f] text-white overflow-hidden" onClick={handleFirstSlideClick}>
                    <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js" strategy="lazyOnload" onLoad={() => { if (window.lucide) window.lucide.createIcons(); }} />
                    <BackgroundEffects />
                    <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
                    <SlideCounter currentSlide={currentSlide} totalSlides={totalSlides} />
                    <div className="relative w-full h-full">
                        {slides.map((slide, index) => (
                            <Slide key={index} isActive={index === currentSlide}>{slide}</Slide>
                        ))}
                    </div>
                    <NavigationControls currentSlide={currentSlide} totalSlides={totalSlides} onNavigate={goToSlide} />
                </div>
            );
        };

        export default App;