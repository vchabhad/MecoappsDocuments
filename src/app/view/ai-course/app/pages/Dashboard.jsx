import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Presentation as PresentationIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();

  const overviewModule = { id: 'overview', title: '00: Course Overview' };

  const levels = [
    {
      id: 1,
      title: 'Level 1: Understand AI',
      subtitle: 'Bronze: AI Aware',
      modules: [
        { id: '1', title: '01: Introduction to AI' },
        { id: '2', title: '02: Types of AI' },
        { id: '3', title: '03: Inside the Machine' },
        { id: '4', title: '04: Hallucinations & Verification' },
        { id: '5', title: '05: AI Safety & Ethics' }
      ]
    },
    {
      id: 2,
      title: 'Level 2: Master the Skills',
      subtitle: 'Silver: AI Practitioner',
      modules: [
        { id: '6', title: '06: The AI Ecosystem' },
        { id: '7', title: '07: AI-First Thinking' },
        { id: '8', title: '08: Prompt Engineering Part 1' },
        { id: '9', title: '09: Prompt Engineering Part 2' },
        { id: '10', title: '10: AI Communication & Tone' }
      ]
    },
    {
      id: 3,
      title: 'Level 3: Master the Tools',
      subtitle: 'Gold: AI Proficient',
      modules: [
        { id: '11', title: '11: ChatGPT & AI Tools Comparison' },
        { id: '12', title: '12: AI Image Generation' },
        { id: '13', title: '13: Copilot in Outlook & Teams' },
        { id: '14', title: '14: Copilot in Excel, Word & PPT' },
        { id: '15', title: '15: Excel Power Data Analysis' },
        { id: '16', title: '16: NotebookLM & Custom GPTs' },
        { id: '17', title: '17: AI Video & Audio Media' }
      ]
    },
    {
      id: 4,
      title: 'Level 4: Apply & Build',
      subtitle: 'Diamond: AI Builder',
      modules: [
        { id: '18', title: '18: The AI-First Mindset & Culture' },
        { id: '19', title: '19: Workflow Design & Power Automate' },
        { id: '20', title: '20: Building Copilot Agents' },
        { id: '21', title: '21: Department Workshops & Capstone' }
      ]
    }
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header glass-panel" style={{ textAlign: 'center' }}>
        <h1 className="text-gradient">Corporate AI Proficiency Course</h1>
        <p>Trainer Presentation Dashboard</p>
      </header>
      
      <main className="dashboard-main">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="level-card glass-panel"
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="level-header" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <h2>Pre-requisites</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button 
              className="module-button"
              style={{ width: '100%', maxWidth: '400px' }}
              onClick={() => navigate(`/module/${overviewModule.id}`)}
            >
              <PresentationIcon size={24} style={{ marginBottom: '0.5rem' }} />
              <span style={{ fontSize: '1.1rem' }}>{overviewModule.title}</span>
            </button>
          </div>
        </motion.div>

        {levels.map((level, idx) => (
          <motion.div 
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx + 1) * 0.1 }}
            className="level-card glass-panel"
          >
            <div className="level-header" style={{ textAlign: 'center' }}>
              <h2>{level.title}</h2>
              <span>{level.subtitle}</span>
            </div>
            <div className="module-grid">
              {level.modules.map(mod => (
                <button 
                  key={mod.id} 
                  className="module-button"
                  onClick={() => navigate(`/module/${mod.id}`)}
                >
                  <PresentationIcon size={24} style={{ marginBottom: '0.5rem' }} />
                  <span>{mod.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
