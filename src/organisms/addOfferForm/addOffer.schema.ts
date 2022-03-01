import * as Yup from "yup";

export const addOfferSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "tytuł jest za krótki")
    .max(50, "tytuł jest za długi")
    .required("Required"),
  description: Yup.string()
    .min(20, "Opis jest za krótki")
    .max(1000, "Opis jest za długi")
    .required("Required"),
  telephone: Yup.string()
    .min(9, "Numer jest za krótki")
    .max(9, "Numer jest za długi")
    .required("Required"),
  confirmTelephone: Yup.string()
    .oneOf([Yup.ref('telephone'), null], "Numery telefonów nie są takie same")
    .required("Required"),
//   contactName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
  voivodeship: Yup.string().required("Wybierz województwo"),
  categoryId: Yup.string().required("Wybierz kategorie"),
  city: Yup.string()
    .min(2, "Nazwa miasta jest za krótka")
    .max(50, "Nazwa miasta jest za długa")
    .required("Required"),
});