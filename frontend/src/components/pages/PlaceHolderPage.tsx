// src/components/common/PlaceholderPage.tsx
import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>This page is under construction.</p>
    </div>
  );
};

export default PlaceholderPage;