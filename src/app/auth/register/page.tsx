"use client";
import AuthCardContainer from "@/components/partials/cards/AuthCardContainer";
import Input from "@/components/partials/form/Input";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import { RegisterSchema } from "@/services/Schemas";
import { AiOutlineLogin, AiOutlineRollback } from "react-icons/ai";
import User from "@/services/User";
import { ResponseStatus } from "@/utils/ResponseStatus";
import Cookie from "@/services/Cookie";
import useRedirect from "@/hooks/useRedirect";
function Home() {
  const redirect = useRedirect();
  const [submiting, setSubmitting] = useState(false);
  return (
    <div className="flex justify-center md:items-center h-screen  p-4 ">
      <AuthCardContainer title="Register">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            setSubmitting(true);
            const res = await User.register({ ...values });
            if (res.status == ResponseStatus.CREATED) {
              const data = res.data as RegisterResponse;
              Cookie.setCookie("token", "Bearer " + data.token, 1);
            }
            redirect("/me");
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-col gap-y-4">
            <Input
              label="First name"
              name="firstName"
              type="text"
              placeholder="michel"
            />
            <Input
              label="Lat name"
              name="lastName"
              type="text"
              placeholder="Jer"
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="michel@gmail.com"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="password"
            />
            <button
              disabled={submiting}
              type="submit"
              className="btn xs:btn-wide btn-primary mx-auto text-white"
            >
              {!submiting ? "Register" : "Registering..."}
              <AiOutlineLogin className="mx-2 " size={20} />
            </button>
            <div className="text-center flex-1">
              Already have account?{" "}
              <Link href={"/auth/login"} className="font-medium text-gray-700">
                Sign in
              </Link>
            </div>
          </Form>
        </Formik>
        <Link href={"/"} className="btn xs:btn-wide mx-auto">
          Back home <AiOutlineRollback className="mx-2 " size={20} />
        </Link>
      </AuthCardContainer>
    </div>
  );
}

export default Home;
