import styled from "styled-components";
import { Input, Button } from "antd";
const { TextArea } = Input;


export const FormDatePickerBox = styled.div`
  labeexport l::after {
    visibility: hidden;
  }
  label {
    height: auto !important;
    padding: 0px 6px;
    white-space: normal;
    text-align: left;
  }

  .ant-picker-outlined {
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    font-family: "Inter", sans-serif;
    padding: 12px 6px;
    font-size: 14px;
    width: 100%;
    border: none;
    background: ${({ theme }) => (theme === 'dark' ? '#5A5A5A !important' : 'white')};
    color:${({ theme }) => (theme === 'dark' ? '#FFFFFF' : 'black')};
  }
  label {
    height: auto !important;
    font-size: 13px !important;
    font-weight: 500;
    line-height: 19.5px;
    color: #adacb0 !important;
    font-family: "Inter", sans-serif;
  }
`;

export const RadioBtnBox = styled.div`
  labeexport l::after {
    visibility: hidden;
  }
  .ant-radio-group {
    label {
      padding: 0px !important;
    }
  }
  .ant-radio-group {
    display: flex;
  }
  label {
    height: auto !important;
    width: 225px;
    padding: 0px 6px;
    display: flex;
    align-items: center;
    white-space: normal;
    text-align: left;
    height: auto !important;
  }
  .ant-form-item-control-input {
    padding: 12px 6px;
  }

  label {
    height: auto !important;
    font-size: 13px !important;
    font-weight: 400;
    line-height: 19.5px;
    color: #adacb0;
    font-family: "Inter", sans-serif;
  }
`;

export const FormInputFeild = styled.div`
  labeexport l::after {
    visibility: hidden;
  }
  label {
    height: auto !important;
    white-space: normal;
    text-align: left;
    padding: 0px 6px;
  }

  input {
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    font-family: "Inter", sans-serif;
    padding: 12px 6px;
    font-size: 14px;
    border: none;
    background: ${({ theme }) => (theme === 'dark' ? '#5A5A5A !important' : 'white')};
    color:${({ theme }) => (theme === 'dark' ? '#FFFFFF' : 'black')};
  }
  .ant-input-disabled {
    box-shadow: none;
    background: no-repeat;
    color: #000;
  }
  label {
    height: auto !important;
    min-width: 80px;
    font-size: 13px !important;
    font-weight: 500;
    line-height: 19.5px;
    color: #adacb0 !important;
    font-family: "Inter", sans-serif;
  }
  .suffix{
  margin-left:10px;
  cursor:pointer;
  }
`;

export const FormSelect = styled.div`
  labeexport l::after {
    visibility: hidden;
  }
  .ant-select-selector {
    display: block;
    padding: 12px 4px !important;
    border: none;
    background: ${({ theme }) => (theme === 'dark' ? '#5A5A5A !important' : 'white')};
    color:${({ theme }) => (theme === 'dark' ? '#FFFFFF' : 'black')};
  }
  .ant-select-selector {
    display: block;
  }
.ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
}
  .ant-select-selector:after,
  .ant-select-selection-search,
  .ant-select-selection-item,
  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    line-height: normal !important;
  }
  .ant-form-item-control-input {
    min-height: auto !important;
  }

  .ant-select {
    display: ruby;
  }
  .ant-select-selector {
    height: auto;
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
  }
  label {
    height: auto !important;
    height: auto !important;
    padding: 0px 6px;
    white-space: normal;
    text-align: left;
  }
  .ant-select {
    font-family: "Inter", sans-serif;
    border: none;
    font-size: 14px;
    border-radius: 8px;
    background: ${({ theme }) => (theme === 'dark' ? '#5A5A5A !important' : 'white')};
    color:${({ theme }) => (theme === 'dark' ? '#FFFFFF' : 'black')};
  }
  label {
    height: auto !important;
    font-size: 13px !important;
    font-weight: 500;
    line-height: 19px;
    color: #adacb0 !important;
    font-family: "Inter", sans-serif;
  }
`;
export const FormphonenumberFeild = styled.div`
  labeexport l::after {
    visibility: hidden;
  }
  label {
    height: auto !important;
    white-space: normal;
    text-align: left;
    padding: 0px 6px;
  }

  input {
    box-shadow: 0px 1.5px 4px -1px #9c9c9f;
    font-family: "Inter", sans-serif;
    padding: 12px 6px;
    font-size: 14px;
    border: none;
    background: ${({ theme }) => (theme === 'dark' ? '#5A5A5A !important' : 'white')};
    color:${({ theme }) => (theme === 'dark' ? '#FFFFFF' : 'black')};
  }
  .ant-input-disabled {
    box-shadow: none;
    background: no-repeat;
    color: #000;
  }
  label {
    height: auto !important;
    min-width: 80px;
    font-size: 13px !important;
    font-weight: 500;
    line-height: 19.5px;
    color: #adacb0 !important;
    font-family: "Inter", sans-serif;
  }
`;
export const FormCheckBoxStyled = styled.div`
  widtexport h: 100%;
  .ant-form-item {
    width: 100%;
  }
  .ant-checkbox-group {
    width: 100%;
    label {
      width: 40%;
    }
  }
  .ant-checkbox-disabled .ant-checkbox-inner:after {
    border-color: white;
  }
  .ant-checkbox-checked.ant-checkbox-disabled > .ant-checkbox-inner {
    background: #1677ff;
    border-color: #1677ff;
  }  
`;
export const Container = styled.div`
  bordexport er: 1px solid #000;
  padding: 12px;
  font-family: "Inter", sans-serif;
`;
export const TabBar = styled.div`
  dispexport lay: flex;
  margin-bottom: 16px;
`;

export const TabButton = styled.button`
  backexport ground-color: ${({ active }) => (active ? "#1677ff" : "#ffffff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #1677ff;
  padding: 6px 12px;
  margin-right: 4px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  bordexport er: 1px solid #000;
  padding: 16px;
`;

export const LabelRow = styled.div`
  dispexport lay: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  width: 120px;
`;

export const StyledInput = styled(Input)`
  font-style: italic;
  font-size: 13px;
  color: #1b3fca;
`;

export const TextSection = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 12px;
`;

export const MainTextArea = styled(TextArea)`
  flex: 3;
  height: 200px;
  border: 1px solid #1677ff;
`;

export const Sidebar = styled.div`
  flex: 1;
  border: 1px solid #1677ff;
  padding: 16px;
  text-align: center;
  font-weight: 500;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const StyledButton = styled(Button)`
  background-color: #1677ff;
  color: white;
  border: none;
`;