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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 6</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>The AI Ecosystem</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Every Tool, Mapped and Compared</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Tool Selection Matters</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>
            Right now, most people do ONE of two things:
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔨</div>
            <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>Use ChatGPT for EVERYTHING — even when another tool is better.</p>
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🙈</div>
            <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>Use NO AI tools — because they do not know what exists.</p>
          </div>
        </div>
        <p style={{ color: '#10b981', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', marginTop: '2rem' }}>
          Today, you get the complete map. No more wasting time on the wrong tool.
        </p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>General-Purpose AI</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>The "Swiss Army knives" — they do many things well.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            ['ChatGPT (OpenAI)', 'Creative writing, coding, versatility. Ecosystem: Custom GPTs, Memory.', '#10b981'],
            ['Claude (Anthropic)', 'Long documents, contracts, careful analysis. Less hallucination.', '#d97757'],
            ['Gemini (Google)', 'Native Google Workspace integration. Massive 1M+ context window.', '#3b82f6'],
            ['Copilot Chat (Microsoft)', 'Searches your M365 emails, files, and Teams. Enterprise data ready.', '#0284c7'],
            ['Grok (xAI)', 'Real-time social media data (X/Twitter). Unfiltered.', '#fff'],
            ['DeepSeek', 'Cost-effective reasoning, math, and coding.', '#3b82f6']
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '16px', borderLeft: `4px solid ${item[2]}` }}>
              <h4 style={{ fontSize: '1.4rem', color: '#fff', margin: '0 0 0.5rem 0' }}>{item[0]}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>{item[1]}</p>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Head-to-Head: When to Use Which</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            ['Draft a creative marketing email', 'ChatGPT', 'Most creative, best at varied tone'],
            ['Analyze a 100-page contract', 'Claude', 'Largest standard context, careful with details'],
            ['Summarize Google Doc + Gmail', 'Gemini', 'Native Google Workspace integration'],
            ['Find info across Outlook + Teams', 'Copilot Chat', 'Only tool connected to your M365 data'],
            ['Least hallucination-prone response', 'Claude', 'Designed for safety and accuracy']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'var(--glass-bg)', padding: '1.2rem 2rem', borderRadius: '12px' }}>
              <div style={{ flex: '2', fontSize: '1.2rem', color: '#fff' }}>{item[0]}</div>
              <div style={{ flex: '1', fontSize: '1.3rem', color: 'var(--accent-secondary)', fontWeight: 'bold' }}>{item[1]}</div>
              <div style={{ flex: '2', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{item[2]}</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Research & Verification</h2>
        
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '16px', border: '2px solid #3b82f6', marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', color: '#3b82f6', margin: '0 0 1rem 0' }}>Perplexity</h3>
          <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', margin: 0 }}>
            When you ask ChatGPT a factual question, it answers from memory (which may be wrong).<br/><br/>
            When you ask Perplexity, it <strong>SEARCHES the internet first</strong>, synthesizes an answer, and gives you <strong>clickable citations for every claim.</strong>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>ChatGPT / Gemini Search</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Built-in search for quick fact-checks without switching apps.</p>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Copilot in Edge</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Sidebar AI that can summarize the webpage you are currently reading.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Writing & Communication</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            ['Grammarly', 'AI writing improvement — grammar, tone, clarity. Works EVERYWHERE you type.'],
            ['DeepL', 'AI translation. Much more natural and professional than Google Translate.'],
            ['Hemingway Editor', 'Readability scoring. Makes complex business writing simple and clear.'],
            ['Jasper AI', 'Marketing content generation (blogs, ads).'],
            ['Copy.ai', 'Business writing automation (sales emails).']
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ fontSize: '1.4rem', color: '#10b981', margin: '0 0 0.5rem 0' }}>{item[0]}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>{item[1]}</p>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Image & Design</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['DALL-E', 'Quick image generation inside ChatGPT. No context switching.'],
            ['Microsoft Designer', 'Professional graphics, social media. Free with Microsoft account.'],
            ['Canva AI', 'Templates, brand consistency, presentations. Easy for non-designers.'],
            ['Adobe Firefly', 'Trained on licensed content ONLY. 100% commercially safe.'],
            ['Midjourney', 'Highest quality artistic generation. Discord-based.'],
            ['Ideogram', 'Best at generating readable text (logos, posters) within images.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: 'var(--glass-bg)', padding: '1.2rem 2rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <div style={{ width: '250px', fontSize: '1.3rem', color: '#fff', fontWeight: 'bold' }}>{item[0]}</div>
              <div style={{ flex: 1, fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{item[1]}</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Specialty AI</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '1.5rem', color: '#8b5cf6', margin: '0 0 1rem 0', textAlign: 'center' }}>Video & Audio</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Sora/Runway:</strong> Video generation from text</li>
              <li><strong>Synthesia:</strong> AI talking-head avatars for training</li>
              <li><strong>ElevenLabs:</strong> Incredible voice cloning</li>
              <li><strong>Otter.ai:</strong> Cross-platform meeting transcription</li>
            </ul>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '1.5rem', color: '#10b981', margin: '0 0 1rem 0', textAlign: 'center' }}>Documents & Knowledge</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>NotebookLM:</strong> Zero-hallucination Q&A from uploaded docs</li>
              <li><strong>Custom GPTs:</strong> Team-specific assistants with files</li>
              <li><strong>Copilot + SharePoint:</strong> Search company knowledge</li>
            </ul>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '1.5rem', color: '#3b82f6', margin: '0 0 1rem 0', textAlign: 'center' }}>Coding & Data</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <li><strong>GitHub Copilot:</strong> Software dev</li>
              <li><strong>ChatGPT Data:</strong> Run Python, analyze charts</li>
              <li><strong>Copilot in Excel:</strong> Formulas & analysis</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Microsoft vs AI-First Competitors</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>Microsoft adds AI to old tools. AI-first companies build new tools around AI.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['Emails', 'Copilot (Outlook)', 'Seamless integration', 'Superhuman', 'Faster, AI-native, but requires switching'],
            ['Spreadsheets', 'Copilot (Excel)', 'Best if data is already in Excel', 'Rows / Airtable', 'AI-native, easier for non-experts'],
            ['Presentations', 'Copilot (PPT)', 'Best for editing existing slides', 'Gamma / Canva', 'Significantly faster & prettier from scratch'],
            ['Meetings', 'Copilot (Teams)', 'Easiest for internal Microsoft teams', 'Otter.ai', 'Works across Teams, Zoom, Meet']
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '150px', fontSize: '1.3rem', color: '#fff', fontWeight: 'bold' }}>{item[0]}</div>
              <div style={{ flex: 1, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <strong style={{ color: '#3b82f6' }}>{item[1]}:</strong> {item[2]}
              </div>
              <div style={{ flex: 1, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <strong style={{ color: '#10b981' }}>{item[3]}:</strong> {item[4]}
              </div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Tool Decision Card</h2>
        <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '24px', border: '1px solid #334155', width: '90%', margin: '0 auto' }}>
          <div style={{ fontSize: '1.3rem', lineHeight: '2' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Q1: Does this task involve MY company data?</span><br/>
              <span style={{ color: '#fff', marginLeft: '2rem' }}>YES → Start with <strong>Copilot</strong></span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>NO  → Go to Q2</span>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>Q2: Does this task need VERIFIED facts with sources?</span><br/>
              <span style={{ color: '#fff', marginLeft: '2rem' }}>YES → Use <strong>Perplexity</strong></span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>NO  → Go to Q3</span>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Q3: Does this task need ZERO hallucination from specific docs?</span><br/>
              <span style={{ color: '#fff', marginLeft: '2rem' }}>YES → Use <strong>NotebookLM</strong></span><br/>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>NO  → Go to Q4</span>
            </div>

            <div>
              <span style={{ color: '#ec4899', fontWeight: 'bold' }}>Q4: What kind of output do I need?</span><br/>
              <span style={{ color: '#fff', marginLeft: '2rem' }}>Creative text → <strong>ChatGPT</strong></span><br/>
              <span style={{ color: '#fff', marginLeft: '2rem' }}>Careful analysis → <strong>Claude</strong></span><br/>
              <span style={{ color: '#fff', marginLeft: '2rem' }}>Presentation from scratch → <strong>Gamma / Canva</strong></span>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The AEIOU Framework</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem' }}>How to evaluate any NEW AI tool you discover:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['A', 'Accuracy', 'How reliable is the output? Does it hallucinate?'],
            ['E', 'Enterprise', 'Is there an enterprise version? Is our data safe?'],
            ['I', 'Integration', 'Does it work with our existing tools (e.g. M365)?'],
            ['O', 'Output', 'Does the output quality meet our professional standards?'],
            ['U', 'Usability', 'Can our team actually learn and use this quickly?']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: 'var(--glass-bg)', padding: '1.2rem 2rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-primary)', fontWeight: 'bold', width: '50px', textAlign: 'center' }}>{item[0]}</div>
              <div style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 'bold', width: '150px' }}>{item[1]}</div>
              <div style={{ flex: 1, fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{item[2]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Live Demo: Same Task, Different Tools</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 1rem 0' }}><strong>The Task:</strong></p>
          <p style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', fontStyle: 'italic', margin: 0 }}>"Summarize the key trends in AI adoption in the BPO industry in 2024-2025."</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            ['ChatGPT', 'Good summary, creative language. BUT no sources cited (can we verify?)'],
            ['Perplexity', 'Numbered sources for every claim. Clickable links.'],
            ['Claude', 'More careful tone. Hedges claims ("estimates suggest").'],
            ['Gemini', 'Pulls from Google\'s search index. Different sources.'],
            ['Copilot Chat', 'Would also search internal company reports if available.']
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
              <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{item[0]}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>{item[1]}</p>
            </div>
          ))}
        </div>
        <p style={{ color: '#10b981', fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '1.5rem' }}>
          None is "wrong". The skill is knowing which to use when.
        </p>
      </div>
    )
  },
  {
    id: 13,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On Practice</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Tool Comparison', 'Ask the SAME question in ChatGPT, Claude, and Perplexity. Compare creativity vs accuracy.'],
            ['2. Find the Right Tool', 'Use the Tool Decision Card to assign tools to 5 different work scenarios.'],
            ['3. Try a New Tool', 'Open a tool you have NEVER used before (e.g. Canva AI, NotebookLM). Complete one task.'],
            ['4. Department Toolkit', 'Write a "Top 3 AI Tools for My Department" recommendation with a one-sentence explanation for each.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', fontWeight: 'bold', width: '250px' }}>{item[0]}</div>
              <div style={{ color: '#fff', fontSize: '1.2rem', flex: 1 }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 14,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>No single tool is best at everything.</strong></li>
            <li><strong>ChatGPT</strong> is for creativity. <strong>Perplexity</strong> is for research.</li>
            <li><strong>Copilot</strong> is for your internal company data.</li>
            <li><strong>Claude</strong> is for careful analysis; <strong>NotebookLM</strong> is for your documents.</li>
            <li><strong>AI-first competitors</strong> (like Gamma) sometimes beat Microsoft for specific tasks.</li>
            <li>Use the <strong>Tool Decision Card</strong> to match tasks to tools.</li>
            <li>Use the <strong>AEIOU framework</strong> to evaluate new hype.</li>
          </ol>
        </div>
      </div>
    )
  }
];
