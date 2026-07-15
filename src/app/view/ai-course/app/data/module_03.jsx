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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 3</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Inside the Machine</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.5rem', marginTop: '1.5rem' }}>Context, Memory, Temperature & Multimodal</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Security & Governance Matters</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2.5rem', borderRadius: '16px', borderLeft: '6px solid #fbbf24', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Imagine hiring a brilliant new colleague who can write and analyze, but has some quirks:
          </p>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
            <li>They can only look at a <strong>fixed number of pages</strong> at once. Add too many and they forget the first ones.</li>
            <li>They have a built-in <strong>creativity dial</strong> — if you don't tell them where to set it, they guess.</li>
            <li>They start every morning with <strong>total amnesia</strong> unless you set up a way to remember you.</li>
          </ul>
          <p style={{ color: '#10b981', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: 0 }}>
            Today you learn how to manage these quirks so AI works exactly how YOU need it to.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tokens: How AI Reads Text</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>The Jigsaw Puzzle</h3>
            <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.6' }}>
              We read text word by word. AI breaks text into smaller pieces called <strong>tokens</strong>. Think of them as jigsaw puzzle pieces. Every piece costs money to process and takes up space.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
              <p style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.2rem' }}>
                <strong>Rule of Thumb:</strong><br/>
                1 word ≈ 1.3 tokens<br/>
                1 paragraph ≈ 75-100 tokens<br/>
                1 A4 page ≈ 500-750 tokens
              </p>
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Why Tokens Matter</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Limits:</strong> Every AI tool has a maximum number of tokens it can handle at once.</li>
              <li><strong>Cost:</strong> If your company pays per-use (API), every token costs money.</li>
              <li><strong>Language:</strong> English is very efficient. Languages like Hindi, Arabic, or Japanese often use 1.5x to 3x more tokens for the exact same meaning.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Context Window (AI's Desk)</h2>
        
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '16px', border: '1px solid #3b82f6', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.3rem', lineHeight: '1.6' }}>
            Imagine AI has a desk. Every message sent or received gets printed and put on the desk. 
            <strong> Once the desk is completely covered, the oldest papers fall off the edge and are gone forever.</strong>
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['Early conversation', 'AI remembers everything perfectly.', 'Papers fit comfortably on the desk.'],
            ['Mid conversation', 'AI starts occasionally forgetting.', 'Desk is getting crowded.'],
            ['Late conversation', 'AI ignores initial rules/formatting.', 'Your instructions fell off the desk.'],
            ['Very long chat', 'AI seems confused and repetitive.', 'Lost all original context.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.2rem 2rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold', width: '250px' }}>{item[0]}</div>
              <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>{item[1]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flex: 1, fontStyle: 'italic' }}>{item[2]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Managing the Context Window</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            ['Start new chats for new topics', 'Keeps the desk clean and focused.'],
            ['Put critical instructions at the top', 'First things on the desk are the last to fall off.'],
            ['Use Projects / Notebooks', 'Uploaded instructions get "pinned" and never fall off.'],
            ['Summarize mid-conversation', 'Refreshes AI memory by re-placing key info on the desk.'],
            ['Don\'t paste entire 40-page SOPs', 'Paste only the relevant sections to save desk space.'],
            ['Use clear section breaks', 'Helps AI mentally organize the desk (e.g., "--- NEW TOPIC ---").']
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem', margin: 0 }}>{item[0]}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0', fontSize: '1.1rem' }}>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Temperature: The Creativity Dial</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.3rem', lineHeight: '1.6' }}>
            Imagine a radio dial. At 0, it plays the exact same song perfectly every time. At 1, it improvises jazz. This is AI's <strong>temperature</strong>.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'center' }}>Low (Precise)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Consistent, factual, exact. Like a calculator.</p>
            <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Best For:</strong><br/>
            <span style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Data extraction, compliance, factual Q&A.</span>
          </div>
          
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'center' }}>Medium (Balanced)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Professional but natural. Like a news anchor.</p>
            <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Best For:</strong><br/>
            <span style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Emails, reports, SOPs, summaries.</span>
          </div>

          <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'center' }}>High (Creative)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Surprising, varied. Like a brainstorming session.</p>
            <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Best For:</strong><br/>
            <span style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Marketing ideas, brainstorming, exploration.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Memory: Making AI Remember You</h2>
        
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '2rem' }}>
          Stop explaining your role every morning. Use these 3 levels of persistent memory:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: 'bold', width: '250px' }}>1. Automatic Memory</div>
            <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>AI takes its own notes about you ("User prefers bullet points"). You can view and manage these in Settings.</div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ color: '#10b981', fontSize: '1.4rem', fontWeight: 'bold', width: '250px' }}>2. Custom Instructions</div>
            <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>A permanent briefing memo. Box 1: Who are you? Box 2: How should AI respond? (Applies to all new chats).</div>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ color: '#8b5cf6', fontSize: '1.4rem', fontWeight: 'bold', width: '250px' }}>3. Projects / Workspaces</div>
            <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>A dedicated client folder. Upload SOPs, templates, and rules that apply ONLY inside that specific project.</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Grounding: Checking Real Sources</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.3rem', lineHeight: '1.6' }}>
            <strong>Option A:</strong> Answer from memory (fast, but might be outdated or hallucinated).<br/>
            <strong>Option B:</strong> Go to the library, look it up, and cite the source. <span style={{ color: '#10b981' }}>This is Grounding.</span>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Use Grounding When...</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>You need current facts or statistics.</li>
              <li>You are researching a company/competitor.</li>
              <li>You need to verify a claim.</li>
              <li>You want cited sources for a report.</li>
            </ul>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #94a3b8' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Skip Grounding When...</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Brainstorming ideas.</li>
              <li>Rewriting or reformatting text.</li>
              <li>Summarizing a document you just provided.</li>
              <li>Translating or adjusting tone.</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On Practice</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Live Demos</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Context Limit:</strong> PINEAPPLE CHECK falling off the desk.</li>
              <li><strong>Temperature:</strong> Same task, Low vs High prompt instructions side-by-side.</li>
              <li><strong>Memory:</strong> Setting up Custom Instructions for a BPO QA role.</li>
            </ul>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Your Tasks</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Write a "mid-conversation summary" to refresh an old chat.</li>
              <li>Write a High Temp and Low Temp prompt for a Wellness email.</li>
              <li>Set up your own Custom Instructions and test them.</li>
            </ul>
          </div>
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
            <li><strong>AI reads in tokens</strong>, not words. Limits matter.</li>
            <li><strong>The Context Window is AI's desk.</strong> When it gets too full, old instructions fall off and are forgotten.</li>
            <li><strong>Control Temperature with words.</strong> Prompt for "precision" (low) or "creativity" (high).</li>
            <li><strong>Use Custom Instructions or Projects</strong> so you don't have to explain your role every single day.</li>
            <li><strong>Use Grounding</strong> (search or docs) whenever facts matter.</li>
          </ol>
        </div>
      </div>
    )
  }
];
