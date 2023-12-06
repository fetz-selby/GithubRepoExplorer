import React from 'react';
import Skeleton, { SkeletonOwnProps } from '@mui/material/Skeleton';

const Loading: React.FC<SkeletonOwnProps> = (props) => (
  <Skeleton animation="wave" sx={{ marginBottom: '10px' }} {...props} />
);

export default Loading;
