// export const runtime = "nodejs";
// import { transporter } from "@/utils/email";
// import { TypeActionState } from "./FormGetUserData";
// const { API_BASE_EMAIL } = process.env;

// export const handleActionForm = async (
//   prevState: TypeActionState,
//   data: FormData,
//   service: string,
// ) => {
//   try {
//     if (!API_BASE_EMAIL) {
//       return { success: false, message: "Немає email адміністратора." };
//     }

//     const emailClient = data.get("email")?.toString();
//     const name = data.get("name")?.toString();
//     const phone = data.get("phone")?.toString();
//     if (emailClient) {
//       await transporter.sendMail({
//         from: API_BASE_EMAIL,
//         to: emailClient,
//         subject: "Підтвердження запиту",
//         text: `Дякуємо за ваш запит, ${name ?? "клієнт"}! Ми з вами зв’яжемося найближчим часом.`,
//       });
//     }

//     await transporter.sendMail({
//       from: emailClient || "",
//       to: API_BASE_EMAIL,
//       subject: "Клієнт зробив замовлення",
//       priority: "high",
//       text: `Дані клієнта: ім'я: ${name || "___"}, номер телефону: ${phone || "___"}, email: ${emailClient || "клієнт не залишив електронну адресу"}, сторінка на якій залишили замовлення: ${service}`,
//     });

//     return { success: true, message: "Запит відправлено успішно!" };
//   } catch (error) {
//     return { success: false, message: "Виникла помилка при надсиланні пошти." };
//   }
// };
