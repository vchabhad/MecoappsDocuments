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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 19</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Workflow Design & Power Automate</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>No-Code Process Optimization</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Not Everything Needs an AI Agent</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Before you build a complex AI to solve a problem, ask yourself: <br/>"Can a simple, rigid rule do this perfectly?"
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            If the task is highly predictable (e.g., saving an attachment, forwarding an email based on a subject line), you don't need AI. You need a <strong>No-Code Automation</strong>.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The SPOT Test</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Letter</th>
                <th style={{ padding: '1rem' }}>Question</th>
                <th style={{ padding: '1rem' }}>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>S — Same</td>
                <td style={{ padding: '1rem' }}>Do you do it the exact same way every time?</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>High automation potential</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>P — Predictable</td>
                <td style={{ padding: '1rem' }}>Is the input predictable and structured?</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Highly feasible</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>O — Often</td>
                <td style={{ padding: '1rem' }}>Do you do it more than 3 times per week?</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Significant cumulative savings</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>T — Time-consuming</td>
                <td style={{ padding: '1rem' }}>Does it take more than 5 minutes each time?</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Massive ROI</td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'center', color: '#f59e0b', fontSize: '1.2rem', marginTop: '1.5rem', fontWeight: 'bold' }}>
            If you answer YES to all 4, build a Power Automate flow immediately.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Triggers & Actions</h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', background: 'var(--glass-bg)', borderRadius: '16px' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ background: '#3b82f6', color: '#fff', padding: '1.5rem', borderRadius: '12px', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              TRIGGER
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>"When this happens..."</p>
            <p style={{ color: '#fff', fontSize: '1rem', fontStyle: 'italic' }}>(e.g., An email arrives with subject 'Invoice')</p>
          </div>
          
          <div style={{ fontSize: '3rem', color: '#10b981', padding: '0 2rem' }}>→</div>
          
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ background: '#10b981', color: '#fff', padding: '1.5rem', borderRadius: '12px', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              ACTION 1
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>"Do this..."</p>
            <p style={{ color: '#fff', fontSize: '1rem', fontStyle: 'italic' }}>(e.g., Save attachment to SharePoint)</p>
          </div>
          
          <div style={{ fontSize: '3rem', color: '#10b981', padding: '0 2rem' }}>→</div>
          
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ background: '#8b5cf6', color: '#fff', padding: '1.5rem', borderRadius: '12px', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              ACTION 2
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>"Then do this..."</p>
            <p style={{ color: '#fff', fontSize: '1rem', fontStyle: 'italic' }}>(e.g., Post a Teams message to Finance)</p>
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
            <li><strong>Apply the SPOT Test:</strong> Only automate workflows that are Same, Predictable, Often, and Time-consuming.</li>
            <li><strong>Start Simple:</strong> Use Power Automate for simple Trigger-Action workflows. Don't use AI for tasks that can be solved with a simple rule.</li>
            <li><strong>Microsoft Power Automate:</strong> It is already included in your M365 subscription. No coding required.</li>
          </ol>
        </div>
      </div>
    )
  }
];
