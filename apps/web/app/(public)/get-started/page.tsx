export default function GetStartedPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-semibold">Get Started</h1>
      <div className="flex gap-4">
        <button className="rounded-full border border-white/20 px-6 py-3">Create Account</button>
        <button className="rounded-full bg-white px-6 py-3 text-slate-900">Log In</button>
      </div>
    </main>
  );
}
