import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage";
import LoginForm from "./LoginForm";
import Button from "../styles/Button.js";
import styled from "styled-components";
import plant from "../plant.jpeg"

function LoginPage({ onLogin, user }) {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user) {
      navigate("/posts")
    }
    else {
      setIsLoading(false)
    }
  }, [user])

  return (
    <>
      {/* {isLoading ? <div className="font-sans">Loading our user....</div> : */}
      <div className="" style={{
        backgroundImage: `url(${plant})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }} >

        <Wrapper>
          <div className="flex flex-col">
            <span className="flex flex-col items-center justify-center">
              <span className="font-serif font-semibold text-xl text-emerald-700">Plant Parenthood</span>
              <br></br>
              <span className="font-serif text-sm">Share. Create. Connect.</span>
            </span>
            <br />
            {showLogin ? (
              <>
                <LoginForm onLogin={onLogin} />
                <Divider />
                <div className="flex flex-col items-center justify-center gap-3">
                  <span>Don't have an account?</span>
                  <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
                </div>
              </>
            ) : (
              <>
                <SignupPage onLogin={onLogin} />
                <Divider />

                <div className="flex flex-col items-center justify-center gap-3">
                  <span>Already have an account?</span>
                  <Button onClick={() => setShowLogin(true)}>Log In</Button>
                </div>

              </>
            )}
          </div>
        </Wrapper>
      </div>

      {/* }  */}
    </>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default LoginPage;