export function CTASection(){
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Gerencie e Crie Seus Componentes React
        <span className="text-sky-500"> Sem Esforço!</span>
      </h2>
      <p className="text-center text-[15px] w-[510px] max-sm:w-full text-slate-500">
        Economize tempo reutilizando seus componentes favoritos. Armazene-os em um banco de dados centralizado e crie novos componentes com facilidade.
        Aprimore seu fluxo de trabalho de desenvolvimento tendo acesso rápido a uma biblioteca de componentes reutilizáveis e garanta consistência em seus projetos.
      </p>
      <button className="block bg-sky-500 rounded-md px-9 py-3 text-sm font-medium text-white hover:bg-sky-600" type="button">
        Let's Get Started!
      </button>
    </div>
  )
}