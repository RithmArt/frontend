import React, { ReactElement } from "react";
import { Container, Grid, styled } from "@mui/material";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";

export const VideoPlayer = (): ReactElement => {
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center">
        <CustomGridItem item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Player poster="/assets/poster.png">
            <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
            <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

            <ControlBar>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
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
