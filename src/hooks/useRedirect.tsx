import React from "react";
import { useRouter } from "next/navigation";

function useRedirect() {
  const router = useRouter();
  return (to: string) => router.push(to);
}

export default useRedirect;
