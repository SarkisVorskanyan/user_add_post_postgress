import {object, ref, string} from "yup";

export const ValidateAddUser = object({
  name: string()
        .required('Обязательное поле'),
        //.min(4, 'Слишком короткый')
        //.max(20, 'Слишком длинный'),
    surname: string().required('The field is required'),
  }).required();
  