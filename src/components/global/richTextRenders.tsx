import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image'; // Importante para SEO e Performance

// --- 📦 Tipos ---
interface DefaultRendersProps { children: ReactNode; }
interface DefaultRendersLinkProps extends DefaultRendersProps { href?: string; }
interface ImageRenderProps { src?: string; altText?: string; width?: number; height?: number; }

const defaultRenders = {
  // --- 📝 Tipografia SPFC ---

  // H1: Título de impacto com a cor do clube
  h1: ({ children }: DefaultRendersProps) => (
    <h1 className="text-zinc-950 dark:text-white font-black text-4xl tracking-tighter leading-[1.1] my-10 md:text-6xl border-l-8 border-red-600 pl-4">
      {children}
    </h1>
  ),

  h2: ({ children }: DefaultRendersProps) => (
    <h2 className="text-zinc-900 dark:text-zinc-100 font-extrabold text-3xl tracking-tight my-8 md:text-4xl">
      {children}
    </h2>
  ),

  // P: Ajustado para fonte "Sans" limpa, garantindo legibilidade longa
  p: ({ children }: DefaultRendersProps) => (
    <p className="text-zinc-800 dark:text-zinc-300 text-base leading-relaxed lg:text-lg my-6 selection:bg-red-600 selection:text-white">
      {children}
    </p>
  ),

  // Links: Vermelho SPFC com underline animado
  a: ({ children, href }: DefaultRendersLinkProps) => (
    <a
      href={href}
      target={href?.startsWith('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="text-red-600 font-semibold transition-all duration-200 underline decoration-red-600/30 underline-offset-4 hover:decoration-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 px-1 rounded"
    >
      {children}
    </a>
  ),

  // --- 📚 Listas ---

  ul: ({ children }: DefaultRendersProps) => (
    <ul className="list-none space-y-3 pl-2 my-6">
      {/* Marcador personalizado: quadrado vermelho (estilo retrô do clube) */}
      {children}
    </ul>
  ),

  li: ({ children }: DefaultRendersProps) => (
    <li className="flex gap-3 text-zinc-800 dark:text-zinc-300">
      <span className="text-red-600 mt-1.5 shrink-0">▪</span>
      <span>{children}</span>
    </li>
  ),

  // Bloco de citação: Estilo "MorumBIS"
  blockquote: ({ children }: DefaultRendersProps) => (
    <blockquote className="my-10 border-l-4 border-red-600 bg-zinc-50 dark:bg-zinc-900 p-6 italic rounded-r-xl shadow-sm quote-icon">
      <div className="text-zinc-700 dark:text-zinc-400">
        {children}
      </div>
    </blockquote>
  ),

  // --- 💻 Mídia ---

  img: ({ src, altText, width, height }: ImageRenderProps) => (
    <figure className="my-12 space-y-3">
      <div className="relative overflow-hidden rounded-2xl border-4 border-zinc-100 dark:border-zinc-800 shadow-xl">
        {src && (
          <img
            src={src}
            alt={altText ?? 'Imagem SPFC.news'}
            width={width || 1200}
            height={height || 675}
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        )}
      </div>
      {altText && (
        <figcaption className="text-center text-sm text-zinc-500 italic">
          {altText}
        </figcaption>
      )}
    </figure>
  ),

  // --- 📊 Tabelas ---

  table: ({ children }: DefaultRendersProps) => (
    <div className="my-10 overflow-hidden rounded-xl border border-zinc-200 shadow-sm overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm md:text-base">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }: DefaultRendersProps) => (
    <thead className="bg-zinc-950 text-white uppercase text-xs tracking-widest">
      {children}
    </thead>
  ),

  th: ({ children }: DefaultRendersProps) => (
    <th className="px-6 py-4 font-bold border-b border-zinc-800">
      {children}
    </th>
  ),

  td: ({ children }: DefaultRendersProps) => (
    <td className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
      {children}
    </td>
  ),
}

export { defaultRenders };