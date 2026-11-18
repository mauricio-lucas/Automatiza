import { SectionTitle, BotaoPrimario, BotaoSecundario } from "@/components/ui";
import { brand, problemaStats, pilares, etapas } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-10rem,rgba(99,102,241,0.25),transparent)]"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            Consultoria em Automação Empresarial
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {brand.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            {brand.description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BotaoPrimario href="/solucoes">Conheça as soluções</BotaoPrimario>
            <BotaoSecundario href="/dashboard">Acessar o dashboard</BotaoSecundario>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="O problema"
            titulo="Quanto custa fazer à mão o que uma máquina faria em segundos?"
            descricao="Nosso diagnóstico As-Is em escritórios revelou três padrões que drenam horas e dinheiro todos os dias."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problemaStats.map((s) => (
              <div
                key={s.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-4xl font-bold text-indigo-400">{s.valor}</p>
                <p className="mt-1 font-semibold text-white">{s.titulo}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução: pilares */}
      <section className="border-t border-white/10 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="A solução"
            titulo="Três frentes, um só objetivo: seu time no que realmente importa"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pilares.map((p) => (
              <div
                key={p.titulo}
                className="rounded-2xl border border-white/10 bg-slate-950 p-8 transition-colors hover:border-indigo-500/40"
              >
                <span className="text-3xl" aria-hidden>
                  {p.icone}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona (espelha as fases da EAP) */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="Como funciona"
            titulo="Um método claro, do diagnóstico ao treinamento"
            descricao="Cada fase tem entregáveis, critérios de aceite e responsáveis definidos — sem surpresas no caminho."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {etapas.map((e) => (
              <li
                key={e.numero}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm font-bold text-indigo-400">{e.numero}</span>
                <h3 className="mt-2 font-semibold text-white">{e.titulo}</h3>
                <p className="mt-2 text-sm text-slate-400">{e.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para colocar o seu escritório no piloto automático?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Comece com um diagnóstico sem compromisso e descubra em duas semanas
            quanto tempo a sua equipe poderia recuperar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BotaoPrimario href="/contato">Solicitar diagnóstico</BotaoPrimario>
            <BotaoSecundario href="/planos">Ver planos</BotaoSecundario>
          </div>
        </div>
      </section>
    </>
  );
}
