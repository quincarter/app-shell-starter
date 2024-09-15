import { css } from 'lit';

export const AppShellHeaderStyles = css`
  nav {
    align-items: center;
    background-color: var(--nav-background-color);
    box-shadow: var(--primary-box-shadow);
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-evenly;
    list-style: none;
  }

  a {
    font-weight: 500;
    color: var(--primary-text-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
