import { AdminNotification } from "@/utils/email/AdminNotification";
import { transporter } from "@/utils/email/email";
import { OrderConfirmation } from "@/utils/email/OrederConfirm";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

const { API_BASE_EMAIL } = process.env;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, service, imageUrl, prise } = body;
  const now = new Date();
  const orderId = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}/${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;

  const clientHtml = await render(
    OrderConfirmation({ name, service, orderId, imageUrl, prise }),
  );
  const adminHtml = await render(
    AdminNotification({ name, phone, email, service, orderId }),
  );
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
        html: clientHtml,
      });
    }
    await transporter.sendMail({
      from: email || "",
      to: API_BASE_EMAIL,
      subject: `Нове замовлення № ${orderId}`,
      priority: "high",
      html: adminHtml,
    });

    return NextResponse.json(
      { success: true, message: "Запит відправлено успішно!" },
      { status: 200 },
    );
  } catch (error) {
    NextResponse.json({ success: false, message: error }, { status: 500 });
  }
}
