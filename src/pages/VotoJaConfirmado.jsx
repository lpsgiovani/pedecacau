import React from 'react';

function VotoJaConfirmado() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-azul/10 text-azul">
            <span className="material-symbols-outlined text-4xl">info</span>
        </div>

        <h1
            className="text-6xl sm:text-7xl font-headline mb-4 tracking-tighter leading-[0.8] text-azul uppercase drop-shadow-sm">
            Seu&nbsp;voto já<br />foi&nbsp;confirmado <br />para essa cafeteria!
        </h1>
        <div className="max-w-xs mb-12 space-y-6">

            <div className="h-px w-12 bg-marrom/10 mx-auto"></div>

            <p className="text-3xl font-accent tracking-normal leading-tight text-marrom">
                Que tal descobrir um<br />
                <span className="text-rosa font-bold text-4xl">novo sabor</span> agora?
            </p>

            <p className="text-xs text-marrom/60 font-body font-bold leading-relaxed">
                Explore o circuito e deixe sua marca em<br />outra cafeteria participante!
            </p>

            <div className="pt-4">
                <a href="/"
                    className="inline-flex items-center bg-azul text-creme px-10 py-5 rounded-xl font-slab uppercase tracking-widest text-lg hover:bg-[#044085] transition-all active:scale-95 shadow-lg group">
                    <span>Ver outras cafeterias</span>
                </a>
            </div>
        </div>
    </div>

        </div>
    );
}

export default VotoJaConfirmado;
