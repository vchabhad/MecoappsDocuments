import React from 'react';

export const slides = [
  {
    id: 1,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Course Overview</h1>
          <h2 className="text-large" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Corporate AI Proficiency Course</h2>
        </div>
        
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--accent-primary)', maxWidth: '900px', marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.5rem', lineHeight: '1.6' }}>
            A <strong>hands-on training program</strong> that transforms employees who have never used AI (or use it poorly) into confident, proficient AI users who can apply artificial intelligence to every aspect of their daily work.
          </p>
          <p style={{ margin: '2rem 0 0 0', color: 'var(--text-secondary)', fontSize: '1.3rem' }}>
            <strong>Zero math. Zero statistics. Zero coding.</strong> Just practical mastery of AI for office work.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Who & Why</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Who Is This Course For?</h3>
            <ul style={{ color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.6', paddingLeft: '1.5rem', margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Technical background:</strong> None required. If you can use email, you can take this course.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Age:</strong> All ages. We use analogies, not jargon.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Department:</strong> Suitable for all tracks (Support, HR, Finance, Management, etc.).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Experience:</strong> Beginners learn from scratch; daily users discover hidden features.</li>
              <li><strong>Fear of AI:</strong> Addressed directly with evidence, not dismissed.</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>The Problem We're Solving</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <strong style={{ color: '#ef4444', display: 'block', marginBottom: '1rem', fontSize: '1.3rem' }}>Before (The Problem)</strong>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6' }}>
                  <li>Doing tasks manually</li>
                  <li>Vague prompts = bad output</li>
                  <li>AI errors reach clients</li>
                  <li>Data safety risks</li>
                </ul>
              </div>
              <div>
                <strong style={{ color: '#22c55e', display: 'block', marginBottom: '1rem', fontSize: '1.3rem' }}>After (The Outcome)</strong>
                <ul style={{ color: '#fff', fontSize: '1.2rem', paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6' }}>
                  <li>Automating repetitive work</li>
                  <li>Professional, usable output</li>
                  <li>Automatic verification habits</li>
                  <li>Full compliance & safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>What You Will Learn</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', borderLeft: '6px solid #3b82f6', maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '2rem', textAlign: 'center', lineHeight: '1.6' }}>
            This course is designed to take you from a complete beginner to an AI power user by focusing on practical, day-to-day office workflows.
          </p>
          <ul style={{ color: 'var(--text-primary)', fontSize: '1.3rem', lineHeight: '1.8', paddingLeft: '2rem', margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}>How AI actually works behind the scenes (without the technical jargon).</li>
            <li style={{ marginBottom: '1rem' }}>How to write professional, highly effective prompts that get exactly what you want on the first try.</li>
            <li style={{ marginBottom: '1rem' }}>How to use the correct AI tools (ChatGPT, Copilot, Perplexity) for the correct tasks.</li>
            <li style={{ marginBottom: '1rem' }}>How to automate repetitive tasks like drafting emails, summarizing meetings, and analyzing data.</li>
            <li>How to identify AI hallucinations and safely use AI without risking company data.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Course Structure: 4 Levels, 20 Modules</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Level 1: Understand AI (Modules 1-5)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>The fundamentals: what AI is, how different types of AI work, and how to use it safely.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['01: Intro to AI', '02: Types of AI', '03: Inside the Machine', '04: Hallucinations & Verification', '05: AI Safety & Ethics'].map(m => (
                <span key={m} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '1rem' }}>{m}</span>
              ))}
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Level 2: Master the Skills (Modules 6-10)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>The ecosystem and how to communicate: AI-first thinking, choosing tools, and advanced prompting.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['06: The AI Ecosystem', '07: AI-First Thinking', '08: Prompt Eng 1', '09: Prompt Eng 2', '10: AI Communication'].map(m => (
                <span key={m} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '1rem' }}>{m}</span>
              ))}
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Level 3: Master the Tools (Modules 11-17)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Deep dives into specific tools: Copilot, ChatGPT, Image Generation, and Custom AI databases.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['11: ChatGPT Advanced', '12: Image Generation', '13: Copilot (Email/Teams)', '14: Copilot (Excel)', '15: Copilot (Word/PPT)', '16: NotebookLM & RAG', '17: Specialized Tools'].map(m => (
                <span key={m} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '1rem' }}>{m}</span>
              ))}
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Level 4: Apply & Optimize (Modules 18-20)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Transforming actual workflows: Workflow redesign, automation, and capstone projects.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['18: Workflow Redesign', '19: Automation with AI', '20: AI in Your Department'].map(m => (
                <span key={m} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '1rem' }}>{m}</span>
              ))}
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tools Covered</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #3b82f6' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>Primary Tools (Taught Deeply)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '1.2rem' }}>
              <div><strong>Microsoft Copilot:</strong> Inside Outlook, Teams, Excel, Word, PPT</div>
              <div><strong>ChatGPT:</strong> Projects, Memory, Custom GPTs, Voice, Deep Research</div>
              <div><strong>Perplexity:</strong> Research AI with verified source citations</div>
              <div><strong>NotebookLM:</strong> Zero-hallucination Q&A from company documents</div>
              <div><strong>DALL-E / Designer / Canva:</strong> AI image and graphic generation</div>
            </div>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #8b5cf6' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>Secondary Tools (Taught as Alternatives)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '1.2rem' }}>
              <div><strong>Claude:</strong> Careful analysis, contracts</div>
              <div><strong>Gemini:</strong> Google Workspace integration</div>
              <div><strong>Grok:</strong> Real-time social media data</div>
              <div><strong>DeepSeek:</strong> Cost-effective reasoning</div>
            </div>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #ec4899' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>Department-Specific Tools (Awareness)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              <div><strong>Support:</strong> Zendesk AI, Freshdesk, Intercom</div>
              <div><strong>Sales & CRM:</strong> Salesforce Einstein, HubSpot AI</div>
              <div><strong>HR & Rec:</strong> Workday AI, HireVue</div>
              <div><strong>Design:</strong> Canva AI, Adobe Firefly, Midjourney</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Detailed Expected Outcomes</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>Individual Level Improvements</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '1.2rem' }}>
              <div><strong>Email handling:</strong> 5-10 min → 1-2 min</div>
              <div><strong>Information lookup:</strong> 15-30 min → Instant</div>
              <div><strong>Report creation:</strong> 2-4 hours → 30-60 min</div>
              <div><strong>Meeting follow-up:</strong> 15-30 min → 2-5 min</div>
              <div><strong>Document review:</strong> Varies → 50-70% reduction</div>
            </div>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>Team Level Impact</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Shared Prompt Library:</strong> Tested, reusable prompts across departments.</li>
              <li style={{ marginBottom: '1rem' }}><strong>NotebookLM Knowledge Base:</strong> Instant SOP/policy answers for all team members.</li>
              <li><strong>Custom GPTs & Automations:</strong> Department-specific AI assistants and workflows.</li>
            </ul>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#22c55e', fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}>Organization Level Impact</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '1.2rem' }}>
              <div><strong style={{ color: '#fff' }}>Productivity:</strong> Massive time savings per employee, every week.</div>
              <div><strong style={{ color: '#fff' }}>Error reduction:</strong> Fewer errors reaching clients.</div>
              <div><strong style={{ color: '#fff' }}>Compliance:</strong> Zero data breaches from AI misuse.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
