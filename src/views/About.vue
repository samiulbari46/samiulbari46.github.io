<template>
  <main class="page">
    <h1>About</h1>

    <section class="section-block">
      <p>
    I am currently enrolled as a Ph.D. student in
    <strong>Electrical and Computer Engineering</strong>
    at the
    <strong>University of Texas at El Paso (UTEP)</strong>,
    where I am working as a
    <strong>Ph.D. Research Associate</strong>
    in the
    <strong>Edge and Biomedical Intelligence (EBMI) Laboratory</strong>.
    My research focuses on intelligent computational methods
    and hardware-efficient AI systems, with applications in
    healthcare, biomedical engineering, and edge technologies.
  </p>

  <p>
    In addition to my research responsibilities, I also woking as a
    <strong>Teaching Assistant</strong>
    in the Department of Electrical and Computer Engineering
    at UTEP, where I contribute to undergraduate engineering
    education through instructional and laboratory support.
  </p>

  <p>
    I received my
    <strong>Bachelor of Science (B.Sc.)</strong>
    degree in <strong>Biomedical Engineering</strong>
    from the
    <strong>Military Institute of Science and Technology</strong> of Bangladesh University of Professionals,
    in 2024. My undergraduate research focused on applications
    of artificial intelligence in healthcare and medicine,
    establishing a foundation for my interdisciplinary research.
  </p>

  <p>
    My research interests include
    <strong>Computer Vision, Deep Learning,
    AI Hardware Acceleration, and Hardware-Efficient AI</strong>,
    with an emphasis on developing efficient and reliable
    intelligent systems for healthcare and real-world applications.
  </p>
      
      <p>
        Here is my
        <a
          href="https://drive.google.com/file/d/1bPc4VpecCHwViR9Sj_7yezgX284OsMlS/view?usp=share_link"
          >resume</a
        >.
      </p>
    </section>

    <section class="section-block">
      <h2>Technical Skills</h2>
      <ul class="skills-list">
        <li><strong>Image Processing:</strong> GAN-based Augmentation, Heuristic Methods (Filtering), Vision Transformers</li>
        <li><strong>Deep Learning (DL):</strong> PyTorch, TensorFlow, Recurrent Neural Networks, Spiking Neural Networks, Transformers</li>
        <li><strong>DL Model Compression:</strong> Pruning, Quantization, Knowledge Distillation, Low-rank Factorization</li>
        <li><strong>Signal Processing:</strong> FFT and STFT, Wavelet Transform, Biomedical Signal Processing (ECG, EEG, EMG, PPG), Signal Denoising</li>
        <li><strong>Programming Languages:</strong> Python, C, C++, MySQL, Matlab</li>
        <li><strong>Hardware:</strong> Verilog, OpenVINO, Vitis-Vivado, Cadence-Virtuoso, QSpice, LTSpice, Arduino</li>
        <li><strong>Other ML:</strong> State-space Models, Statistical Data Analysis, Feature selection and Extraction</li>
      </ul>
    </section>

    <section class="section-block">
      <h2>Contact</h2>
      <p>
        Email:
        <a href="mailto:sbari@miners.utep.edu">sbari@miners.utep.edu</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/samiulbari46" target="_blank">GitHub</a>
        &nbsp;·&nbsp;
        <a href="https://www.linkedin.com/in/samiul-bari-52557114b/" target="_blank">LinkedIn</a>
        &nbsp;·&nbsp;
        <a href="https://scholar.google.com/citations?user=5qSrK0gAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a>
      </p>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<style scoped>
.page {
  max-width: 860px;
  margin: 48px 72px 64px 0;
  text-align: left;
}

h1 {
  color: #111827;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 22px;
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

p + p {
  margin-top: 14px;
}

.section-block {
  border-bottom: 1px solid #ececec;
  padding: 26px 0;
}

.section-block:first-of-type {
  padding-top: 0;
}

.section-block:last-child {
  border-bottom: 0;
}

.skills-list {
  padding-left: 20px;
}

.skills-list li + li {
  margin-top: 8px;
}

a {
  color: #175e91;
  font-weight: 600;
}

@media (max-width: 960px) {
  .page {
    margin: 32px 24px 48px 0;
  }
}
</style>