import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// ESTA FUNÇÃO RESOLVE O ERRO 405 NO NAVEGADOR
export async function GET() {
  return NextResponse.json({ 
    message: "A rota de revalidação está ativa! Envie um POST para processar." 
  }, { status: 200 });
}

export async function POST(request: NextRequest) {
  // 1. Obtém o token de segurança
  const secret = request.headers.get('X-Revalidate-Secret');

  // AJUDA NO DEBUG: Mostra no log da Vercel se o segredo chegou
  console.log("Secret recebido:", secret);
  console.log("Secret esperado:", process.env.HYGRAPH_WEBHOOK_SECRET);

  // 2. Verifica o token
  if (secret !== process.env.HYGRAPH_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Token Inválido' }, { status: 401 });
  }

  try {
    // 3. Comando que limpa o cache
    revalidatePath('/');
    revalidatePath('/artigos');
    revalidatePath('/artigos/[slug]', 'page');

    console.log("Revalidação executada com sucesso!");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Erro ao revalidar' }, { status: 500 });
  }
}