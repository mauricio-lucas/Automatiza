import { PageHeader, BotaoPrimario } from "@/components/ui";
import { planos } from "@/lib/data";

export default function PlanosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investimento"
        titulo="Planos para cada estágio da sua jornada"
        descricao="Comece pequeno com o diagnóstico, evolua para a implementação completa e mantenha tudo rodando com a gestão contínua."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {planos.map((p) => (
            <article
              key={p.nome}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.destaque
                  ? "border-indigo-500 bg-gradient-to-b from-indigo-950/60 to-slate-950 shadow-[0_0_2rem_rgba(99,102,241,0.15)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Mais escolhido
                </span>
              )}
              <h2 className="text-xl font-semibold text-white">{p.nome}</h2>
              <p className="mt-3 text-3xl font-bold text-indigo-400">{p.preco}</p>
              <p className="mt-3 text-sm text-slate-400">{p.resumo}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                {p.itens.map((item) => (
                  <li key={item} className="flex gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BotaoPrimario href="/contato">{p.cta}</BotaoPrimario>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Valores de referência para o protótipo — propostas formais são elaboradas
          após o diagnóstico, com escopo e prazo assinados (controle formal de mudanças).
        </p>
      </section>
    </>
  );
}
