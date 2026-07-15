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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 1</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Introduction to AI</h2>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Playground (30 Minutes)</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #fbbf24' }}>
            <h3 style={{ color: '#fbbf24', fontSize: '1.5rem', marginBottom: '1rem' }}>The Only Rule: There Are No Rules</h3>
            <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', margin: 0 }}>
              "For the next 30 minutes, ask AI anything you want. Test it. Break it. Have fun. See what it can do and what it can't. There is no wrong way to do this."
            </p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>10 Things to Try If You're Stuck:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.2rem' }}>
              <div>1. Ask it to write a joke about your department</div>
              <div>2. Ask it to explain your job to a 5-year-old</div>
              <div>3. Ask it to solve a math problem</div>
              <div>4. Ask it what the weather is right now</div>
              <div>5. Ask it to write a poem about Excel</div>
              <div>6. Paste an email and ask it to improve it</div>
              <div>7. Ask it to translate something</div>
              <div>8. Ask it to create a to-do list for your week</div>
              <div>9. Ask it who the CEO of your company is</div>
              <div>10. Try to make it say something wrong</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Big Picture</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', borderLeft: '6px solid #3b82f6', maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic' }}>
            "AI is the biggest technology shift since the internet. Not since smartphones. Not since cloud computing. Since the INTERNET. And just like the internet changed every job in the 2000s, AI is changing every job right now."
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ flex: 1, padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <h3 style={{ color: '#ef4444', fontSize: '1.3rem', marginBottom: '1rem' }}>Without AI...</h3>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, paddingLeft: '1.5rem' }}>
                <li>Spend 10 mins on emails others finish in 1</li>
                <li>Manually search 50-page SOPs</li>
                <li>Build reports from scratch</li>
              </ul>
            </div>
            
            <div style={{ flex: 1, padding: '1.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '1rem' }}>With AI...</h3>
              <ul style={{ color: '#fff', fontSize: '1.1rem', margin: 0, paddingLeft: '1.5rem' }}>
                <li>Finish first with better quality</li>
                <li>Get instant, cited answers</li>
                <li>Review AI-drafted reports instantly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Introduction to AI</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.5rem' }}>
            <strong>AI is a prediction machine.</strong> Every AI tool is fundamentally a machine trained on billions of documents to PREDICT the most likely response.
          </p>
        </div>
        
        <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>5 Ways to Think About AI</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>📱 The Giant Autocomplete</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Predicts entire paragraphs the way your phone predicts the next word.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>🦜 The Pattern Parrot</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Memorized all conversation patterns but doesn't actually understand the meaning.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>👨‍🍳 The Statistical Chef</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Combines patterns from millions of recipes. Usually amazing, sometimes nonsense.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>👔 The New Employee</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Read every SOP but has never done the job. Sounds experienced, but lacks real practice.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', gridColumn: 'span 2' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>📚 The World's Biggest Library</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>A librarian that finds patterns across every document ever written in 2 seconds.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Understanding Intelligence Types</h2>
        
        <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>AI vs. SI vs. AGI</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '16px', borderTop: '4px solid #94a3b8' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Artificial (AI)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.5' }}>What we use today. Mimics intelligence to perform specific tasks. "Artificial" like vanilla flavoring.</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#3b82f6', marginBottom: '0.5rem' }}>Synthetic (SI)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.5' }}>Built to be genuinely intelligent. "Synthetic" like a lab-created diamond. (In development).</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '16px', borderTop: '4px solid #8b5cf6' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '0.5rem' }}>General (AGI)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.5' }}>Theoretical future AI that can learn/perform ANY human intellectual task. We do not have this yet.</p>
          </div>
        </div>
        
        <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>The 5 Key Principles</h3>
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-primary)' }}>
          <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>AI PREDICTS, it does not THINK:</strong> Calculates probable next word, not the truth.</li>
            <li><strong>AI MIMICS, it does not UNDERSTAND:</strong> Reproduces human communication without comprehending meaning.</li>
            <li><strong>AI is a TOOL, not a REPLACEMENT:</strong> Requires human direction.</li>
            <li><strong>AI output is a DRAFT, never a FINAL:</strong> Always review, verify, and approve.</li>
            <li><strong>Better INPUT = Better OUTPUT:</strong> Quality depends entirely on how you ask.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>What AI is NOT (12 Myths)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['A robot that thinks', 'A pattern-matching prediction engine'],
            ['Always correct', 'Frequently wrong — and confidently wrong'],
            ['Going to replace everyone', 'Going to change HOW everyone works'],
            ['One single technology', 'Many different technologies under one name'],
            ['Understands what it writes', 'Predicts what SOUNDS right'],
            ['Has opinions and feelings', 'Has neither — it mimics patterns'],
            ['A magic black box', 'Learnable, controllable, improvable via prompts'],
            ['Self-aware or conscious', 'No awareness whatsoever; it is just software'],
            ['All-knowing', 'Has a cutoff date, does not know private info without search'],
            ['Dangerous by nature', 'Dangerous only through misuse; safe with training'],
            ['Only for tech people', 'Usable by ANYONE who can type'],
            ['A fad that will pass', 'Fastest-adopted tech in history (100M users in 2mo)']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: 'var(--glass-bg)', padding: '1.2rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ flex: '1', color: '#ef4444', fontWeight: 'bold', fontSize: '1.1rem' }}>❌ Myth: {item[0]}</div>
              <div style={{ flex: '2', color: '#22c55e', fontSize: '1.1rem' }}>✅ Reality: {item[1]}</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Will AI Replace Me?</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center', border: '1px solid var(--accent-primary)' }}>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
            AI will NOT replace you. But a person who uses AI WILL replace a person who does not.
          </p>
        </div>
        
        <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>How AI Changes Your Job</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          {[
            ['Automates the boring parts', 'Manual data entry becomes AI extraction.', 'More interesting'],
            ['Speeds up existing work', '10 min emails become 2 min drafts.', 'More productive'],
            ['Improves quality', 'Catches errors humans easily miss.', 'More reliable'],
            ['Enables new capabilities', 'Instant translation, sentiment analysis.', 'More valuable']
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <strong style={{ color: '#3b82f6', fontSize: '1.3rem', width: '250px' }}>{item[0]}</strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', flex: 1 }}>{item[1]}</span>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>➔ {item[2]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>What AI CAN Do (15 Capabilities)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            ['Summarize', 'Condense long content', '50-email thread to 5 bullets'],
            ['Draft', 'First versions of writing', 'Client complaint response'],
            ['Analyze', 'Find patterns in data', 'Trends in Q3 tickets'],
            ['Extract', 'Pull specific info', 'Names/dates from contract'],
            ['Classify', 'Sort into categories', '200 tickets by department'],
            ['Translate', 'Convert languages', 'English to Spanish'],
            ['Rewrite', 'Change audience/tone', 'Tech report to exec summary'],
            ['Compare', 'Find differences', 'Document v1 vs v2'],
            ['Generate Ideas', 'Brainstorm options', '15 ideas for onboarding'],
            ['Create Templates', 'Build reusable formats', 'Client onboarding checklist'],
            ['Q&A from Docs', 'Answer from specifics', 'SOP for escalation'],
            ['Write Formulas', 'Excel from English', 'Calculate percent change'],
            ['Verify & Check', 'Review for errors', 'Missing fields in invoice'],
            ['Teach & Explain', 'Explain simply', 'HIPAA for beginners'],
            ['Create Images', 'Visuals from text', 'Banner for Q3 meeting']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', background: 'var(--glass-bg)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6', alignItems: 'center' }}>
              <strong style={{ color: '#fff', fontSize: '1.2rem', width: '150px' }}>{item[0]}</strong>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', flex: 1 }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>What AI CANNOT Do (10 Limitations)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['Be held accountable', 'If you send it, YOU are legally responsible. AI has no liability.'],
            ['Feel genuine empathy', 'It mimics empathetic language, but lacks human connection.'],
            ['Guarantee accuracy', 'It predicts "likely," not "true." Always verify facts.'],
            ['Know company politics', 'It doesn\'t know internal dynamics (e.g. who doesn\'t get along).'],
            ['Make judgment calls', 'Cannot weigh unwritten factors like timing or gut feeling.'],
            ['Replace relationships', 'Clients want to talk to a PERSON for important moments.'],
            ['Access real-time info', 'Without web search, it only knows historical data.'],
            ['Keep secrets perfectly', 'Free AI tools may use inputs for future training.'],
            ['Understand unstated context', 'Only knows what you tell it. Cannot read between the lines.'],
            ['Innovate from experience', 'It recombines patterns; has never experienced real frustration.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: 'rgba(239, 68, 68, 0.1)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <strong style={{ color: '#ef4444', fontSize: '1.2rem', width: '250px' }}>❌ Cannot: {item[0]}</strong>
              <span style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>{item[1]}</span>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Live Demo & Hands-On Practice</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Live Demos</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Success:</strong> Summarizing a 20-email thread instantly.</li>
              <li><strong>Failure:</strong> Asking an internal company question to demonstrate hallucinations.</li>
              <li><strong>Power of Prompting:</strong> A vague prompt vs a detailed prompt.</li>
            </ul>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Hands-on Practice</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Summarize a real document or email thread.</li>
              <li>Verify AI accuracy (ask a specific factual question and google it).</li>
              <li>Draft a professional email with context.</li>
              <li>Explain a complex topic to a 5-year old.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #22c55e' }}>
            <h3 style={{ color: '#22c55e', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>The AI Speed Round Challenge</h3>
            <p style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.2rem', lineHeight: '1.6' }}>
              1. Summarize a text into 3 bullets. <br/>
              2. Rewrite a rude message to formal polite. <br/>
              3. Generate 5 creative ideas. <br/>
              <em style={{ color: '#22c55e', display: 'block', marginTop: '1rem' }}>Fastest AND highest quality wins!</em>
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Common Questions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['Is AI reading my mind?', 'No. It only responds to what you explicitly type or share.'],
            ['Can my boss see what I ask?', 'On free accounts: no. On enterprise accounts: your IT admin may have access.'],
            ['Will AI learn from my questions?', 'Free tools MAY use data for training. Enterprise tools DO NOT.'],
            ['Is ChatGPT the only AI?', 'No. Copilot, Gemini, Claude, and Perplexity are all major tools.'],
            ['Can AI access my email/files?', 'Only if connected natively (like Microsoft Copilot) or if you upload them.'],
            ['What if AI gives wrong info?', 'You are responsible. Always review and verify output before using it.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ flex: '1', color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold' }}>❓ {item[0]}</div>
              <div style={{ flex: '2', color: '#fff', fontSize: '1.2rem' }}>{item[1]}</div>
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
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>AI is a prediction machine</strong> — not a thinking robot, not always right, not magic.</li>
            <li><strong>AI predicts what SOUNDS right</strong>, not what IS right — that is why it hallucinates.</li>
            <li><strong>AI will NOT replace you</strong> — but people who use AI WILL outperform those who do not.</li>
            <li><strong>AI CANNOT be held accountable</strong> — you are always responsible for output you use.</li>
            <li><strong>Better prompts = better output</strong> — how you ask matters enormously.</li>
            <li><strong>AI output is always a DRAFT</strong> — review everything before sending.</li>
            <li><strong>Your expertise + AI speed = unstoppable</strong>.</li>
          </ol>
        </div>
      </div>
    )
  }
];
