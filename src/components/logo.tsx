import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      {...props}
    >
      <path
        d="M16 2.66663C8.63636 2.66663 2.66669 8.63629 2.66669 16C2.66669 23.3636 8.63636 29.3333 16 29.3333C23.3637 29.3333 29.3334 23.3636 29.3334 16C29.3334 11.0536 26.3321 6.84316 21.9467 4.61863"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-logo-spin"
      />
      <path
        d="M16 16m-4, 0a4,4 0 1,0 8,0a4,4 0 1,0-8,0"
        className="text-primary"
        fill="currentColor"
      />
    </svg>
  );
}
