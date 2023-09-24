import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { checkSubscription } from "@/lib/subscription";

import { YoddaForm } from "./components/yodda-form";

interface YoddaIdPageProps {
    params: {
        yoddaId: string;
    };
};

const YoddaIdPage = async ({
    params
}: YoddaIdPageProps) => {
    const { userId } = auth();

    if (!userId) {
      return redirectToSignIn();
    }
  
    const validSubscription = await checkSubscription();
  
    if (!validSubscription) {
      return redirect("/");
    }

  const yodda = await prismadb.yodda.findUnique({
    where: {
        id: params.yoddaId,
    }
  });

  const categories = await prismadb.category.findMany();


    return (
        <YoddaForm 
        initialData={yodda}
        categories={categories}
        />
    );
}

export default YoddaIdPage;