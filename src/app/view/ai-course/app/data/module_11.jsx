import React from 'react';

export const slides = [
  {
    id: 1,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '1.2rem', marginBottom: '2rem', border: '1px solid #3b82f6' }}>
            Level 3: Master the Tools
          </div>
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 11</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>ChatGPT Deep Dive & AI Tools Comparison</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Unlock the Entire Toolkit</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Going Beyond the Basics</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Most people use ChatGPT like a search bar — type a question, get an answer, done. 
            That is like buying a Swiss Army knife and only using the toothpick.
          </p>
          <p style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', marginTop: '1.5rem', margin: '1.5rem 0 0 0' }}>
            Today we unlock the ENTIRE toolkit: Projects, Memory, Custom GPTs, Canvas, and Deep Research.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects — The Game-Changer</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>A dedicated workspace grouping conversations with shared context and files.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Without Projects</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Every new chat starts from zero. You re-explain your role, standards, and documents every time.</p>
          </div>
          
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>With Projects</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Upload files once, set instructions once. Every chat inside has full context automatically.</p>
          </div>
        </div>
        
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>What to Upload:</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>SOPs, Templates, Style guides, Data files, Reference docs, Previous deliverables.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Memory & Custom Instructions</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Memory: AI That Knows You</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Remember facts about you across ALL conversations.</p>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Your role & industry</li>
              <li>Your tone & format preferences</li>
              <li>Your common tasks & tools</li>
              <li>Your pet peeves (e.g., no buzzwords)</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Custom Instructions</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Your Default Briefing for every chat.</p>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#8b5cf6' }}>Box 1:</strong> What should ChatGPT know about you? (Context)</li>
              <li><strong style={{ color: '#8b5cf6' }}>Box 2:</strong> How should ChatGPT respond? (Format rules)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Canvas & Deep Research</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #ec4899', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#ec4899', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Canvas: Side-by-Side Editing</h3>
              <p style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>A split-screen workspace where AI-generated content appears in an editable document alongside the chat.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Use for: Long documents, reports needing iterative refinement, content to export to Word.</p>
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Deep Research: AI Investigator</h3>
              <p style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>Spends minutes doing thorough, multi-source research. Reads dozens of web pages and synthesizes information.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Use for: New topics, meeting prep, industry trends, competitor analysis (Takes 2-5 mins vs 5 secs).</p>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Perplexity Deep Dive</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>
            If ChatGPT is your creative assistant, Perplexity is your research analyst.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Key Features</h4>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Source Citations:</strong> Clickable numbered sources for every claim.</li>
              <li><strong>Focus Modes:</strong> Academic, Writing, Math, Video.</li>
              <li><strong>Follow-ups:</strong> AI suggests related questions.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#ef4444', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>When to Use</h4>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>"What are current BPO trends?" → <strong>Yes</strong> (Needs facts)</li>
              <li>"Draft a creative email" → <strong>No</strong> (ChatGPT better)</li>
              <li>"Is this regulation still in effect?" → <strong>Yes</strong></li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Head-to-Head Comparison</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Tool</th>
                <th style={{ padding: '1rem' }}>Superpower</th>
                <th style={{ padding: '1rem' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#10b981' }}>ChatGPT</td>
                <td style={{ padding: '1rem' }}>Ecosystem (Projects, Canvas), creativity</td>
                <td style={{ padding: '1rem' }}>Creative work, complex projects</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#8b5cf6' }}>Claude</td>
                <td style={{ padding: '1rem' }}>Careful analysis, less hallucination</td>
                <td style={{ padding: '1rem' }}>Contracts, long docs, careful writing</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>Gemini</td>
                <td style={{ padding: '1rem' }}>Google integration, massive context</td>
                <td style={{ padding: '1rem' }}>Google Workspace, huge documents</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#f59e0b' }}>Perplexity</td>
                <td style={{ padding: '1rem' }}>Verified research with citations</td>
                <td style={{ padding: '1rem' }}>Research, fact-checking, current events</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#0ea5e9' }}>Copilot Chat</td>
                <td style={{ padding: '1rem' }}>Your M365 data access</td>
                <td style={{ padding: '1rem' }}>Info across Outlook/Teams/SharePoint</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects vs. Custom GPTs</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Projects (The Workspace)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Best for: Personal workflows, ongoing deep work.</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Private to you (or your team workspace)</li>
              <li>Groups multiple chats under one context</li>
              <li>Perfect for writing a book, planning a Q3 campaign, or coding a specific app</li>
              <li>Easy to update files on the fly</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Custom GPTs (The App)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Best for: Sharing a specific capability with others.</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Sharable via a link or published to store</li>
              <li>Single-purpose interface (e.g., "The Legal Jargon Translator")</li>
              <li>Users interact with it, but can't see the underlying files</li>
              <li>Can connect to external APIs (like Zapier)</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Advanced Prompting: Chain of Thought</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>"Think Step-by-Step"</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
              Instead of asking for the final answer immediately, force the AI to show its work. This reduces hallucinations.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '1rem' }}>
              "Before writing the strategy, first analyze our top 3 competitors. Then, define our value prop. Finally, draft the strategy."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The CREATE Framework</h3>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Context:</strong> "I am a sales director..."</li>
              <li><strong>Request:</strong> "Draft a 3-part email..."</li>
              <li><strong>Explanation:</strong> "The goal is to get a demo..."</li>
              <li><strong>Action params:</strong> "Keep it under 100 words."</li>
              <li><strong>Tone/Style:</strong> "Professional, urgent."</li>
              <li><strong>Extra:</strong> "Output as a table."</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tool-Specific Master Prompts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>ChatGPT (Creative Synthesis)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Act as a creative director. Review these 3 competitor ads [upload docs] and brainstorm 5 completely original, out-of-the-box angles for our new software launch."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Claude (Deep Analysis)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Analyze this 50-page legal contract. Extract every clause that imposes a financial penalty on our company, and rank them from highest risk to lowest risk."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Perplexity (Verified Research)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "What is the current market size for AI productivity tools in the enterprise sector as of 2024? Provide 3 specific statistics from authoritative sources and include citations."
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On & Challenge</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Setup Memory & Instructions', 'Go to Settings → Personalization. Set up Memory and Custom Instructions. Verify with a new chat.'],
            ['2. Create a Project', 'Create a Project for a recurring task. Add instructions, upload a file, and test it.'],
            ['3. Tool Master Race (Challenge)', 'Produce a 1-page brief on a trend in 5 mins. Use Perplexity for stats, ChatGPT to draft, Copilot for internal files.']
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
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>ChatGPT is an ecosystem</strong> — Projects, Memory, Canvas, Deep Research.</li>
            <li><strong>Projects</strong> are a huge unlock (upload files once, context forever).</li>
            <li><strong>Advanced Prompting</strong> — Use Chain-of-Thought and the CREATE framework for better logic.</li>
            <li><strong>Perplexity</strong> is essential for verified, cited research.</li>
            <li><strong>No single tool is best at everything</strong> — use the right tool for the right task.</li>
            <li><strong>Combine tools:</strong> Research in Perplexity, draft in ChatGPT, verify, and send.</li>
          </ol>
        </div>
      </div>
    )
  }
];
