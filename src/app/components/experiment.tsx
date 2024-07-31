import { PropsWithChildren } from "react";

export default function ExperimentWrapper({ children, title }: PropsWithChildren<{title: string}>) {
    return (
        <div className="p-4 border border-slate-400 rounded-lg">
            <h2 className="text-slate-600 text-xs">{title}</h2>
            <div className="p-8">{children}</div>
        </div>
    )
}