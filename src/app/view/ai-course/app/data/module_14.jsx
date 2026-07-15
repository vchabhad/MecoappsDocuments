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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 14</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Copilot in Excel, Word & PowerPoint</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>The Office Power User</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Transforming Daily Workflows</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Excel, Word, and PowerPoint are the 3 tools you use EVERY day.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            Before Copilot, Excel formulas were intimidating, reports took hours, and presentations felt like a chore.
          </p>
          <p style={{ color: 'var(--accent-primary)', fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1.5rem' }}>
            Now, you will write formulas in plain English, generate reports from outlines, and create presentations from documents — all inside the tools you already use.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Excel: Formulas & Analysis</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Formulas in Plain English</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>You never need to memorize another Excel formula.</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '1rem' }}>
              <strong>Say:</strong> "Add up all values in column C"<br/>
              <strong>Get:</strong> =SUM(C:C)<br/><br/>
              <strong>Say:</strong> "If score in D2 is &gt;96 show Pass"<br/>
              <strong>Get:</strong> =IF(D2&gt;96,"Pass","Fail")
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Data Analysis Without Coding</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Just ASK Copilot about your data:</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#93c5fd', fontFamily: 'monospace', fontSize: '1rem' }}>
              "What are the top 5 ticket categories?"<br/><br/>
              "Which agent has the highest accuracy?"<br/><br/>
              "Is there a trend in resolution times?"
            </div>
            <p style={{ color: '#ef4444', fontSize: '1rem', fontWeight: 'bold', marginTop: '1rem' }}>*Data MUST be in a Table (Insert → Table)</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Excel: Charts & Formatting</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#f59e0b', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Create Charts Instantly</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>"Create a bar chart of ticket volume by category"</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>"Show accuracy trends over the last 6 months as a line chart"</p>
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Pivot Tables & Sorting</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>"Create a pivot table showing total tickets by agent by month"</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>"Sort this table by accuracy, highest first"</p>
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#ec4899', fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Conditional Formatting</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>"Highlight all cells in column D that are below 96% in red"</p>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in Word: Draft, Transform, Summarize</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Draft from Scratch</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>"Draft a Q3 performance report for support team. Include: executive summary, metrics, challenges."</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Transform Text</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Select any text and ask Copilot to:</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1rem', paddingLeft: '1.5rem', margin: 0 }}>
              <li>Make it shorter</li>
              <li>Make it more formal</li>
              <li>Turn into bullet points</li>
              <li>Turn into a table</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0', textAlign: 'center' }}>Summarize</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>"Summarize this document in 5 bullet points."</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Or generate summaries based on an attached reference file.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Copilot in PowerPoint: Presentations</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-secondary)' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Create from a Document</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 0 1.5rem 0' }}>
            This is one of Copilot's strongest features. It reads a Word document, identifies key sections, and creates slides with appropriate content and layouts.
          </p>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1.1rem' }}>
              "Create a presentation from this Word document."
            </div>
          </div>
          
          <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Create from a Topic/Outline</h3>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1.1rem' }}>
              "Create a presentation about AI adoption in BPO operations. 10 slides. Include: current state, benefits, challenges, implementation roadmap."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>PowerPoint Editing & Speaker Notes</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Enhance Existing Slides</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Add Content:</strong> "Add a slide about our team's achievements after slide 5"</li>
              <li><strong>Improve Design:</strong> "Make this slide more visual — add an appropriate image"</li>
              <li><strong>Restructure:</strong> "Organize this content into a comparison table"</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>The Superpower: Speaker Notes</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Prepare for any presentation in minutes.</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#fbcfe8', fontFamily: 'monospace' }}>
              "Add speaker notes to every slide. Explain what to SAY, not repeat what is on the slide. Each note 3-4 sentences."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On & Challenge</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. Excel Formulas', 'Ask Copilot to create 5 different formulas in plain English.'],
            ['2. Word Transform', 'Take existing text and use Copilot to: shorten it, formalize it, convert to bullet points.'],
            ['3. Full Pipeline (Challenge)', 'Excel: Analyze data → Word: Write report → PowerPoint: Create presentation from report. Complete all 3 with Copilot.']
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
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts: Excel</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Data Cleaner</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Review this table. Highlight any duplicate rows, identify missing values in the 'Email' column, and standardize all dates in the 'Start Date' column to YYYY-MM-DD format."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Insight Generator</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Analyze this sales data. What are the top 3 performing regions? Are there any noticeable seasonal trends? Provide a brief summary of the most significant finding."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Formula Translator</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Add a new column called 'Bonus Eligibility'. Create a formula that returns 'Yes' if the value in 'Sales' is &gt;50000 AND the value in 'Tenure' is &gt;2, otherwise return 'No'."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts: Word</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The First Draft Builder</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Draft a project proposal for [Project Name]. Include these sections: Executive Summary, Objectives, Timeline (3 months), and Budget ($50k). Tone should be persuasive and professional."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Document Transformer</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Rewrite this technical document so it can be easily understood by a non-technical client. Remove jargon, use analogies where helpful, and keep the tone informative."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Exec Summary Maker</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Summarize this 15-page report into a 1-page executive summary. Focus heavily on the financial implications and the final recommendations."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts: PowerPoint</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Deck Generator</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Create a 10-slide presentation based on [File Name]. Ensure the first slide is a strong hook, the middle slides break down the data visually, and the final slide has a clear Call to Action."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Presentation Polisher</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Review this presentation. Reduce the text on slide 4 and convert it into a bulleted list. Suggest an appropriate image for slide 7 to make it more engaging."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Speaker Prep</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Generate detailed speaker notes for every slide in this deck. The notes should provide context and talking points that go beyond what is written on the slide. Tone should be confident."
            </div>
          </div>
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
            <li><strong>Excel:</strong> Data MUST be in Table format. Describe formulas in plain English.</li>
            <li><strong>Word:</strong> Copilot drafts, you refine. Great for filling templates.</li>
            <li><strong>PowerPoint:</strong> Creating presentations from a Word document is a game changer.</li>
            <li><strong>Speaker Notes:</strong> Use Copilot to instantly generate talking points for any slide deck.</li>
            <li><strong>The Full Pipeline:</strong> Data (Excel) &rarr; Report (Word) &rarr; Presentation (PPT). Saves hours.</li>
          </ol>
        </div>
      </div>
    )
  }
];
