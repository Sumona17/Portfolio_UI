import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import {
  StyledFooter,
  FooterContent,
  FooterRight,
  StyledFooterTitle,
  RedTitle,
  FooterTagline,
  FooterSocial,
  SocialIcon,
  FooterContact,
  PhoneIconWrapper,
  FooterCopyright
} from "../../styles/components/Footer";

const { Text } = Typography;

const CustomFooter = () => {
  return (
    <StyledFooter>
      <Row gutter={[24, 8]}>
        {/* Left side - Title and Tagline */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <FooterContent>
            <StyledFooterTitle level={4}>
              <RedTitle>E</RedTitle>xavalu
            </StyledFooterTitle>
            <FooterTagline>STRATEGY.TECHNOLOGY.INNOVATION</FooterTagline>
          </FooterContent>
        </Col>
        
        {/* Right side - Social icons and contact */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <FooterRight>
            <FooterSocial>
              <Space size="small">
                <LinkedinOutlined component={SocialIcon} />
                <MailOutlined component={SocialIcon} />
                {/* <FacebookOutlined component={SocialIcon} />
                <WhatsAppOutlined component={SocialIcon} /> */}
              </Space>
            </FooterSocial>
            <FooterContact>
              <Text>
                <PhoneIconWrapper>
                  <PhoneFilled />
                </PhoneIconWrapper>
                +1- 888-EXAVALU (888-392-8258) info@exavalu.com
              </Text>
            </FooterContact>
          </FooterRight>
        </Col>
      </Row>
      
      {/* Copyright in the middle */}
      <Row justify="center">
        <Col>
          <FooterCopyright>
            <Text>
              © {new Date().getFullYear()} www.exavalu.com All Rights Reserved.
            </Text>
          </FooterCopyright>
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default CustomFooter;