export function getCityFromSlug(slug: string): string | null {
  const prefix = 'produtora-audiovisual-';
  
  // Se não começar com o prefixo exato, retorna null (inválido)
  if (!slug || !slug.startsWith(prefix)) {
    return null;
  }

  // Remove o prefixo e formata (ex: "rio-de-janeiro" -> "Rio De Janeiro")
  // Você pode melhorar a formatação se quiser (Title Case)
  const citySlug = slug.replace(prefix, '');
  
  if (!citySlug) return null; // Caso seja apenas "/produtora-audiovisual-" sem cidade

  // Formatação simples para Title Case
  return citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}