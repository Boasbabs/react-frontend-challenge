'use client'
import {
    Flex,
    Spacer,
    Heading
} from '@chakra-ui/react'

type SectionHeaderProps = {
    title: string
    children?: React.ReactNode
}

const SectionHeader = ({ title, children }: SectionHeaderProps) => {
    return (
        <Flex marginBottom={6}>
            <Heading as="h3" size="md">
                {title}
            </Heading>
            <Spacer />
            {children}
        </Flex>
    )
}

export default SectionHeader
