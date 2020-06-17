interface Props {
  id: string;
  name: string;
  description: string;
  sourceCodeUrl: string;
  demoUrl: string;
  technologies: string[];
}

const invisible: string = 'd-invisible';
const links: string = 'js-links';
const stackLi: string = 'js-stack-li';
const tabBody: string = 'js-box';

const showTechnologies = (items: string[]): string => {
  return items.map((item: string) => {
    return `<li class="${stackLi} ${invisible}">${item}</li>`;
  }).join('');
}

export const SingleProjectLayout = (props: Props): string => {
  const { id, name, description, technologies, sourceCodeUrl, demoUrl } = props;
  return (
    `<div id="${id}" class="${tabBody} box ${id === 'builder' ? '' : 'd-hide'} fadeIn">
      <h3>${name}</h3>
      <p>${description}</p>
      <ul>${showTechnologies(technologies)}</ul>
      <div id="${links}" class="${invisible}">
        <a target="_blank" rel="noopener" href="${sourceCodeUrl}">Source code</a>
        ${demoUrl && `<div class="dot hide-xs hide-sm"></div> <a target="_blank" rel="noopener" href="${demoUrl}">Demo</a>`}
      </div>
    </div>`
  );
}