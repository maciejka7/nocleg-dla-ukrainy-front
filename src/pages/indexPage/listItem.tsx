import { Flex, Text } from "@chakra-ui/react";

type ListItemProps = {label: string, data: string | number};

export const ListItem = (props: ListItemProps) => {

    const { data, label } = props

    return (
    <Flex direction="column" alignItems="flex-start" ml={2}>
        <Text fontSize="xs" fontWeight="bold" color="gray.500">{label.toUpperCase()}:</Text>
        <Text fontWeight={600} fontSize="xl" color="gray.800">{data}</Text>
    </Flex>
    )
}