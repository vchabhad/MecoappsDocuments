import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { slides as overviewSlides } from '../data/module_00';
import { slides as module1Slides } from '../data/module_01';
import { slides as module2Slides } from '../data/module_02';
import { slides as module3Slides } from '../data/module_03';
import { slides as module4Slides } from '../data/module_04';
import { slides as module5Slides } from '../data/module_05';
import { slides as module6Slides } from '../data/module_06';
import { slides as module7Slides } from '../data/module_07';
import { slides as module8Slides } from '../data/module_08';
import { slides as module9Slides } from '../data/module_09';
import { slides as module10Slides } from '../data/module_10';
import { slides as module11Slides } from '../data/module_11';
import { slides as module12Slides } from '../data/module_12';
import { slides as module13Slides } from '../data/module_13';
import { slides as module14Slides } from '../data/module_14';
import { slides as module15Slides } from '../data/module_15';
import { slides as module16Slides } from '../data/module_16';
import { slides as module17Slides } from '../data/module_17';
import { slides as module18Slides } from '../data/module_18';
import { slides as module19Slides } from '../data/module_19';
import { slides as module20Slides } from '../data/module_20';
import { slides as module21Slides } from '../data/module_21';

export default function Presentation() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideMap = {
    'overview': overviewSlides,
    '1': module1Slides,
    '2': module2Slides,
    '3': module3Slides,
    '4': module4Slides,
    '5': module5Slides,
    '6': module6Slides,
    '7': module7Slides,
    '8': module8Slides,
    '9': module9Slides,
    '10': module10Slides,
    '11': module11Slides,
    '12': module12Slides,
    '13': module13Slides,
    '14': module14Slides,
    '15': module15Slides,
    '16': module16Slides,
    '17': module17Slides,
    '18': module18Slides,
    '19': module19Slides,
    '20': module20Slides,
    '21': module21Slides,
  };

  const slides = slideMap[moduleId] || [{ id: 1, content: <h2>Module Not Found</h2> }];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  return (
    <div className="presentation-container">
      <div className="slide-content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.3 }}
            className="slide-glass-box glass-panel"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="presentation-controls">
        <button className="control-btn" onClick={() => navigate('/')}>
          <Home size={20} /> Dashboard
        </button>
        
        <div className="progress-indicator">
          Slide {currentSlide + 1} of {slides.length}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="control-btn" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft size={20} /> Prev
          </button>
          <button className="control-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            Next <ChevronRight size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
