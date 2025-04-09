import styled from "styled-components";
import themes from "../../../constants/theme.json";

export const Section = styled.div`
  padding: 50px 0px;

  .login-container {
    background: white;
    border-radius: 10px;
    display: flex;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    width: 800px;
    overflow: hidden;
    margin: auto;
  }

  .login-box {
    display: flex;
    width: 100%;
  }

  .login-left {
    background: #2f80ed;
    color: white;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  background: white;
  margin-bottom: 20px;
}

  .logo-circle {
    font-size: 80px;
    font-weight: bold;
    border-radius: 50%;
    background: white;
    color: #2f80ed;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .welcome-text {
    text-align: center;
  }

  .login-right {
    width: 60%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-right h2 {
    font-family: "Nunito-sans";
    font-size: 50px;
    font-weight: 700;
    margin: 0px 0 13px;
    line-height: 69px;
    color: ${({ theme }) => themes[theme.theme].loginSectionColor};
  }

  .login-right p {
    font-weight: 700;
    font-family: "Plus-Jakarta-Sans";
    font-size: 18px;
    margin: 0px 0px 15px;
    color: ${({ theme }) => themes[theme.theme].loginSectionSubtitle};
  }

  .login-input {
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  .login-button {
    padding: 12px;
    background: #2f80ed;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .login-button:hover {
    background: #1c60c0;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .icon {
    font-size: 20px;
    color: #2f80ed;
    cursor: pointer;
  }

  .icon:hover {
    color: #1c60c0;
  }

  .login-text {
    font-weight: 400;
    margin: 0px;
    font-size: 14px;
    color: ${({ theme }) => themes[theme.theme].loginSectionColor};
  }

  .radiobtncard {
    .agent-text {
      font-size: 20px;
      font-weight: 700;
      margin: 0px 0px 13px;
      color: ${({ theme }) => themes[theme.theme].loginSectionSubtitle};
    }

    .text {
      font-size: 14px;
      font-weight: 400;
      margin: 0px 0px 0px;
      color: ${({ theme }) => themes[theme.theme].loginText};
    }
  }
`;

