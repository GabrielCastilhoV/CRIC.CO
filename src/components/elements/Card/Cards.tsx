import { Box, Flex, HStack } from '@chakra-ui/react';

import { Card } from '@/components/elements/Card';

export const Cards = () => {
  return (
    <Flex>
      <HStack spacing={5}>
        <Card
          title="SRH v/s PBK (Yesterday)"
          shortDescription="Punjab Kings dished out a disciplined bowling performance "
          image="/assets/cardOne.jpg"
        />

        <Card
          title="CSK v/s KKR (Yesterday)"
          shortDescription="Chennai Super Kings beat KKR by 2 wickets to claim top spot."
          image="/assets/cardTwo.jpg"
        />

        <Card
          title="RCB v/s MI (Sept 27, 2021)"
          shortDescription="Harshal Patel hat-trick helps RCB beat Mumbai Indians by 54 runs"
          image="/assets/cardThree.jpg"
        />
      </HStack>
    </Flex>
  );
};
