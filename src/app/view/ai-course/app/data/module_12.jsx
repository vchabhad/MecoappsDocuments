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
          <h1 className="text-huge text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Module 12</h1>
          <h2 style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>AI Image Generation</h2>
          <p style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '1.5rem' }}>Create Professional Images in Seconds</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Visual Advantage</h2>
        <div style={{ background: 'var(--glass-bg)', padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.5rem', lineHeight: '1.6', margin: 0 }}>
            Visual content is everywhere in business: presentations, social media, training materials.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            Before AI, you had 3 options: hire a designer (expensive), use stock photos (generic), or make something ugly in PowerPoint.
          </p>
          <p style={{ color: 'var(--accent-primary)', fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1.5rem' }}>
            Now you can generate custom, professional-quality images in 30 seconds.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>How Image AI Works</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', textAlign: 'center', borderBottom: '4px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Image AI is COMPLETELY DIFFERENT from Text AI</h3>
          <p style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
            Image AI understands DESCRIPTIONS, not intentions. The more precisely you describe what you want, the better the image.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h4 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Text AI</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Predicts next word</li>
              <li>Output streams word by word</li>
              <li>Errors: Wrong facts (Hallucinations)</li>
            </ul>
          </div>
          
          <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
            <h4 style={{ color: '#ec4899', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>Image AI</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li>Refines random noise into an image</li>
              <li>Output appears all at once</li>
              <li>Errors: Extra fingers, distorted text</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Big 5 Image Tools</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Midjourney</h3>
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>The undisputed king of photorealism and artistic quality. Runs via Discord.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Best for: The absolute highest quality, cinematic, breathtaking images.</p>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>DALL-E 3 (ChatGPT)</h3>
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>The easiest to use. Excellent at following complex, multi-sentence prompts.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Best for: Quick iteration, conversational generating, illustrations.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Adobe Firefly</h3>
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Trained exclusively on licensed Adobe Stock images. Completely copyright safe.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Best for: Corporate environments needing strict commercial safety.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Microsoft Designer</h3>
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Free tool that combines DALL-E 3 with pre-made templates and sizing.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Best for: Social media graphics, quick event banners, instant layouts.</p>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>Canva AI</h3>
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Full design platform that integrates AI generation with your Brand Kit.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Best for: Taking an AI image and adding text, logos, and presentation layers.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Advanced Tools: The Next Level</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Leonardo.ai</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>The "Pro-Sumer" alternative to Midjourney.</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>The UI Advantage:</strong> Unlike Midjourney which forces you to use Discord, Leonardo offers a beautiful, slider-based web interface.</li>
              <li><strong>Granular Control:</strong> Best tool for generating specific game assets, 2D sprites, and retaining strict stylistic control over your images.</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #06b6d4' }}>
            <h3 style={{ color: '#06b6d4', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Nano Banana (Google Gemini)</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Google's flagship conversational image editor.</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>Conversational Editing:</strong> You don't just generate an image; you chat with it. You can say "blur the background" or "change the shirt to blue" without losing the original image structure.</li>
              <li><strong>Safe & Watermarked:</strong> Includes SynthID, an invisible watermark verifying it was AI-generated.</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>5 Elements of a Great Image Prompt</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          {[
            ['1. SUBJECT', 'What is in the image?', 'Instead of "A team", use "A diverse team of 6 professionals in business casual attire".'],
            ['2. STYLE', 'What does it look like?', 'Photorealistic, Flat illustration, Watercolor, Isometric, Corporate minimal.'],
            ['3. COMPOSITION', 'How is it arranged?', 'Close-up, Wide shot, Bird\'s eye view, Centered, Rule of thirds, Negative space.'],
            ['4. MOOD & LIGHTING', 'What is the vibe?', 'Bright/clean, Golden hour, Dramatic lighting, Soft/natural, Cool blue tones.'],
            ['5. TECHNICAL DETAILS', 'Format and specs.', '16:9 aspect ratio, Square format, White background, NO TEXT.']
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '1.5rem', background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', fontWeight: 'bold' }}>{item[0]}<br/><span style={{ color: '#fff', fontSize: '1rem', fontWeight: 'normal' }}>{item[1]}</span></div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{item[2]}</div>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Prompt Examples & Mistakes</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Good Prompt Example</h3>
            <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '8px', color: '#a7f3d0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.6' }}>
              "Create a professional banner image for a team meeting.<br/><br/>
              <strong>Style:</strong> Modern corporate, flat illustration.<br/>
              <strong>Subject:</strong> Connected circles in blue and teal.<br/>
              <strong>Composition:</strong> Wide format (16:9), empty space on the left.<br/>
              <strong>Mood:</strong> Optimistic, professional.<br/>
              <strong>Technical:</strong> No text in the image. Clean design."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Common Mistakes</h3>
            <ul style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '2', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>"Create a logo"</strong> → Use a designer for brand identity.</li>
              <li><strong>"Write 'Happy Birthday' on a cake"</strong> → AI struggles with text. Add text later in Canva.</li>
              <li><strong>"A photo of my team"</strong> → AI cannot recreate specific real people accurately.</li>
              <li><strong>Too vague ("something professional")</strong> → AI will guess wildly.</li>
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>When NOT to Use AI Images</h2>
        
        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '1.1rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#ef4444' }}>
                <th style={{ padding: '1rem' }}>Situation</th>
                <th style={{ padding: '1rem' }}>Why Not</th>
                <th style={{ padding: '1rem' }}>What to Do Instead</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Company Logo / Brand</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Inconsistent, not trademarkable</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Professional designer</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Specific Real People</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Cannot recreate accurately</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Actual photos (with permission)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Legal/Compliance Docs</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>May be considered misleading</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Approved stock / actual documentation</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Authenticity Matters</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Can feel fake (testimonials)</td>
                <td style={{ padding: '1rem', color: '#10b981' }}>Real photography</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Master Prompts: Image Generation</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Presentation Background</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Create a clean, abstract corporate background for a PowerPoint slide. Style: modern, subtle gradients, geometric waves. Colors: deep navy blue and teal. Composition: heavily weighted to the edges with completely empty negative space in the center for text. 16:9 aspect ratio."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Isometric Icon</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "A 3D isometric illustration of a server rack transforming into a cloud. Style: vibrant, clean tech aesthetic, matte clay material. Background: solid pure white. Lighting: soft studio lighting. Square aspect ratio."
            </div>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>The Stock Photo Alternative</h3>
            <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.5' }}>
              "Photorealistic image of two professionals (one older woman, one younger man) reviewing a document in a bright, modern glass office. Shot on 35mm lens, blurred background (bokeh), natural sunlight. Authentic corporate documentary style, unposed."
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
        <h2 className="text-large text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>Advanced Control: Iteration & Tweaking</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #8b5cf6' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Iterating Without Starting Over</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>When DALL-E generates a good image but misses a detail, don't rewrite the whole prompt.</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>To change style:</strong> "Keep the exact same layout, but change the style to watercolor."</li>
              <li><strong>To add/remove:</strong> "Keep this image, but remove the laptop from the desk."</li>
              <li><strong>To adjust mood:</strong> "Make the lighting warmer and more dramatic."</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ec4899' }}>
            <h3 style={{ color: '#ec4899', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>Understanding Aspect Ratios</h3>
            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>Specify the shape in your text prompt:</p>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', color: '#fbcfe8', fontFamily: 'monospace', fontSize: '1rem', lineHeight: '1.6' }}>
              • "16:9 aspect ratio" (Widescreen, PPT)<br/>
              • "9:16 aspect ratio" (Vertical, Mobile/TikTok)<br/>
              • "1:1 aspect ratio" (Square, Instagram)<br/>
              • "Panoramic aspect ratio" (Headers)
            </div>
          </div>
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
            <li><strong>The Big 5 Tools:</strong> Midjourney (Quality), DALL-E (Ease), Firefly (Copyright Safe), Designer (Social), Canva (Layouts).</li>
            <li><strong>Advanced Tools:</strong> Leonardo gives granular UI control, and Nano Banana (Gemini) allows conversational editing.</li>
            <li><strong>5 elements of great prompts:</strong> Subject, Style, Composition, Mood, Technical Details.</li>
            <li><strong>Never ask AI to render text:</strong> Add text later using Canva or PowerPoint.</li>
            <li><strong>Know when NOT to use AI images:</strong> Logos, real people, legal docs, critical authenticity.</li>
          </ol>
        </div>
      </div>
    )
  }
];
