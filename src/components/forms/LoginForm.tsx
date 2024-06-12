"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useFormState } from "react-dom";
import { authenticate } from "@/src/actions/actions";

export interface LoginFormProps {
  signIn: (provider: string) => Promise<void>;
}

export default function LoginForm({ signIn }: LoginFormProps) {
  const t = useTranslations("login");
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const title = t("title");
  const subtitle = t("subtitle");
  const emailLabel = t("emailLabel");
  const passwordLabel = t("passwordLabel");
  const loginButton = t("loginButton");

  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="login">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3">
          <h1 className="text-medium text-info text-[24px] lg:text-[42px] mb-4">
            {title}
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#36485C] mb-6">
            {subtitle}
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-y-4">
          <form
            action={dispatch}
            className="bg-[#E3F1FF] p-4 flex flex-col gap-y-4"
          >
            <div className="flex flex-col">
              <label
                className="text-[#36485C] text-[16px] lg:text-[18px] mb-2"
                htmlFor="email"
              >
                {emailLabel}
              </label>
              <input
                className="p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[#36485C] text-[16px] lg:text-[18px] mb-2"
                htmlFor="password"
              >
                {passwordLabel}
              </label>
              <input
                className="p-2 border border-gray-300 rounded"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <button
              className="bg-blue-600 text-white p-2 rounded mt-4"
              type="submit"
            >
              {loginButton}
            </button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
