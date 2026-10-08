<template>
  <a-layout class="layout">
    <a-layout-header>
      <a-menu mode="horizontal" :style="{ lineHeight: '64px' }">
        <router-link :to="{ name: 'home' }">
          <a-menu-item key="1">Samiul Bari</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'about' }">
          <a-menu-item key="8">About</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'education' }">
          <a-menu-item key="4">Education</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'projects' }">
          <a-menu-item key="2">Projects</a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-header>
    <hr style="margin: 0px; opacity: 0" />
  </a-layout>
  <div class="container" style="max-width: unset; margin: 0px">
    <div class="row" v-if="collapse" style="margin-top: 25px">
      <div class="col-3" style="margin: auto; text-align: center">
        <img
          src="../assets/Image_SamiulBari.png"
          style="border-radius: 0; width: 70%"
        />
      </div>
      <div class="col" style="margin: auto">
        <div>
          <p style="margin-bottom: 0px"><b>Samiul Bari</b></p>
          <p style="font-size: 10px">
            <b>Ph.D. in Electrical and Computer Engineering, University of Texas at El Paso</b>
          </p>
          <p style="font-size: 10px">
            <b>Efficient AI in Healthcare and Biomedicine</b>
          </p>

          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <MailOutlined />
            <a href="mailto: sbari@miners.utep.edu" style="margin-left: 5px"
              >Email</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <GithubOutlined />
            <a href="https://github.com/samiulbari46/" style="margin-left: 5px"
              >GitHub</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <LinkedinOutlined />
            <a
              href="https://www.linkedin.com/in/samiul-bari-52557114b/"
              style="margin-left: 5px"
              >LinkedIn</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <GoogleOutlined />
            <a
              href="https://scholar.google.com/citations?user=5qSrK0gAAAAJ&hl=en&oi=ao"
              style="margin-left: 5px"
              >Google Scholar</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3" v-if="!collapse"> 
        <div class="row">
          <img
            src="../assets/Image_SamiulBari.png"
            style="
              margin-top: 50px;
              margin-left: auto;
              margin-right: auto;
              border-radius: 0;
              width: 70%;
            "
          />
        </div>
        <div style="margin-top: 20px; margin-left: 20px">
          <p style="margin-bottom: 0px"><b>Samiul Bari</b></p>
          <p style="font-size: 10px">
            <b>Ph.D. Student, Electrical and Computer Engineering, UTEP</b>
          </p>
          <p style="font-size: 10px">
            <b>Efficient AI, AI Hardware Acceleration, Biomedical AI</b>
          </p>

          <br />
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <MailOutlined />
            <a href="mailto:sbari@miners.utep.edu" style="margin-left: 5px"
              >Email</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <GithubOutlined />
            <a href="https://github.com/samiulbari46/" style="margin-left: 5px"
              >GitHub</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <LinkedinOutlined />
            <a
              href="https://www.linkedin.com/in/samiul-bari-52557114b/"
              style="margin-left: 5px"
              >LinkedIn</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <GoogleOutlined />
            <a
              href="https://scholar.google.com/citations?user=5qSrK0gAAAAJ&hl=en&oi=ao"
              style="margin-left: 5px"
              >Google Scholar</a
            >
          </p>
        </div>
      </div>
      <div class="col" style="margin-left: 25px" v-if="collapse">
        <slot />
      </div>
      <div class="col" style="margin-left: 0px" v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  GoogleOutlined
} from "@ant-design/icons-vue";

export default defineComponent({
  components: { GithubOutlined, LinkedinOutlined, MailOutlined, GoogleOutlined },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },

      gridsize: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
      },
    };
  },
  setup() {
    return {};
  },
  computed: {
    collapse: function () {
      return this.window.width <= this.gridsize.lg ? true : false;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
});
</script>

<style scoped>
[data-theme="dark"] .site-layout-content {
  background: #141414;
}

.ant-layout-header {
  padding: 0px;
}

a {
  color: black;
}
</style>
