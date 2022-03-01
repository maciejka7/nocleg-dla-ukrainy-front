import { Flex, Text } from "@chakra-ui/react";

type ListItemSpaceProps = {label: string, data: { from: number | string, to: number | string}};

export const ListItemSpace = (props: ListItemSpaceProps) => {

    const { data, label } = props

    return (
    <Flex direction="column" alignItems="flex-start" ml={2}>
        <Text fontSize="xs" fontWeight="bold" color="gray.500">{label.toUpperCase()}:</Text>
        <Text fontWeight={600} fontSize="xl" color="gray.800">{data.from} - {data.to} </Text>
    </Flex>
    )
}

