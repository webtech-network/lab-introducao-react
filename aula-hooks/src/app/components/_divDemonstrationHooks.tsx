export default function divDemonstrationHooks({children}: Readonly<{children: React.ReactNode}>) {
  return(
    <div className="flex justify-center items-center min-h-screen flex-col bg-amber-200 text-[#332264] font-bold">
      {children}
    </div>
  )
}