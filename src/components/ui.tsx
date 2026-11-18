import Link from "next/link";
import type { ReactNode } from "react";

/** Título de seção reutilizável com eyebrow opcional. */
export function SectionTitle({
  eyebrow,
  titulo,
  descricao,
}: {
  eyebrow?: string;
  titulo: string;
  descricao?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {titulo}
      </h2>
      {descricao && <p className="mt-4 text-lg text-slate-400">{descricao}</p>}
    </div>
  );
}

/** Botão primário (link). */
export function BotaoPrimario({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-400"
    >
      {children}
    </Link>
  );
}

/** Botão secundário (link). */
export function BotaoSecundario({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-slate-200 transition-colors hover:bg-white/5"
    >
      {children}
    </Link>
  );
}

/** Cabeçalho padrão das páginas internas. */
export function PageHeader({
  eyebrow,
  titulo,
  descricao,
}: {
  eyebrow: string;
  titulo: string;
  descricao: string;
}) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-indigo-950/40 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {titulo}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">{descricao}</p>
      </div>
    </section>
  );
}
