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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 15</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Excel Power Data Analysis</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Advanced Data Analysis Without Coding</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Power of Advanced Analysis</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            You've seen the basics — formulas in English, simple charts. Today we go deeper.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            You will handle messy data, complex analysis, and even forecasting — tasks that used to require data analysts or hours of manual work.
          </p>
          <p style={{ color: 'var(--accent-primary)', fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1.5rem' }}>
            The secret weapon? ChatGPT's Code Interpreter.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Data Cleaning with AI</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #ef4444', marginBottom: '2rem' }}>
          <h3 style={{ color: '#ef4444', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>The Problem: Dirty Data</h3>
          <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
            80% of data analysis time is spent CLEANING data. Duplicates, inconsistent formatting, missing values...
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            ['Duplicates', 'Highlight duplicate rows based on column A'],
            ['Inconsistent formatting', 'Standardize country names in column B'],
            ['Missing values', 'Fill empty cells in column C with average'],
            ['Date formats', 'Convert all dates to YYYY-MM-DD'],
            ['Merged data', 'Split column A into Name and Email'],
            ['Typos in categories', 'Group similar spellings in column B']
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '8px' }}>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item[0]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Prompt: "{item[1]}"</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Advanced Formulas & Pivot Tables</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Complex Requests in English</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Nested IF:</strong> "If &gt;98% Excellent, 96-98% Good..."</li>
              <li><strong>VLOOKUP:</strong> "Look up ID in A2 from Departments sheet"</li>
              <li><strong>SUMIFS:</strong> "Sum revenue where region is East AND month is Oct"</li>
              <li><strong>Date Calc:</strong> "Business days between order and delivery"</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Pivot Tables & Analysis</h3>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1rem' }}>
              "Create a pivot table: rows = department, columns = month, values = average accuracy"
            </div>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Distribution:</strong> "Show percentages across categories"</li>
              <li><strong>Comparison:</strong> "Compare Q2 vs Q3"</li>
              <li><strong>Outliers:</strong> "Any agents with unusually high/low accuracy?"</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Code Interpreter: The Secret Weapon</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.3rem', margin: 0 }}>
            Upload ANY data file to ChatGPT, and it writes and runs Python code to analyze it — without you knowing Python.
          </p>
        </div>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--accent-secondary)' }}>
                <th style={{ padding: '1rem' }}>Capability</th>
                <th style={{ padding: '1rem' }}>Copilot (Excel)</th>
                <th style={{ padding: '1rem' }}>ChatGPT (Code Interpreter)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Statistical Analysis</td>
                <td style={{ padding: '1rem', color: '#ef4444' }}>No</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Yes (mean, median, standard deviation)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Advanced Visuals</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Basic</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Heatmaps, scatter plots, histograms</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Combine Multiple Files</td>
                <td style={{ padding: '1rem', color: '#ef4444' }}>No</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Yes</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Export Clean Data</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>N/A (in Excel)</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Downloads cleaned CSV/Excel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Code Interpreter Prompts</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Comprehensive Overview</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem' }}>
              "Analyze this dataset and give me a comprehensive summary: data types, missing values, distributions, and key statistics."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Visualizations</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem' }}>
              "Create a professional dashboard with 4 charts showing the most important trends in this data."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Deep Insights</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem' }}>
              "Find all anomalies and outliers in this data. Explain what makes them unusual. What actions should management take?"
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompt: The Ultimate Data Analyst</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
          <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The End-to-End Analysis Prompt</h3>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>When uploading a raw file to Code Interpreter, use this mega-prompt to get a complete report in one shot:</p>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.6' }}>
            "Act as a Senior Data Analyst. I have uploaded our Q3 sales data.<br/><br/>
            Step 1: Clean the data (remove duplicates, handle missing values).<br/>
            Step 2: Identify the top 3 performing regions and the worst performing region.<br/>
            Step 3: Create two professional, downloadable charts (one bar chart for regions, one line chart for monthly trends) using a corporate blue color palette.<br/>
            Step 4: Write a 3-bullet executive summary of your findings that I can paste directly into an email to the CEO."
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Trend Analysis & Forecasting</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Forecasting (ChatGPT)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Describe what you want to predict, AI handles the math:</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#fde68a', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              "Based on the last 12 months, forecast the next 3 months of ticket volume with confidence intervals."<br/><br/>
              "Predict what our accuracy rate will be in December based on current trends."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>WHAT-IF Analysis</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Model scenarios and compare outcomes in seconds:</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#fbcfe8', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              "What happens to profitability if:<br/>
              - Volume increases by 30%<br/>
              - We hire 5 additional agents<br/>
              - AHT decreases by 10%<br/>
              Show scenarios in a comparison table."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Concrete Pipeline Example: Monthly Reporting</h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', marginTop: '2rem' }}>
          {[
            ['1. Export Data', 'Download raw CSV from your CRM/Database. No manual cleaning needed.', '#3b82f6'],
            ['2. Upload to ChatGPT', 'Attach file. Prompt: "Clean this dataset (remove duplicates, fix dates)."', '#8b5cf6'],
            ['3. Analyze & Chart', 'Prompt: "Generate a pivot table of sales by region, and a bar chart of top 5 products."', '#ec4899'],
            ['4. Generate Insights', 'Prompt: "Write a 3-bullet executive summary explaining the drop in East region sales."', '#10b981']
          ].map((item, i) => (
            <div key={i} style={{ width: '22%', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderTop: `4px solid ${item[2]}`, textAlign: 'center', zIndex: 1 }}>
              <div style={{ color: item[2], fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item[0]}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{item[1]}</div>
            </div>
          ))}
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '2rem', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}></div>
        </div>
        
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
            <strong>Manual Time:</strong> 4 Hours <span style={{ margin: '0 1rem', color: 'var(--text-secondary)' }}>|</span> <strong>AI Pipeline Time:</strong> 10 Minutes
          </p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Troubleshooting AI Pipelines</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>When AI Fails</h3>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Timeouts:</strong> If the dataset is too large, Code Interpreter might time out or crash.</li>
              <li><strong>Math Errors:</strong> LLMs are bad at math, which is why Code Interpreter writes Python to do the math. If it tries to guess without Python, it will fail.</li>
              <li><strong>Format Quirks:</strong> Hidden characters or weird date formats (US vs UK) can skew analysis.</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>The Fixes</h3>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Chunk Data:</strong> Break 100MB files into 20MB files before uploading.</li>
              <li><strong>Force Code:</strong> Explicitly say "Use Python to calculate the totals, do not estimate."</li>
              <li><strong>Sanity Check:</strong> Always ask AI: "Show me the first 5 rows of the cleaned data" before proceeding to analysis.</li>
            </ul>
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
            ['1. Data Cleaning', 'Use Copilot/ChatGPT to identify and fix 5 data quality issues in a messy dataset.'],
            ['2. Advanced Analysis', 'Create a pivot table showing performance by 2 dimensions (e.g., agent × month).'],
            ['3. Code Interpreter', 'Upload dataset to ChatGPT. Ask for: data summary, 3 charts, top 3 insights. Download charts.'],
            ['4. Full Report (Challenge)', 'Upload data → Clean → Analyze → Create charts → Write 3 insights → Download report. All in ChatGPT.']
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
          <ol style={{ color: 'var(--text-primary)', lineHeight: '2.2', margin: 0, paddingLeft: '2rem', fontSize: '1.3rem' }}>
            <li><strong>Data cleaning is 80% of analysis</strong> — AI reduces this to minutes.</li>
            <li><strong>Code Interpreter is the secret weapon</strong> — professional analysis without coding.</li>
            <li><strong>Mega-Prompts</strong> — Use one prompt to execute cleaning, charting, and insight generation all at once.</li>
            <li><strong>Advanced formulas in English</strong> — nested IFs, SUMIFS, no memorization.</li>
            <li><strong>Forecasting</strong> — describe what to predict, AI handles the math.</li>
            <li><strong>Full pipeline:</strong> clean → analyze → visualize → insight → report.</li>
          </ol>
        </div>
      </div>
    )
  }
];
