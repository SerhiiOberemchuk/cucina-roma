"use client";

import React, { useActionState, useEffect } from "react";
import ButtonYelow from "../ButtonYelow";
import { cn } from "@/utils/cn";
// import { handleActionForm } from "./formAction";
import { toast } from "sonner";

type Props = { title?: string; className?: string; service: string };
export type TypeActionState = {
  success: boolean;
  message: string;
};
function FormGetUserData({
  title = "Заповни заявку на майстер-клас",
  className,
  service,
}: Props) {
  const initial: TypeActionState = { success: false, message: "" };
  const hadleSubmit = async (
    prevState: TypeActionState,
    formData: FormData,
  ) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          name: formData.get("name"),
          phone: formData.get("phone"),
          service,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        return { success: true, message: "Запит відправлено успішно!" };
      } else {
        return { success: false, message: "Помилка при надсиланні." };
      }
    } catch (error) {
      console.error("Error:", error);
      return {
        success: false,
        message: "Помилка мережі або сервера. Спробуйте ще раз.",
      };
    }
  };
  const [state, formAction, pending] = useActionState(hadleSubmit, initial);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <form className={cn("mt-7", className)} action={formAction}>
      <h2 className="text-main_blue textH4 mb-2 text-center uppercase">
        {title}
      </h2>
      <ul className="mb-2 flex w-full flex-col gap-2">
        {["email", "phone", "name"].map((field) => {
          return (
            <li key={field}>
              <label htmlFor={field}></label>
              <input
                className="border-grey_stroke_logo placeholder:text-text w-full rounded-3xl border px-6 py-3"
                type={
                  field === "phone"
                    ? "tel"
                    : field === "email"
                      ? "email"
                      : "text"
                }
                id={field}
                name={field}
                required={field === "email" ? false : true}
                placeholder={
                  field === "phone"
                    ? "Телефон"
                    : field === "email"
                      ? "Email"
                      : "Ім`я"
                }
              />
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end">
        <ButtonYelow
          title={pending ? "Обробляємо..." : "Замовити"}
          disabled={pending}
          className="md:max-w-fit"
          type="submit"
        />
      </div>
    </form>
  );
}

export default FormGetUserData;
