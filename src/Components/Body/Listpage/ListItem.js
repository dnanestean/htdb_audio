import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "../../../Context";

const StyledItem = styled.li`
  color: black;
  margin-bottom: 2rem;

  a {
    padding: 1.3rem 3rem;
    display: block;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 300;
  }

  &:nth-child(even) {
    background: #e5e5e5;
  }

  &:nth-child(odd) {
    background: #f4f4f4;
  }
`;

const ListItem = ({ index }) => (
  <Consumer>
    {({ towers }) => (
      <StyledItem>
        <a
          href={`${towers.items[index].link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="subheading">
            {" "}
            {towers.items[index].title}{" "}
          </Typography>
        </a>
      </StyledItem>
    )}
  </Consumer>
);

export default ListItem;
