export const getGlobalData = () => {
  const d = new Date();
  let year = d.getFullYear();

  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Next Blogg';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next Blogg';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '©'+ year + ' Feito por Gabriel Castro';

  return {
    name,
    blogTitle,
    footerText,
  };
};
