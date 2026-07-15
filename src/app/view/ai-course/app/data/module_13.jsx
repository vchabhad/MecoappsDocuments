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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 13</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Copilot in Outlook & Teams</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Ultimate Time Saver</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Reclaiming Your Time</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            You spend ~30% of your day on email and 25% in meetings. Over HALF your day is just reading, writing, and meeting.
          </p>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', marginTop: '2rem', border: '1px solid #10b981' }}>
            <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
              Copilot targets this 55% directly. Saving just 30% of that time gives you back nearly 2 HOURS every day.
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Outlook: Email Summaries</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Summarize Long Threads</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Click "Summary by Copilot" to instantly get:</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Key points discussed</li>
              <li>Action items (who does what)</li>
              <li>Decisions made</li>
              <li>Open questions / timeline</li>
            </ul>
            <div style={{ marginTop: '1rem', color: '#10b981', fontWeight: 'bold' }}>Savings: 15-min read → 1-min summary</div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Chat with the Thread</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Ask specific follow-up questions:</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace' }}>
              "What exactly did Sarah say about the deadline?"<br/><br/>
              "Was there any frustration in this thread?"<br/><br/>
              "What topics were NOT addressed?"
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Drafting Replies & The Coach Method</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#f59e0b', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Draft with Copilot & Tone Control</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Give specific instructions: "Draft a reply that acknowledges the delay, explains the migration, and commits to Friday."</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Direct', 'Formal', 'Casual', 'Elaborate'].map(tone => (
                  <span key={tone} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem', color: '#fff' }}>{tone}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>The Coach Method (For Complex Replies)</h3>
            <ol style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Summarize:</strong> "Summarize this thread"</li>
              <li><strong>Analyze:</strong> "What are the key concerns I need to address?"</li>
              <li><strong>Draft:</strong> "Draft a reply addressing all concerns. Tone: diplomatic."</li>
              <li><strong>Review:</strong> Edit, personalize, add context.</li>
              <li><strong>Send:</strong> 3 minutes instead of 15.</li>
            </ol>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Teams: During Meetings</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            Live Intelligence: Copilot listens, transcribes, and summarizes in real-time.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>What it Does</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Live transcription (attributed to speakers)</li>
              <li>Running summary updating live</li>
              <li>Identifies action items as spoken</li>
              <li>Captures key questions</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Questions to Ask Live</h4>
            <ul style={{ color: '#a7f3d0', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem', fontFamily: 'monospace' }}>
              <li>"What has been discussed so far?"</li>
              <li>"What are the action items?"</li>
              <li>"Are there unresolved questions?"</li>
              <li>"Summarize the last 10 minutes"</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Teams: After Meetings</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Intelligent Recap</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>No more manual note-taking. After the meeting, Copilot provides:</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Summary', 'Action Items (with owners)', 'Decisions', 'Key Questions', 'Next Steps'].map(item => (
                <span key={item} style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '0.5rem 1rem', borderRadius: '20px', color: '#93c5fd' }}>{item}</span>
              ))}
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The 2-Minute Follow-Up</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>Instantly generate the follow-up email from the recap:</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace' }}>
              "Draft a follow-up email from this meeting. Include summary, action items with owners, next meeting date. Tone: professional. Under 200 words."
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Calendar: Meeting Prep</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-secondary)' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Cross-App Intelligence</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 1.5rem 0' }}>
            Copilot searches your calendar, emails, Teams chats, and shared files to build a comprehensive brief in one click.
          </p>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>The Ultimate Prep Prompt:</h4>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.6' }}>
              "Prepare me for my meeting with Client ABC tomorrow at 2 PM:<br/>
              - Who is attending?<br/>
              - What was discussed in our last meeting with them?<br/>
              - What emails have we exchanged since then?<br/>
              - What documents were shared?<br/>
              - Suggest 3 talking points based on recent communications"
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts: Outlook</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Escalation Handler</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Draft a reply acknowledging the customer's frustration regarding [Issue]. Explain that we are investigating the root cause and will provide a full update by [Time]. Maintain a highly empathetic, professional, and reassuring tone. Do not make promises about the outcome."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Thread Analyzer</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Analyze this long email thread. Provide: 1) The core disagreement or bottleneck. 2) What information is currently missing to make a decision. 3) What each person's stance is. 4) A suggested next step to resolve the issue."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Polite Pushback</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Draft a reply declining this request because it falls outside our current SLA. Offer [Alternative Solution] instead. Keep the tone collaborative, firm, and helpful. Keep it under 4 sentences."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts: Teams</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Late Joiner (Live Meeting)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "I just joined 15 minutes late. Provide a bulleted summary of what I missed, specifically mentioning if my name or my department ([Department]) was brought up, and any decisions that were finalized."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Meeting Autopsy (Post-Meeting)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Act as a project manager. Review this meeting transcript and extract: 1) All action items in a table with 'Owner' and 'Deadline'. 2) Any risks or blockers mentioned. 3) Topics that were tabled for the next meeting."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Sentiment Checker (Live/Post)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Analyze the sentiment of this discussion. Were there areas of strong disagreement? Did the team seem aligned on the final decision? Point out any unresolved tensions."
            </div>
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
            <li><strong>2+ hours saved daily:</strong> By reducing time spent on reading/writing emails and meetings.</li>
            <li><strong>Summarize first:</strong> Always use Copilot to understand long threads before replying.</li>
            <li><strong>The Coach Method:</strong> Use it for sensitive/important emails (Summarize → Identify Concerns → Draft).</li>
            <li><strong>Intelligent Recap:</strong> Eliminates manual note-taking and extracts action items automatically.</li>
            <li><strong>Cross-app search is a superpower:</strong> Copilot searches Outlook, Teams, and files simultaneously.</li>
            <li><strong>Meeting prep in seconds:</strong> One prompt replaces 20 minutes of manual gathering.</li>
          </ol>
        </div>
      </div>
    )
  }
];
