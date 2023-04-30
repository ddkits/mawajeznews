/* eslint-disable no-useless-escape */
const channels = [
  {
    key: 'cnn',
    title: 'سي ان ان',
    id: 34
  },
  {
    key: 'alarabiya',
    title: 'العربية',
    id: 28
  },
  {
    key: 'aljazeera',
    title: 'الجزيرة',
    id: 3
  },
  {
    key: 'skynews',
    title: 'سكاي نيوز',
    id: 18
  },
  {
    key: 'rt',
    title: 'RT',
    id: 15
  },
  {
    key: 'mayadeen',
    title: 'الميادين',
    id: 13
  },
  {
    key: 'france',
    title: 'فرنسا',
    id: 10
  },
  {
    key: 'bbc',
    title: 'بي بي سي',
    id: 9
  }
];
const slugify = (text = '') => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u0621-\u064A0-9-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};
export { channels, slugify };
