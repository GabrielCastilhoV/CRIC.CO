import { Box } from '@chakra-ui/react';

import { Card } from '../elements/Card';

import { Carousel } from 'react-responsive-carousel';

export const SliderElement = () => {
  return (
    <Box>
      <Carousel
        interval={5000}
        autoPlay
        width={'100%'}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        swipeScrollTolerance={100}
        showThumbs={false}
      >
        <>
          <Card
            title="SRH v/s PBK (Yesterday)"
            shortDescription="Punjab Kings dished out a disciplined bowling performance "
            image="/assets/cardOne.jpg"
          />
        </>

        <>
          <Card
            title="CSK v/s KKR (Yesterday)"
            shortDescription="Chennai Super Kings beat KKR by 2 wickets to claim top spot."
            image="/assets/cardTwo.jpg"
          />
        </>

        <>
          <Card
            title="RCB v/s MI (Sept 27, 2021)"
            shortDescription="Harshal Patel hat-trick helps RCB beat Mumbai Indians by 54 runs"
            image="/assets/cardThree.jpg"
          />
        </>
      </Carousel>
    </Box>
  );
};
