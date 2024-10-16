import React from "react";
import styles from './Form.module.scss';
import { Formik, Form } from "formik";
import { initialValues, schemas } from "./helper";
import { Input } from "./Input/Input";
import  { Button }  from "./Button/Button";
import { useDispatch } from 'react-redux'; 
import { removeAllFromCart } from '../../store/slices/shopCart.slice';

const CheckoutForm = ({item}) => {
    const dispatch = useDispatch();

    function ConfirmForm() {
        console.log('Success')
        const buyArr = JSON.parse(window.localStorage.getItem('cart'))
        console.log(buyArr)
        buyArr.splice(0, buyArr.length)
        console.log(buyArr)
        dispatch(removeAllFromCart(item))
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schemas.custom}
                onSubmit={(values) => { ConfirmForm(); console.log('Form Data: ', values); }}
            >
                {({ errors, touched, values }) => (
                    <Form className={styles.form}>

                        <Input
                            label="City*"
                            name="city"
                            id="city"
                            placeholder="Town / City"
                        />

                        <Input
                            label="State*"
                            name="state"
                            id="state"
                            placeholder="State"
                        />

                        <Input
                            label="Apt, suite, unit"
                            name="apartment"
                            id="apartment"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                        />

                        <Input
                            label="First Name*"
                            name="firstName" // Совпадает с initialValues
                            id="firstName"
                            placeholder="First Name"
                            //Purple
                        />

                        <Input
                            label="Last Name*"
                            name="lastName" // Совпадает с initialValues
                            id="lastName"
                            placeholder="Last Name"
                            //black
                        />

                        <Input
                            label="Country / Region*"
                            name="country"
                            id="country"
                            placeholder="Country / Region"
                            //pink
                        />

                        <Input
                            label="Company Name"
                            name="companyName"
                            id="companyName"
                            placeholder="Company (optional)"
                            //DarkBlue
                        />

                        <Input
                            label="Street Address*"
                            name="address"
                            id="address"
                            placeholder="House number and street name"
                            //darkgoldenrod
                        />

                        <Input
                            label="Postal Code*"
                            name="postalCode"
                            id="postalCode"
                            placeholder="Postal Code"
                            //lightsalmon
                        />

                        <Input
                            label="Phone*"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            //darkolivegreen
                        />
                        <Button children="Continue to delivery"/>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default CheckoutForm;
