import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Consumer } from "../../../Context";

//Components
import Heading from "../../Common/Heading";
import ListItem from "./ListItem";

const StyledContent = styled.div`
  padding: 0 1.6rem;
  ul {
    margin-top: 4rem;
  }
`;

const ListView = () => (
  <Consumer>
    {({ towers }) => (
      <Grid container spacing={32}>
        <StyledContent>
          <Heading text={`${towers.heading}`} />
          <ul>
            {towers.items.map((item, index) => (
              <ListItem key={item.id} index={index} />
            ))}
          </ul>
        </StyledContent>
      </Grid>
    )}
  </Consumer>
);

export default ListView;
