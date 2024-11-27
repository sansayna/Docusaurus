import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Developing Technical Documentation"
      description="Exploring the essentials of microsites and Docusaurus as part of my Technical Writer Certification."
    >
      <header style={{ backgroundColor: '#f0f4f8', padding: '2rem', textAlign: 'center' }}>
        <h1>Developing Technical Documentation</h1>
        <p>
          In the latest module of my class, <strong>24F_TWR2019_450 Developing Technical Documentation</strong>,
          which I am taking as part of my Technical Writer Certification, I explored how to navigate
          the intricacies of crafting microsites with <strong>Docusaurus</strong>. This static site generator
          is specifically designed for seamless documentation and content delivery, and it provided me
          with invaluable insights into creating effective microsites.
        </p>
      </header>
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <section>
          <h2>Overview</h2>
          <p>
            This module focused on the fundamentals of static site generation. I learned to set up
            a Docusaurus project from scratch and explored its structured environment, which lays the
            groundwork for building polished, user-centric microsites. By the end of this module, I felt
            more confident in transforming raw Markdown content into an engaging and professional web
            experience.
          </p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>Learning Objectives</h2>
          <p>
            Here are some of the key objectives I accomplished during this module:
          </p>
          <ul>
            <li>
              Identified the defining characteristics of microsites and articulated the benefits of
              using <strong>Docusaurus</strong> as a static site generator.
            </li>
            <li>
              Explained the concept of static site generation and how <strong>Docusaurus</strong> leverages
              it to optimize content management and site performance.
            </li>
            <li>
              Demonstrated the process of initializing a new <strong>Docusaurus</strong> project, including
              executing command-line operations for the development setup.
            </li>
            <li>
              Analyzed the structure and components of a <strong>Docusaurus</strong> project, understanding
              the role of each element in the overall architecture of a microsite.
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}