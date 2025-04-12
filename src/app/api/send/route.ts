import { transporter } from "@/utils/email";
import { NextResponse } from "next/server";

const { API_BASE_EMAIL } = process.env;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, service } = body;
  try {
    if (!API_BASE_EMAIL) {
      return NextResponse.json(
        { success: false, message: "Немає email адміністратора." },
        { status: 500 },
      );
    }
    if (email) {
      await transporter.sendMail({
        from: API_BASE_EMAIL,
        to: email,
        subject: "Підтвердження запиту",
        text: `Дякуємо за ваш запит, ${name ?? "клієнт"}! Ми з вами зв’яжемося найближчим часом.`,
      });
    }
    await transporter.sendMail({
      from: email || "",
      to: API_BASE_EMAIL,
      subject: "Клієнт зробив замовлення",
      priority: "high",
      text: `Дані клієнта: ім'я: ${name || "___"}, номер телефону: ${phone || "___"}, email: ${email || "клієнт не залишив електронну адресу"}, сторінка на якій залишили замовлення: ${service}`,
    });

    return NextResponse.json(
      { success: true, message: "Запит відправлено успішно!" },
      { status: 200 },
    );
  } catch (error) {
    NextResponse.json(
      { success: false, message: "Виникла помилка при надсиланні пошти." },
      { status: 500 },
    );
  }
}
