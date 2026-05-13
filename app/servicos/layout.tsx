import StickyFooter from '../components/StickyFooter'

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StickyFooter />
    </>
  )
}