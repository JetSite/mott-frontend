"use client";

import { useRouter } from "next/navigation";

import { Button } from "@mott/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from "@mott/ui/form";
import { Input } from "@mott/ui/input";

import type { CompanyForm } from "../types";
import { useSignUpFormContext } from "../signup-form-context";
import { companySchema } from "../types";

export default function YourCompanyPage() {
  const router = useRouter();

  const form = useForm({
    schema: companySchema,
    mode: "onSubmit",
  });

  const { updateFormValues } = useSignUpFormContext();

  const onSubmit = async (data: CompanyForm) => {
    const isStepValid = await form.trigger();

    if (!isStepValid) {
      return;
    }

    updateFormValues(data);
    router.push("/signup/corporate-chat");
  };

  const handleBack = () => {
    router.push("/signup/welcome-company");
  };

  return (
    <>
      <div className="mb-6 mt-[-80px]">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Your Company</h1>
        <h2 className="text-lg font-semibold tracking-tight text-neutral-400">
          We`re glad to have you on the Mott platform! Let`s set up your company
          account and workspace now.
        </h2>
      </div>
      <Form {...form}>
        <form
          className="mt-12 flex w-full max-w-2xl flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-600">
                  Company name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your company name here.."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-600">
                  Corporate website
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="https://www.yoursite.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            variant="primary"
            aria-label="Continue"
            className="mt-16 bg-black text-white hover:bg-white hover:text-black"
          >
            Continue
          </Button>
        </form>
      </Form>
      <Button
        size="lg"
        variant="ghost"
        aria-label="Back"
        className="mt-2 w-full"
        onClick={handleBack}
      >
        Back
      </Button>
    </>
  );
}
