// lib/hygraph.ts
export async function hygraphFetch({ query, variables = {}, tags = [] }: { 
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
    next: {
      tags: tags, // Aqui está o segredo do cache estratégico!
      revalidate: 3600, // Revalida a cada hora por segurança
    },
  });

  const json = await res.json();
  return json.data;
}