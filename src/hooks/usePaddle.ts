"use client";

import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";

export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);

  useEffect(() => {
    initializePaddle({
      environment: (process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT || "sandbox") as "sandbox" | "production",
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
    }).then((paddleInstance) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  return paddle;
}
