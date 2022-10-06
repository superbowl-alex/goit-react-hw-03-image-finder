import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import-normalize; /* bring in normalize.css styles */

        html {
          box-sizing: border-box;
          width: 100vw;
          overflow-x: hidden;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Comic Sans MS',
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #edf5e1;
        }

        h1,
        h2,
        h3,
        h4,
        ul,
        p {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }

        img {
          display: block;
          height: auto;
          max-width: 100%;
        }

        button {
          outline: none;
        }

        button:hover {
          cursor: pointer;
        }
      `}
    />
  );
};

export default GlobalStyles;
