import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, checked, onCheckedChange, ...props }, ref) => (
        <label className={cn("relative inline-flex items-center cursor-pointer", className)}>
            <input
                type="checkbox"
                className="sr-only peer"
                ref={ref}
                checked={checked}
                onChange={e => onCheckedChange?.(e.target.checked)}
                {...props}
            />
            <div className="w-10 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-zinc-700 peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-4 transition-transform"></div>
        </label>
    )
);
Switch.displayName = "Switch";
