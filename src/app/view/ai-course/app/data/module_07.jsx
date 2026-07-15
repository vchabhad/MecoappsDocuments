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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 7</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>AI-First Thinking</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Mindset That Changes Everything</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Mindset Shift</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Stage 1: AI-Unaware</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>You do everything manually because you do not know AI exists or can help.</p>
          </div>
          <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #fbbf24' }}>
            <h3 style={{ color: '#fbbf24', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Stage 2: AI-Sometimes</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>You occasionally use it, usually when you remember. "Oh wait, I could have used AI for that."</p>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '16px', borderLeft: '6px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Stage 3: AI-First</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>Before ANY task, you automatically ask: <strong>"Can AI help with this?"</strong> It is a reflex.</p>
          </div>
        </div>
        <p style={{ color: '#10b981', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          This single mindset shift is worth more than learning any individual tool.
        </p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The 3 Modes of AI Use</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6', alignItems: 'center' }}>
            <div style={{ width: '150px' }}>
              <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: 0 }}>1. ASSIST</h3>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>AI does part, you do the rest.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Ex: AI drafts an email, you edit and send. (Most daily tasks)</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #8b5cf6', alignItems: 'center' }}>
            <div style={{ width: '150px' }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.5rem', margin: 0 }}>2. ACCELERATE</h3>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>AI analyzes, you decide.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Ex: AI finds patterns in 1000 reviews, you decide what actions to take.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #ec4899', alignItems: 'center' }}>
            <div style={{ width: '150px' }}>
              <h3 style={{ color: '#ec4899', fontSize: '1.5rem', margin: 0 }}>3. AUTOMATE</h3>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>AI runs it, you supervise.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Ex: AI auto-sorts incoming tickets based on rules you set.</p>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The AI-First Decision Framework</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>Before starting ANY task, ask these 4 questions in order:</p>
        <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '24px', border: '1px solid #334155', width: '90%', margin: '0 auto' }}>
          <div style={{ fontSize: '1.4rem', lineHeight: '2' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>1. CAN AI HELP?</span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>Is any part of this task something AI could assist with? If no, do manually.</span>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>2. CAN AI DO THIS?</span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>Entirely (e.g. summarize report) or partly (e.g. draft angry client response)?</span>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>3. CAN AI AUTOMATE THIS?</span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>Do I do this repeatedly? Could it run without me?</span>
            </div>

            <div>
              <span style={{ color: '#ec4899', fontWeight: 'bold' }}>4. SHOULD AI DO THIS?</span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>Check safety rules, human judgment needs, or high liability.</span>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The SPOT Framework</h2>
        <p style={{ color: '#fff', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>How to identify tasks for AUTOMATION (Question 3):</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['S', 'Same', 'Are the steps the same every time?'],
            ['P', 'Predictable', 'Do the input and output follow a known pattern?'],
            ['O', 'Often', 'Does it happen daily, weekly, or at regular intervals?'],
            ['T', 'Time-Consuming', 'Does it take more than 5 minutes each time?']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem 2rem', borderRadius: '12px', alignItems: 'center', borderLeft: '4px solid #10b981' }}>
              <div style={{ fontSize: '2.5rem', color: '#10b981', fontWeight: 'bold', width: '50px', textAlign: 'center' }}>{item[0]}</div>
              <div style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', width: '200px' }}>{item[1]}</div>
              <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', flex: 1 }}>{item[2]}</div>
            </div>
          ))}
        </div>
        <p style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          If a task scores YES on 3 or 4 of these, it is a strong automation candidate.
        </p>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Before Timer Method</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', margin: 0 }}>
            People believe statistics, but they REALLY believe their OWN experience.<br/>
            <strong>Step 1:</strong> Time the task manually. <strong>Step 2:</strong> Time the task with AI. <strong>Step 3:</strong> Compare.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Manual: Email Response</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Read thread: 3 min</li>
              <li>Draft response: 7 min</li>
              <li>Review & Send: 2 min</li>
              <li style={{ color: '#fff', fontWeight: 'bold', marginTop: '0.5rem' }}>Total: 12 minutes</li>
            </ul>
          </div>
          
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>AI-First: Email Response</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, paddingLeft: '1.5rem' }}>
              <li>AI summarizes thread: 10 sec</li>
              <li>AI drafts, you edit: 1 min</li>
              <li>Review & Send: 2 min</li>
              <li style={{ color: '#fff', fontWeight: 'bold', marginTop: '0.5rem' }}>Total: ~3 minutes</li>
            </ul>
          </div>
        </div>
        <p style={{ color: '#fbbf24', fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          Savings: ~9 minutes per email. 20 emails = 3 hours saved daily.
        </p>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Cumulative Impact Calculator</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.2rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Task</th>
                <th style={{ padding: '1rem' }}>Daily Savings</th>
                <th style={{ padding: '1rem' }}>Weekly</th>
                <th style={{ padding: '1rem' }}>Yearly</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem' }}>Emails (20/day)</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>3 hours</td>
                <td style={{ padding: '1rem' }}>15 hours</td>
                <td style={{ padding: '1rem' }}>720 hours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem' }}>Meeting follow-ups (3/day)</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>1 hour</td>
                <td style={{ padding: '1rem' }}>5 hours</td>
                <td style={{ padding: '1rem' }}>240 hours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem' }}>Document review (2/day)</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>30 min</td>
                <td style={{ padding: '1rem' }}>2.5 hours</td>
                <td style={{ padding: '1rem' }}>120 hours</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>TOTAL</td>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>~4.5 hrs/day</td>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>~24 hrs/week</td>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>1,152 hrs/year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          1,152 hours = 144 working days = <span style={{ color: '#ec4899' }}>More than 6 MONTHS</span> of full-time work for one person.
        </p>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Live Demo: Workflow Transformation</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The Challenge</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0, fontStyle: 'italic' }}>
            Process a complex, 3-paragraph client complaint email. Summarize it, draft a professional response with timeline, and create an internal action plan.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444', textAlign: 'center' }}>
            <h4 style={{ color: '#ef4444', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Manual Approach</h4>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>~30 Minutes</p>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #10b981', textAlign: 'center' }}>
            <h4 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>AI-First Approach</h4>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>~5 Minutes</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On & Challenge</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Before Timer', 'Pick a real email you need to respond to. Time it manually, then time it with AI.'],
            ['2. SPOT Analysis', 'Take 5 tasks from your Waste Diary. Apply the SPOT framework. Which are candidates?'],
            ['3. 5-Min Challenge', 'You have 5 mins to process a simulated client complaint (summary, response, action plan) using AI.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', fontWeight: 'bold', width: '200px' }}>{item[0]}</div>
              <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>AI-First Thinking is a reflex</strong> — automatically asking "Can AI help?" before every task.</li>
            <li><strong>The 3 Modes:</strong> Assist, Accelerate, Automate.</li>
            <li><strong>The 4 Questions:</strong> Can AI help? Can it do it? Can it automate it? Should it?</li>
            <li><strong>The SPOT framework</strong> identifies automation targets (Same, Predictable, Often, Time-consuming).</li>
            <li><strong>The Before Timer</strong> is the ultimate proof of time savings.</li>
            <li><strong>Small savings multiply:</strong> 10 mins saved 20 times = 3+ hours daily.</li>
            <li><strong>AI-First does NOT mean AI-Only</strong> — you always review and decide.</li>
          </ol>
        </div>
      </div>
    )
  }
];
