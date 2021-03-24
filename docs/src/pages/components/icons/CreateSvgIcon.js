import * as React from 'react';
import Box from '@material-ui/core/Box';
import { createSvgIcon } from '@material-ui/core/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

export default function CreateSvgIcon() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <HomeIcon />
      <HomeIcon color="primary" />
    </Box>
  );
}
