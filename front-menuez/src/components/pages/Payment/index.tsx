import Container from "../../utils/Container";

import React, { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { Form, Input, Label, Button, Div, DivColumn } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { AppContext } from "../../../contexts/AppContext";

interface PaymentFormData {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}
const schema = Yup.object().shape({
  name: Yup.string().required(),
  cardNumber: Yup.string().required(),
  expirationDate: Yup.string().required(),
  cvv: Yup.string().required(),
});

type FormValues = {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

export const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { navigate } = useContext(AppContext);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const paymentData = data as PaymentFormData;
    console.log(paymentData);
    navigate("/payment/sucess");
  };

  return (
    <Container backgroundSrc="#fff">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <DivColumn>
            <Label htmlFor="name" className="name">
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Full Name"
            />
            <div className="error-wrapper">
              <ErrorMessage errors={errors} name="name" />
            </div>
          </DivColumn>
          <DivColumn>
            <Label htmlFor="cardNumber" className="cardNumber">
              Card Number
            </Label>
            <Input
              type="text"
              id="cardNumber"
              {...register("cardNumber")}
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
            <div className="error-wrapper">
              <ErrorMessage errors={errors} name="cardNumber" />
            </div>
          </DivColumn>
        </Div>
        <Div>
          <DivColumn>
            <Label htmlFor="expirationDate">Expiration date</Label>
            <Input
              type="text"
              id="expirationDate"
              className="cardNumber"
              placeholder="XX/XX"
              {...register("expirationDate")}
            />
            <div className="error-wrapper">
              <ErrorMessage errors={errors} name="expirationDate" />
            </div>
          </DivColumn>

          <DivColumn>
            <Label htmlFor="cvv" className="cardNumber">
              Security Code
            </Label>
            <Input
              type="text"
              id="cvv"
              {...register("cvv")}
              placeholder="XXX"
            />
            <div className="error-wrapper">
              <ErrorMessage errors={errors} name="cvv" />
            </div>
          </DivColumn>
        </Div>

        <Button type="submit">Pagar</Button>
      </Form>
    </Container>
  );
};

export default Payment;
