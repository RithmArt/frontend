import React, { ReactElement } from "react";
import { Container, Grid, styled } from "@mui/material";
import { Player, ControlBar, VolumeMenuButton } from "video-react";
import "video-react/dist/video-react.css";

export const VideoPlayer = (props: {
  link: string;
  link2?: string;
}): ReactElement => {
  const { link, link2 } = props;
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center">
        <CustomGridItem item xs={12} sm={12} md={9} lg={10} xl={11}>
          <Player poster="/assets/poster.png">
            <source src={link} />
            {link2 && <source src={link2} />}
            <ControlBar>
              <VolumeMenuButton />
            </ControlBar>
          </Player>
        </CustomGridItem>
      </Grid>
    </Container>
  );
};
const CustomGridItem = styled(Grid)`
  .video-react-controls-enabled {
    border-radius: 8px;
  }
  .video-react .video-react-video {
    border-radius: 8px;
  }
  .video-react .video-react-poster {
    border-radius: 8px;
  }
  .video-react .video-react-big-play-button {
    width: 47px;
    height: 47px;
    border-radius: 33px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
