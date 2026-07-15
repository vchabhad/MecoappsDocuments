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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 8</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Prompt Engineering Part 1</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The GCCFVI Framework</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Prompt Engineering Matters</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '2.5rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', lineHeight: '1.6', margin: 0 }}>
            The AI you used yesterday and the AI you use today are the SAME AI. <br/>
            The ONLY thing that changes is <strong style={{ color: 'var(--accent-secondary)' }}>HOW YOU ASK</strong>.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444', textAlign: 'center' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Bad Prompt</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>20% usable output</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0.5rem 0' }}>Rewrite 4 times</p>
            <p style={{ color: '#ef4444', fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>15 minutes total</p>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #10b981', textAlign: 'center' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Good Prompt</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>80%+ usable output</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0.5rem 0' }}>Minor edit</p>
            <p style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>3 minutes total</p>
          </div>
        </div>
        <p style={{ color: '#fbbf24', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          Writing 30 prompts a day? Good prompts save you ~6 hours daily.
        </p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>What is GCCFVI?</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>A 6-element framework for writing professional prompts.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            ['G', 'GOAL', 'What do you want AI to produce?', '#3b82f6'],
            ['C', 'CONTEXT', 'What background info does AI need?', '#8b5cf6'],
            ['C', 'CONSTRAINTS', 'What are the boundaries and rules?', '#ec4899'],
            ['F', 'FORMAT', 'What should the output look like?', '#f59e0b'],
            ['V', 'VERIFICATION', 'How should AI check its own work?', '#10b981'],
            ['I', 'ITERATION', 'What should AI do if you ask for changes?', '#06b6d4']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'var(--glass-bg)', padding: '1.2rem 2rem', borderRadius: '12px', borderLeft: `4px solid ${item[3]}` }}>
              <div style={{ fontSize: '2rem', color: item[3], fontWeight: 'bold', width: '30px' }}>{item[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 'bold', margin: '0 0 0.25rem 0' }}>{item[1]}</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{item[2]}</div>
              </div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Restaurant Analogy</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>
            <strong style={{ color: '#ef4444' }}>Bad order:</strong> "I want food." → You get... something. Probably not what you wanted.
          </p>
        </div>

        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
          <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1.5rem 0', textAlign: 'center' }}>Good order using GCCFVI:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', paddingLeft: '1rem' }}>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong style={{ color: '#10b981' }}>Goal:</strong> "I want a main course"</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong style={{ color: '#10b981' }}>Context:</strong> "I am vegetarian, allergic to nuts"</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong style={{ color: '#10b981' }}>Constraints:</strong> "Under $25, not too spicy"</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong style={{ color: '#10b981' }}>Format:</strong> "Served on a plate, not a bowl"</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong style={{ color: '#10b981' }}>Verification:</strong> "Can you confirm there are no nuts?"</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong style={{ color: '#10b981' }}>Iteration:</strong> "If you are out of that, suggest something similar"</div>
          </div>
        </div>
        <p style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '1.5rem' }}>
          Same restaurant. Same chef. Wildly different results based on HOW you order.
        </p>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Element 1: GOAL</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            Be specific about the END RESULT, not just the topic.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ color: '#ef4444', fontSize: '1.3rem', fontWeight: 'bold' }}>"Write about customer service"</div>
            <div style={{ color: '#10b981', fontSize: '1.2rem' }}>"Write a training guide for new customer support agents on handling billing complaints"</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ color: '#ef4444', fontSize: '1.3rem', fontWeight: 'bold' }}>"Help with Excel"</div>
            <div style={{ color: '#10b981', fontSize: '1.2rem' }}>"Write an Excel VLOOKUP formula that matches employee IDs in Column A with their department names..."</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ color: '#ef4444', fontSize: '1.3rem', fontWeight: 'bold' }}>"Email about the delay"</div>
            <div style={{ color: '#10b981', fontSize: '1.2rem' }}>"Draft an apology email to client Sarah Chen explaining that the Q3 deliverables will be 3 days late..."</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Element 2: CONTEXT</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#8b5cf6', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            AI only knows what you TELL it. Give it the same context you would give a smart new colleague.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            ['Who you are', 'Role, department, industry'],
            ['Who the audience is', 'Who will read/receive this'],
            ['The situation', 'What happened, what is going on'],
            ['The history', 'Previous interactions, decisions'],
            ['The standards', 'Rules, SOPs, guidelines that apply'],
            ['The tone relationship', 'How formal, how familiar'],
            ['The stakes', 'What happens if this goes wrong']
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
              <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{item[0]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Element 3: CONSTRAINTS</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#ec4899', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            Tell AI what it CANNOT do, what to AVOID, and what limits to respect.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Common Constraints</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Length:</strong> Under 200 words, max 1 page</li>
              <li><strong>Tone:</strong> Not overly apologetic, avoid casual words</li>
              <li><strong>Content:</strong> Do NOT mention competitor by name</li>
              <li><strong>Confidentiality:</strong> Do NOT include specific dollar amounts</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
            <h4 style={{ color: '#ef4444', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Without constraints, AI will:</h4>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Write too long (thinks longer is better)</li>
              <li>Use overly formal/generic language</li>
              <li>Include unwanted information</li>
              <li>Admit things you shouldn't admit</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Element 4: FORMAT</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#f59e0b', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            Tell AI EXACTLY how to structure the output.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Format 1 (Email)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>"Format as a friendly, company-wide email. 3 paragraphs: what changed, why, what to do next. Under 150 words."</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Format 2 (Manager FAQ)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>"Format as a Q&A with the 10 most likely questions managers will ask, with clear, concise answers."</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Format 3 (Presentation Slide)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>"Format as 5 slide titles with 3 bullet points each. Each bullet under 10 words. Simple language."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Elements 5 & 6: VERIFICATION & ITERATION</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>V: Verification (Reduce Hallucination)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Include a verification step IN your prompt.</p>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Fact flagging:</strong> "Mark any statement you are less than 90% sure about with [VERIFY]"</li>
              <li><strong>Boundary check:</strong> "If you don't have enough info to answer accurately, say so"</li>
              <li><strong>Assumption listing:</strong> "List any assumptions you made in generating this response"</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #06b6d4' }}>
            <h3 style={{ color: '#06b6d4', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>I: Iteration (Save Back-and-Forth)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Tell AI how to handle your feedback in advance.</p>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>"If I say 'shorter,' reduce length by 30% without losing key points"</li>
              <li>"If I say 'more formal,' increase formality one level"</li>
              <li>"Generate 3 versions: conservative, balanced, and bold"</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Putting It All Together: Client Apology</h2>
        
        <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '16px', border: '1px solid #334155', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: '1.6', overflowX: 'auto' }}>
          <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>GOAL:</span> Write a professional apology email to a client about delayed Q3 reports.<br/><br/>
          
          <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>CONTEXT:</span> I am an Account Manager. Client is Acme Healthcare (Sarah Chen, VP Ops). 3-year strong relationship. Q3 accuracy reports due Oct 5, now Oct 8. Delay caused by system migration (now complete). First late delivery in 8 months.<br/><br/>
          
          <span style={{ color: '#ec4899', fontWeight: 'bold' }}>CONSTRAINTS:</span><br/>
          - Under 200 words<br/>
          - Do NOT admit legal liability or use the word "fault"<br/>
          - Do NOT promise this will never happen again<br/><br/>
          
          <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>FORMAT:</span> Professional email. 3 paragraphs (acknowledge delay, explain cause/resolution, next steps). End with specific offer (meeting or call).<br/><br/>
          
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>VERIFICATION:</span> Flag if any claim might need fact-checking. List assumptions.<br/><br/>
          
          <span style={{ color: '#06b6d4', fontWeight: 'bold' }}>ITERATION:</span> If I say "warmer," make tone more personal.
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Live Demo: Bad to Great</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
            <h4 style={{ color: '#ef4444', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Level 1 — Beginner</h4>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0, fontFamily: 'monospace' }}>"Write a report about team performance."</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0.5rem 0 0 0' }}>Result: Generic. Useless. Could be about any team anywhere.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #fbbf24' }}>
            <h4 style={{ color: '#fbbf24', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Level 2 — Intermediate</h4>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0, fontFamily: 'monospace' }}>"Write a report about my customer support team's Q3 performance. We had 94.8% accuracy and handled 15,000 tickets."</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0.5rem 0 0 0' }}>Result: Better (has numbers). But format, tone, and length are wrong.</p>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h4 style={{ color: '#10b981', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Level 3 — GCCFVI</h4>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0, fontFamily: 'monospace' }}>GOAL + CONTEXT (team size, clients, SLA target) + CONSTRAINTS (under 500 words, no blame) + FORMAT (Exec summary, table, narrative) + VERIFICATION.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0.5rem 0 0 0' }}>Result: Night and day difference. Ready to use immediately.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On & Prompt Showdown</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Homework Rewrite', 'Take a homework prompt from yesterday. Rewrite it using GCCFVI. Compare outputs.'],
            ['2. The Missing Element', 'Identify which GCCFVI element is missing from 5 example prompts, and add it.'],
            ['3. Prompt Showdown', 'You have 5 minutes to write a GCCFVI prompt for a complex client situation. We vote on the best output!']
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
    id: 13,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>Prompt quality determines output quality</strong> — same AI, different result.</li>
            <li><strong>GCCFVI:</strong> Goal, Context, Constraints, Format, Verification, Iteration.</li>
            <li><strong>Context is king</strong> — AI assumes nothing. Tell it everything relevant.</li>
            <li><strong>Constraints are guardrails</strong> — keep AI in the lane you want.</li>
            <li><strong>Format shapes output</strong> — specify exactly what the final product looks like.</li>
            <li><strong>Not every prompt needs all 6</strong> — simple tasks need 2-3; complex need all 6.</li>
            <li><strong>Save your best prompts</strong> to build a reusable Prompt Library.</li>
          </ol>
        </div>
      </div>
    )
  }
];
