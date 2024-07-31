import { useCallback, useState } from "react"
import ExperimentWrapper from "../components/experiment"
import Modal from "../components/modal"

const fakeRemoteAction = (t: any) =>
    new Promise((resolve) => setTimeout(resolve, t, Math.random()))



export default function ShowModal() {
    const [show, setShow] = useState(false)

    const onOpen = useCallback(() => {
        setShow(true)
      }, [])
    
      const onClose = useCallback(() => {
        setShow(false)
      }, [])

      const onConfirm = useCallback(async () => {
        const actionResult = await fakeRemoteAction(2000)
        console.log(actionResult)
        // 如果返回 true，关闭弹窗
        // 返回 false，保持弹窗打开状态
        return actionResult > 0.5
      }, [])

    return (
        <ExperimentWrapper title="Modal">
            <button className="p-1 rounded-md border border-slate-100  bg-slate-50 outline-none" onClick={onOpen}>Open Modal</button>
            <Modal
                open={show}
                title={<div>this is title</div>}
                onClose={onClose}
                escKeywordClosable={true}
                onConfirm={onConfirm}
                getContainer={() => document.body}
            >
                <div>This Is Modal Content</div>
            </Modal>
        </ExperimentWrapper>
    )
}