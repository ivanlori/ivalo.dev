<script lang="ts">
  import SingleProjectLayout from "../components/SingleProjectLayout.svelte";

  type ProjectModel = {
    name: string;
    description: string;
    sourceCodeUrl: string;
    demoUrl: string;
    technologies: string[];
  };

  const profileUrl: string = "https://github.com/ivanlori";
  let showBuilder: boolean = true;
  let showEstimate: boolean = false;
  let showVuemmerce: boolean = false;

  const dataEstimateOnline: ProjectModel = {
    name: "Estimate of costs",
    description:
      "A simply interactive estimate of costs with preview and print options made with:",
    sourceCodeUrl: `${profileUrl}/EstimateOnline`,
    demoUrl: "https://ivanlori.github.io/EstimateOnline/",
    technologies: ["Vanilla JS", "ES6"],
  };

  const dataVuemmerce: ProjectModel = {
    name: "Vuemmerce | E-commerce template",
    description: "A pure frontend starter ecommerce template made with:",
    sourceCodeUrl: `${profileUrl}/Vuemmerce`,
    demoUrl: "https://vuemmerce-git-master.ivanlori.now.sh/",
    technologies: ["Vue.js", "ES6", "Nuxt.js", "Vuex", "Bulma framework"],
  };

  const dataCvBuilder: ProjectModel = {
    name: "CV-Builder",
    description:
      "A resume builder with export in PDF format written with the following technologies:",
    sourceCodeUrl: `${profileUrl}/CV-builder`,
    demoUrl: "",
    technologies: [
      "React.js",
      "Redux.js",
      "Redux Saga",
      "Typescript",
      "Styled components",
      "Puppeteer",
      "Node.js/Express.js",
      "Webpack.js",
      "Jest",
      "ES6",
    ],
  };

  function onTabClick(e: any) {
    e.preventDefault();
    const target = e.target.id;

    if (target === "vuemmerce") {
      showBuilder = false;
      showEstimate = false;
      showVuemmerce = true;
    } else if (target === "builder") {
      showBuilder = true;
      showEstimate = false;
      showVuemmerce = false;
    } else if (target === "estimate") {
      showBuilder = false;
      showEstimate = true;
      showVuemmerce = false;
    }
  }
</script>

<section class="fadeIn container">
  <div class="columns">
    <div class="column col-8 p-centered">
      <h1>My latest projects</h1>
      <p>
        All my projects are experiments hosted on Github.<br />
        I enjoy making new things and happy to see people who learn from them.
      </p>
      <ul class="tab tab-block">
        <li class="tab-item">
          <a
            class={showBuilder && 'active'}
            id="builder"
            on:click={onTabClick}>CV Builder</a>
        </li>
        <li class="tab-item">
          <a
            class={showVuemmerce && 'active'}
            id="vuemmerce"
            on:click={onTabClick}>Vuemmerce</a>
        </li>
        <li class="tab-item">
          <a
            id="estimate"
            class={showEstimate && 'active'}
            on:click={onTabClick}>Estimate of costs</a>
        </li>
      </ul>
      <div class="mt-2">
        <SingleProjectLayout data={dataCvBuilder} visible={showBuilder} />
        <SingleProjectLayout data={dataVuemmerce} visible={showVuemmerce} />
        <SingleProjectLayout data={dataEstimateOnline} visible={showEstimate} />
      </div>
    </div>
  </div>
</section>
