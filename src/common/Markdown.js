// @flow
import React from 'react';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

type Props = {
  children: ?string,
};

const Markdown = (props: Props) => (
  <div dangerouslySetInnerHTML={{ __html: md.render(props.children) }} />
);

export default Markdown;
