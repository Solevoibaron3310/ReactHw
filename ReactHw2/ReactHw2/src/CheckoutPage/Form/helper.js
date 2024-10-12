import * as Yup from 'yup';

const regx = {
  name: /^[A-Яа-яA-Za-z]{2,20}$/,

};

export const schemas = {
  custom: Yup.object().shape({
    firstName: Yup.string()
      .matches(regx.name, "Используйте кириллицу или латиницу, от 2 до 20 символов")
      .required("Введите имя"),
    lastName: Yup.string()
      .matches(regx.name, "Используйте кириллицу или латиницу, от 2 до 20 символов")
      .required("Введите фамилию"),
    city: Yup.string().required("Введите город"),
    country: Yup.string().required("Введите страну"),
    address: Yup.string().required("Введите адрес"),
    postalCode: Yup.string().required("Введите почтовый индекс"),
    phone: Yup.string().required("Введите телефон"),
    state: Yup.string().required("Введите state")
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
