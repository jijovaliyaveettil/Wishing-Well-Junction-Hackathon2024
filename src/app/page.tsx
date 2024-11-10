// src/app/page.tsx
import React from 'react';
import Layout from './components/Layout';
import Homepage from './components/Homepage';

export default function Home() {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}
