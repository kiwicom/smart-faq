import React from "react";
import { Typography } from "@kiwicom/orbit-components";
import { OpenInNew } from "@kiwicom/orbit-components/lib/icons";
import css from "styled-jsx/css";

const style = css`
  div.open-icon {
    display: inline-block;
    vertical-align: -3px;
    margin-left: 4px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .primary {
    color: #00a991;
  }
`

const FullFAQLink = ({ className }) => (
  <div>
    <Typography type="attention">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.kiwi.com/helpcenter/"
        className={className}
      >
        Full FAQ site
        <span className="inline-icon">
          <div className="open-icon">
            <OpenInNew fill={className === 'primary' ? '#00a991' : '#171b1e'} height="16" />
          </div>
        </span>
      </a>
    </Typography>
    <style jsx>{style}</style>
  </div>
);

export default FullFAQLink;
