import React, { useState } from 'react';

export const slides = [
  {
    id: 1,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '1.2rem', marginBottom: '2rem', border: '1px solid #3b82f6' }}>
            Level 2: Master the Skills
          </div>
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 9</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Prompt Engineering Part 2</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Advanced Techniques & The Prompt Library</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Building on GCCFVI</h2>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2.5rem', borderRadius: '16px', textAlign: 'center', width: '300px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>GCCFVI</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>The Recipe / The Foundation</p>
          </div>
          <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>+</div>
          <div style={{ background: 'var(--glass-bg)', padding: '2.5rem', borderRadius: '16px', textAlign: 'center', width: '300px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>9 Techniques</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>The Chef's Secret Ingredients</p>
          </div>
        </div>

        <p style={{ color: '#fbbf24', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          These advanced techniques take your prompts from good to exceptional.
        </p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>1. Role Prompting</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>
            Tell AI to take on a specific professional role. Changes vocabulary, perspective, and expertise level.
          </p>
          <div style={{ marginTop: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px', display: 'inline-block' }}>
            <code style={{ color: '#60a5fa', fontSize: '1.2rem' }}>"Act as a [role] with [X years] of experience..."</code>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Senior Compliance Officer</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Focuses on regulatory language, risk, and policy.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Friendly Support Agent</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Focuses on warm language, empathy, and resolution.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>CFO Presenting to Board</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Focuses on financial metrics, strategy, and executive tone.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Technical Writer</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Precise, step-by-step, no jargon.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>2. Step-by-Step & 3. Few-Shot</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>2. Step-by-Step (Chain of Thought)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Ask AI to work through a problem step-by-step before answering.</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#fff' }}>
              "Think through this step by step: 1. Pros 2. Cons 3. Alternatives 4. Recommendation"
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>3. Few-Shot (Examples)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Give AI examples of the output you want. AI learns the PATTERN.</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#fff' }}>
              "Here are 2 examples of the style I want:<br/>
              EXAMPLE 1: [input] -&gt; [desired output]<br/>
              Now apply this to: [my input]"
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>4. Formats & 5. Boundaries</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>4. Format Specification</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Specify EXACT structure, headers, and layout.</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#fff', fontSize: '0.9rem' }}>
              "Format as:<br/>
              ## [Section Title]<br/>
              **Summary:** [1 sentence]<br/>
              **Priority:** [High/Medium/Low]<br/>
              **Deadline:** [Date]"
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>5. Boundaries</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Restrict what AI can reference (reduces hallucinations).</p>
            <ul style={{ color: '#fff', fontSize: '1.1rem', margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>"Answer ONLY from the document I uploaded."</li>
              <li>"If not in text, say 'Information not found'."</li>
              <li>"Only reference events after Jan 2024."</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>6, 7, 8: Advanced Workflows</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>6. Gradual Building</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>Build output piece by piece (Outline -&gt; Summary -&gt; Content) to review and adjust at each stage.</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9' }}>
            <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>7. Self-Check</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>Ask AI to critique its own output before finalizing. "Are all facts verifiable? Did you follow constraints?"</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #14b8a6' }}>
            <h3 style={{ color: '#14b8a6', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>8. Prompt Chaining</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>Output of Prompt A = Input of Prompt B. <br/> (e.g. Summarize notes -&gt; Write Email from Summary -&gt; Create Slides from Email)</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>9. Mega-Prompts</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            A single, comprehensive prompt that combines GCCFVI + multiple techniques for complex, recurring tasks. Write once, reuse forever.
          </p>
        </div>

        <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', fontFamily: 'monospace', fontSize: '1rem', color: '#cbd5e1', overflowX: 'auto', lineHeight: '1.5' }}>
          <strong style={{color: '#60a5fa'}}>ACT AS</strong> a senior operations analyst (10 yrs exp).<br/>
          <strong style={{color: '#60a5fa'}}>TASK:</strong> Create Monthly Report for Client ABC.<br/>
          <strong style={{color: '#60a5fa'}}>CONTEXT:</strong> [Client Details, October metrics vs SLA...]<br/>
          <strong style={{color: '#60a5fa'}}>AUDIENCE:</strong> VP Ops. Data-driven, concise.<br/>
          <strong style={{color: '#60a5fa'}}>STRUCTURE:</strong> 1. Exec Summary 2. Scorecard Table 3. Highlights...<br/>
          <strong style={{color: '#60a5fa'}}>CONSTRAINTS:</strong> Under 500 words. No jargon. No defensive language.<br/>
          <strong style={{color: '#60a5fa'}}>VERIFICATION:</strong> Cross-check numbers. Flag assumptions.<br/>
          <strong style={{color: '#60a5fa'}}>SELF-CHECK:</strong> Verify SLA math is correct before presenting.
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>10. Custom Instructions (System Prompts)</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            Instead of giving instructions in every prompt, you can set <strong style={{ color: '#10b981' }}>permanent background rules</strong> (Context Injection) that the AI will follow globally.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h4 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>What to include:</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Your Role:</strong> "I am a Marketing Manager at a B2B SaaS company."</li>
              <li><strong>Formatting Rules:</strong> "Always output code in Markdown."</li>
              <li><strong>Tone Preferences:</strong> "Never use corporate jargon like 'synergy' or 'circle back'."</li>
              <li><strong>Audience:</strong> "My main audience is small business owners."</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h4 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Where to find it:</h4>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>ChatGPT:</strong> Settings &rarr; Personalization &rarr; Custom Instructions</li>
              <li><strong>Claude:</strong> Projects / System Instructions</li>
              <li><strong>Custom GPTs:</strong> The "Instructions" box when building your own GPT.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The 12 AI Personas</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Ask AI to review the SAME document from different professional perspectives.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', overflowY: 'auto', maxHeight: '500px', paddingRight: '1rem' }}>
          {[
            ['The Compliance Officer', 'Regulatory risks, policy violations'],
            ['The Client', 'Unclear language, concerns they might have'],
            ['The New Hire', 'Confusing jargon, assumed knowledge'],
            ['The Skeptic', 'Weak arguments, logical gaps'],
            ['The Editor', 'Grammar, clarity, tone consistency'],
            ['The Data Analyst', 'Number accuracy, statistical claims'],
            ['The Lawyer', 'Legal risk, liability language'],
            ['The CEO', 'Business impact, strategic alignment'],
            ['The Competitor', 'Weaknesses a competitor would exploit'],
            ['The Devil\'s Advocate', 'Every counterargument, every risk'],
            ['The Empathy Checker', 'Emotional impact, sensitivity'],
            ['The Simplifier', 'Unnecessary complexity, jargon']
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-primary)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{item[0]}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Prompt Library</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Why Build One?</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Copy-paste instead of starting from scratch</li>
              <li>Consistent, team-wide high quality</li>
              <li>Knowledge stays when employees leave</li>
              <li>Experiments happen once, everyone benefits</li>
            </ul>
          </div>

          <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '16px', border: '1px solid #334155', color: '#cbd5e1' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Library Card Template</h3>
            <p style={{ margin: '0 0 0.5rem 0' }}><strong>Name:</strong> Client Apology Email</p>
            <p style={{ margin: '0 0 0.5rem 0' }}><strong>Category:</strong> Email</p>
            <p style={{ margin: '0 0 0.5rem 0' }}><strong>Prompt:</strong> [Full GCCFVI text]</p>
            <p style={{ margin: '0 0 0.5rem 0' }}><strong>Variables:</strong> [Client], [SLA%]</p>
            <p style={{ margin: '0 0 0.5rem 0' }}><strong>Tips:</strong> Add specific numbers.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On & Prompt Showdown 2.0</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Persona Review', 'Review an email using 3 different personas. What does each catch?'],
            ['2. Prompt Chaining', 'Chain: Notes -&gt; Summarize -&gt; Action Items -&gt; Follow-up Email.'],
            ['3. Build a Mega-Prompt', 'Pick a complex recurring task and write a complete mega-prompt for it.'],
            ['4. Showdown 2.0', 'Task: New Employee Onboarding Checklist. Must use GCCFVI + at least 2 advanced techniques!']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', fontWeight: 'bold', width: '250px' }}>{item[0]}</div>
              <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.3rem' }}>
            <li><strong>Role prompting</strong> is the highest-impact single technique.</li>
            <li><strong>Examples beat descriptions</strong> — show AI what good looks like.</li>
            <li><strong>Prompt chaining</strong> transforms source material across multiple deliverables.</li>
            <li><strong>Mega-prompts</strong> save massive time on recurring complex tasks.</li>
            <li><strong>12 personas</strong> catch 12 types of problems in important documents.</li>
            <li><strong>Boundaries prevent hallucination</strong> — keep AI grounded.</li>
            <li><strong>The Prompt Library</strong> is your team's most valuable knowledge asset.</li>
          </ol>
        </div>
      </div>
    )
  }
];
