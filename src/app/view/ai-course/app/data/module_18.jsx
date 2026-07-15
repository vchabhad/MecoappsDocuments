import React from 'react';

export const slides = [
  {
    id: 1,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '1.2rem', marginBottom: '2rem', border: '1px solid #f59e0b' }}>
            Level 4: Apply & Build
          </div>
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 18</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>The AI-First Mindset & Culture</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Foundation for Automation</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Paradigm Shift</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            You are no longer just an employee executing tasks. With AI, you are now a <strong>manager</strong> of an infinite, digital team.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            Before we build workflows or agents, we must fix the mindset. AI won't replace you. A person using AI will replace a person who doesn't. Your goal is to delegate the tedious 80% to AI so you can focus on the high-value 20%.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Overcoming the "Bad Answer" Bias</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', flex: 1, borderTop: '4px solid #f59e0b' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>😒</div>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 1rem 0', textAlign: 'center' }}>The Skeptic's Trap</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center' }}>
              "I tried using Copilot once to write a report. The answer was generic, so I stopped using it."
            </p>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', flex: 1, borderTop: '4px solid #10b981' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>💡</div>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0', textAlign: 'center' }}>The AI-First Truth</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center' }}>
              Garbage in, garbage out. If you write a 1-sentence prompt, you get a 1-sentence thought process.
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem', marginTop: '2rem' }}>
          <strong>Rule of Thumb:</strong> If a human intern would fail the task with the instructions you gave, the AI will fail too.
        </p>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Creating an AI Culture: The Prompt Library</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 1.5rem 0' }}>Stop Reinventing the Wheel</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            When someone engineers a mega-prompt that saves 3 hours, it shouldn't die in their chat history. It must be shared.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', width: '30%' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📁</div>
              <div style={{ color: '#f59e0b', fontWeight: 'bold', marginBottom: '0.5rem' }}>SharePoint / Wiki</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>A centralized, searchable doc of team prompts.</div>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', width: '30%' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💬</div>
              <div style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '0.5rem' }}>Teams Channel</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>A dedicated #AI-Wins channel for quick sharing.</div>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', width: '30%' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
              <div style={{ color: '#10b981', fontWeight: 'bold', marginBottom: '0.5rem' }}>Copilot Lab</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Publish prompts directly to your org's Copilot interface.</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>You are the Manager:</strong> Treat AI like a brilliant but junior intern who needs context.</li>
            <li><strong>Embrace the 80/20 Rule:</strong> Let AI do the heavy lifting so you can focus on strategy.</li>
            <li><strong>AI is a team sport:</strong> Build a culture where sharing prompts is rewarded.</li>
            <li><strong>Maintain a Prompt Library:</strong> Institutionalize your best AI workflows.</li>
          </ol>
        </div>
      </div>
    )
  }
];
