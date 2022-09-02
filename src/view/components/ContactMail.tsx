import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMicrophone, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { send } from 'emailjs-com';
import { COLORS } from "../../styles/colors";
import { devices } from "../../styles/responsive";
import Popup from './Popup'
// import Popup from "./Popup";




const ContactMail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
    const { control, handleSubmit, formState: { errors } } = useForm();

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");


    const onSubmit = (data) => {
        send("service_zhbqytu", "template_2usj6nv", data, "user_AlLx4a66ZxnxU3ovAhhnU")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage("נרשמת בהצלחה");
                setShowPopup(true);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <div>

            <Box id="contact">

                <Title1>השאר פרטיך כעת ונציג יחזור אליך טלפונית!</Title1>

                <Form >
                    <Field>
                        <Controller
                            name="name"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputContainer>
                                    <InputIcon icon={faUser} />
                                    <Input
                                        onChange={onChange}
                                        value={value}
                                        placeholder="שם"
                                    />
                                </InputContainer>
                            )}
                        />
                        {errors.name && <StyledText>This is not valid</StyledText>}
                    </Field>

                    <Field>
                        <Controller
                            name="email"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,
                                pattern: emailRegex
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputContainer>
                                    <InputIcon icon={faEnvelope} />
                                    <Input
                                        onChange={onChange}
                                        value={value}
                                        placeholder="מייל"
                                    />
                                </InputContainer>
                            )}
                        />
                        {errors.email && <StyledText>This is not valid</StyledText>}
                    </Field>

                    <Field>
                        <Controller
                            name="telephone"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,
                                pattern: phoneRegex
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputContainer>
                                    <InputIcon icon={faPhone} />
                                    <Input
                                        onChange={onChange}
                                        value={value}
                                        placeholder="טלפון"
                                    />
                                </InputContainer>
                            )}
                        />
                        {errors.telephone && <StyledText>This is not valid</StyledText>}
                    </Field>

                    <Button title="Submit" onClick={handleSubmit(onSubmit)} >שלח</Button>
                </Form>

            </Box>

            <Popup display={showPopup} text={message} setShowPopup={setShowPopup}></Popup>
        </div>

    );
};
export default ContactMail;

const Box = styled.div`
  width: 100%;
  min-height: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  bottom: 0;
  padding: 2rem 0 2rem;
  margin: 0 auto;
  direction: rtl;
  margin-top: 40px;
  position: relative;
  background: #fff;

::before {
  content: "";
  display: block;
  background-image: url("./bg.jpg");
  background-position: 70% 70%;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
-o-background-size: cover;
  opacity: 0.7;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
 
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title1 = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  color: #294AC4;
  margin: 1rem auto 4rem;
  width: auto;
  text-align: center;
  max-width: 90%;
  position: relative;
`;


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40rem;

  @media ${devices.mobile} {
   width: 30rem;
  }
`;

export const Input = styled.input`
  background: ${COLORS.orange};
  background: #fff;
  border: 3px solid ${COLORS.secondary} ;
  color: navy;
  /* padding: 15px; */
  padding: 15px 50px;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  /* box-shadow: 10px 5px 5px grey; */
  
  :hover {
      background: ${COLORS.grey};
      /* background: #e0ebeb; */
      border-color: ${COLORS.main};
  }

  ::placeholder {
    color: ${COLORS.main};
  }
`;

export const Button = styled.button`
  background: ${COLORS.secondary};
  padding: 15px;
  border-radius: 10px;

  margin-top: 10px;
  border: 1px solid ${COLORS.main};
  margin: 20px;
  /* color: ${COLORS.main}; */
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  /* box-shadow: 10px 5px 5px grey; */
  width: 20rem;

  :hover {
      background: ${COLORS.main};
  }
`;

export const TextArea = styled.textarea`
  background: ${COLORS.orange};
  background: #fff;
  border: 3px solid ${COLORS.main} ;
  color: navy;
  padding: 15px 50px;
  width: 100%;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  box-shadow: 10px 5px 5px grey;
  
  :hover {
      background: ${COLORS.hover};
      background: #e0ebeb;
  
  }
  ::placeholder {
    color: ${COLORS.main};
    
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  position: relative;
  z-index: 100;
  top: 25px;
  font-size: 20px;
  right: 50px;

  * {
    color: ${COLORS.main};  
  }
`;

export const StyledText = styled.p`
    font-weight: bold;
    color: red;
    text-align: center;
    padding-bottom: 10px;
`;
