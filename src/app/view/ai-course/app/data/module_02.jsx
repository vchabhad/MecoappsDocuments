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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 2</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Types of AI & How They Work</h2>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Evolution of AI</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            ['1950s-1990s: RULE-BASED SYSTEMS', 'Follows exact rules. "IF X, THEN Y."', 'Phone menus, Outlook email rules.', 'Rigid. No learning.'],
            ['1990s-2010s: MACHINE LEARNING', 'Finds patterns in data on its own.', 'Spam filters, Netflix recommendations.', 'Smart behind the scenes.'],
            ['2010s-2020s: DEEP LEARNING', 'Learns complex patterns from massive data.', 'Face unlock, Siri, Google Translate.', '"How did it know?" moments.'],
            ['2020-2024: GENERATIVE AI', 'Creates new content (text, image, code).', 'ChatGPT, Midjourney, Claude.', '"Wait, AI wrote this?"'],
            ['2024-Now: AGENTIC AI', 'Plans steps, uses tools, acts autonomously.', 'Copilot Agents, ChatGPT with tools.', '"It did all that by itself?!"']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <strong style={{ color: '#3b82f6', fontSize: '1.3rem', width: '300px' }}>{item[0]}</strong>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ color: '#fff', fontSize: '1.2rem' }}>{item[1]}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Ex: {item[2]}</span>
              </div>
              <span style={{ color: '#10b981', fontStyle: 'italic', fontSize: '1.1rem', width: '200px' }}>{item[3]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>How Each Type Actually Works</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Predictive / Machine Learning</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              Learns from thousands of labeled examples (e.g., spam vs. not spam). It finds the pattern and predicts outcomes for new data. Like a doctor who has seen 10,000 X-rays.
            </p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Generative AI (Text)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              Fed billions of documents to learn language patterns. It generates responses <strong>ONE WORD AT A TIME</strong>, predicting the most likely next word. It does not understand; it predicts what "sounds right."
            </p>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Generative AI (Images)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              A <strong>completely different model</strong> from text. It starts with random noise (TV static) and gradually refines it step-by-step until the pixels form the image you requested.
            </p>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Generative AI (Video)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              Image generation running 24-30 times per second. Each frame is consistent with the previous one, creating motion. Quality is improving fast but not yet professional-grade for all client deliverables.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Advanced AI Paradigms</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>RAG (Retrieval-Augmented Generation)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              <strong>Without RAG:</strong> AI answers from its general memory (high hallucination risk).<br/>
              <strong>With RAG:</strong> AI searches YOUR specific documents first, then answers based ONLY on what it found with citations.
            </p>
            <p style={{ color: '#10b981', fontSize: '1.2rem', fontStyle: 'italic', margin: 0 }}>Analogy: Answering from memory vs. looking it up in a reference book.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #fbbf24' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>MCP (Model Context Protocol)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              The universal language for AI to connect to any software tool or database. 
            </p>
            <p style={{ color: '#fbbf24', fontSize: '1.2rem', fontStyle: 'italic', margin: 0 }}>Analogy: Before USB, every device had a custom cable. After USB, one cable fits all. MCP is the "USB" for AI tools.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>One Interface, Multiple Models</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#fff', fontSize: '1.4rem', lineHeight: '1.6' }}>
            In one chat, you can write text, create images, search the web, and read files. How? <strong>They are NOT the same AI.</strong>
          </p>
        </div>

        <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>The Hospital Reception Desk Analogy</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>The Door</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>You enter ChatGPT</p>
          </div>
          <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #3b82f6' }}>
            <h4 style={{ color: '#60a5fa', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>The Router</h4>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>"What do they need?"</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Text Model</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>GPT / Claude</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Image Model</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>DALL-E</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Search Tool</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Bing / Web</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Agentic AI: The Next Evolution</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>What is an AI Agent?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              Instead of just answering a question, an agent <strong>handles a complete workflow.</strong>
              <br/>It can: 1) Plan steps, 2) Use tools (search, files, email), 3) Take actions, and 4) Self-check its work.
            </p>
            <p style={{ color: '#ec4899', fontSize: '1.2rem', margin: 0, fontStyle: 'italic' }}>Regular AI = A translator. Agentic AI = An executive assistant.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Sub-Agents & Swarms</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 0 1rem 0', lineHeight: '1.6' }}>
              <strong>Sub-Agents:</strong> The main agent delegates parts of a complex task to specialized sub-agents, gathers the results, and delivers a final product (like a team lead).<br/><br/>
              <strong>Agent Swarms:</strong> Multiple agents working on a large batch of work simultaneously (e.g., processing 50 invoices all at once).
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Comparison Table</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Type</th>
                <th style={{ padding: '1rem' }}>What It Does</th>
                <th style={{ padding: '1rem' }}>How It Works</th>
                <th style={{ padding: '1rem' }}>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Rule-Based</td>
                <td style={{ padding: '1rem' }}>Follows rules</td>
                <td style={{ padding: '1rem' }}>IF X THEN Y</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Outlook email rules</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Predictive / ML</td>
                <td style={{ padding: '1rem' }}>Finds patterns</td>
                <td style={{ padding: '1rem' }}>Learns from labeled examples</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Spam filter</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Generative (Text)</td>
                <td style={{ padding: '1rem' }}>Creates text</td>
                <td style={{ padding: '1rem' }}>Predicts next word</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>ChatGPT email</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Generative (Image)</td>
                <td style={{ padding: '1rem' }}>Creates images</td>
                <td style={{ padding: '1rem' }}>Refines noise</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>DALL-E graphic</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Generative (Video)</td>
                <td style={{ padding: '1rem' }}>Creates video</td>
                <td style={{ padding: '1rem' }}>Creates flowing frames</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Sora clip</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>RAG</td>
                <td style={{ padding: '1rem' }}>Answers from docs</td>
                <td style={{ padding: '1rem' }}>Retrieves then generates</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>NotebookLM SOP answer</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#ec4899' }}>Agentic AI</td>
                <td style={{ padding: '1rem', color: '#ec4899' }}>Plans and acts</td>
                <td style={{ padding: '1rem', color: '#ec4899' }}>Plans, uses tools, executes, checks</td>
                <td style={{ padding: '1rem', color: '#ec4899' }}>Copilot handling invoices</td>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Live Demo & Hands-On Practice</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Live Demos</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>The Router:</strong> Generate text, then an image, then search the web—all in one chat.</li>
              <li><strong>RAG vs Normal:</strong> Asking an internal question with and without uploading a document.</li>
              <li><strong>Agent Behavior:</strong> Showing Copilot handling a multi-step task across apps.</li>
            </ul>
          </div>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Hands-on Practice</h3>
            <ul style={{ color: '#fff', fontSize: '1.2rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Trigger different models in a single chat.</li>
              <li>Complete the "Scenario Classification Worksheet".</li>
              <li>Test RAG by uploading a document and asking questions based on it.</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Challenge: Name That AI!</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            ['Amazon shows products you might like', 'Predictive / ML'],
            ['Claude analyzes a 50-page contract', 'Generative (Text)'],
            ['ChatGPT creates a logo', 'Generative (Image)'],
            ['Outlook moves emails via rules you set', 'Rule-Based'],
            ['NotebookLM answers from a training manual', 'RAG'],
            ['Copilot checks apps and sends a briefing', 'Agentic'],
            ['Bank blocks suspicious transaction', 'Predictive / ML']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.2rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ flex: '1', color: '#fff', fontSize: '1.2rem' }}>{item[0]}</div>
              <div style={{ color: '#22c55e', fontSize: '1.2rem', fontWeight: 'bold' }}>➔ {item[1]}</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Common Questions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            ['If AI just predicts words, how is it smart?', 'Scale. Trillions of words and billions of patterns. It is incredibly well-trained at prediction.'],
            ['Will Agentic AI replace more jobs?', 'It automates workflows, not tasks. Humans still handle judgment and exceptions.'],
            ['Is RAG always accurate?', 'Much more accurate, but can still misinterpret. Always verify.'],
            ['Can agents make mistakes?', 'Yes. They can plan poorly or misinterpret. Human oversight is essential.'],
            ['Difference between ChatGPT and Copilot?', 'ChatGPT = standalone tool. Copilot = embedded inside Microsoft apps. Same underlying GPT model.'],
            ['Is MCP important for me?', 'Not daily, but it explains why AI will soon connect to every software tool seamlessly.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ flex: '1', color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold' }}>❓ {item[0]}</div>
              <div style={{ flex: '2', color: '#fff', fontSize: '1.2rem', lineHeight: '1.5' }}>{item[1]}</div>
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
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.2', margin: 0, paddingLeft: '2rem', fontSize: '1.3rem' }}>
            <li><strong>AI is not one thing:</strong> many types like rule-based, predictive, generative, RAG, agentic.</li>
            <li><strong>Text AI predicts the next word</strong> — pattern-matches at enormous scale.</li>
            <li><strong>Image AI is a completely different model</strong> — refines noise into pictures.</li>
            <li><strong>ChatGPT has ONE interface, MULTIPLE models</strong> — a router sends to the right specialist.</li>
            <li><strong>Agents plan, use tools, and act</strong> — they don't just answer questions.</li>
            <li><strong>RAG grounds AI in your documents</strong> — dramatically more accurate.</li>
            <li><strong>You are in the Generative AI era</strong> — Agentic AI is just beginning.</li>
          </ol>
        </div>
      </div>
    )
  }
];
