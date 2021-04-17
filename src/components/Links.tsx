import { Linkedin } from "@styled-icons/fa-brands";
import { Envelope } from "@styled-icons/fa-solid";
import Email from "./Email";
import styled, { css } from "styled-components";

const baseIconStyle = css`
text-align: center;
  color: #FFF;
  width: 20px;
  height: 20px;
  font-size: 20px;
  padding: 10px;
  margin: 5px;
  transition: all .5s;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
  @media only screen and (min-width:768px) {
    width: 30px;
    height: 30px;
    font-size: 70px;
    line-height: 30px;
  }
}
`;

const StyledLinkedIn = styled(Linkedin)`
  ${baseIconStyle}
`;

const StyledEnvelope = styled(Envelope)`
  ${baseIconStyle}
`;

const StyledButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  padding: 0px;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

type LinksProps = {
  email: string | undefined;
  error: Boolean;
  recaptchaRef: any;
};

const Links = ({ email, error, recaptchaRef }: LinksProps) => {
  const onEmailClick = () => {
    recaptchaRef.current?.executeAsync();
  };

  return (
    <>
      <IconDiv>
        <StyledButton
          title="My Email"
          aria-label="My Email"
          onClick={onEmailClick}
        >
          <StyledEnvelope />
        </StyledButton>
        <a
          title="My Linkedin"
          aria-label="My LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.REACT_APP_LINKEDIN}
        >
          <StyledLinkedIn />
        </a>
      </IconDiv>
      <Email email={email} error={error} />
    </>
  );
};

export default Links;
