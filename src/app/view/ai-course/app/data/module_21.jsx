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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 21</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Department Workshops & Capstone</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Final Challenge</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Ultimate Challenge</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            This is where everything comes together. To earn your final certification, you must design and build a functional workflow for your actual department.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Path</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Path A: The Power Automate Flow</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Best for rigid, highly predictable, repetitive tasks that don't require AI text generation.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#fff' }}>
              <strong>Example:</strong> A flow that automatically saves all email attachments containing "Invoice" to a specific SharePoint folder and notifies the Finance Teams channel.
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Path B: The Copilot Agent</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Best for complex analysis, drafting, or interrogating unstructured data specific to your team.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#fff' }}>
              <strong>Example:</strong> An "HR Policy Agent" securely grounded to your Employee Handbook that can instantly answer questions about PTO, benefits, and remote work rules.
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', background: 'var(--glass-bg)', padding: '4rem', borderRadius: '32px', border: '2px solid #ef4444', maxWidth: '900px' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎓</div>
          <h2 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center', backgroundImage: 'linear-gradient(to right, #ef4444, #f97316)' }}>Course Complete!</h2>
          <h3 style={{ color: '#ef4444', fontSize: '2.5rem', margin: '0 0 2rem 0' }}>Platinum Badge: AI Builder</h3>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '16px', textAlign: 'left', marginBottom: '2rem' }}>
            <p style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 1.5rem 0', fontWeight: 'bold', textAlign: 'center' }}>You have evolved through 4 levels of mastery:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>🥉 <strong style={{ color: '#fff' }}>Level 1:</strong> AI Fundamentals & Literacy</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>🥈 <strong style={{ color: '#fff' }}>Level 2:</strong> Prompt Engineering Mastery</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>🥇 <strong style={{ color: '#fff' }}>Level 3:</strong> Deep Tool Integration</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>💎 <strong style={{ color: '#fff' }}>Level 4:</strong> Apply & Build</div>
            </div>
          </div>
          
          <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            You are no longer just a user of AI. You are a builder of the future.
          </p>
        </div>
      </div>
    )
  }
];
