// @flow
import React from 'react';
import MarkdownIt from 'markdown-it';

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

type Props = {
  children: ?string,
};

const renderMarkdown = markdown => {
  const domString = md.render(markdown);
  return domString.replace(/<a href=/g, '<a target="_blank" href=');
};

const Markdown = (props: Props) => (
  <div dangerouslySetInnerHTML={{ __html: renderMarkdown(props.children) }} />
);

export default Markdown;
