'use client'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdate = "21 de Janeiro de 2026";

  return (
    <main className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl">
      {/* Cabeçalho */}
      <header className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter border-l-8 border-red-600 pl-6">
          Política de <span className="text-red-600">Privacidade</span>
        </h1>
        <p className="text-zinc-500 font-medium">Última atualização: {lastUpdate}</p>
      </header>

      <section className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300">

        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            A sua privacidade é importante para nós. É política do <strong>Soberano Tricolor</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
          </p>
        </div>

        <Separator />

        {/* 1. Coleta de Informações */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase">1. Coleta de Informações</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como a nossa Newsletter). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
          </p>
        </div>

        {/* 2. Google AdSense e Cookies */}
        <div className="space-y-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase">2. Google AdSense e Cookies DART</h2>
          <p>
            O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso site. Com o cookie DART, o Google pode exibir anúncios com base nas visitas que o leitor fez a este e a outros sites na Internet.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Os fornecedores de terceiros, incluindo o Google, utilizam cookies para apresentar anúncios com base em visitas anteriores.</li>
            <li>O uso de cookies de publicidade permite ao Google e aos seus parceiros apresentar anúncios com base nas visitas dos usuários.</li>
            <li>Você pode desativar a publicidade personalizada visitando as <Link href="https://www.google.com/settings/ads" target="_blank" className="text-red-600 underline">Configurações de Anúncios</Link>.</li>
          </ul>
        </div>

        {/* 3. Links de Afiliados */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase">3. Divulgação de Afiliados</h2>
          <p>
            O Soberano Tricolor participa de programas de marketing de afiliados. Isso significa que podemos ganhar uma comissão sobre as compras efetuadas através de links para sites de parceiros (como a Loja do Torcedor). Isso não gera custo adicional para você.
          </p>
        </div>

        {/* 4. Retenção de Dados */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase">4. Retenção e Segurança</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos.
          </p>
        </div>

        {/* 5. Contato */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail de suporte.
          </p>
        </div>

      </section>

      {/* Botão de Voltar */}
      <div className="mt-16">
        <Button
          onClick={() => window.history.back()}
          className="bg-zinc-950 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors"
        >
          VOLTAR
        </Button>
      </div>
    </main>
  );
}