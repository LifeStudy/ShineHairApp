import styled from "styled-components/native";

import Input from "~/components/Input";
import Button from "~/components/Button";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  margin: 20px 0 30px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 5px;
  background: #f55769;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
