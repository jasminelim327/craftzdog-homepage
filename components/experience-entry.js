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
  const lineColor = useColorModeValue('rgba(0,0,0,0.12)', 'rgba(255,255,255,0.1)')
  const tealCompanyColor = useColorModeValue('teal.600', 'teal.300')
  const grayCompanyColor = useColorModeValue('gray.500', 'gray.400')
  const companyColor = isLatest ? tealCompanyColor : grayCompanyColor
  const logoBg = useColorModeValue('rgba(0,0,0,0.05)', 'rgba(255,255,255,0.07)')
  const cardBg = useColorModeValue('rgba(0,0,0,0.02)', 'rgba(255,255,255,0.03)')
  const cardBorder = useColorModeValue('rgba(0,0,0,0.07)', 'rgba(255,255,255,0.07)')
  const labelColor = useColorModeValue('rgba(0,0,0,0.35)', 'rgba(255,255,255,0.3)')
  const descColor = useColorModeValue('gray.700', 'gray.300')

  const isLong = description && description.length > TRUNCATE_AT
  const displayedDescription =
    isLong && !expanded ? description.slice(0, TRUNCATE_AT) + '…' : description

  return (
    <Box display="flex" gap={0} mb={isLast ? 0 : 3}>
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
          w="10px"
          h="10px"
          borderRadius="full"
          bg={dotColor}
          flexShrink={0}
          mt="8px"
          boxShadow={isLatest ? '0 0 0 3px rgba(13,148,136,0.2)' : 'none'}
        />
        {!isLast && (
          <Box w="1px" flex={1} bg={lineColor} mt={1} minH="80px" />
        )}
      </Box>

      {/* Frosted card */}
      <Box
        flex={1}
        pb={isLast ? 0 : 3}
        p={4}
        bg={cardBg}
        border="1px solid"
        borderColor={cardBorder}
        borderRadius="xl"
        mb={isLast ? 0 : 3}
        transition="border-color 0.2s"
        _hover={{ borderColor: useColorModeValue('rgba(0,0,0,0.15)', 'rgba(255,255,255,0.15)') }}
      >
        {/* Header */}
        <Box display="flex" alignItems="center" gap={3} mb={3}>
          <Box
            w="40px"
            h="40px"
            borderRadius="lg"
            overflow="hidden"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={logoBg}
            fontSize="20px"
          >
            {logoSrc ? (
              <ProfileImage src={logoSrc} alt={company} width="40px" height="40px" />
            ) : (
              logoEmoji
            )}
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="sm" lineHeight={1.3}>
              {role}
            </Text>
            <Text fontSize="xs" color={companyColor} letterSpacing="0.2px">
              {company} · {dateRange}
            </Text>
          </Box>
        </Box>

        {/* Description with read-more */}
        <Text fontSize="sm" color={descColor} mb={isLong ? 1 : 3} lineHeight={1.7}>
          {displayedDescription}
        </Text>
        {isLong && (
          <Button
            size="xs"
            variant="link"
            colorScheme="teal"
            mb={3}
            onClick={() => setExpanded(e => !e)}
          >
            {expanded ? 'Show less ↑' : 'Show more ↓'}
          </Button>
        )}

        {/* Tech Stack */}
        {techTags.length > 0 && (
          <Box mb={3}>
            <Text
              fontSize="9px"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1.2px"
              color={labelColor}
              mb={2}
            >
              Tech Stack
            </Text>
            <Wrap spacing={1}>
              {techTags.map(({ label, colorScheme, icon: Icon }) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="subtle" borderRadius="full" colorScheme={colorScheme}>
                    {Icon && <TagLeftIcon boxSize="11px" as={Icon} />}
                    <TagLabel fontSize="10px">{label}</TagLabel>
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
              fontSize="9px"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1.2px"
              color={labelColor}
              mb={2}
            >
              Skills
            </Text>
            <Wrap spacing={1}>
              {skillTags.map(({ label, icon: Icon }) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="subtle" borderRadius="full" colorScheme="gray">
                    {Icon && <TagLeftIcon boxSize="11px" as={Icon} />}
                    <TagLabel fontSize="10px">{label}</TagLabel>
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
