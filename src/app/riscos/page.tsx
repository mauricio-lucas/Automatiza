"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { riscos, severidade, type Risco } from "@/lib/data";

const niveis = ["Baixíssimo", "Baixo", "Médio", "Alto", "Crítico"];

export default function RiscosPage() {
  const [selecionado, setSelecionado] = useState<Risco>(riscos[4]); // R05 abre por padrão (maior severidade)

  // Matriz 5×5: eixo X = probabilidade, eixo Y = impacto (5 no topo)
  const celulas = (impacto: number, probabilidade: number) =>
    riscos.filter((r) => r.probabilidade === probabilidade && r.impacto === impacto);

  return (
    <>
      <PageHeader
        eyebrow="Gestão de riscos"
        titulo="Matriz de Probabilidade × Impacto"
        descricao="Os 8 eventos de risco do projeto, avaliados na escala qualitativa de 1 a 5. Clique em um risco para ver o plano de prevenção e o plano de contingência."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Matriz */}
          <div>
            <div className="overflow-x-auto">
              <div className="flex gap-2">
                {/* Rótulo do eixo Y */}
                <div className="flex w-6 items-center justify-center">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest text-slate-500"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    Impacto
                  </span>
                </div>

                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map((impacto) => (
                    <div key={impacto} className="mb-2 flex gap-2 last:mb-0">
                      <div className="flex w-24 items-center justify-end pr-1 text-right text-xs text-slate-500">
                        {niveis[impacto - 1]}
                      </div>
                      {[1, 2, 3, 4, 5].map((prob) => {
                        const itens = celulas(impacto, prob);
                        const { cor } = severidade(prob, impacto);
                        return (
                          <div
                            key={prob}
                            className={`flex min-h-16 flex-1 flex-wrap content-start gap-1 rounded-lg border p-1.5 ${
                              itens.length > 0 ? cor : "border-white/10 bg-white/[0.02]"
                            }`}
                          >
                            {itens.map((r) => (
                              <button
                                key={r.id}
                                onClick={() => setSelecionado(r)}
                                className={`rounded px-1.5 py-0.5 text-xs font-bold transition-transform hover:scale-110 ${
                                  selecionado.id === r.id
                                    ? "bg-white text-slate-900 ring-2 ring-white"
                                    : "bg-white/15 text-white hover:bg-white/25"
                                }`}
                                title={r.descricao}
                              >
                                {r.id}
                              </button>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                  {/* Rótulo do eixo X */}
                  <div className="mt-2 flex gap-2">
                    <div className="w-24" />
                    {[1, 2, 3, 4, 5].map((p) => (
                      <div
                        key={p}
                        className="flex-1 text-center text-xs text-slate-500"
                      >
                        {niveis[p - 1]}
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 pl-[6.5rem] text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Probabilidade
                  </p>
                </div>
              </div>
            </div>

            {/* Legenda */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded border border-emerald-500/40 bg-emerald-500/15" />
                Baixo (1–6)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded border border-amber-500/40 bg-amber-500/15" />
                Médio (8–12)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded border border-red-500/40 bg-red-500/15" />
                Alto (15–25)
              </span>
            </div>
          </div>

          {/* Detalhe do risco selecionado */}
          <div>
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-indigo-500 px-3 py-1 text-sm font-bold text-white">
                  {selecionado.id}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    severidade(selecionado.probabilidade, selecionado.impacto).cor
                  }`}
                >
                  {selecionado.descricao &&
                    `Severidade ${severidade(selecionado.probabilidade, selecionado.impacto).nivel} · P${selecionado.probabilidade} × I${selecionado.impacto} = ${selecionado.probabilidade * selecionado.impacto}`}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-semibold leading-snug text-white">
                {selecionado.descricao}
              </h2>

              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ["Categoria", selecionado.categoria],
                  ["Estratégia de resposta", selecionado.estrategia],
                  ["Plano de prevenção (ação proativa)", selecionado.prevencao],
                  ["Gatilho de ativação", selecionado.gatilho],
                  ["Plano de contingência (ação reativa)", selecionado.contingencia],
                  ["Responsável", selecionado.responsavel],
                ].map(([termo, def]) => (
                  <div key={termo}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {termo}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-slate-300">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
