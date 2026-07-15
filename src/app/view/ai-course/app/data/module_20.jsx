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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 20</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Building Copilot Agents</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Deep Dive: Creating Custom Assistants</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>What is a Copilot Agent?</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Standard Copilot is a general assistant. A <strong>Copilot Agent</strong> is a custom, specialized assistant built for a specific process, team, or role.
          </p>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '12px', marginTop: '2rem', border: '1px solid #3b82f6' }}>
            <p style={{ color: '#3b82f6', fontSize: '1.3rem', margin: 0 }}>
              Example: Instead of telling your team to "Ask Copilot about HR policies," you build an "HR Benefits Agent" that ONLY looks at your employee handbook and knows exactly how to answer with your company's tone.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Architecture of an Agent</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', flex: 1, borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0', textAlign: 'center' }}>1. Instructions</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center' }}>The "Brain". The master prompt defining the agent's persona, rules, and boundaries.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', flex: 1, borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0', textAlign: 'center' }}>2. Knowledge</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center' }}>The "Memory". Specific SharePoint sites, folders, or documents the agent uses to answer.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', flex: 1, borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.5rem', margin: '0 0 1rem 0', textAlign: 'center' }}>3. Actions</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center' }}>The "Hands". Connections to external APIs (like Jira, Salesforce) to actually execute tasks.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Step 1: Writing the Instructions</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
          <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            The instructions field is the most critical part of building an Agent. You must explicitly define what it SHOULD do, and what it MUST NOT do.
          </p>
          
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <strong>[Role]</strong> You are the 'Q3 Campaign Copywriter Agent'.<br/><br/>
            <strong>[Task]</strong> Your job is to generate ad copy, email drafts, and social media posts based ONLY on the uploaded Q3 Brand Guidelines.<br/><br/>
            <strong>[Rules]</strong><br/>
            1. Never use the word "revolutionary" or "synergy".<br/>
            2. If asked about pricing, state "Please check the Pricing Guide" — do not guess.<br/>
            3. Always format your output with clear headings and bullet points.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Step 2: Connecting Knowledge</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Scoping the Data</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>Agents only know what you connect them to. You can link:</p>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Entire SharePoint Sites</li>
              <li>Specific OneDrive Folders</li>
              <li>Individual PDF/Word Documents</li>
              <li>Public Web pages (if enabled)</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The "Grounding" Rule</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
              Always check the box that says <strong>"Only use uploaded knowledge."</strong> This strictly prevents hallucinations by forcing the Agent to say "I don't know" if the answer isn't in your files, rather than making something up from the open internet.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Publishing & Governance</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Publishing Level</th>
                <th style={{ padding: '1rem' }}>Who can use it?</th>
                <th style={{ padding: '1rem' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Just Me</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Only the creator</td>
                <td style={{ padding: '1rem' }}>Personal workflows, testing, prototyping.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Specific People</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Selected emails/teams</td>
                <td style={{ padding: '1rem' }}>Department-specific agents (e.g., HR only).</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Organization</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Everyone in the tenant</td>
                <td style={{ padding: '1rem' }}>Company-wide tools (e.g., IT Helpdesk Agent).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: 'center', color: '#f59e0b', fontSize: '1.2rem', fontStyle: 'italic' }}>
          Note: Users can only retrieve data from the Agent that they already have SharePoint permissions to see. The Agent respects existing access controls.
        </p>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>Agents scale your expertise:</strong> Build it once, let your whole team use it.</li>
            <li><strong>Instructions are everything:</strong> Explicitly define rules and boundaries.</li>
            <li><strong>Ground your Agents:</strong> Force them to use only uploaded knowledge to prevent hallucinations.</li>
            <li><strong>Start small:</strong> Build a "Just Me" agent to test before publishing to the Organization.</li>
          </ol>
        </div>
      </div>
    )
  }
];
