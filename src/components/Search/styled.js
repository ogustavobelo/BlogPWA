import styled from "styled-components"
import media from 'styled-media-query'

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: var(--texts);
  }

  body#grid & {
    .ais-Hits-list {
      background-color: var(--background);
      display: grid;
      grid-area: posts;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem ;
      max-height: 500px;

      .ais-Hits-item {
       background-color: var(--background);
       /* margin: rem; */
       border: 1px solid var(--borders);
      }

    }
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`