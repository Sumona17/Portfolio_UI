import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;
const { Title, Text } = Typography;

// Styled Footer component
export const StyledFooter = styled(Footer)`
  background: white;
  padding: 12px 20px;  /* Reduced vertical padding */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  position: relative;
  bottom: 0;
  
  /* Responsive Adjustments */
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    padding: 12px 30px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 12px 40px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    padding: 12px 50px;
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    padding: 12px 60px;
  }
`;

// Footer Content - Left side (Title and Tagline)
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  align-items: flex-start;
  
  /* Mobile responsiveness */
  @media (max-width: 575px) {
    align-items: center;
    text-align: center;
  }
`;

// Right side content alignment
export const FooterRight = styled(FooterContent)`
  align-items: flex-end;
  
  /* Mobile responsiveness */
  @media (max-width: 575px) {
    align-items: center;
    text-align: center;
  }
`;

// Footer Title
export const StyledFooterTitle = styled(Title)`
  &.ant-typography {
    color: #333 !important;
    margin-bottom: 4px !important;  /* Reduced margin */
    font-size: 20px !important;  /* Smaller title */
  }
`;

export const RedTitle = styled.span`
  color: red;
`;

// Footer Tagline
export const FooterTagline = styled(Text)`
  font-size: 12px;  /* Reduced font size */
  display: block;
  margin-bottom: 8px;  /* Reduced margin */
`;

// Social Icons Section
export const FooterSocial = styled.div`
  margin: 8px 0;  /* Reduced margin */
`;

export const SocialIcon = styled.span`
  font-size: 18px;  /* Slightly smaller icons */
  cursor: pointer;
  transition: color 0.3s ease;
  margin: 0 4px;
  
  &:hover {
    color: #1169a0;
  }
  
  /* Fix for very small mobile screens */
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

// Contact Information
export const FooterContact = styled.div`
  margin: 6px 0;  /* Reduced margin */
  font-size: 13px;  /* Smaller font */
  text-align: right;
  
  /* Mobile responsiveness */
  @media (max-width: 575px) {
    text-align: center;
  }
  
  /* Fix for very small mobile screens */
  @media (max-width: 350px) {
    font-size: 11px;
  }
`;

export const PhoneIconWrapper = styled.span`
  margin-right: 6px;
`;

// Copyright Text
export const FooterCopyright = styled.div`
  margin-top: 10px;  /* Reduced margin */
  font-size: 11px;  /* Smaller font */
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 8px;
`;