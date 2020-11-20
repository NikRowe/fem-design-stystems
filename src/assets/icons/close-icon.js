import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M14.7205 12.2459L23.9764 2.9873C24.66 2.30371 24.66 1.19629 23.9764 0.512695C23.2928 -0.170898 22.1853 -0.170898 21.5018 0.512695L12.2459 9.77129L2.9873 0.51543C2.30371 -0.168164 1.19629 -0.168164 0.512695 0.51543C-0.170898 1.19902 -0.170898 2.30645 0.512695 2.99004L9.77129 12.2459L0.515429 21.5045C-0.168164 22.1881 -0.168164 23.2955 0.515429 23.9791C0.857226 24.3209 1.30566 24.4904 1.75137 24.4904C2.19707 24.4904 2.64551 24.3209 2.9873 23.9791L12.2459 14.7205L21.5045 23.9764C22.1881 24.66 23.2955 24.66 23.9791 23.9764C24.3209 23.6346 24.4904 23.1861 24.4904 22.7404C24.4904 22.2947 24.3209 21.8463 23.9791 21.5045L14.7205 12.2459Z"
      fill="black"
    />
  </CloseIconWrapper>
);
