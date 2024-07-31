'use client'
import { useCallback, useState } from "react";
import Dialog from "./modal";

const resolveAfter = (t: number) =>
  new Promise<undefined>((resolve) => setTimeout(resolve, t, undefined));


export default function Home() {
  const [show, setShow] = useState(false)
  const onToggle = useCallback(() => {
    setShow(s => !s)
  }, [])

  const onConfirm = useCallback(async () => {
    await resolveAfter(2000);
  }, []);

  return (
    <main className="">
      <h2>Implemenet a modal</h2>
      <button className="p-1 rounded-md border border-slate-100  bg-slate-50 outline-none" onClick={onToggle}>Open Modal</button>
      <Dialog
        open={show}
        title={<div>this is title</div>}
        onClose={onToggle}
        onConfirm={onConfirm}
      >
        <div>This Is Modal Content</div>
      </Dialog>
    </main>
  );
}
