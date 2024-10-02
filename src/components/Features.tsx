
import { ChangeHistoryRounded, CodeRounded, StorageRounded } from '@mui/icons-material';
type FeatureInfo = {
  id: number;
  name: string;
  icon: any;
  description: string;
};

export function Features(){

  const features: FeatureInfo[] = [
    {
      "id": 1,
      "name": "Biblioteca de Componentes Centralizada",
      "icon": <StorageRounded className='text-sky-500 text-[32px]' />,
      "description": "Organize todos os seus componentes React em uma biblioteca centralizada. Navegue, busque e acesse facilmente seus componentes salvos sempre que precisar."
    },
    {
      "id": 2,
      "name": "Componentes Reutilizáveis",
      "icon": <CodeRounded className='text-sky-500 text-[32px]' />,
      "description": "Crie e edite seus componentes React diretamente em nosso editor intuitivo. Escreva código JSX com destaque de sintaxe e visualizações instantâneas."
    },
    {
      "id": 3,
      "name": "Controle de Versão e Histórico",
      "icon": <ChangeHistoryRounded className='text-sky-500 text-[32px]' />,
      "description": "Acompanhe as alterações e mantenha diferentes versões dos seus componentes. Reverta para versões anteriores se necessário e mantenha um histórico de modificações."
    }
  ];

  return (
    <section className='features-section py-12 bg-slate-50 mt-12'>
      <div className='mx-auto px-4'>
        <h2 className='text-2xl font-bold text-center'>
          Principais Funcionalidades
        </h2>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => {
            return (
              <div key={index} className='p-6 bg-white rounded-lg shadow-sm flex flex-col items-center'>
                <div className='w-20 h-20 rounded-full items-center justify-center flex bg-sky-100'>
                  {feature.icon}
                </div>
                <h3 className='text-lg font-semibold text-sky-500 mt-6 text-center'>
                  {feature.name}
                </h3>
                <p className='text-slate-600 text-[13px] mt-2 text-center w-[80%]'>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}