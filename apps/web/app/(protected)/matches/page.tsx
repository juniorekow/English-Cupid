export default function ProtectedPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold">Protected Route</h1>
      <p className="text-slate-400">Placeholder for the ${route} view.</p>
    </main>
  );
}
