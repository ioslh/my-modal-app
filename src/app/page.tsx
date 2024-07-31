'use client'
import HookBasic from "./experiments/hook-basic";
import HookAdvanced from "./experiments/hook-advance";
import ShowModal from "./experiments/show-modal";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <HookBasic />
      <HookAdvanced />
      <ShowModal />
    </main>
  );
}
