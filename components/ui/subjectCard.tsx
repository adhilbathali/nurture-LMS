"use client"
import React from 'react';
import styled from 'styled-components';
// If you are using lottie-react, import it here
// import Lottie from "lottie-react";

type Props = {
    lottieData: any; // Pass your Lottie JSON or component here
    title: string;
    content: string;
    accentColor?: string;
}

const SubjectCard = ({ lottieData, title, content, accentColor = "#01823e" }: Props) => {
  return (
    <StyledWrapper accent={accentColor}>
      <div className="card-container">
        <div className="card-inner">

          {/* Lottie Pedestal Area */}
          <div className="lottie-section">
            <div className="lottie-platform" />
            <div className="lottie-player">
              {lottieData}
              {/* If using lottie-react: <Lottie animationData={lottieData} /> */}
            </div>
          </div>

          <div className="text-section">
            <h3 className="subject-title">{title}</h3>
            <div className="divider" />
            <p className="subject-content">{content}</p>
          </div>

          {/* Depth Layers */}
          <div className="glass-base" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ accent: string }>`
  .card-container {
    width: 300px;
    height: 420px;
    perspective: 1000px;
    margin: 20px;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
  }

  .card-container:hover .card-inner {
    transform: rotateY(10deg) rotateX(5deg) translateY(-10px);
  }

  /* The Glass Base */
  .glass-base {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    z-index: 1;
  }

  /* Lottie Floating Section */
  .lottie-section {
    position: absolute;
    top: -40px;
    width: 180px;
    height: 180px;
    z-index: 10;
    transform: translateZ(80px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lottie-platform {
    position: absolute;
    bottom: 20px;
    width: 120px;
    height: 20px;
    background: ${props => props.accent};
    filter: blur(30px);
    opacity: 0.2;
    border-radius: 50%;
    transition: 0.5s;
  }

  .lottie-player {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }

  .card-container:hover .lottie-player {
    transform: scale(1.1) translateY(-10px);
  }

  .card-container:hover .lottie-platform {
    opacity: 0.4;
    transform: scale(1.3);
  }

  /* Text Content */
  .text-section {
    position: relative;
    z-index: 5;
    text-align: center;
    transform: translateZ(40px);
  }

  .subject-title {
    font-size: 26px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 10px;
  }

  .divider {
    width: 40px;
    height: 4px;
    background: ${props => props.accent};
    margin: 0 auto 20px;
    border-radius: 2px;
  }

  .subject-content {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
    font-weight: 500;
  }
`;

export default SubjectCard;