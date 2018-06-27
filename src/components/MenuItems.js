import { history } from '../App';

export default [
  {
    icon: 'fas fa-user',
    title: 'catalog',
    path: '/h',
    onClick: () => history.push('/h'),
    subItems: [
      {
        title: 'products',
        path: '/h',
        onClick: () => history.push('/h'),
      },
      {
        title: 'cart routes',
        path: '/g',
        onClick: () => history.push('/g'),
      },
      {
        title: 'orders',
        path: '/f',
        onClick: () => history.push('/f'),
      },
      {
        title: 'modules',
        path: '/d',
        onClick: () => history.push('/d'),
      },
    ],
  },
  {
    icon: 'fas fa-anchor',
    title: 'catalog2',
    path: '/h2',
    onClick: () => history.push('/h2'),
    subItems: [
      {
        title: 'products2',
        path: '/h2',
        onClick: () => history.push('/h2'),
      },
      {
        title: 'cart routes2',
        path: '/g2',
        onClick: () => history.push('/g2'),
      },
      {
        title: 'orders2',
        path: '/f2',
        onClick: () => history.push('/f2'),
      },
      {
        title: 'modules2',
        path: '/d2',
        onClick: () => history.push('/d2'),
      },
    ],
  },
];
