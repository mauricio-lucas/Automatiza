"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { execucoesIniciais, execucoesPorDia, type Execucao } from "@/lib/data";

type Chip = "sucesso" | "falha" | "executando";

const chipStyles: Record<Chip, string> = {
  sucesso: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  falha: "bg-red-500/15 text-red-300 border-red-500/40",
  executando: "bg-sky-500/15 text-sky-300 border-sky-500/40",
};

const chipLabels: Record<Chip, string> = {
  sucesso: "Sucesso",
  falha: "Falha",
  executando: "Executando",
};

export default function DashboardPage() {
  const [execucoes, setExecucoes] = useState<Execucao[]>(execucoesIniciais);
  const [incidenteAtivo, setIncidenteAtivo] = useState(false);

  /**
   * Simulação do risco R02 (matriz de riscos do projeto):
   * "Instabilidade ou indisponibilidade da instância self-hosted do n8n".
   * O gatilho definido no plano de resposta é "queda de resposta HTTP
   * (status ≠ 200) no webhook por mais de 2 minutos" — aqui simularmos
   * a detecção e a ativação do plano de contingência.
   */
  function simularFalhaR02() {
    setExecucoes((prev) =>
      prev.map((e) =>
        e.plataforma === "n8n" && e.status === "executando"
          ? { ...e, status: "falha" as const }
          : e
      )
    );
    setIncidenteAtivo(true);
  }

  function restabelecerServico() {
    // Ação reativa do plano: reinício do serviço e reprocessamento em lote.
    setExecucoes((prev) =>
      prev.map((e) => (e.status === "falha" ? { ...e, status: "sucesso" as const } : e))
    );
    setIncidenteAtivo(false);
  }

  const totalExec = execucoesPorDia.reduce((acc, d) => acc + d.total, 0);
  const totalSucesso = execucoesPorDia.reduce((acc, d) => acc + d.sucesso, 0);
  const taxaSucesso = ((totalSucesso / totalExec) * 100).toFixed(1);

  return (
    <>
      <PageHeader
        eyebrow="Painel do cliente"
        titulo="Dashboard de automações"
        descricao="Acompanhamento em tempo real das execuções dos scripts e workflows implantados — com monitoramento ativo dos riscos do projeto."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Banner do incidente R02 */}
        {incidenteAtivo && (
          <div
            role="alert"
            className="mb-8 rounded-2xl border border-red-500/50 bg-red-950/40 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-red-300">
                  ⚠ Incidente ativo — Risco R02: instabilidade do n8n self-hosted
                </p>
                <p className="mt-2 text-sm text-red-200/80">
                  <strong>Gatilho detectado:</strong> webhook do n8n sem resposta (status
                  ≠ 200) por mais de 2 minutos.
                </p>
              </div>
              <button
                onClick={restabelecerServico}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400"
              >
                Executar plano de contingência
              </button>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-red-500/30 pt-4 text-sm text-red-200/90">
              <li>1. Reiniciar o serviço via systemd/Docker (restart: always já configurado).</li>
              <li>2. Acionar o processamento em lote contingencial via Python (execução assistida).</li>
              <li>3. Notificar o responsável: Luiz Felipe (Desenvolvedor).</li>
            </ul>
          </div>
        )}

        {/* KPIs */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Workflows ativos", valor: "6" },
            { label: "Execuções (5 dias)", valor: String(totalExec) },
            { label: "Taxa de sucesso", valor: `${taxaSucesso}%` },
            { label: "Horas economizadas / semana", valor: "31 h" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">{kpi.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{kpi.valor}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* Tabela de execuções */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <h2 className="font-semibold text-white">Execuções recentes</h2>
                {!incidenteAtivo && (
                  <button
                    onClick={simularFalhaR02}
                    className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/20"
                  >
                    Simular instabilidade do n8n (R02)
                  </button>
                )}
              </div>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Workflow</th>
                    <th className="px-6 py-3 font-medium">Plataforma</th>
                    <th className="px-6 py-3 font-medium">Horário</th>
                    <th className="px-6 py-3 font-medium">Duração</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {execucoes.map((e) => (
                    <tr key={e.id} className="text-slate-300">
                      <td className="px-6 py-3.5 font-medium text-slate-100">
                        {e.workflow}
                      </td>
                      <td className="px-6 py-3.5">{e.plataforma}</td>
                      <td className="px-6 py-3.5">{e.horario}</td>
                      <td className="px-6 py-3.5">{e.duracao}</td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${chipStyles[e.status]}`}
                        >
                          {e.status === "executando" && (
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
                          )}
                          {chipLabels[e.status]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gráfico de execuções */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-semibold text-white">Execuções por dia</h2>
              <div className="mt-8 flex h-48 items-end gap-4">
                {execucoesPorDia.map((d) => {
                  const alturaPct = (d.total / 150) * 100;
                  const sucessoPct = (d.sucesso / d.total) * 100;
                  return (
                    <div key={d.dia} className="flex flex-1 flex-col items-center gap-2">
                      <span className="text-xs text-slate-400">{d.total}</span>
                      <div
                        className="flex w-full flex-col justify-end overflow-hidden rounded-lg bg-white/5"
                        style={{ height: `${alturaPct}%` }}
                      >
                        <div
                          className="w-full bg-indigo-500"
                          style={{ height: `${sucessoPct}%` }}
                        />
                        {sucessoPct < 100 && (
                          <div
                            className="w-full bg-red-500"
                            style={{ height: `${100 - sucessoPct}%` }}
                          />
                        )}
                      </div>
                      <span className="text-xs text-slate-400">{d.dia}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-xs text-slate-500">
                Em <span className="text-indigo-300">azul</span> execuções bem-sucedidas ·
                em <span className="text-red-300">vermelho</span> falhas (inclui a
                instabilidade simulada do R02 na quinta-feira).
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Quer entender como monitoramos os riscos das automações?{" "}
          <Link href="/riscos" className="text-indigo-400 hover:text-indigo-300">
            Veja a matriz de riscos do projeto
          </Link>
          .
        </p>
      </section>
    </>
  );
}
