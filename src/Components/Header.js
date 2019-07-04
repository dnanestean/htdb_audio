import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import SvgIcon from "@material-ui/core/SvgIcon";

//Components
import Heading from "./Common/Heading";
import Description from "./Common/Description";

const StyledHeader = styled.header`
  background: #009f93;
  padding: 5.3rem 0;
  color: white;

  .container {
    max-width: 96rem;
    margin: 0 auto;
    padding: 0 1.6rem;
    display: flex;

    > a {
      margin-left: auto;
      align-self: center;
      font-size: 2.6rem;
      color: white;
      display: flex;
      padding: 2rem 0 2rem 2rem;
      align-items: center;

      svg {
        font-size: 3rem;
        position: relative;
        top: -0.1rem;
        margin-right: 0.7rem;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 3rem 0;

    .container {
      text-align: center;
      flex-direction: column;

      > a {
        font-size: 2rem;
        padding: 2rem 2rem 0 2rem;
        margin-left: 0;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
`;

const Header = ({ homeButton }) => (
  <StyledHeader>
    <div className="container">
      <div>
        <Link to="/">
          <Heading bolded="true" primary="true" text="HTDB Audio" />
        </Link>
        <Description text="Complete Audio of the Harvest Message and the KJV Bible" />
      </div>
      {homeButton && (
        <Link to="/">
          <SvgIcon>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
          Home
        </Link>
      )}
    </div>
  </StyledHeader>
);

export default Header;
