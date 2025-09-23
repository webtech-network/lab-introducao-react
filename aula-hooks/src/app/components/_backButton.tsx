
export default function BackButton({ noBackButton }: Readonly<{ noBackButton?: boolean }>) {
  return (
    !noBackButton && (
      <button
        className="fixed top-0 left-0 m-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2"
        onClick={() => window.history.back()}
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            d="M15 19l-7-7 7-7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Voltar
      </button>
    )
  );
}