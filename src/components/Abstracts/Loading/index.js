import React from 'react';
import PropTypes from 'prop-types';
import { LoadingContainer, LoadingOverlay } from './styles';

const Loading = ({
  isLoading,
  timedOut,
  pastDelay,
  error,
}) => {
  if (isLoading) {
    if (timedOut) {
      return <div>Loader timed out!</div>;
    }
    if (pastDelay) {
      return (
        <LoadingOverlay>
          <LoadingContainer>
            <svg
              width="250"
              height="250"
              viewBox="0 0 525 429"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M4.25781 296.992L219.224 420.553V247.568L176.231 297.087L118.686 264.043L262.217 99.2956V0.447266L4.25781 296.992Z"
                  fill="#4C9E3A"
                />
                <path
                  d="M520.176 296.993L305.21 420.553V247.569L348.203 296.993L405.417 264.043L262.217 99.2961V0.447754L520.176 296.993Z"
                  fill="#5BE83A"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.257812"
                  y="0.447266"
                  width="523.918"
                  height="428.106"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </LoadingContainer>
        </LoadingOverlay>
      );
    }
    return null;
  }
  if (error) {
    return <div>Error! Component failed to load</div>;
  }
  return null;
};

Loading.defaultProps = {
  error: 'Failed to Load',
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Loading;
