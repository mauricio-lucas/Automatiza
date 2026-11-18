"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { brand } from "@/lib/data";

interface Formulario {
  nome: string;
  email: string;
  empresa: string;
  plano: string;
  mensagem: string;
}

const vazio: Formulario = {
  nome: "",
  email: "",
  empresa: "",
  plano: "Diagnóstico",
  mensagem: "",
};

export default function ContatoPage() {
  const [form, setForm] = useState<Formulario>(vazio);
  const [erros, setErros] = useState<Partial<Record<keyof Formulario, string>>>({});
  const [enviado, setEnviado] = useState(false);

  function set<K extends keyof Formulario>(campo: K, valor: string) {
    setForm((f) => ({ ...f, [campo]: valor }));
    // Limpa o erro do campo conforme o usuário corrige
    setErros((e) => ({ ...e, [campo]: undefined }));
  }

  function validar(): boolean {
    const e: Partial<Record<keyof Formulario, string>> = {};
    if (!form.nome.trim()) e.nome = "Informe o seu nome.";
    if (!form.email.trim()) e.email = "Informe um e-mail para retorno.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Formato de e-mail inválido (ex.: nome@empresa.com.br).";
    if (form.mensagem.trim().length < 10)
      e.mensagem = "Descreva brevemente o processo que deseja automatizar (mín. 10 caracteres).";
    setErros(e);
    return Object.keys(e).length === 0;
  }

  function aoEnviar(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validar()) return;
    // Protótipo: o envio é simulado (sem back-end).
    setEnviado(true);
  }

  const inputBase =
    "w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500";
  const inputOk = "border-white/15 focus:ring-1 focus:ring-indigo-500";
  const inputErro = "border-red-500/60 focus:ring-1 focus:ring-red-500";

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        titulo="Vamos automatizar o seu escritório?"
        descricao="Conte para a gente qual rotina toma mais tempo da sua equipe. Respondemos em até 1 dia útil."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-3">
        {/* Formulário */}
        <div className="lg:col-span-2">
          {enviado ? (
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-10 text-center">
              <span className="text-5xl" aria-hidden>
                ✅
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white">
                Mensagem recebida, {form.nome.split(" ")[0]}!
              </h2>
              <p className="mx-auto mt-3 max-w-md text-slate-300">
                Nossa equipe entrará em contato pelo e-mail{" "}
                <strong className="text-white">{form.email}</strong> em até 1 dia útil
                para agendar a conversa inicial sobre o plano{" "}
                <strong className="text-white">{form.plano}</strong>.
              </p>
              <button
                onClick={() => {
                  setForm(vazio);
                  setEnviado(false);
                }}
                className="mt-8 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={aoEnviar} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Nome completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={(e) => set("nome", e.target.value)}
                    placeholder="Maria Souza"
                    className={`${inputBase} ${erros.nome ? inputErro : inputOk}`}
                  />
                  {erros.nome && <p className="mt-1.5 text-xs text-red-400">{erros.nome}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                    E-mail corporativo *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="maria@empresa.com.br"
                    className={`${inputBase} ${erros.email ? inputErro : inputOk}`}
                  />
                  {erros.email && <p className="mt-1.5 text-xs text-red-400">{erros.email}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    value={form.empresa}
                    onChange={(e) => set("empresa", e.target.value)}
                    placeholder="Empresa Ltda."
                    className={`${inputBase} ${inputOk}`}
                  />
                </div>
                <div>
                  <label htmlFor="plano" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Plano de interesse
                  </label>
                  <select
                    id="plano"
                    value={form.plano}
                    onChange={(e) => set("plano", e.target.value)}
                    className={`${inputBase} ${inputOk}`}
                  >
                    <option className="bg-slate-900">Diagnóstico</option>
                    <option className="bg-slate-900">Implementação</option>
                    <option className="bg-slate-900">Gestão Contínua</option>
                    <option className="bg-slate-900">Ainda não sei</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Qual processo você quer automatizar? *
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => set("mensagem", e.target.value)}
                  placeholder="Ex.: toda sexta-feira uma pessoa consolida manualmente as planilhas de vendas de 4 filiais..."
                  className={`${inputBase} ${erros.mensagem ? inputErro : inputOk} resize-none`}
                />
                {erros.mensagem && (
                  <p className="mt-1.5 text-xs text-red-400">{erros.mensagem}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-400 sm:w-auto"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>

        {/* Informações de contato */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm">
            <h2 className="font-semibold text-white">Canais diretos</h2>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>📧 {brand.email}</li>
              <li>💬 {brand.whatsapp}</li>
              <li>📍 {brand.location}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm">
            <h2 className="font-semibold text-white">O que acontece depois?</h2>
            <ol className="mt-4 list-inside list-decimal space-y-2 text-slate-400">
              <li>Retorno por e-mail em até 1 dia útil.</li>
              <li>Reunião de 30 min para entender o contexto.</li>
              <li>Proposta de diagnóstico com escopo e prazo fechados.</li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
