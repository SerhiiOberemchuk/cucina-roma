"use server";

import { handleActionForm } from "./formAction";
import { TypeActionState } from "./FormGetUserData";

export async function handleServerFormAction(
  prevState: TypeActionState,
  data: FormData,
  service: string,
) {
  return handleActionForm(prevState, data, service);
}
