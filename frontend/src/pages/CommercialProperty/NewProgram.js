import React, { useState } from "react";
import { Form, Input, Tabs, Button, Row, Col } from "antd";
import {
  FormDatePickerBox,
  RadioBtnBox,
  FormInputFeild,
  FormSelect,
  FormphonenumberFeild,
  FormCheckBoxStyled,
  Container,
  TabBar,
  TabButton,
  ContentWrapper,
  LabelRow,
  Label,
  StyledInput,
  TextSection,
  MainTextArea,
  Sidebar,
  ButtonRow,
  StyledButton
} from "../../styles/components/FormControl/index";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
const NewProgram = () => {
  const [activeTab, setActiveTab] = useState("rate");
  const [modifiers, setModifiers] = useState([
    { id: 1, type: "Length of vacancy", description: "" },
    { id: 2, type: "Security presence", description: "" },
    { id: 3, type: "Property condition", description: "" },
    { id: 4, type: "Ownership Type", description: "" }
  ]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  const handleAddModifier = (index) => {
    // Implementation to add a new modifier row
    const newModifiers = [...modifiers];
    newModifiers.splice(index + 1, 0, { id: Date.now(), type: "", description: "" });
    setModifiers(newModifiers);
  };

  const handleRemoveModifier = (index) => {
    // Implementation to remove a modifier row
    if (modifiers.length > 1) {
      const newModifiers = [...modifiers];
      newModifiers.splice(index, 1);
      setModifiers(newModifiers);
    }
  };

  const handleModifierChange = (index, field, value) => {
    const newModifiers = [...modifiers];
    newModifiers[index] = { ...newModifiers[index], [field]: value };
    setModifiers(newModifiers);
  };

  return (
    <Container>
        
      <Form layout="vertical">
        <Row gutter={24}>
          <Col span={12}>
            <FormInputFeild>
              <Form.Item label="Product:">
                <Input disabled value="Commercial Property" />
              </Form.Item>
            </FormInputFeild>
          </Col>
          <Col span={12}>
            <FormInputFeild>
              <Form.Item label="Program:">
                <Input disabled value="Vacation Homes" />
              </Form.Item>
            </FormInputFeild>
          </Col>
        </Row>
        <Tabs activeKey={'2'} onChange={setActiveTab}>
        <TabPane tab=" Rate Modifiers" key="1">
         
        </TabPane>

        <TabPane tab=" GenAI Modifiers" key="2" >
        <ContentWrapper>
          {modifiers.map((modifier, index) => (
            <Row key={modifier.id} gutter={24} style={{ marginBottom: "16px" }}>
              <Col span={6}>
                <FormInputFeild>
                  <Form.Item label="Modifier :">
                    <Input 
                      value={modifier.type} 
                      onChange={(e) => handleModifierChange(index, 'type', e.target.value)}
                    />
                  </Form.Item>
                </FormInputFeild>
              </Col>
              <Col span={15}>
                <FormInputFeild>
                  <Form.Item label="Description:">
                    <Input 
                      value={modifier.description} 
                      onChange={(e) => handleModifierChange(index, 'description', e.target.value)}
                    />
                  </Form.Item>
                </FormInputFeild>
              </Col>
              <Col span={3} style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />} 
                  style={{ marginRight: "8px" }}
                  onClick={() => handleAddModifier(index)}
                />
                <Button 
                  type="default" 
                  icon={<MinusOutlined />} 
                  onClick={() => handleRemoveModifier(index)}
                />
              </Col>
            </Row>
          ))}

          <ButtonRow>
            <StyledButton type="primary">Save </StyledButton>
          </ButtonRow>
        </ContentWrapper>
        </TabPane>
      </Tabs>

       
      </Form>
    </Container>
  );
};

export default NewProgram;