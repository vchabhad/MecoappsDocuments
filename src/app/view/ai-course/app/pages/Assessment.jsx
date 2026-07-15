import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assessments } from '../data/assessments';

function Assessment() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const assessment = assessments[moduleId];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  if (!assessment) {
    return (
      <div className="app-container center-content">
        <h2 className="text-huge text-gradient">Assessment not found</h2>
        <button className="nav-btn" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleSelect = (index) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === assessment.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const question = assessment.questions[currentQuestion];
  const isFinished = currentQuestion >= assessment.questions.length;

  return (
    <div className="app-container" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <button className="nav-btn" onClick={() => navigate('/')}>
          ← Dashboard
        </button>
        <h1 className="text-large text-gradient" style={{ margin: 0 }}>
          {assessment.title}
        </h1>
        <div style={{ width: '100px' }}></div> {/* spacer */}
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="slide-glass-box animate-slide-up" style={{ maxWidth: '800px', width: '100%', height: 'auto', padding: '3rem', position: 'relative' }}>
          
          {isFinished ? (
            <div className="center-content">
              <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>{score === assessment.questions.length ? '🏆' : '📊'}</div>
              <h2 className="text-huge text-gradient" style={{ marginBottom: '1rem' }}>Assessment Complete</h2>
              <p className="text-large" style={{ color: '#fff', marginBottom: '2rem' }}>
                You scored {score} out of {assessment.questions.length}
              </p>
              <button className="nav-btn" onClick={() => navigate('/')}>
                Return to Dashboard
              </button>
            </div>
          ) : (
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                <span>Question {currentQuestion + 1} of {assessment.questions.length}</span>
                <span>Score: {score}</span>
              </div>
              
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '2rem', lineHeight: '1.4' }}>
                {question.question}
              </h3>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {question.options.map((option, index) => {
                  let bgColor = 'rgba(255, 255, 255, 0.05)';
                  let borderColor = 'rgba(255, 255, 255, 0.1)';
                  
                  if (showResult) {
                    if (index === question.correctAnswer) {
                      bgColor = 'rgba(34, 197, 94, 0.2)';
                      borderColor = '#22c55e';
                    } else if (index === selectedAnswer) {
                      bgColor = 'rgba(239, 68, 68, 0.2)';
                      borderColor = '#ef4444';
                    }
                  } else if (selectedAnswer === index) {
                    bgColor = 'rgba(59, 130, 246, 0.3)';
                    borderColor = '#3b82f6';
                  }

                  return (
                    <div 
                      key={index}
                      onClick={() => handleSelect(index)}
                      style={{ 
                        padding: '1.5rem', 
                        background: bgColor, 
                        border: `2px solid ${borderColor}`,
                        borderRadius: '12px',
                        cursor: showResult ? 'default' : 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '1.2rem',
                        color: '#fff'
                      }}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>

              {showResult && (
                <div className="animate-slide-up" style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '12px', borderLeft: selectedAnswer === question.correctAnswer ? '4px solid #22c55e' : '4px solid #ef4444' }}>
                  <h4 style={{ color: selectedAnswer === question.correctAnswer ? '#22c55e' : '#ef4444', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
                    {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.1rem', lineHeight: '1.5' }}>
                    {question.explanation}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
                {!showResult ? (
                  <button 
                    className="nav-btn" 
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                    style={{ opacity: selectedAnswer === null ? 0.5 : 1 }}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button className="nav-btn" onClick={handleNext}>
                    {currentQuestion === assessment.questions.length - 1 ? 'Finish' : 'Next Question'} →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Assessment;
