import Link from "next/link";
import { brand } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" />
              </svg>
            </span>
            {brand.name}
          </p>
          <p className="mt-3 text-sm text-slate-400">{brand.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-slate-200">Navegação</p>
          <ul className="mt-3 space-y-2 text-slate-400">
            {[
              ["/solucoes", "Soluções"],
              ["/planos", "Planos"],
              ["/dashboard", "Dashboard"],
              ["/riscos", "Matriz de Riscos"],
              ["/contato", "Contato"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-slate-200">Contato</p>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li>{brand.email}</li>
            <li>{brand.whatsapp}</li>
            <li>{brand.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © 2026 {brand.name} · Protótipo desenvolvido para a disciplina de Gerência de
        Projetos — UEPA / Engenharia de Software · Grupo: Mauricio Araujo · Nicolas
        Gabriel · Luiz Felipe
      </div>
    </footer>
  );
}
