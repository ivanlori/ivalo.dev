import closeBtn from "./CloseBtn";

const urlCV: string =
  "https://drive.google.com/file/d/1w8JMjAedc5EVaWx-IzmsOY0RzeM_RFNo/view?usp=sharing";

const description: string = `
  I like making great products translating my ideas in real things.<br>
  In my free time I read books, trying constantly to improve myself
  both human and professional way.<br>
  I love hearing about different points of views and experiences on topics and...<br>
  of course videogames!<br><br>
  Do you want to hear more? Let's get in touch!
`;

const AboutMeSection: string = `
<section class="aboutme fadeIn">
  ${closeBtn}
  <div>
    <h2>About me...</h2>
    <p>
      ${description}
    </p>
    <hr>
    <div class="links">
      <a href="mailto:ivan.lori@protonmail.com">Contact me</a> <span class="dot"></span>
      <a target="_blank" rel="noopener" href="${urlCV}">View my CV</a>
    </div>
  </div>
</section>`;

export default AboutMeSection;
