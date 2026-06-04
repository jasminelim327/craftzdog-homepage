import {
  Box,
  HStack,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

/**
 * ExperienceEntry — one row in the vertical timeline.
 *
 * Props:
 *   logoSrc      {string|null}  Image path (e.g. "/images/onloop.jpeg"). Pass null to use logoEmoji.
 *   logoEmoji    {string}       Fallback emoji shown when logoSrc is null.
 *   isLatest     {boolean}      True for the most recent entry — renders a teal dot.
 *   isLast       {boolean}      True for the last entry — hides the connecting line.
 *   role         {string}       Job title.
 *   company      {string}       Company name / display label.
 *   dateRange    {string}       e.g. "Sep 2024 – Feb 2026"
 *   description  {string}       Free-text body.
 *   techTags     {Array<{label, colorScheme, icon}>}
 *   skillTags    {Array<{label, icon}>}
 */
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
  const dotColor = isLatest ? 'teal.400' : 'gray.600'
  const lineColor = useColorModeValue('gray.300', 'gray.700')
  // Call both unconditionally (Rules of Hooks), then pick based on isLatest
  const tealCompanyColor = useColorModeValue('teal.600', 'teal.300')
  const grayCompanyColor = useColorModeValue('gray.500', 'gray.400')
  const companyColor = isLatest ? tealCompanyColor : grayCompanyColor
  const logoBg = useColorModeValue('gray.100', 'gray.700')
  const sectionLabelColor = useColorModeValue('gray.500', 'gray.400')

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
        {/* Header: logo + role + company/date */}
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
              <ProfileImage
                src={logoSrc}
                alt={company}
                width="44px"
                height="44px"
              />
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

        {/* Description */}
        <Text fontSize="sm" mb={4} lineHeight={1.7}>
          {description}
        </Text>

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
            <HStack spacing={2} flexWrap="wrap">
              {techTags.map(({ label, colorScheme, icon: Icon }) => (
                <Tag
                  key={label}
                  size="sm"
                  variant="solid"
                  borderRadius="full"
                  colorScheme={colorScheme}
                  mb={1}
                >
                  {Icon && <TagLeftIcon boxSize="13px" as={Icon} />}
                  <TagLabel>{label}</TagLabel>
                </Tag>
              ))}
            </HStack>
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
            <HStack spacing={2} flexWrap="wrap">
              {skillTags.map(({ label, icon: Icon }) => (
                <Tag
                  key={label}
                  size="sm"
                  variant="solid"
                  borderRadius="full"
                  colorScheme="gray"
                  mb={1}
                >
                  {Icon && <TagLeftIcon boxSize="13px" as={Icon} />}
                  <TagLabel>{label}</TagLabel>
                </Tag>
              ))}
            </HStack>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ExperienceEntry
