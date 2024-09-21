import rickMortyImage from '../../public/projects-image/rick-morty-image.png';
import pokeImage from '../../public/projects-image/api-pokemon-image.png';
import growtwitterImage from '../../public/projects-image/growtwitter-image.png';

const projects = [
  {
    id: 1,
    name: 'API Rick and Morty',
    type: 'Website',
    image: rickMortyImage,
    key: 'apiram',
    url: 'https://avaliacao-final-front-end-lll.vercel.app/',
    languages: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javacript' }],
    about:
      'Este projeto foi realizado como atividade final do modulo de front end III no curso da growdev Desenvovilmento web fullstack',
  },
  {
    id: 2,
    name: 'API Pokemon React',
    type: 'Website',
    image: pokeImage,
    key: 'apipoke',
    url: 'https://api-pokemon-dun.vercel.app/',
    languages: [{ name: 'React' }, { name: 'StyledComponents' }, { name: 'Typescript' }],
    about: 'Projeto realizado para treinar react, fazendo pesquisas por input e listando pokemons da pokeapi.',
  },
  {
    id: 3,
    name: 'Growtwitter',
    type: 'Website',
    image: growtwitterImage,
    key: 'growtwitter',
    url: 'https://growtwitter-18-ed-front.vercel.app/',
    languages: [{ name: 'React' }, { name: 'StyledComponents' }, { name: 'Typescript' }],
    about:
      'Growtwitter é um projeto inspirador aonde aprendemos bastante coisas e ele foi realizado em grupo entre minha turma inteira, aonde formamos duplas e fizemos tasks utilizando o Trello.',
  },
];

export default projects;
