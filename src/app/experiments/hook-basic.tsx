import { useState } from "react";
import ExperimentWrapper from "../components/experiment";

// 实现 Increment 按钮的功能
export default function HookBasic() {
    const [value, setValue] = useState<number>(1)
    const [accum, setAccum] = useState(0)

    return (
        <ExperimentWrapper title="Basic setState">
            <div className="flex flex-row gap-2">
                <input className="border border-blue-400 p-1" type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
                <button className="bg-slate-50 border p-1 border-slate-100 rounded-md">+ Increment</button>
            </div>
            <div>{accum}</div>
        </ExperimentWrapper>
    )
}