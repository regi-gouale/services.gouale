import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div>
      <span className={cn("text-xl font-black text-primary uppercase")}>
        Gouale
      </span>
      <span className="text-xs">Services</span>
    </div>
  );
};
