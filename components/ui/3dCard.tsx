"use client"
import React from 'react';
import styled from 'styled-components';

type Props = {
    icon: React.ReactNode;
    title: string;
    content: string;
    grade: string;
}

const Card = ({ icon, title, content, grade }: Props) => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          {/* 3D POP-OUT GRADE TAG */}
          <div className="grade-tag">{grade}</div>

          <div className="bg-pattern" />
          <div className="margin-line" />

          <div className="icon-wrapper">
            <div className="icon-bg" />
            <div className="icon-content">{icon}</div>
          </div>

          <div className="content-box">
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{content}</p>
          </div>

          <div className="glow-green" />
          <div className="glow-brown" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .parent {
    width: 320px;
    padding: 30px;
    perspective: 1500px; /* Increased perspective for deeper 3D effect */
  }

  .card {
    position: relative;
    height: 380px;
    width: 100%;
    background: #fdfdfd;
    border-radius: 24px;
    border: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px;
    transform-style: preserve-3d; /* Crucial for child 3D movement */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  /* --- THE 3D GRADE TAG --- */
  .grade-tag {
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 6px 14px;
    background: #01823e;
    color: white;
    border-radius: 8px;
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
    z-index: 50;

    /* Starting position slightly off the surface */
    transform: translateZ(30px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    /* Shadow that simulates distance from the card */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .card:hover .grade-tag {
    /* Flies way out (120px) and rotates slightly for depth */
    transform: translateZ(120px) rotateX(-15deg) rotateY(-10deg);
    background: #01823e;

    /* Deeper, softer shadow as it gets "higher" */
    box-shadow: -15px 20px 30px rgba(0, 0, 0, 0.25);
  }

  /* --- THE REST OF THE CARD --- */
  .card:hover {
    transform: rotateY(15deg) rotateX(10deg) translateY(-10px);
    border-color: rgba(1, 130, 62, 0.3);
    box-shadow: -20px 30px 50px rgba(0, 0, 0, 0.1);
  }

  .bg-pattern {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 1;
    background-image:
      linear-gradient(#f1f1f1 1.5px, transparent 1.5px),
      linear-gradient(90deg, #f1f1f1 1.5px, transparent 1.5px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  .margin-line {
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(1, 130, 62, 0.2);
    z-index: 1;
  }

  .icon-wrapper {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 65px;
    height: 65px;
    transform: translateZ(60px); /* Icons float halfway */
    z-index: 5;
  }

  .icon-bg {
    position: absolute;
    inset: 0;
    background: #6b4722;
    border-radius: 18px;
    opacity: 0.1;
    transition: 0.5s;
  }

  .card:hover .icon-bg {
    background: #01823e;
    opacity: 1;
    transform: scale(1.1) rotate(10deg);
  }

  .icon-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b4722;
    font-size: 30px;
    transition: 0.5s;
  }

  .card:hover .icon-content {
    color: white;
    transform: scale(1.2) translateZ(20px);
  }

  .content-box {
    position: relative;
    z-index: 10;
    transform: translateZ(40px); /* Text floats above grid */
    pointer-events: none;
  }

  .card-title {
    font-size: 24px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 10px;
  }

  .card-content {
    font-size: 15px;
    line-height: 1.6;
    color: #555;
    font-weight: 500;
  }

  .glow-green {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 80% 20%, rgba(1,130,62,0.08), transparent 50%);
    top: 0;
    left: 0;
    z-index: 0;
  }

  .icon-content svg {
    width: 32px;
    height: 32px;
  }
`;

export default Card;