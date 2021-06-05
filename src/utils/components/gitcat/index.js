import React from 'react';
import Lottie from 'react-lottie-player';

import lottieJson from './lottie-source.json';

export const GitCat = () => <Lottie loop={false} animationData={lottieJson} play style={{ width: 300, height: 300 }} />;
