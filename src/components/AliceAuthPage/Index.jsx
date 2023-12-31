import {
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Spinner,
} from "ims-ui-kit";
import PropTypes from "prop-types";
import React from "react";
import { BiEnvelope, BiLock, BiLogInCircle } from "react-icons/bi";
import { useForm } from "ims-ui-kit";
import { defaultAuthDataSet, defaultAuthDataSetValidation } from "./form.dto";
const Login = ({
  webclient = "https://alice.imssystems.tech",
  onLogin = () => {},
  onPasswordChange = () => {},
  onEmailChange = () => {},
}) => {
  let { dataModel, handleChange, isBusy, handleSubmit, isFormValid } = useForm(
    defaultAuthDataSet,
    defaultAuthDataSetValidation
  );
  return (
    <div className="login-form my-3">
      <img
        className="login-alice-logo"
        src={
          "https://assets.imssystems.tech/images/logo/alice/alice-full-logo.svg"
        }
      />
      <h4 className="text-center">Hello!</h4>
      <p className="mb-4 text-center">
        <small>
          "Unlocking Potential, Empowering Performance, Ensuring Compliance"
        </small>
      </p>
      <Form>
        <InputGroup>
          <InputGroupText>
            <BiEnvelope />
          </InputGroupText>
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            autoComplete="off"
            value={dataModel.email}
            onChange={(e) => {
              const changes = {
                field: "email",
                value: e.currentTarget.value,
              };
              handleChange(changes);
              onEmailChange(changes);
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupText>
            <BiLock />
          </InputGroupText>
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            autoComplete="off"
            value={dataModel.password}
            onChange={(e) => {
              const changes = {
                field: "password",
                value: e.currentTarget.value,
              };
              handleChange(changes);
              onPasswordChange(changes);
            }}
          />
        </InputGroup>
        <a className="btn-link" href={webclient + "/accounts/recovery"}>
          <small>Forgot password?</small>
        </a>
        <Button
          className="mt-4 mb-2"
          color="primary"
          type="submit"
          onClick={(e) => handleSubmit(e, onLogin)}
          disabled={!isFormValid() || isBusy}
          block
        >
          {isBusy ? (
            <React.Fragment>
              Signing in <Spinner size="sm" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              Sign in <BiLogInCircle />
            </React.Fragment>
          )}
        </Button>
      </Form>
      <small>Don't have an account? Let's </small>
      <a className="btn-link" href={webclient + "/accounts/register"}>
        <small>Get Started</small>.
      </a>
    </div>
  );
};

/**
 *
 * @param {Object} props
 * @returns
 */
const AliceAuthPage = (props) => {
  return (
    <Row className="h-100">
      <Col md="5" className="mx-auto">
        <Login {...props} />
      </Col>
    </Row>
  );
};

AliceAuthPage.propTypes = {
  onLogin: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onEmailChange: PropTypes.func,
};

export default AliceAuthPage;
