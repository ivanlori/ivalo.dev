interface Props {
  id: string;
  name: string;
  description: string;
  sourceCodeUrl: string;
  demoUrl: string;
  technologies: string[];
}

const hideClass: string = 'd-hide';
const links: string = 'js-links';
const stackLi: string = 'js-stack-li';
const tabBody: string = 'js-box';

function showTechnologies(items: string[]) {
  return items.map((item: string) => {
    return `<li class="${stackLi} ${hideClass}">${item}</li>`;
  }).join('');
}

export const SingleProjectLayout = (props: Props) => {
  const { id, name, description, technologies, sourceCodeUrl, demoUrl } = props;
  return (
    `<div id="${id}" class="${tabBody} box ${id === 'builder' ? '' : 'd-hide'}">
      <h3>${name}</h3>
      <p>${description}</p>
      <ul>${showTechnologies(technologies)}</ul>
      <div class="${links}">
        <a target="_blank" rel="noopener" href="${sourceCodeUrl}">Source code</a>
        ${demoUrl && `<div class="dot"></div> <a target="_blank" rel="noopener" href="${demoUrl}">Demo</a>`}
      </div>
    </div>`
  )
}