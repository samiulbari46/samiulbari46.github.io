<template>
  <main class="page">
    <h1>Education</h1>

    <section class="degree">
      <h2>University of Texas at El Paso</h2>
      <p class="meta">Ph.D. in Electrical and Computer Engineering | 2025 - Present</p>
      <ul>
        <li>Advisor: <a href="https://hb2504.utep.edu/Home/Profile?username=mhshuvo" target="_blank">Md Maruf Hossain Shuvo</a>, EBMI Lab.</li>
        <li>Research focus: Efficient AI Models, Physiological Digital Twin, AI Hardware Acceleration</li>
        <li>Current topics: Low-powered AI device, Wearable Medical Device, Muliti-modal AI.</li>
      </ul>
    </section>


    <section class="degree">
      <h2>Bangladesh University of Professionals</h2>
      <h3>Military Institute of Science and Technology</h3>
      <p class="meta">B.S. in Biomedical Engineering | 2020 - 2024 &nbsp;·&nbsp; GPA: 3.54 / 4.00</p>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Education",
});
</script>

<style scoped>
.page {
  max-width: 860px;
  margin: 48px 80px 64px 0;
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
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
}

p,
li {
  color: #374151;
  font-size: 16px;
  line-height: 1.65;
}

.degree {
  border-top: 1px solid #d9d9d9;
  padding: 20px 0 8px;
}

.degree:first-of-type {
  border-top: 3px solid #1f5f8b;
}

.meta {
  color: #5b6673;
  font-weight: 600;
}

ul {
  padding-left: 20px;
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
