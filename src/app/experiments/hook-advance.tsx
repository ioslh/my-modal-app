import { DependencyList, useState } from "react"
import ExperimentWrapper from "../components/experiment"

type BodyOnClickHook = (f: () => void, deps: DependencyList) => (()=> void)
const useBodyOnClick = ((f: () => void, deps: DependencyList)  => {
    //
}) as BodyOnClickHook

export default function HookAdvanced() {
    const [content, setContent] = useState('hello')
    const removeListener = useBodyOnClick(() => {
        // 点击 document.body 时执行该函数
        console.log('Current content is ', content)
    }, [content])

    return (
        <ExperimentWrapper title="Hook basic">
            <input className="p-1 border border-blue-400" type="text" value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={removeListener} className="p-1 border-slate-100 border bg-slate-50" >Remove Listener</button>
        </ExperimentWrapper>
    )
}