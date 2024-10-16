import * as Yup from 'yup';

const regx = {
  name: /^[A-Яа-яA-Za-z]{2,20}$/,

};

export const schemas = {
  custom: Yup.object().shape({
    firstName: Yup.string()

      .required("Введите имя"),
    lastName: Yup.string()

      .required("Введите фамилию"),
    city: Yup.string().required("Введите город"),
    country: Yup.string().required("Введите страну"),
    address: Yup.string().required("Введите адрес"),
    postalCode: Yup.string().required("Введите почтовый индекс"),
    phone: Yup.number().required("Введите телефон"),
    state: Yup.string().required("Введите state"),
    apartment: Yup.string()
    .required("Введите апартаменты")
  }),
};

export const initialValues = {
  firstName: "", 
  lastName: "",  
  city: "",
  country: "",
  companyName: "",  
  address: "", 
  apartment: "",  
  postalCode: "", 
  phone: "", 
  state: ""
};
