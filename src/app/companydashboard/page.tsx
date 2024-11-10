// src/app/dashboard/page.tsx
import React from 'react';
import Layout from '../components/Layout';
import CompanyDashboard from '../components/CompanyDashboard';

export default function CompanyDashboardPage() {
  return (
    <Layout>
      <CompanyDashboard />
    </Layout>
  );
}
