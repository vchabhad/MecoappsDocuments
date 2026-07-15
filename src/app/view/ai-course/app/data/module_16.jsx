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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 16</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>NotebookLM, Custom GPTs & Copilot Agents</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Zero-Hallucination AI</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Danger of Hallucinations</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Standard AI models hallucinate—they confidently make things up. For creative writing, that is manageable. But for answering questions about YOUR company's procedures, policies, and SOPs?
          </p>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '12px', marginTop: '2rem', border: '1px solid #ef4444' }}>
            <p style={{ color: '#ef4444', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
              Hallucination is DANGEROUS.
            </p>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '2rem' }}>
            Today you will master the 3 main tools that virtually eliminate hallucination by grounding AI exclusively in YOUR documents.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Foundation: What Is RAG?</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6', marginBottom: '2rem' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Retrieval-Augmented Generation</h3>
          <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
            RAG is like asking a librarian who first goes to the shelf, pulls the right book, opens to the right page, reads the answer, and then tells you — WITH the exact book citation.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>1</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong>Retrieve:</strong> Upload documents (SOPs, policies, manuals) or link to live SharePoint sites.</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>2</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong>Ask:</strong> Ask a question related to those documents.</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>3</div>
            <div style={{ color: '#fff', fontSize: '1.2rem' }}><strong>Generate:</strong> AI searches your documents, generates an answer, and <strong>cites the exact source</strong>.</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tool 1: NotebookLM Deep Dive</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Absolute Zero Hallucination</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Google's free AI tool that answers questions ONLY from documents you manually upload.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              "I cannot answer that because the information is not present in the provided sources."
            </p>
            
            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Upload Types:</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1rem', paddingLeft: '1.5rem', margin: 0 }}>
              <li>PDFs, Google Docs, Text files</li>
              <li>Web URLs, YouTube videos, Google Slides</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>The Citation Engine</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Every answer includes hard proof:</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Numbered citations linking directly to your specific documents.</li>
              <li>Clicking a citation opens the document and highlights the exact passage.</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <strong style={{ color: '#ef4444' }}>Best For:</strong> <span style={{ color: '#fff' }}>Strict compliance, dense contracts, and situations where you absolutely cannot afford an error.</span>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>NotebookLM Audio Overviews (Podcasts)</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #f59e0b' }}>
          <h3 style={{ color: '#f59e0b', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The "Killer Feature"</h3>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>NotebookLM can turn ANY uploaded documents into a realistic, two-person podcast discussion. They will banter, explain complex topics simply, and synthesize information for you.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Use Cases</h4>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Commute Learning:</strong> Upload a 50-page industry report and listen to it on your drive home.</li>
                <li><strong>Meeting Prep:</strong> Upload past meeting transcripts and financial docs to get a 5-minute audio summary.</li>
                <li><strong>Accessibility:</strong> Give team members an alternative, engaging way to consume dry policy documents.</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#ef4444', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Pro Tips</h4>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li>It currently only supports English speakers.</li>
                <li><strong>The Cheat Code:</strong> Add a simple text file to your sources titled "Instructions for Audio: Focus ONLY on Chapter 3 and explain it as if talking to a high schooler" to guide what they discuss!</li>
              </ul>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tool 2: Custom GPTs Deep Dive</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            A personalized AI assistant you build inside ChatGPT (Plus/Team/Enterprise required). 
            Unlike NotebookLM, a Custom GPT is a <strong>flexible worker</strong> that can draft emails and create content based on your rules.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 1rem 0', textAlign: 'center' }}>1. Instructions</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', margin: 0 }}>The master prompt. You define its persona, its tone of voice, what it knows, and strict guardrails it must follow.</p>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 1rem 0', textAlign: 'center' }}>2. Files (Knowledge)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', margin: 0 }}>Static uploads (PDFs, SOPs, brand guidelines). It searches these files first before answering.</p>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0', textAlign: 'center' }}>3. Capabilities</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', margin: 0 }}>You can give it the ability to browse the live web, generate images with DALL-E, or run data analysis in Python.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tool 3: Copilot Agents (Copilot Studio)</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            Microsoft's enterprise equivalent to Custom GPTs. 
            <br/><span style={{ color: '#10b981', fontWeight: 'bold' }}>The big difference: They connect directly to your live company SharePoint and Teams data.</span>
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>The Security Advantage</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Zero Data Leakage:</strong> Your data never leaves your M365 tenant.</li>
              <li><strong>Permission Aware:</strong> If an employee asks the Agent a question, it will ONLY search files that employee already has access to in SharePoint.</li>
              <li><strong>Live Sync:</strong> When a document is updated on SharePoint, the Agent instantly knows the new version.</li>
            </ul>
          </div>
          
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Where They Live</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Copilot App:</strong> Chat with them directly in M365 Copilot.</li>
              <li><strong>Teams Channels:</strong> "@mention" the agent in a group chat to get answers based on the project's files.</li>
              <li><strong>SharePoint Sites:</strong> Embed them directly on internal intranet pages for HR or IT.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Building a Copilot Agent: The Interface</h2>
        
        <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '16px', border: '1px solid #3b82f6', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', left: '2rem', background: '#3b82f6', color: '#fff', padding: '0.2rem 1rem', borderRadius: '12px', fontWeight: 'bold' }}>
            Copilot Studio Configuration
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>1. Instructions</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>The persona and rules. E.g., "You are the IT Helpdesk Agent. Answer politely. If you do not know the answer, tell the user to submit a Jira ticket."</span>
            </div>
            
            <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>2. Knowledge (The Magic)</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Instead of uploading static PDFs, you link directly to live <strong>SharePoint Sites or Folders</strong>. As documents update, the Agent updates instantly.</span>
            </div>
            
            <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
              <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>3. Actions / Plugins</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Connect the Agent to external systems via Power Automate. E.g., "If the user wants to log PTO, trigger the Workday PTO flow."</span>
            </div>
            
            <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ec4899' }}>
              <span style={{ color: '#ec4899', fontWeight: 'bold', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>4. Starter Prompts</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Pre-written buttons the user sees when opening the chat. E.g., "What is the guest wifi password?" or "Reset my VPN."</span>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts & Personas</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>Copy and paste these exact instructions into either a Custom GPT or a Copilot Agent.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Policy Enforcer (HR/Compliance)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "You are the company Policy Assistant. Your ONLY job is to answer employee questions using the linked HR SharePoint site. NEVER answer from general knowledge. If an employee asks about a policy not in the site, reply exactly with: 'That policy is not covered in our current documentation. Please contact HR directly at hr@company.com.'"
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Brand Voice Writer (Marketing)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "You are our Senior Copywriter. When given a draft, rewrite it to match our Brand Voice guidelines (uploaded). Key rules: Use short sentences. Be optimistic but not overly excited (no exclamation marks). Never use the words 'synergy', 'leverage', or 'disruptive'. Format the output in Markdown."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The QA Auditor (Operations)</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "You are a strict QA Auditor. Review all pasted call transcripts against our internal QA Scorecard rules (uploaded). Flag any missed greeting requirements or compliance violations. Provide a Pass/Fail score and suggest one specific coaching point for the agent."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Ultimate 3-Way Comparison</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Feature</th>
                <th style={{ padding: '1rem' }}>NotebookLM</th>
                <th style={{ padding: '1rem' }}>Custom GPTs</th>
                <th style={{ padding: '1rem' }}>Copilot Agents</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Data Source</td>
                <td style={{ padding: '1rem', color: '#e2e8f0' }}>Manual Static Uploads</td>
                <td style={{ padding: '1rem', color: '#e2e8f0' }}>Manual Static Uploads</td>
                <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>Live SharePoint / Teams</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Zero Hallucination</td>
                <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>Very Strong (Refuses)</td>
                <td style={{ padding: '1rem', color: '#f59e0b' }}>Good (But Flexible)</td>
                <td style={{ padding: '1rem', color: '#f59e0b' }}>Good (But Flexible)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Creative Drafting</td>
                <td style={{ padding: '1rem', color: '#ef4444' }}>No</td>
                <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>Yes (Excellent)</td>
                <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>Yes (Excellent)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>M365 Permissions</td>
                <td style={{ padding: '1rem', color: '#ef4444' }}>N/A</td>
                <td style={{ padding: '1rem', color: '#ef4444' }}>No</td>
                <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>Yes (100% Aware)</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Best For</td>
                <td style={{ padding: '1rem', color: '#3b82f6' }}>Dense Contracts, Audio Podcasts</td>
                <td style={{ padding: '1rem', color: '#8b5cf6' }}>Marketing, General Teams</td>
                <td style={{ padding: '1rem', color: '#0ea5e9' }}>Enterprise Workflows, Secure HR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hands-On Practice: Build Your Agent</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['1. The Strict Baseline', 'Upload 2 SOPs to NotebookLM. Ask it a question NOT in the SOPs and watch it refuse.'],
            ['2. The Podcast', 'Use NotebookLM to generate a 5-minute audio overview of those same 2 SOPs.'],
            ['3. The Builder', 'Open either ChatGPT (to build a Custom GPT) OR Copilot Studio (to build a Copilot Agent).'],
            ['4. Grounding', 'Give your Agent a persona in the Instructions box. Upload your SOPs (or link your SharePoint folder) to the Knowledge box.'],
            ['5. The Test', 'Ask your Agent the same question you asked NotebookLM. Compare the difference in formatting, tone, and citations.']
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
    id: 12,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '2rem' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Takeaways</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--accent-secondary)', width: '90%', margin: '0 auto', textAlign: 'left' }}>
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.4', margin: 0, paddingLeft: '2rem', fontSize: '1.4rem' }}>
            <li><strong>RAG eliminates hallucination:</strong> It forces AI to search your documents first before generating an answer.</li>
            <li><strong>NotebookLM is for strict Q&A:</strong> It absolutely refuses to answer outside your documents.</li>
            <li><strong>Custom GPTs & Copilot Agents are for productivity:</strong> They act as assistants that can draft and create using your references.</li>
            <li><strong>Copilot Agents are the Enterprise Standard:</strong> They connect securely to live SharePoint data and respect user permissions.</li>
            <li><strong>Static vs Live:</strong> Custom GPTs require you to re-upload files when they change; Copilot Agents sync automatically with SharePoint.</li>
          </ol>
        </div>
      </div>
    )
  }
];
