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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 17</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>AI Video, Audio & Media</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>A Production Studio on Your Laptop</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Media Revolution</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Creating a training video used to require: a script writer, a camera crew, a studio, an editor, and weeks of production time.
          </p>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', marginTop: '2rem', border: '1px solid #10b981' }}>
            <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
              With AI, you can create a professional training video with a talking AI presenter in 15 minutes.
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Video Tools</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Synthesia (Avatars)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Professional videos with AI-generated human presenters.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic' }}>Best for: Training videos, SOP walkthroughs, company updates.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Sora (Gen Video)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Text-to-video generation for short clips.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic' }}>Best for: B-roll footage, conceptual visualizations.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Descript (Editing)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Edit video by editing the text transcript.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic' }}>Delete a word from transcript → it's deleted from the video.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Voice & Audio</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>ElevenLabs (Voice Gen)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Generate realistic human voices from text.</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Narrate training materials and presentations</li>
              <li>Same content in 30+ languages with natural accents</li>
              <li>Control speed, clarity, and style</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Voice Cloning</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Create an AI version of a specific person's voice.</p>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid #ef4444' }}>
              <h4 style={{ color: '#ef4444', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>Critical Rule:</h4>
              <p style={{ color: '#fff', fontSize: '1rem', margin: 0 }}>NEVER clone someone's voice without explicit written consent. This is a severe ethical and legal violation.</p>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Transcription Tools</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Otter.ai & Fireflies</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>AI that records, transcribes, and summarizes meetings across any platform (Zoom, Teams, Meet).</p>
            <ul style={{ color: '#93c5fd', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Live transcription with speaker ID</li>
              <li>AI summary & action items</li>
              <li>Searchable archive of ALL past meetings</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>ChatGPT Analysis Pipeline</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>Combine transcription with advanced AI:</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.6' }}>
              1. Get transcript (Otter/Zoom)<br/>
              2. Paste into ChatGPT<br/>
              3. "Extract all action items with owners"<br/>
              4. "What was the overall sentiment?"<br/>
              5. "Draft a follow-up email"
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Ethics of AI Media</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#ef4444' }}>
                <th style={{ padding: '1rem' }}>The Critical Rules</th>
                <th style={{ padding: '1rem' }}>Why / How</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Always disclose AI video</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Viewers have a right to know they are not watching a real person ("Presented by AI avatar").</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Get consent for voice cloning</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Written consent is mandatory for legal and ethical compliance.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Never create deepfakes</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Do not impersonate real people without authorization. Legal liability.</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Label AI content clearly</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>"Voiceover generated by AI", "Images created with AI". Build trust.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts for Video Scripts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Training Video Script</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Write a 60-second video script for an AI avatar explaining our new password policy. Formatting rules: 1) Short, punchy sentences. 2) Write exactly how people speak, not how they write (use contractions like 'you'll', 'we're'). 3) Include bracketed stage directions [Smile], [Pause for 2 seconds] where appropriate."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Explainer Video (B-Roll)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Create a 2-column script for a 90-second promotional video. Column 1: Audio/Voiceover (conversational, energetic). Column 2: Visuals/B-roll ideas. Topic: How our new AI software saves teams 10 hours a week."
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Voice Design & Settings (ElevenLabs)</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #8b5cf6' }}>
          <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Perfecting the AI Voice</h3>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>An AI voice sounds robotic if you don't tweak the settings. Here is how to make it sound perfectly human:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Stability (Emotion vs Monotone)</h4>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>High Stability (70%+):</strong> Sounds consistent, authoritative, but can sound monotone and robotic. Good for dry manuals.</li>
                <li><strong>Low Stability (30%):</strong> More emotional range, expressive, conversational. Good for storytelling, but might hallucinate accents occasionally.</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#ef4444', fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Clarity & Similarity Enhancement</h4>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>High (80%+):</strong> Makes the voice extremely clear (like studio recording) but can sound a bit artificial.</li>
                <li><strong>Pro Tip:</strong> Add intentional pauses using tags like <code>&lt;break time="1.5s"/&gt;</code> to simulate natural breathing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts for Audio & Music</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>AI Music (Suno / Udio)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "A high-energy, upbeat corporate electronic background track. Instrumentation includes driving bass, subtle synthesizers, and a steady 120 BPM drum beat. The mood is optimistic and forward-looking, perfect for a tech product launch video. No vocals."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Sound Effects (ElevenLabs)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "A cinematic 'whoosh' transition sound, starting low-pitched and rising sharply, ending with a subtle digital chime. Modern, clean, and crisp. Maximum 2 seconds duration."
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On & Challenge</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Script Writing', 'Write a 30-second conversational script for an AI training video. Keep sentences short.'],
            ['2. Voice Gen', 'Use ElevenLabs (free tier) to generate audio of your script. Try 2 voices.'],
            ['3. Transcript Analysis', 'Paste a meeting transcript into ChatGPT. Get summary, action items, and follow-up email.'],
            ['4. Multimedia Package (Challenge)', 'Write script (ChatGPT) → Image (DALL-E) → Voice (ElevenLabs) → Video (Synthesia).']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', fontWeight: 'bold', width: '250px' }}>{item[0]}</div>
              <div style={{ color: '#fff', fontSize: '1.1rem', flex: 1 }}>{item[1]}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>AI video replaces expensive production:</strong> Synthesia creates professional videos in minutes.</li>
            <li><strong>Descript revolutionizes editing:</strong> Edit video by editing text transcript.</li>
            <li><strong>Transcription + AI = meeting intelligence:</strong> Combine Otter.ai with ChatGPT.</li>
            <li><strong>Master Prompts are essential:</strong> Use them for scripts, voices, and background music.</li>
            <li><strong>Ethics are non-negotiable:</strong> Disclose AI content, always get consent for voice cloning.</li>
          </ol>
        </div>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', background: 'var(--glass-bg)', padding: '4rem', borderRadius: '32px', border: '2px solid #fbbf24', maxWidth: '800px' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏆</div>
          <h2 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center', backgroundImage: 'linear-gradient(to right, #fbbf24, #f59e0b)' }}>Level 3 Complete!</h2>
          <h3 style={{ color: '#fbbf24', fontSize: '2rem', margin: '0 0 2rem 0' }}>Gold Badge: AI Proficient</h3>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '16px', textAlign: 'left' }}>
            <p style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>You've mastered:</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>ChatGPT (full ecosystem), Claude, Gemini</li>
              <li>DALL-E, Designer, Canva AI for images</li>
              <li>Copilot in Outlook, Teams, Excel, Word, PPT</li>
              <li>ChatGPT Code Interpreter for advanced data analysis</li>
              <li>NotebookLM & Custom GPTs for zero-hallucination Q&A</li>
              <li>AI Video & Audio tools</li>
            </ul>
          </div>
          
          <p style={{ color: '#10b981', fontSize: '1.3rem', marginTop: '2rem', fontWeight: 'bold' }}>
            Up Next: Level 4 — Apply and Optimize
          </p>
        </div>
      </div>
    )
  }
];
