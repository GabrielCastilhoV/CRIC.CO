import {
  Box,
  Table,
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Title } from '../elements/Title';

import { listTimes } from '@/content/times';

import Image from 'next/image';

export const Classification = () => {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });
  return (
    <Box mt={['50px', '30px']}>
      <Title name="Points Table" />

      <Table color="gray.50">
        <Thead>
          <Tr>
            <Th color="gray.50">Teams</Th>
            <Th color="gray.50"></Th>
            {!isMobileVersion && (
              <>
                <Th color="gray.50">M</Th>
                <Th color="gray.50">W</Th>
                <Th color="gray.50">L</Th>
                <Th color="gray.50">T</Th>
              </>
            )}
            <Th color="gray.50">PTS</Th>
          </Tr>
        </Thead>

        {listTimes?.times?.map(time => {
          return (
            <Tbody key={time.name}>
              <Tr>
                <Td border="none">
                  <Image src={time.logo} alt={time.name} />
                </Td>
                <Td border="none">
                  <Text h="1rem">{time.name}</Text>
                </Td>

                {!isMobileVersion && (
                  <>
                    <Td border="none">{time.m}</Td>
                    <Td border="none">{time.w}</Td>
                    <Td border="none">{time.l}</Td>
                    <Td border="none">{time.t}</Td>
                  </>
                )}

                <Td border="none">{time.pts}</Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </Box>
  );
};
