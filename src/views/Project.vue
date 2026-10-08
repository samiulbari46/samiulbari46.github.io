<template>
  <main class="page">
    <h1>Projects</h1>
    <p class="intro">
      Selected research and engineering projects in biomedical AI, efficient deep learning,
      physiological modeling, and hardware acceleration.
    </p>

    <section class="project-list">
      <article class="project-card" v-for="project in projects" :key="project.name">
        <div class="card-header">
          <h2>{{ project.name }}</h2>
          <div class="card-links">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer">Demo</a>
            <a v-if="project.paper" :href="project.paper" target="_blank" rel="noopener noreferrer">Paper</a>
          </div>
        </div>

        <p class="desc">{{ project.desc }}</p>

        <figure class="project-figure">
          <img :src="project.figure" :alt="project.figureAlt" loading="lazy" />
          <figcaption>{{ project.caption }}</figcaption>
        </figure>

        <div class="tags">
          <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "ExerTwin-T1D: Exercise-Aware Digital Twin for Type 1 Diabetes",
          desc: "Developed a personalized, physiology-based digital twin for counterfactual blood glucose simulation under varying exercise intensity and duration, insulin dosing, and carbohydrate intake. A dual-core parameter identification approach models glucose–insulin kinetics and exercise-induced physiological changes, including immediate and prolonged insulin sensitivity effects. Evaluated using 50 virtual subjects from the UVA/Padova T1D simulator and real-patient datasets (T1D-UoM and OhioT1DM).",
          github: "",
          demo: "",
          paper: "",
          figure: "/images/projects/digital_twin_figure1.png",
          figureAlt: "ExerTwin-T1D framework combining glucose absorption, insulin absorption, and exercise-adapted glucose-insulin homeostasis",
          caption: "Figure 1. Overview of the ExerTwin-T1D physiological modeling framework.",
          tags: ["Python", "Digital Twin", "Physiological Modeling", "Type 1 Diabetes", "CGM", "MCMC"],
        },
        {
          name: "Swin-VSA: Quantization-Aware Vision Transformer for GI Disease Classification",
          desc: "Designed a hierarchical vision transformer for automated classification of 18 gastrointestinal image categories using the GastroVision dataset. The model integrates varied-size window attention and overlapped patch embedding to capture multi-scale visual features. INT8 quantization-aware training reduces model size by approximately 74% relative to the full-precision Swin-T baseline, while Grad-CAM provides visual explanations of classification decisions.",
          github: "",
          demo: "",
          paper: "",
          figure: "/images/projects/gi_figure1.png",
          figureAlt: "Swin-VSA hierarchical vision transformer with varied-size window attention and overlapped patch embedding",
          caption: "Figure 1. Proposed Swin-VSA architecture with varied-size window attention and overlapped patch embedding.",
          tags: ["PyTorch", "Computer Vision", "Swin Transformer", "INT8 QAT", "Grad-CAM", "Medical Imaging"],
        },
        {
          name: "Design and Optimization of an FPGA-Based Spiking Neural Network Accelerator",
          desc: "Designed and deployed a lightweight Leaky Integrate-and-Fire (LIF) spiking neural network accelerator on a Xilinx PYNQ-Z1 FPGA for MNIST digit classification. The workflow combines Bernoulli spike encoding, INT8 post-training quantization, Vitis HLS accelerator design, and Vivado integration through AXI interfaces. The reported implementation achieved 89.56% test accuracy and 0.236 ms latency per image without using DSP slices.",
          github: "",
          demo: "",
          paper: "",
          figure: "/images/projects/snn_figure1.png",
          figureAlt: "Spiking neural network FPGA accelerator workflow from MNIST preprocessing and spike encoding to Vitis HLS and Vivado deployment",
          caption: "Figure 1. Methodological workflow of the LIF-based SNN accelerator on the PYNQ-Z1 FPGA.",
          tags: ["FPGA", "Spiking Neural Networks", "Vitis HLS", "Vivado", "PYNQ-Z1", "INT8"],
        },
      ],
    };
  },
});
</script>

<style scoped>
.page {
  max-width: 900px;
  margin: 48px 80px 64px 0;
  text-align: left;
}

h1 {
  color: #111827;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}

.intro {
  color: #374151;
  font-size: 16px;
  line-height: 1.65;
  margin-bottom: 28px;
}

.intro a {
  color: #175e91;
  font-weight: 700;
}

.project-list {
  display: grid;
  gap: 16px;
}

.project-card {
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 22px;
}

.card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

h2 {
  color: #111827;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.card-links {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.card-links a {
  color: #175e91;
  font-size: 14px;
  font-weight: 700;
}

.desc {
  color: #374151;
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 12px;
}

.project-figure {
  margin: 14px 0 18px;
}

.project-figure img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  object-fit: contain;
}

.project-figure figcaption {
  margin-top: 8px;
  color: #6b7280;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: #f1f5f9;
  border-radius: 4px;
  color: #4b5563;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
}

@media (max-width: 960px) {
  .page {
    margin: 32px 24px 48px 0;
  }

  .card-header {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
