export function usePageSeo(title: string, description: string, options?: { ogTitle?: string; ogDescription?: string; ogType?: string }) {
  useSeoMeta({
    title,
    description,
    ogTitle: options?.ogTitle ?? title,
    ogDescription: options?.ogDescription ?? description,
    ogType: options?.ogType ?? 'website',
  })
}
