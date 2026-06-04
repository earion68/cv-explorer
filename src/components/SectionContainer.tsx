import React from 'react';
import '../styles/SectionContainer.css';

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
}) => {
  return (
    <section className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
};
