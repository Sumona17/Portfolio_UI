import React, { useState } from "react";
import { Input, Button, Tabs } from "antd";
import {
  Container,
  ContentWrapper,
  LabelRow,
  Label,
  TextSection,
  Sidebar,
  ButtonRow,
} from "../../styles/components/FormControl/index";

const { TextArea } = Input;
const { TabPane } = Tabs;

const AiInsights = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Container>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="AI Insights" key="1">
          <ContentWrapper>
            <LabelRow>
              <Label>Ask AI Agent</Label>
              <Input
                placeholder="Type your question here"
                defaultValue="Do a thorough research on the crime rates on vacant buildings in 2024 and provide detailed report"
              />
            </LabelRow>

            <TextSection>
              <TextArea rows={6} placeholder="AI-generated insight will appear here" />
              <Sidebar>
                <p>Information Sources</p>
              </Sidebar>
            </TextSection>

            <ButtonRow>
              <Button type="primary">Add to Insights</Button>
            </ButtonRow>
          </ContentWrapper>
        </TabPane>

        <TabPane tab="Geospatial Insights" key="2">
          
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default AiInsights;
