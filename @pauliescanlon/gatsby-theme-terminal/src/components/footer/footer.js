import React, { Fragment } from 'react'
import { Text, Flex, Box, Link } from 'theme-ui'

export const Footer = () => {
  return (
    <Fragment>
      {/* Footer Outer Box/Border */}
      <Box
        sx={{
          width: '100%',
          mt: 'calc(var(--space-2xl)*1.618)',
          borderTop: (theme) => `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
        }}
      >
        {/* Inside the Footer */}
        <Box sx={{ mb: 'var(--space-l)', mt: 'var(--space-xl)', pt: 2, pb: 2, fontFamily: 'sans', color: 'grey' }}>
          {/* Footer Content Here */}
          <Flex sx={{ justifyContent: 'center' }}>
            <Text variant="styles.small" sx={{ color: 'text' }}>
              Based on
              <Link href="https://github.com/chuan-khuna/gatsby-theme-terminal" sx={{ textDecoration: 'none' }}>
                {' gatsby-theme-terminal'}
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Fragment>
  )
}
