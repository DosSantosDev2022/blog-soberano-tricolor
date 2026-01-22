// lib/hygraph.ts
export async function hygraphFetch<T>({ query, variables = {}, tags = [] }: { 
  query: string, 
  variables?: any,
  tags?: string[] 
}) {
  
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const res = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
    cache:"force-cache",
    next: {
      tags: tags, // Aqui está o segredo do cache estratégico!
      revalidate: 3600 , // revalida o cache cada 3600 segundos (1 hora)
    },
  });

  const json = await res.json();
  return json.data;
}