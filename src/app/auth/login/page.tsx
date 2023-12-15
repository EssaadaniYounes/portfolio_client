"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Formik, Form } from "formik";
import { AiOutlineLogin, AiOutlineRollback } from "react-icons/ai";

import AuthCardContainer from "@/components/partials/cards/AuthCardContainer";
import Input from "@/components/partials/form/Input";
import { LoginSchema } from "@/services/Schemas";
import { login } from "@/services/UserService";
import useRedirect from "@/hooks/useRedirect";
export const Home = () => {
  const redirect = useRedirect();
  const [error, setError] = useState("");
  const [submiting, setSubmitting] = useState(false);
  return (
    <div className="flex justify-center md:items-center h-screen p-4">
      <AuthCardContainer title="Login">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values, {}) => {
            const res = await login(values, setSubmitting, setError);
            redirect("/me");
          }}
        >
          <Form className="flex flex-col gap-y-4" method="POST">
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="user@email.com"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="password"
            />
            {error && (
              <span className="text-xs text-red-600 font-medium">{error}</span>
            )}
            <button
              disabled={submiting}
              type="submit"
              className="btn xs:btn-wide btn-primary mx-auto text-white"
            >
              {!submiting ? "Login" : "login..."}
              <AiOutlineLogin className="mx-2 " size={20} />
            </button>

            <div className="text-center flex-1">
              You don't have account?{" "}
              <Link
                href={"/auth/register"}
                className="font-medium text-gray-700"
              >
                Register now
              </Link>
            </div>
            <Link href={"/"} className="btn xs:btn-wide mx-auto">
              Back home <AiOutlineRollback className="mx-2 " size={20} />
            </Link>
          </Form>
        </Formik>
      </AuthCardContainer>
    </div>
  );
};

export default Home;
