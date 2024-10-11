"use client";

import type { EmailForm } from "@mott/validators";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@mott/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from "@mott/ui/form";
import { Input } from "@mott/ui/input";
import { toast } from "@mott/ui/toast";
import { emailSchema } from "@mott/validators";

import { useLoginFormContext } from "~/components/forms/login-form-context";
import { GoogleIcon } from "~/components/icons/google-icon";
import { paths } from "~/routes/paths";

export default function LoginPage() {
  const router = useRouter();
  const { updateFormValues } = useLoginFormContext();

  const form = useForm({
    schema: emailSchema,
    mode: "onSubmit",
  });

  const onSubmit = async (data: EmailForm) => {
    const isStepValid = await form.trigger();

    if (!isStepValid) {
      return;
    }
    const login = await signIn("resend", {
      email: data.email,
      redirect: false,
    });
    if (login?.error) {
      toast.error(login.error);
      return;
    }
    updateFormValues(data);
    router.push(paths.login.accessCode);
  };

  return (
    <>
      <div>
        <div className="mb-[100px]">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Your data, your way.
            </h1>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-400">
              Create your Mott account
            </h2>
            <Button
              variant="outline"
              size="lg"
              aria-label="Sign in with Google"
              className="mb-10 flex h-[50px] w-full gap-2"
              onClick={() => signIn("google")}
            >
              <GoogleIcon />
              <p>Continue with Google</p>
            </Button>
          </div>

          <div className="border border-b-0 border-l-0 border-r-0 border-slate-300 pt-3">
            <Form {...form}>
              <form
                className="flex w-full max-w-2xl flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email address..."
                        />
                      </FormControl>
                      <FormDescription>
                        Proceed with your business email
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  aria-label="Continue"
                  className="mt-6 bg-black text-white hover:bg-white hover:text-black"
                >
                  Continue
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className="h-8 text-center text-xs">
        <span className="text-sm text-neutral-400">
          By continuing, you agree to the Terms & Conditions and Privacy
          Policies.
        </span>
      </div>
    </>
  );
}
