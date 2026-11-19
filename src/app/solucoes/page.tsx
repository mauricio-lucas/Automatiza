"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { BotaoPrimario } from "@/components/ui";
import { solucoes, categorias } from "@/lib/data";

export default function SolucoesPage() {
  const [categoria, setCategoria] = useState<(typeof categorias)[number]>("Todas");

  const filtradas =
    categoria === "Todas" ? solucoes : solucoes.filter((s) => s.categoria === categoria);

  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        titulo="Soluções de automação"
        descricao="Cada solução nasce de um processo mapeado no diagnóstico As-Is e corresponde a um pacote de trabalho da EAP do projeto — do script Python ao workflow n8n."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                categoria === c
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : "border-white/15 text-slate-300 hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((s) => {
            const card = (
              <article
                className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-indigo-500/40 ${
                  s.demoUrl ? "cursor-pointer" : ""
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {s.categoria}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-white">{s.titulo}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {s.descricao}
                </p>
                <p className="mt-4 text-xs text-slate-500">📦 Entregável: {s.entrega}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );

            return s.demoUrl ? (
              <a key={s.id} href={s.demoUrl} download className="block">
                {card}
              </a>
            ) : (
              <div key={s.id}>{card}</div>
            );
          })}
        </div>

        {filtradas.length === 0 && (
          <p className="mt-10 text-center text-slate-400">
            Nenhuma solução encontrada nesta categoria.
          </p>
        )}

        <div className="mt-16 rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Não encontrou o seu processo na lista?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            O diagnóstico As-Is identifica exatamente quais rotinas do seu escritório
            valem a pena automatizar — e em que ordem.
          </p>
          <div className="mt-6 flex justify-center">
            <BotaoPrimario href="/contato">Falar com a equipe</BotaoPrimario>
          </div>
        </div>
      </section>
    </>
  );
}
