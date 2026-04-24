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
                { num: '01', title: 'The Problem', desc: 'Manual overload, fragmented tools, security gaps, billing inefficiency', slide: 2 },
                { num: '02', title: 'The Solution', desc: 'MecoApps unified ecosystem — multiple portals, one platform', slide: 5 },
                { num: '03', title: 'The Impact', desc: 'Saved hours, billing accuracy, security posture, scalability', slide: 8 },
                { num: '04', title: 'The Current Progress', desc: 'Current stage of development, current and upcoming features', slide: 10 },
                { num: '05', title: 'The Plan', desc: 'Roadmap, resources needed, next steps', slide: 14 }
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
        // SLIDE 3: PROBLEM NUMBERS
        // ============================================
        const ProblemNumbersSlide = ({ isActive }) => (
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">The Numbers That <span style={{ color: '#f87171' }}>Hurt</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        [1000, '+', 'hrs / year', 'Every Team Lead and Managers spend this on manual data entry, collation, and report preparation'],
                        [5, '+', 'tools for communication', 'Teams, Spark, LinQ, Email, Google Chat — no single platform, conversations scattered'],
                        [100, '%', 'exposed', 'WFH users access company network drives on personal often unsecured devices']
                    ].map(([target, suffix, unit, desc], idx) => (
                        <Card key={idx} hover className="text-center">
                            <div className="text-5xl font-extrabold tracking-tight" style={{ color: '#f87171' }}>
                                <AnimatedCounter target={target} suffix={suffix} isActive={isActive} />
                            </div>
                            <div className="text-base font-medium mt-2" style={{ color: '#fca5a5' }}>{unit}</div>
                            <div className="text-sm mt-3 leading-relaxed" style={{ color: '#64748b' }}>{desc}</div>
                        </Card>
                    ))}
                </div>
                <p className="text-center text-sm mt-7" style={{ color: '#64748b' }}>Result: thousands of lost hours, billing inaccuracies, security vulnerabilities.</p>
            </div>
        );

        // ============================================
        // SLIDE 4: FAILURES
        // ============================================
        const FailuresSlide = () => {
            const failures = [
                { icon: 'puzzle', title: 'Tool Fragmentation', desc: 'Different Excel per client, no standardization.' },
                { icon: 'clock', title: 'Manual Effort Burden', desc: 'Repetitive tasks consume TL capacity.' },
                { icon: 'messages-square', title: 'Scattered Communication', desc: 'Messages lost across Teams, Spark, LinQ.' },
                { icon: 'shield-alert', title: 'Security Risk', desc: 'Personal often unsecured devices access network via VPN.' },
                { icon: 'receipt', title: 'Billing Inaccuracy', desc: 'Human errors → wrong billing → revenue loss.' },
                { icon: 'trending-down', title: 'Zero Scalability', desc: 'Every new client needs new templates.' }
            ];
            return (
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-7">Six Systemic <span style={{ color: '#94a3b8' }}>Failures</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {failures.map((f, i) => (
                            <Card key={i} className="flex items-start gap-4 p-5">
                                <DangerIconBox icon={f.icon} />
                                <div><p className="text-sm font-semibold text-white mb-1">{f.title}</p><p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{f.desc}</p></div>
                            </Card>
                        ))}
                    </div>
                </div>
            );
        };

        // ============================================
        // SLIDE 6: ECOSYSTEM DIAGRAM
        // ============================================
        // ============================================
        // SLIDE 6: ECOSYSTEM DIAGRAM
        // ============================================
        const EcosystemDiagramSlide = () => {
            const portals = [
                { name: 'Mproduction', desc: 'Production, QC, Training', icon: 'factory', pos: { top: '8%', left: '50%' } },
                { name: 'Reporting', desc: 'Analytics & Insights', icon: 'file-bar-chart', pos: { top: '38%', left: '88%' } },
                { name: 'HRMS', desc: 'People & Payroll', icon: 'users', pos: { top: '82%', left: '82%' } },
                { name: 'Management', desc: 'Dashboards & Billing', icon: 'bar-chart-3', pos: { top: '82%', left: '18%' } },
                { name: 'Admin', desc: 'Admin Tasks & Reporting', icon: 'settings', pos: { top: '38%', left: '12%' } }
            ];
            const tags = ['Single Sign-On', 'Role-Based Access', 'Real-time Data', 'Zero-Trust Security', 'Unified Chat', 'Scalable Architecture'];
            
            return (
                <div className="w-full max-w-5xl flex flex-col items-center" style={{ zoom: 0.92 }}>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">The MecoApps <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ecosystem</span></h2>
                    <p className="text-sm mb-10 text-center" style={{ color: '#64748b' }}>Multiple interconnected portals. One secure platform.</p>
                    
                    <div className="relative w-full max-w-[540px] aspect-square mx-auto mb-6">
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {portals.map((p, i) => {
                                const t = parseFloat(p.pos.top);
                                const l = parseFloat(p.pos.left);
                                const dx = l - 50;
                                const dy = t - 50;
                                const angle = Math.atan2(dy, dx);
                                const a = 14; // Horizontal radius of logo in %
                                const b = 5;  // Vertical radius of logo in %
                                const r = (a * b) / Math.sqrt(Math.pow(b * Math.cos(angle), 2) + Math.pow(a * Math.sin(angle), 2));
                                const startX = 50 + r * Math.cos(angle);
                                const startY = 50 + r * Math.sin(angle);
                                
                                return (
                                    <g key={`line-${i}`}>
                                        <line x1={startX} y1={startY} x2={l} y2={t} stroke="rgba(14, 165, 233, 0.25)" strokeWidth="0.4" strokeDasharray="1, 1" />
                                        <circle r="0.8" fill="#5eead4">
                                            <animateMotion dur={`${3 + (i % 2)}s`} repeatCount="indefinite" path={`M${startX},${startY} L${l},${t}`} begin={`${i * 0.5}s`} />
                                        </circle>
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Central MecoApps Logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                            <img src="/assets/mecoapps_logo.png" alt="MecoApps Core" className="relative z-10 w-40 h-auto" />
                        </div>

                        {/* Orbiting Portals */}
                        {portals.map((p, i) => (
                            <div key={p.name} className="absolute z-10 flex flex-col items-center justify-center gap-1 p-3 rounded-2xl transition-all duration-300 w-[135px] -translate-x-1/2 -translate-y-1/2" 
                                style={{ 
                                    top: p.pos.top, left: p.pos.left, 
                                    background: 'rgba(3, 16, 31, 0.95)', 
                                    border: '1px solid rgba(56,189,248,0.15)'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(94,234,212,0.5)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.15)'; }}
                            >
                                <div className="p-1.5 rounded-full mb-1" style={{ background: 'rgba(14,165,233,0.1)' }}>
                                    <i data-lucide={p.icon} style={{width: '18px', height: '18px', color: '#5eead4'}}></i>
                                </div>
                                <span className="text-sm font-bold text-white text-center leading-tight">{p.name}</span>
                                <span className="text-[11px] text-center" style={{ color: '#94a3b8' }}>{p.desc}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 relative z-20 -mt-8">
                        {tags.map((tag, i) => <Tag key={tag} variant={i % 2 === 0 ? 'teal' : 'blue'}>{tag}</Tag>)}
                    </div>
                </div>
            );
        };

        // ============================================
        // SLIDE 7: HOW IT CHANGES
        // ============================================
        const HowItChangesSlide = () => {
            const benefits = [
                { icon: 'layout-dashboard', title: 'Real-time Dashboards', desc: 'No more waiting for end-of-day reports.' },
                { icon: 'file-check-2', title: 'Structured Data for Billing', desc: 'Production flows into structured pipeline.' },
                { icon: 'message-circle', title: 'Context-Aware Communication', desc: 'Chat linked to tasks and QC feedback.' },
                { icon: 'shield-check', title: 'Compliance-Ready Security', desc: 'Zero-trust model, encrypted storage.' }
            ];

            return (
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">How It <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Changes Everything</span></h2>
                    
                    <div className="flex items-center gap-0 mb-8 px-1">
                        <div className="flex flex-col items-center p-6 rounded-xl relative z-10" style={{ background: '#03101f', border: '1px solid rgba(56,189,248,0.15)', borderRadius: '14px 0 0 14px', flex: 1 }}>
                            <i data-lucide="keyboard" style={{width: '24px', height: '24px', color: '#5eead4', margin: '0 auto 10px'}}></i>
                            <p className="text-base font-semibold text-white">Enter Once</p>
                            <p className="text-sm mt-1" style={{ color: '#64748b' }}>Production, timesheets, QC</p>
                        </div>
                        <FlowConnector delay={0} />
                        <div className="flex flex-col items-center p-6 rounded-xl relative z-10" style={{ background: '#03101f', border: '1px solid rgba(14,165,233,0.22)', flex: 1 }}>
                            <i data-lucide="database" style={{width: '24px', height: '24px', color: '#7dd3fc', margin: '0 auto 10px'}}></i>
                            <p className="text-base font-semibold text-white">Single Database</p>
                            <p className="text-sm mt-1" style={{ color: '#64748b' }}>Centralized, real-time</p>
                        </div>
                        <FlowConnector delay={0.8} />
                        <div className="flex flex-col items-center p-6 rounded-xl relative z-10" style={{ background: '#03101f', border: '1px solid rgba(14,165,233,0.22)', borderRadius: '0 14px 14px 0', flex: 1 }}>
                            <i data-lucide="git-branch" style={{width: '24px', height: '24px', color: '#7dd3fc', margin: '0 auto 10px'}}></i>
                            <p className="text-base font-semibold text-white">Auto-Flows</p>
                            <p className="text-sm mt-1" style={{ color: '#64748b' }}>To portals, reports</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((b, i) => (
                            <Card key={i} className="flex items-start gap-4 p-5">
                                <IconBox icon={b.icon} />
                                <div><p className="text-sm font-semibold text-white">{b.title}</p><p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{b.desc}</p></div>
                            </Card>
                        ))}
                    </div>
                </div>
            );
        };

        // ============================================
        // SLIDE 9: BUSINESS IMPACT WITH LIVE COUNTERS
        // ============================================
        const BusinessImpactSlide = ({ isActive }) => {
            const impacts = [
                { icon: 'check-check', title: 'Reduction in Human Errors', desc: 'Structured data replaces manual Excel.', color: '#5eead4' },
                { icon: 'gauge', title: 'Faster Decisions', desc: 'Real-time dashboards give instant visibility.', color: '#7dd3fc' },
                { icon: 'users', title: 'Live Team Management', desc: 'TLs see real-time performance.', color: '#a78bfa' },
                { icon: 'user-plus', title: 'Faster Onboarding', desc: 'Built-in training reduces ramp-up time.', color: '#f59e0b' },
                { icon: 'shield', title: 'Stronger Security Posture', desc: 'Zero-trust model, encryption.', color: '#5eead4' },
                { icon: 'rocket', title: 'Scalable Growth', desc: 'Standardized framework for scaling.', color: '#7dd3fc' }
            ];

            return (
                <div className="w-full max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-7">Business <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Impact</span></h2>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <Card hover className="text-center p-6">
                            <div className="text-[2.8rem] font-extrabold tracking-tight leading-none" style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <AnimatedCounter target={1000} suffix="+" isActive={isActive} />
                            </div>
                            <div className="text-sm mt-2" style={{ color: '#64748b' }}>Leadership hours saved annually</div>
                        </Card>
                        <Card hover className="text-center p-6">
                            <div className="text-[2.8rem] font-extrabold tracking-tight leading-none" style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                <AnimatedCounter target={100} suffix="%" isActive={isActive} />
                            </div>
                            <div className="text-sm mt-2" style={{ color: '#64748b' }}>Billing accuracy</div>
                        </Card>
                        <Card hover className="text-center p-6">
                            <div className="text-[2.8rem] font-extrabold tracking-tight leading-none" style={{ color: '#f87171' }}>
                                <AnimatedCounter target={0} suffix="" isActive={isActive} />
                            </div>
                            <div className="text-sm mt-2" style={{ color: '#64748b' }}>Security risk exposure</div>
                        </Card>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {impacts.map((imp, i) => (
                            <Card key={i} hover className="p-4">
                                <div className="flex items-center gap-2.5 mb-1.5">
                                    <i data-lucide={imp.icon} style={{width: '16px', height: '16px', color: imp.color}}></i>
                                    <span className="text-sm font-semibold text-white">{imp.title}</span>
                                </div>
                                <p className="text-sm" style={{ color: '#64748b' }}>{imp.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            );
        };

        // ============================================
        // SLIDE 11: MPRODUCTION STATUS WITH PROGRESS BAR
        // ============================================
        const MproductionStatusSlide = ({ isActive }) => {
            const features = [
                { icon: 'edit-3', title: 'Real-time Production Entry', desc: 'Digital timesheets replace Excel.' },
                { icon: 'layout-dashboard', title: 'Live Team Dashboards', desc: 'TLs see real-time team performance.' },
                { icon: 'list-checks', title: 'Task Assignment & Tracking', desc: 'Assign, monitor, follow up easily.' },
                { icon: 'check-circle', title: 'Integrated QC Module', desc: 'Structured audits with instant feedback.' },
                { icon: 'graduation-cap', title: 'Built-in Training Centre', desc: 'Client-specific materials, tracking.' },
                { icon: 'user-check', title: 'Deep User Tracking', desc: 'Login/logout, attendance, productivity.' }
            ];

            return (
                <div className="w-full max-w-5xl">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Mproduction — <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>70% Complete</span></h2>
                        <Tag variant="teal">Beta Release</Tag>
                    </div>
                    <p className="text-sm mb-4" style={{ color: '#64748b' }}>First module of the ecosystem. Built and nearly ready.</p>
                    
                    {/* Animated Progress Bar */}
                    <div className="w-full h-2.5 rounded-full mb-6 overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)' }}>
                        <div className="h-full rounded-full" style={{ 
                            width: isActive ? '70%' : '0%',
                            background: 'linear-gradient(90deg, #0d9488, #0ea5e9)',
                            transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                        }} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((f, i) => (
                            <Card key={i} hover className="flex items-start gap-3.5 p-5">
                                <IconBox icon={f.icon} />
                                <div><p className="text-sm font-semibold text-white">{f.title}</p><p className="text-sm" style={{ color: '#64748b' }}>{f.desc}</p></div>
                            </Card>
                        ))}
                    </div>
                    <p className="text-sm mt-4 text-right" style={{ color: '#475569' }}>Built with Python · React + Tailwind · PostgreSQL</p>
                </div>
            );
        };

        // ============================================
        // SLIDE 12: CREDENTIAL VAULT COMPARISON
        // ============================================
        const CredentialVaultSlide = () => (
            <div className="w-full max-w-5xl">
                <div className="flex items-center gap-3 mb-7">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Credential <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vault</span></h2>
                    <Tag variant="teal">Security</Tag>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl p-7 flex flex-col" style={{ background: 'rgba(239,68,68,0.025)', border: '1px solid rgba(239,68,68,0.08)' }}>
                        <div className="flex items-center gap-2 mb-4"><Tag variant="red">Current</Tag><span className="text-sm font-semibold" style={{ color: '#f87171' }}>HIGH RISK</span></div>
                        <div className="flex flex-col gap-1.5 flex-1">
                            {[
                                {icon:'laptop',label:'Personal Device'},
                                {icon:'wifi',label:'VPN Connection'},
                                {icon:'hard-drive',label:'Company Network Drive'},
                                {icon:'key',label:'Credentials Exposed',danger:true}
                            ].map((step, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={{background:step.danger?'rgba(239,68,68,0.08)':'rgba(255,255,255,0.015)',border:step.danger?'1px solid rgba(239,68,68,0.18)':'none'}}>
                                        <i data-lucide={step.icon} style={{width:'15px',height:'15px',color:'#f87171'}}></i>
                                        <span style={{color:step.danger?'#fca5a5':'#cbd5e1'}}>{step.label}</span>
                                    </div>
                                    {i<3 && <div className="text-center" style={{color:'#475569'}}>↓</div>}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="text-sm mt-auto pt-4" style={{color:'rgba(248,113,113,0.5)'}}>Files movable across devices. No audit trail.</p>
                    </div>
                    
                    <div className="rounded-2xl p-7 flex flex-col" style={{ background: 'rgba(0,212,170,0.025)', border: '1px solid rgba(0,212,170,0.08)' }}>
                        <div className="flex items-center gap-2 mb-4"><Tag variant="teal">With MecoApps</Tag><span className="text-sm font-semibold" style={{ color: '#5eead4' }}>ZERO RISK</span></div>
                        <div className="flex flex-col gap-1.5 flex-1">
                            {[
                                {icon:'monitor',label:'Any Device'},
                                {icon:'globe',label:'MecoApps Portal'},
                                {icon:'check',label:'Role-Based Secure Access Only',safe:true}
                            ].map((step, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={{background:step.safe?'rgba(0,212,170,0.04)':'rgba(255,255,255,0.015)',border:step.safe?'1px solid rgba(0,212,170,0.18)':'1px solid rgba(0,212,170,0.1)'}}>
                                        <i data-lucide={step.icon} style={{width:'15px',height:'15px',color:'#5eead4'}}></i>
                                        <span style={{color:step.safe?'#5eead4':'#cbd5e1'}}>{step.label}</span>
                                    </div>
                                    {i<2 && <div className="text-center" style={{color:'#0d9488'}}>↓</div>}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="text-sm mt-auto pt-4" style={{color:'rgba(94,234,212,0.5)'}}>Encrypted storage. Role-based. Full audit logging.</p>
                    </div>
                </div>
            </div>
        );

        // ============================================
        // SLIDE 13: UNIFIED CHAT
        // ============================================
        const UnifiedChatSlide = () => (
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-7">One Unified <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Communication</span> Platform</h2>
                <div className="grid grid-cols-2 gap-10">
                    {/* LEFT: Replace This Chaos */}
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#f87171' }}>Replace This Chaos</p>
                        <div className="flex items-center gap-3 mb-6" style={{ minHeight: '90px' }}>
                            {[{icon:'message-square',name:'Teams'},{icon:'zap',name:'Spark'},{icon:'link',name:'LinQ'},{icon:'mail',name:'Email'},{icon:'message-circle',name:'Google Chat'}].map((app,i)=>(
                                <div key={i} className="relative flex flex-col items-center gap-1">
                                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center" style={{background:'rgba(255,255,255,0.015)',border:'1px solid rgba(255,255,255,0.04)'}}>
                                        <i data-lucide={app.icon} style={{width:'20px',height:'20px',color:'#475569'}}></i>
                                        <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">✕</span>
                                    </div>
                                    <span className="text-[10px]" style={{color:'#64748b'}}>{app.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {[{icon:'split',text:'Scattered communication'},{icon:'megaphone-off',text:'No proper broadcasting system'},{icon:'users-round',text:'No group messaging'},{icon:'search-x',text:'Lost context'},{icon:'shield-off',text:'Less secure'}].map((f,i)=>
                                <div key={i} className="flex items-center gap-3 text-sm" style={{color:'#94a3b8'}}><i data-lucide={f.icon} style={{width:'14px',height:'14px',color:'#f87171',minWidth:'14px'}}></i>{f.text}</div>
                            )}
                        </div>
                    </div>
                    {/* RIGHT: With This */}
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#5eead4' }}>With This</p>
                        <div className="flex flex-col items-center justify-center gap-2 mb-6" style={{ minHeight: '90px' }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{background:'linear-gradient(135deg, rgba(0,212,170,0.08), rgba(14,165,233,0.08))',border:'1px solid rgba(0,212,170,0.18)'}}>
                                <i data-lucide="message-circle" style={{width:'26px',height:'26px',color:'#00d4aa'}}></i>
                            </div>
                            <span className="text-base font-semibold" style={{background:'linear-gradient(135deg, #5eead4, #38bdf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>MecoApps Chat</span>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {[{icon:'user',text:'One-on-One Messaging'},{icon:'users',text:'Group & Team Chats'},{icon:'megaphone',text:'HR Broadcasts'},{icon:'link-2',text:'Context-Aware'},{icon:'shield',text:'Encrypted & Auditable'}].map((f,i)=>
                                <div key={i} className="flex items-center gap-3 text-sm" style={{color:'#94a3b8'}}><i data-lucide={f.icon} style={{width:'14px',height:'14px',color:'#5eead4',minWidth:'14px'}}></i>{f.text}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );

        // ============================================
        // SLIDE 15: ROADMAP TIMELINE
        // ============================================
        const RoadmapSlide = () => {
            const phases = [
                { phase: 'NOW', variant: 'teal', title: 'Mproduction Pilot', desc: 'Complete remaining 30% → Pilot in Advita → Iterate', active: true },
                { phase: 'PHASE 2', variant: 'blue', title: 'HRMS Portal', desc: 'Recruitment, records, payroll, attendance', active: false },
                { phase: 'PHASE 3', variant: 'blue', title: 'Management & Admin', desc: 'Dashboards, billing, analytics', active: false },
                { phase: 'PHASE 4', variant: 'teal', title: 'Full Rollout', desc: 'All departments live. AI/ML ready.', active: false }
            ];

            return (
                <div className="w-full max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-9">Roadmap to <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Full Rollout</span></h2>
                    <div className="relative">
                        {phases.map((phase, i) => (
                            <div key={i} className="relative pl-9 pb-7" style={{paddingBottom:i===phases.length-1?'0':'28px'}}>
                                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2" style={{borderColor:phase.active?'transparent':'#0ea5e9',background:phase.active?'linear-gradient(135deg, #0d9488, #0ea5e9)':'#041428',boxShadow:phase.active?'0 0 12px rgba(14,165,233,0.3)':'none'}}/>
                                {i<phases.length-1 && <div className="absolute left-[6px] top-6 bottom-0 w-0.5" style={{background:'linear-gradient(to bottom, rgba(14,165,233,0.18), rgba(14,165,233,0.02))'}}/>}
                                <div>
                                    <Tag variant={phase.variant} style={{fontSize:'10px'}}>{phase.phase}</Tag>
                                    <p className="text-base font-semibold text-white mt-1.5">{phase.title}</p>
                                    <p className="text-sm mt-1 leading-relaxed" style={{color:'#64748b'}}>{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // ============================================
        // SLIDE 16: RESOURCE NEEDS
        // ============================================
        const ResourceNeedsSlide = () => {
            const needs = [
                { num: 1, title: 'Official Sanction', desc: 'Formal approval as company project' },
                { num: 2, title: 'Pilot Approval', desc: 'Authorization for Advita pilot' },
                { num: 3, title: 'Infrastructure Support', desc: 'Technical resources for development and deployment' },
                { num: 4, title: 'Development Time', desc: 'Complete remaining 30% + build portals' },
                { num: 5, title: 'Small Support Team', desc: 'Cross-functional reps for feedback' }
            ];

            return (
                <div className="w-full max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">What I <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Need</span></h2>
                    <p className="text-sm mb-7" style={{ color: '#64748b' }}>To move MecoApps from internal project to formal initiative.</p>
                    <div className="flex flex-col gap-3">
                        {needs.map((need) => (
                            <div key={need.num} className="flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300" style={{background:'rgba(6,26,53,0.45)',border:'1px solid rgba(56,189,248,0.03)'}}
                                onMouseEnter={(e)=>{e.currentTarget.style.background='rgba(6,26,53,0.6)';e.currentTarget.style.borderColor='rgba(56,189,248,0.1)'}}
                                onMouseLeave={(e)=>{e.currentTarget.style.background='rgba(6,26,53,0.45)';e.currentTarget.style.borderColor='rgba(56,189,248,0.03)'}}
                            >
                                <div className="w-8 h-8 min-w-[32px] rounded-lg text-xs font-bold flex items-center justify-center" style={{background:'linear-gradient(135deg, #0d9488, #0ea5e9)',color:'#041428'}}>{need.num}</div>
                                <div><p className="text-sm font-semibold text-white">{need.title}</p><p className="text-sm" style={{color:'#64748b'}}>{need.desc}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 rounded-xl text-center" style={{background:'rgba(14,165,233,0.04)',border:'1px solid rgba(14,165,233,0.1)'}}><p className="text-sm font-medium" style={{color:'#94a3b8'}}>I will personally oversee every aspect — development through rollout.</p></div>
                </div>
            );
        };

        // ============================================
        // SLIDE 17: CLOSING CTA
        // ============================================
        const ClosingCTASlide = () => (
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <p className="text-sm font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#5eead4' }}>The Path Forward</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-10">LET'S BUILD <span style={{ background: 'linear-gradient(135deg, #5eead4, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>THE FUTURE</span></h2>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 w-full max-w-xl">
                    <div className="flex flex-col gap-3 text-left flex-1 w-full">
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{color:'#f87171'}}>From</p>
                        {['Manual processes','Excel based production tracking','Email-dependent reporting'].map(item=>(
                            <div key={item} className="flex items-center gap-3 p-3.5 rounded-lg" style={{background:'rgba(239,68,68,0.025)',border:'1px solid rgba(239,68,68,0.06)'}}>
                                <i data-lucide="x" style={{width:'14px',height:'14px',color:'#f87171',minWidth:'14px'}}></i>
                                <span className="text-sm" style={{color:'#94a3b8'}}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center">
                        <i data-lucide="arrow-right" className="hidden md:block" style={{width:'28px',height:'28px',color:'#5eead4'}}></i>
                        <i data-lucide="arrow-down" className="block md:hidden" style={{width:'28px',height:'28px',color:'#5eead4'}}></i>
                    </div>
                    <div className="flex flex-col gap-3 text-left flex-1 w-full">
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{color:'#5eead4'}}>To</p>
                        {['Automated ecosystem','Data-driven operations','Proactive & secure platform'].map(item=>(
                            <div key={item} className="flex items-center gap-3 p-3.5 rounded-lg" style={{background:'rgba(0,212,170,0.03)',border:'1px solid rgba(0,212,170,0.08)'}}>
                                <i data-lucide="check" style={{width:'14px',height:'14px',color:'#5eead4',minWidth:'14px'}}></i>
                                <span className="text-sm text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative py-6">
                    <div className="absolute inset-0 -m-6 rounded-3xl" style={{background:'linear-gradient(135deg, rgba(13,148,136,0.04), rgba(14,165,233,0.04))',filter:'blur(20px)',zIndex:0}}/>
                    <p className="relative z-10 text-xl md:text-2xl font-semibold text-white">With your approval, we begin immediately.</p>
                </div>
            </div>
        );

        // ============================================
        // SLIDE 18: CLOSING
        // ============================================
        const ClosingSlide = () => (
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <div className="relative inline-flex flex-col items-center justify-center mb-5">
                    <img src="/assets/mecoapps_logo.png" alt="MecoApps" style={{height:'80px',position:'relative',zIndex:1}}/>
                </div>
                <p className="text-base mb-6" style={{color:'#64748b'}}>Thank you for your time and consideration.</p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-snug mb-8" style={{color:'#e2e8f0'}}>"The foundation is already built, with your support, MecoApps will transform how Mangalam operates."</h2>
                <p className="text-base mb-4" style={{color:'#64748b'}}>Don't just read about it. Experience it yourself.</p>
                <a href="https://dev.mecoapps.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer no-underline" style={{background:'linear-gradient(135deg, rgba(8,145,178,0.06), rgba(3,105,161,0.06))',border:'1px solid rgba(14,165,233,0.15)',color:'#7dd3fc'}}
                    onMouseEnter={(e)=>{e.currentTarget.style.background='linear-gradient(135deg, rgba(8,145,178,0.12), rgba(3,105,161,0.12))';e.currentTarget.style.borderColor='rgba(14,165,233,0.25)';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 20px rgba(14,165,233,0.06)'}}
                    onMouseLeave={(e)=>{e.currentTarget.style.background='linear-gradient(135deg, rgba(8,145,178,0.06), rgba(3,105,161,0.06))';e.currentTarget.style.borderColor='rgba(14,165,233,0.15)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}
                ><i data-lucide="external-link" style={{width:'16px',height:'16px'}}></i><span>dev.mecoapps.in</span></a>
                <p className="text-sm font-semibold uppercase tracking-wider mt-6 mb-3" style={{color:'#5eead4'}}>Demo Credentials</p>
                <div className="flex flex-col gap-2 mt-2 w-full max-w-xs">
                    <div className="flex items-center justify-between px-5 py-3 rounded-lg cursor-pointer transition-all duration-200" style={{background:'rgba(14,165,233,0.06)',border:'1px solid rgba(14,165,233,0.12)'}}
                        onClick={(e) => { navigator.clipboard.writeText('vp_demo'); const el = e.currentTarget; el.style.borderColor='rgba(94,234,212,0.5)'; setTimeout(() => el.style.borderColor='rgba(14,165,233,0.12)', 1000); }}
                    >
                        <div><p className="text-xs" style={{color:'#64748b'}}>User ID</p><p className="text-sm font-bold" style={{color:'#7dd3fc'}}>vp_demo</p></div>
                        <i data-lucide="copy" style={{width:'14px',height:'14px',color:'#475569'}}></i>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3 rounded-lg cursor-pointer transition-all duration-200" style={{background:'rgba(14,165,233,0.06)',border:'1px solid rgba(14,165,233,0.12)'}}
                        onClick={(e) => { navigator.clipboard.writeText('Demo@123'); const el = e.currentTarget; el.style.borderColor='rgba(94,234,212,0.5)'; setTimeout(() => el.style.borderColor='rgba(14,165,233,0.12)', 1000); }}
                    >
                        <div><p className="text-xs" style={{color:'#64748b'}}>Password</p><p className="text-sm font-bold" style={{color:'#7dd3fc'}}>Demo@123</p></div>
                        <i data-lucide="copy" style={{width:'14px',height:'14px',color:'#475569'}}></i>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-8"><div className="w-6 h-px" style={{background:'rgba(56,189,248,0.12)'}}></div><p className="text-sm" style={{color:'#475569'}}>Prepared by Vishal Chabhad · April 2026 · Confidential</p><div className="w-6 h-px" style={{background:'rgba(56,189,248,0.12)'}}></div></div>
            </div>
        );

        // ============================================
        // MAIN APP - WITH ALL ANIMATIONS RESTORED
        // ============================================
        const App = () => {
            const [currentSlide, setCurrentSlide] = useState(0);
            const totalSlides = 19;
            const touchStartX = useRef(0);
            const isBusy = useRef(false);

            // Navigation functions defined FIRST
            const goToSlide = useCallback((idx) => {
                if (isBusy.current || idx === currentSlide || idx < 0 || idx >= totalSlides) return;
                isBusy.current = true;
                setCurrentSlide(idx);
                setTimeout(() => { isBusy.current = false; }, 550);
            }, [currentSlide, totalSlides]);

            const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
            const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

            // Slides array with proper props passing
            const slides = [
                <TitleSlide />,
                <AgendaSlide onNavigate={goToSlide} />,
                <SectionDivider number="01" title="PROBLEM" subtitle="Why our current operational architecture is failing" />,
                <ProblemNumbersSlide isActive={currentSlide === 3} />,
                <FailuresSlide />,
                <SectionDivider number="02" title="SOLUTION" subtitle="MecoApps — a unified, intelligent ecosystem" />,
                <EcosystemDiagramSlide />,
                <HowItChangesSlide />,
                <SectionDivider number="03" title="IMPACT" subtitle="Measurable outcomes that affect the bottom line" />,
                <BusinessImpactSlide isActive={currentSlide === 9} />,
                <SectionDivider number="04" title="CURRENT PROGRESS" subtitle="Development is underway — here's where we stand today" />,
                <MproductionStatusSlide isActive={currentSlide === 11} />,
                <CredentialVaultSlide />,
                <UnifiedChatSlide />,
                <SectionDivider number="05" title="PLAN" subtitle="Roadmap to full organizational rollout by mid-2027" />,
                <RoadmapSlide />,
                <ResourceNeedsSlide />,
                <ClosingCTASlide />,
                <ClosingSlide />
            ];

            // Event handlers
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
                    try { if (window.lucide) window.lucide.createIcons(); } catch (e) { /* Lucide DOM mutation may conflict with React reconciliation */ }
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

        // Mount
        
        export default App;
    