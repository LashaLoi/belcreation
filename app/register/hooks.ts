import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  fullName: string;
  age: number;
  phone: string;
  church: string;
  city: string;
  child: boolean;
  childInfo: string;
  childAge: string;
  alerg: string;
  youtime: string;
  merried: boolean;
  merriedInfo: string;
  merriedAge: string;
  house: string;
  comment: string;
  tranfer: string;
};

export const useSubmit = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isChild = watch("child");
  const isMerried = watch("merried");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      const result = await fetch(
        "https://script.google.com/macros/s/AKfycbzj2et57T5QbUQ7s36ixEBDPsNNRGSaSfs-IOS8I41iASM3E1bT2j1tyfyrAiqNpsze_g/exec",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            fullName: data["fullName"] ?? "-",
            age: data["age"] ?? "-",
            phone: data["phone"] ?? "-",
            church: data["church"] ?? "-",
            city: data["city"] ?? "-",
            child: data["child"] ?? "-",
            childInfo: data["childInfo"] ?? "-",
            childAge: data["childAge"] ?? "-",
            alerg: data["alerg"] ?? "-",
            youtime: data["youtime"] ?? "-",
            merried: data["merried"] ?? "-",
            merriedInfo: data["merriedInfo"] ?? "-",
            merriedAge: data["merriedAge"] ?? "-",
            house: data["house"] ?? "-",
            comment: data["comment"] ?? "-",
            tranfer: data["tranfer"] ?? "-",
            date: Date.now(),
          }),
        },
      );

      if (!result.ok) {
        setError(true);
        setLoading(false);

        return;
      }

      router.push("/final");
    } catch {
      setError(true);
      setLoading(false);

      return;
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    isChild,
    isMerried,
    register,
    error,
    loading,
  };
};
