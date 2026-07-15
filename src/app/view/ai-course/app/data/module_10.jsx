import React from 'react';

export const slides = [
  {
    id: 1,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '1.2rem', marginBottom: '2rem', border: '1px solid #3b82f6' }}>
            Level 2: Master the Skills
          </div>
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 10</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>AI Communication & Tone Control</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Human-AI Collaboration Loop</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Tone Matters</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            In business, <strong style={{ color: 'var(--accent-secondary)' }}>WHAT</strong> you say matters — but <strong style={{ color: 'var(--accent-primary)' }}>HOW</strong> you say it can matter even more.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '1.5rem', margin: '1.5rem 0 0 0' }}>
            The same message delivered in the wrong tone can lose a client, offend a colleague, or undermine your authority. AI can write perfectly — but only if you control the tone.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The 5 Professional Tones</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            ['Empathetic', 'Customer complaints, bad news.', 'Acknowledges feelings first. Uses warm, personal language.', '#ec4899'],
            ['Assertive', 'Enforcing policies, setting boundaries.', 'Clear, direct statements. Firm but not aggressive.', '#ef4444'],
            ['Diplomatic', 'Giving negative feedback, disagreeing.', 'Indirect but clear. Focuses on future, not blame.', '#8b5cf6'],
            ['Enthusiastic', 'Announcements, celebrations.', 'High energy, future-focused, inclusive language.', '#f59e0b'],
            ['Neutral', 'Factual reports, processes, SOPs.', 'No emotional language. Facts without interpretation.', '#94a3b8']
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: `4px solid ${item[3]}` }}>
              <h3 style={{ color: item[3], fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{item[0]}</h3>
              <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>Use for: {item[1]}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>{item[2]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tone Comparison: Same Facts, 5 Messages</h2>
        <p style={{ color: '#fff', textAlign: 'center', fontSize: '1.2rem', marginBottom: '1.5rem' }}><strong>Situation:</strong> Team missed the monthly accuracy target (94.8% vs 96% SLA).</p>
        
        <div style={{ overflowY: 'auto', maxHeight: '500px', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            ['Empathetic', 'I know this is disappointing... The accuracy came in at 94.8%, just below our target... I want you to know we have already implemented fixes.', '#ec4899'],
            ['Assertive', 'Our Q3 accuracy was 94.8%, below the 96% SLA... Corrective actions are in place. We expect full recovery in October.', '#ef4444'],
            ['Diplomatic', 'While we saw strong improvement in several areas, our accuracy of 94.8% presents an opportunity for improvement relative to our 96% standard...', '#8b5cf6'],
            ['Enthusiastic', 'Big news — despite a challenging migration, the team showed incredible resilience! While accuracy came in at 94.8%... September numbers already show recovery!', '#f59e0b'],
            ['Neutral', 'Monthly accuracy: 94.8%. SLA target: 96%. Variance: -1.2%. Contributing factor: system migration. Corrective actions implemented.', '#94a3b8']
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '1.5rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: `4px solid ${item[2]}` }}>
              <div style={{ color: item[2], fontSize: '1.2rem', fontWeight: 'bold' }}>{item[0]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontStyle: 'italic' }}>"{item[1]}"</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Audience Adaptation</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>
            The same information must be communicated DIFFERENTLY depending on who is reading it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h4 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>For the CEO</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Wants: Bottom line, business impact.<br/>Tone: Assertive/Neutral.<br/>Length: Very Short.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h4 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>For the Client (VP level)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Wants: Status, concerns addressed.<br/>Tone: Diplomatic/Empathetic.<br/>Length: Medium.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h4 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>For Your Team</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Wants: Context, recognition, what to do.<br/>Tone: Enthusiastic/Empathetic.<br/>Length: Conversational.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h4 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>For a New Hire</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Wants: Simple explanations, encouragement.<br/>Tone: Empathetic/Enthusiastic.<br/>Length: Detailed, simple.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Tone Wheel & Blended Tones</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '50%', width: '250px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto', border: '2px dashed var(--accent-primary)' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', color: '#ec4899', fontWeight: 'bold' }}>Empathetic</div>
              <div style={{ position: 'absolute', top: '45%', right: '5%', color: '#f59e0b', fontWeight: 'bold' }}>Enthusiastic</div>
              <div style={{ position: 'absolute', bottom: '15%', right: '15%', color: '#ef4444', fontWeight: 'bold' }}>Assertive</div>
              <div style={{ position: 'absolute', bottom: '15%', left: '15%', color: '#94a3b8', fontWeight: 'bold' }}>Neutral</div>
              <div style={{ position: 'absolute', top: '45%', left: '5%', color: '#8b5cf6', fontWeight: 'bold' }}>Diplomatic</div>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Most communications require a MIX of tones.</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#fff' }}>Client Complaint:</strong> Empathetic (opening) + Assertive (action plan).</li>
              <li><strong style={{ color: '#fff' }}>Performance Review:</strong> Diplomatic (areas of improvement) + Encouraging (strengths).</li>
              <li><strong style={{ color: '#fff' }}>Policy Change:</strong> Assertive (what is changing) + Empathetic (how it affects people).</li>
            </ul>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#60a5fa', marginTop: '1rem' }}>
              "Tone: Start empathetic (para 1). Shift to assertive (para 2). End diplomatic (para 3)."
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Human-AI Collaboration Loop</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
            NEVER: AI DRAFTS → Human SENDS.
          </p>
          <p style={{ color: '#10b981', fontSize: '1.4rem', fontWeight: 'bold', margin: 0 }}>
            ALWAYS: AI DRAFTS → Human REVIEWS → AI IMPROVES → Human SENDS.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
          {[
            ['1. AI DRAFTS', 'You give AI the prompt. AI generates first draft.', '#3b82f6'],
            ['2. REVIEWS', 'You read. Check facts, tone, context.', '#8b5cf6'],
            ['3. AI IMPROVES', 'Tell AI what to fix. "Make para 2 more empathetic."', '#ec4899'],
            ['4. SENDS', 'Final review. Add personal touches. Send.', '#10b981']
          ].map((item, i) => (
            <div key={i} style={{ width: '22%', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderTop: `4px solid ${item[2]}`, textAlign: 'center', zIndex: 1 }}>
              <div style={{ color: item[2], fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item[0]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{item[1]}</div>
            </div>
          ))}
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '2rem', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}></div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Personal Touch</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            The Collaboration Loop has one more secret. After AI produces a polished draft, <strong style={{ color: '#f59e0b' }}>add something only YOU can add.</strong>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '2', paddingLeft: '1.5rem', margin: 0 }}>
            <li><strong style={{ color: '#fff' }}>Reference a past conversation:</strong> "As we discussed over coffee..."</li>
            <li><strong style={{ color: '#fff' }}>A specific observation:</strong> "I noticed your team handled the migration beautifully..."</li>
            <li><strong style={{ color: '#fff' }}>Your authentic sign-off:</strong> Not AI's generic one.</li>
            <li><strong style={{ color: '#fff' }}>A genuine question:</strong> Shows you care about their response.</li>
          </ul>
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b', display: 'flex', alignItems: 'center' }}>
            <p style={{ color: '#f59e0b', fontSize: '1.3rem', fontWeight: 'bold', margin: 0, fontStyle: 'italic', textAlign: 'center' }}>
              These small touches separate 'AI-generated' (robotic) from 'AI-enhanced' (a better version of YOU).
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Prompt Engineering for Tone</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>1. Use Persona & Role Play</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Act as a seasoned HR Director delivering a company-wide update. Your tone should be authoritative but deeply empathetic and reassuring."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>2. Specify Vocabulary Limits</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Use simple, direct language (8th-grade reading level). Do NOT use corporate jargon, buzzwords, or overly complex metaphors."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>3. Control Pacing & Structure</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Use short sentences. Keep paragraphs under 3 lines. Use bullet points for the key action items so they are impossible to miss."
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Handling Sensitive Communications</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The "Do Not Automate" List</h3>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Some communications require extreme human judgment and should never be fully delegated to AI:</p>
          
          <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2', margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong style={{ color: '#fff' }}>Termination or Layoff Notices:</strong> Requires deep empathy and legal review.</li>
            <li><strong style={{ color: '#fff' }}>Crisis Responses:</strong> PR crises need nuanced, legally vetted language.</li>
            <li><strong style={{ color: '#fff' }}>Personal Apologies:</strong> If you made a major mistake, a generated apology feels hollow and insincere.</li>
          </ul>
          
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px', color: '#fca5a5', marginTop: '1.5rem' }}>
            <strong>Rule of Thumb:</strong> If the recipient would be deeply offended to learn AI wrote the message, write it yourself. Use AI only to outline or check for clarity.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tone Master Challenge</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-secondary)' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The Scenario:</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 0 2rem 0' }}>
            One of your best performers made a significant error on a client deliverable. The client noticed and complained. You need to write 3 prompts for:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '8px' }}>
              <span style={{ color: '#3b82f6', fontWeight: 'bold', marginRight: '1rem' }}>1. Client Email:</span>
              <span style={{ color: '#fff' }}>(Empathetic + Assertive blend)</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '8px' }}>
              <span style={{ color: '#8b5cf6', fontWeight: 'bold', marginRight: '1rem' }}>2. Private message to team member:</span>
              <span style={{ color: '#fff' }}>(Diplomatic + Empathetic blend)</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '8px' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', marginRight: '1rem' }}>3. Update to your manager:</span>
              <span style={{ color: '#fff' }}>(Neutral + Diplomatic blend)</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Level 2 Complete!</h2>
        
        <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🥈</div>
          <h3 style={{ color: '#fff', fontSize: '2rem', margin: '0 0 1rem 0' }}>Silver Badge: AI Practitioner</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '2rem' }}>You have mastered the skills.</p>
          
          <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '2', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <li>✅ AI Ecosystem Map</li>
            <li>✅ AI-First Thinking Reflex</li>
            <li>✅ Professional Prompting (GCCFVI)</li>
            <li>✅ 9 Advanced Techniques & Prompt Library</li>
            <li>✅ Tone Control & Collaboration Loop</li>
          </ul>
          
          <p style={{ color: 'var(--accent-primary)', fontSize: '1.4rem', fontWeight: 'bold', marginTop: '2rem' }}>
            Next: Level 3 — Master the Tools.
          </p>
        </div>
      </div>
    )
  }
];
