<template>
  <main class="page">
    <section class="hero">
      <h1>Samiul Bari</h1>
      <p class="subtitle">
        Ph.D. student in Electrical and Computer Engineering at University of Texas at El Paso, working on
        Wearable Edge AI systems and efficient AI for healthcare applications.
      </p>
      <p>
        My current research focuses on <strong>efficient artificial intelligence</strong>, with an emphasis on 
        <strong>deep learning model compression, quantization, pruning, and AI hardware acceleration</strong>. I am particularly 
        interested in developing computationally efficient and robust deep learning architectures for deployment on 
        resource-constrained edge devices. My research also explores <strong>multimodal AI, time-series modeling, AI-augmented medical devices, 
        and digital twins of human physiology</strong>, with applications in biomedical signal analysis, physiological monitoring, and 
        personalized healthcare.
      </p>
      <nav class="links" aria-label="Profile links">
        <a class="pill-link" href="/CV.pdf" target="_blank" rel="noopener"
          >Resume</a
        >
        <a
          class="pill-link"
          href="https://github.com/samiulbari46"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
        <a
          class="pill-link"
          href="https://www.linkedin.com/in/samiul-bari-52557114b/"
          target="_blank"
          rel="noopener"
          >LinkedIn</a
        >
      </nav>
    </section>

    <section class="section-block">
      <h2>Research Interests</h2>
      <ul class="compact-list">
        <li>
          <strong>Efficient Artificial Intelligence:</strong>
          Development of computationally efficient AI models through
          model compression, quantization, pruning, and optimization
          to reduce computational complexity, memory requirements,
          and energy consumption.
        </li>

        <li>
          <strong>Multimodal AI and Time-Series Modeling:</strong>
          Development of deep learning architectures for analyzing
          multimodal data and temporal patterns, with applications
          in biomedical signal processing, computer vision,
          and intelligent healthcare systems.
        </li>

        <li>
          <strong>AI Hardware Acceleration:</strong>
          Design and optimization of hardware-efficient AI
          architectures using FPGA, GPU, and edge computing
          platforms for low-latency, energy-efficient,
          and real-time inference.
        </li>

        <li>
          <strong>AI-Augmented Medical Devices:</strong>
          Integration of artificial intelligence with medical
          devices, wearable sensors, and embedded systems
          to support physiological monitoring, automated
          analysis, and intelligent clinical decision support.
        </li>

        <li>
          <strong>Digital Twins of Human Physiology:</strong>
          Development of computational and AI-driven digital
          twins that integrate physiological models, patient-specific
          data, and predictive analytics to simulate physiological
          responses and support personalized healthcare.
        </li>
      </ul>
    </section>
  </main>
</template>


<style scoped>
.page {
  max-width: 860px;
  margin: 48px 72px 64px 0;
  text-align: left;
}

.hero {
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 24px;
}

h1 {
  color: #111827;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 12px;
}

h2 {
  color: #111827;
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 12px;
}

p,
li {
  color: #374151;
  font-size: 16px;
  line-height: 1.65;
}

.subtitle {
  color: #1f2937;
  font-size: 18px;
  font-weight: 600;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.pill-link {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: #175e91;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 14px;
  text-decoration: none;
  white-space: nowrap;
}

.pill-link:hover {
  background: #f0f6ff;
  border-color: #175e91;
}

.section-block {
  border-bottom: 1px solid #ececec;
  padding: 26px 0;
}

.section-block:last-child {
  border-bottom: 0;
}

.compact-list {
  margin-bottom: 0;
  padding-left: 20px;
}

.compact-list li + li {
  margin-top: 8px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 0;
  padding-left: 0;
}

.news-item {
  align-items: baseline;
  display: flex;
  gap: 14px;
}

.news-date {
  color: #1f5f8b;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 700;
  width: 72px;
}

.news-text {
  color: #374151;
}

.publication-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
}

.work-head {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
}

.work-desc {
  margin-bottom: 0;
}

.venue-badge {
  background: #eef4fa;
  border-radius: 4px;
  color: #175e91;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 3px 9px;
  text-transform: uppercase;
}

.award-badge {
  background: #fff4e0;
  border-radius: 4px;
  color: #92400e;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 3px 9px;
}

.pub-link {
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  color: #175e91;
  font-size: 13px;
  font-weight: 700;
  margin-left: 8px;
  padding: 2px 9px;
  text-decoration: none;
  white-space: nowrap;
}

.pub-link:hover {
  background: #f0f6ff;
  border-color: #175e91;
}

.see-all {
  margin-top: 16px;
  margin-bottom: 0;
}

.see-all a {
  color: #175e91;
  font-weight: 700;
}

@media (max-width: 960px) {
  .page {
    margin: 32px 24px 48px 0;
  }

  h1 {
    font-size: 32px;
  }

  .news-item {
    flex-direction: column;
    gap: 2px;
  }

  .news-date {
    width: auto;
  }
}
</style>
