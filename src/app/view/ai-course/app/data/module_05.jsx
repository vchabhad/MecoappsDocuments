import React from 'react';

export const slides = [
  {
    id: 1,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '1.2rem', marginBottom: '2rem', border: '1px solid #3b82f6' }}>
            Level 1: Understand AI
          </div>
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 5</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>AI Safety, Ethics & Responsible Use</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Rules of the Road</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Enterprise AI vs Free AI</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>
            <strong>The Simple Rule:</strong><br/>
            <span style={{ color: '#10b981' }}>Company pays for it = probably safe for company data.</span><br/>
            <span style={{ color: '#ef4444' }}>Free tool = assume NOT safe for company data.</span>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Enterprise AI</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Examples:</strong> Copilot, ChatGPT Enterprise</li>
              <li>Your data is <strong>NOT</strong> used to train AI models.</li>
              <li>Stored in your company's secure environment.</li>
              <li>SOC2, HIPAA, GDPR certified.</li>
            </ul>
          </div>
          
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Free AI</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Examples:</strong> Free ChatGPT, random AI sites</li>
              <li>Your data <strong>MAY</strong> be used to train AI models.</li>
              <li>Stored on the AI company's servers.</li>
              <li>No enterprise compliance guarantees.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The 5 Absolute Rules</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. NEVER Put Restricted Data in Free AI', 'No PII, health, financial, or legal data in free tools. Ever.', '#ef4444'],
            ['2. ALWAYS Verify Before Sending', 'Never send AI output to a client or colleague without human review.', '#fbbf24'],
            ['3. NEVER Make AI the Sole Decision-Maker for People', 'AI suggests, human decides (hiring, performance, etc.).', '#3b82f6'],
            ['4. ALWAYS Disclose When Required', 'Follow company policy and client requirements on disclosing AI use.', '#8b5cf6'],
            ['5. ALWAYS Report Suspicious Behavior', 'Report prompt injections, bias, or weird outputs to IT.', '#10b981']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem 2rem', borderRadius: '12px', alignItems: 'center', borderLeft: `6px solid ${item[2]}` }}>
              <div style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', width: '350px' }}>{item[0]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', flex: 1 }}>{item[1]}</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Data Classification</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>🟢 GREEN: Public Data</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Already publicly available info.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}><strong>Safe in:</strong> Any AI tool (Free or Enterprise).</p>
          </div>

          <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #fbbf24' }}>
            <h3 style={{ color: '#fbbf24', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>🟡 YELLOW: Internal Data</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Company info not meant for public (e.g., SOPs).</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}><strong>Safe in:</strong> Enterprise AI ONLY (Free only if stripped of ID).</p>
          </div>

          <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #f97316' }}>
            <h3 style={{ color: '#f97316', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>🟠 ORANGE: Confidential Data</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Sensitive business info (contracts, financials).</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}><strong>Safe in:</strong> Enterprise AI WITH CARE. NEVER Free.</p>
          </div>

          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>🔴 RED: Restricted Data</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Regulated/Legal (SSNs, medical, passwords).</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}><strong>Safe in:</strong> Check with compliance FIRST. NEVER Free.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Ethics and Bias</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', margin: 0, lineHeight: '1.6' }}>
            AI learns from historical data. If historical data contains bias, AI will reproduce and AMPLIFY that bias.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            ['Gender Bias', 'AI associating certain roles with certain genders.'],
            ['Racial/Ethnic Bias', 'AI performing differently or assuming defaults based on race.'],
            ['Cultural Bias', 'AI defaulting to Western/English-language perspectives.'],
            ['Confirmation Bias', 'AI reinforcing existing organizational patterns instead of challenging them.']
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{item[0]}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>{item[1]}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#10b981', fontSize: '1.3rem', fontWeight: 'bold' }}>
            Use the "Swap Test": Mentally swap the person's name, gender, or ethnicity. Does the output change unfairly?
          </p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Deepfakes & Misinformation</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.5rem', marginBottom: '1rem' }}>What is a Deepfake?</h3>
            <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', margin: 0 }}>
              AI-generated fake images, audio, or video of real people. They can make it look and sound like someone said or did something they never did. 
              (e.g., A scammer clones the CEO's voice to request a wire transfer).
            </p>
          </div>
          
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2.5rem', borderRadius: '16px', border: '1px solid #3b82f6', textAlign: 'center' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.6rem', marginBottom: '1rem' }}>The Second Channel Rule</h3>
            <p style={{ color: '#fff', fontSize: '1.4rem', lineHeight: '1.6', margin: 0 }}>
              If you receive an unusual, urgent request via one channel (email, phone, video), 
              <strong> VERIFY it through a DIFFERENT channel.</strong>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem', fontStyle: 'italic' }}>
              "CEO calls asking for a wire transfer? Email the CEO on their known address to confirm."
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Interactive Exercises</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Green/Yellow/Red Challenge</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'center' }}>
              How would you classify these?
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Summarizing a Wikipedia article? <strong style={{ color: '#10b981' }}>(Green)</strong></li>
              <li>An internal SOP on password resets? <strong style={{ color: '#fbbf24' }}>(Yellow)</strong></li>
              <li>A confidential client contract? <strong style={{ color: '#f97316' }}>(Orange)</strong></li>
              <li>A client's medical records? <strong style={{ color: '#ef4444' }}>(Red)</strong></li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #fbbf24' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Ethics Debate</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              <strong>The Efficient Shortcut:</strong><br/>
              A colleague uses free ChatGPT to process insurance claims 3x faster, pasting names and amounts. Quality goes up, client is happy.
            </p>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
              <p style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textAlign: 'center' }}>
                Should you report this? Why or why not?
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>When NOT to Use AI</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['Final Legal or Compliance Decisions', 'AI cannot be legally liable. You are.'],
            ['Sole Hiring/Firing Decisions', 'High bias risk and legal liability. AI assists, human decides.'],
            ['Sensitive Emotional Communications', 'AI mimics empathy but lacks it. Deliver bad news yourself.'],
            ['Client Communications Without Review', 'Quality and tone must match your professional standards.'],
            ['Anything Involving Child Data', 'Extra regulatory protections apply.'],
            ['When You Cannot Verify the Output', 'If you lack the expertise to check if AI is right, don\'t use it.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: '#ef4444', fontSize: '1.3rem', fontWeight: 'bold', width: '300px' }}>{item[0]}</div>
              <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>Enterprise AI is for work. Free AI is for public data.</strong></li>
            <li><strong>The 5 Rules:</strong> No PII in free tools, always verify, never sole decision-maker, disclose, report.</li>
            <li><strong>Classify Data:</strong> Green, Yellow, Orange, Red.</li>
            <li><strong>AI amplifies bias.</strong> Use the Swap Test.</li>
            <li><strong>The Second Channel Rule</strong> defeats deepfakes.</li>
            <li><strong>When in doubt, use the higher safety level.</strong></li>
          </ol>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Level 1 Complete!</h2>
        
        <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🥉</div>
          <h3 style={{ color: '#fff', fontSize: '2rem', margin: '0 0 1rem 0' }}>Bronze Badge: AI Aware</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '2rem' }}>You understand the fundamentals of AI.</p>
          
          <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '2', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <li>✅ Core AI Terminology</li>
            <li>✅ Prompt Injection & Security</li>
            <li>✅ Hallucinations & Limits</li>
            <li>✅ AI Safety & Ethics</li>
          </ul>
          
          <p style={{ color: 'var(--accent-primary)', fontSize: '1.4rem', fontWeight: 'bold', marginTop: '2rem' }}>
            Next: Level 2 — Master the Skills.
          </p>
        </div>
      </div>
    )
  }
];
