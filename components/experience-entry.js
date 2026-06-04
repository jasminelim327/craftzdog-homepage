import { useState } from 'react'
import {
  Box,
  Wrap,
  WrapItem,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  Button,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const TRUNCATE_AT = 280

const ExperienceEntry = ({
  logoSrc = null,
  logoEmoji = '🏢',
  isLatest = false,
  isLast = false,
  role,
  company,
  dateRange,
  description,
  techTags = [],
  skillTags = [],
}) => {
  const [expanded, setExpanded] = useState(false)

  const dotColor = isLatest ? 'teal.400' : 'gray.600'
  const lineColor = useColorModeValue('gray.300', 'gray.700')
  const tealCompanyColor = useColorModeValue('teal.600', 'teal.300')
  const grayCompanyColor = useColorModeValue('gray.500', 'gray.400')
  const companyColor = isLatest ? tealCompanyColor : grayCompanyColor
  const logoBg = useColorModeValue('gray.100', 'gray.700')
  const sectionLabelColor = useColorModeValue('gray.500', 'gray.400')

  const isLong = description && description.length > TRUNCATE_AT
  const displayedDescription =
    isLong && !expanded ? description.slice(0, TRUNCATE_AT) + '…' : description

  return (
    <Box display="flex" gap={0} mb={isLast ? 0 : 4}>
      {/* Timeline spine */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="28px"
        flexShrink={0}
        mr={3}
      >
        <Box
          w="12px"
          h="12px"
          borderRadius="full"
          bg={dotColor}
          flexShrink={0}
          mt="6px"
        />
        {!isLast && (
          <Box w="2px" flex={1} bg={lineColor} mt={1} minH="80px" />
        )}
      </Box>

      {/* Content */}
      <Box flex={1} pb={isLast ? 0 : 6}>
        {/* Header */}
        <Box display="flex" alignItems="center" gap={3} mb={3}>
          <Box
            w="44px"
            h="44px"
            borderRadius="lg"
            overflow="hidden"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={logoBg}
            fontSize="22px"
          >
            {logoSrc ? (
              <ProfileImage src={logoSrc} alt={company} width="44px" height="44px" />
            ) : (
              logoEmoji
            )}
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="sm" lineHeight={1.3}>
              {role}
            </Text>
            <Text fontSize="xs" color={companyColor}>
              {company} · {dateRange}
            </Text>
          </Box>
        </Box>

        {/* Description with read-more */}
        <Text fontSize="sm" mb={isLong ? 1 : 4} lineHeight={1.7}>
          {displayedDescription}
        </Text>
        {isLong && (
          <Button
            size="xs"
            variant="link"
            colorScheme="teal"
            mb={4}
            onClick={() => setExpanded(e => !e)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </Button>
        )}

        {/* Tech Stack */}
        {techTags.length > 0 && (
          <Box mb={3}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="0.5px"
              color={sectionLabelColor}
              mb={2}
            >
              Tech Stack
            </Text>
            <Wrap spacing={2}>
              {techTags.map(({ label, colorScheme, icon: Icon }) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="solid" borderRadius="full" colorScheme={colorScheme}>
                    {Icon && <TagLeftIcon boxSize="13px" as={Icon} />}
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        )}

        {/* Skills */}
        {skillTags.length > 0 && (
          <Box>
            <Text
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="0.5px"
              color={sectionLabelColor}
              mb={2}
            >
              Skills
            </Text>
            <Wrap spacing={2}>
              {skillTags.map(({ label, icon: Icon }) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="solid" borderRadius="full" colorScheme="gray">
                    {Icon && <TagLeftIcon boxSize="13px" as={Icon} />}
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ExperienceEntry
