import * as React from "react";
import { cn } from "@/lib/utils";

export function Separator(props: React.HTMLAttributes<HTMLHRElement>) {
  const { className, ...rest } = props;
  return <hr className={cn("my-6 border-t", className)} {...rest} />;
}
