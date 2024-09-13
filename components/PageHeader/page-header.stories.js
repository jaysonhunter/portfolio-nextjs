import PageHeader from './page-header';

export default {
  component: PageHeader,
  title: 'Page Header',
  tags: ['autodocs'],
}

export const Closed = {
  args: {
    isNavOpen: false
  },
};

export const Open = {
  args: {
    isNavOpen: true
  },
};