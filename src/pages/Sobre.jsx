import React from 'react';

function Sobre() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    {/* Main Content */}
    <main className="flex-grow">

        {/* Editorial Header Section */}
        <section className="max-w-5xl mx-auto pt-24 pb-12 px-6 text-center lg:text-left">
            {/* Brand Logo instead of "Quem Somos" */}
            <div className="flex justify-center lg:justify-start mb-10 animate-fade-in">
                <a href="/" className="inline-block hover:opacity-85 transition-opacity">
                    <img src="assets/logo.svg" className="h-8" alt="Pé de Cacau Logo"
                        style={{"filter":"invert(19%) sepia(91%) saturate(2224%) hue-rotate(205deg) brightness(91%) contrast(101%)"}} />
                </a>
            </div>
            <h1
                className="text-5xl sm:text-7xl font-headline tracking-tighter leading-[0.85] uppercase text-azul mb-1 animate-fade-in delay-100">
                A sua próxima<br />sobremesa favorita
            </h1>
            <p className="font-accent text-4xl sm:text-4xl text-rosa animate-fade-in delay-200 -mt-1">
                em Juiz de Fora.
            </p>
        </section>

        {/* Magazine Cover Layout Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Styled Image Frame */}
                <div className="lg:col-span-5 animate-fade-in delay-200">
                    <div className="relative">
                        {/* Background decorative color block */}
                        <div className="absolute -inset-3 bg-rosa rounded-[3rem] rotate-3 opacity-40"></div>
                        {/* Main image */}
                        <div
                            className="relative rounded-[2.8rem] overflow-hidden shadow-xl border-4 border-white aspect-[4/5]">
                            <img src="assets/about.jpeg" className="w-full h-full object-cover" alt="Sobre o Pé de Cacau" />
                        </div>
                    </div>
                </div>

                {/* Editorial Content */}
                <div className="lg:col-span-7 space-y-8 text-left animate-fade-in delay-300">
                    <p className="text-xl sm:text-2xl font-body font-light text-marrom/90 leading-relaxed">
                        O <strong className="text-azul font-bold">Pé de Cacau</strong> surge como o aquecimento ideal para
                        quem está com saudades do <strong className="text-marrom font-semibold">Pé de
                            Café</strong>, o concurso de cafeterias que acontece anualmente em Juiz de Fora.
                    </p>

                    <div className="h-px w-full bg-azul/10"></div>

                    <div className="space-y-6 text-base sm:text-lg text-marrom/75 leading-relaxed font-body">
                        <p>
                            Diferente do Pé de Café, onde cada participante oferece um combo completo (doce,
                            salgado e bebida), o <strong>Pé de Cacau</strong> nasceu com o foco exclusivo em celebrar as
                            sobremesas que tanto amamos.
                        </p>
                        <p>
                            Nesta edição de aquecimento, selecionamos <strong className="text-azul font-semibold">26
                                cafeterias parceiras</strong> para criarem receitas autorais incríveis com o ingrediente
                            protagonista, todas ao preço fixo promocional de <strong className="text-azul font-semibold">R$
                                25</strong>. É a oportunidade perfeita de explorar novos sabores na cidade!
                        </p>
                    </div>

                    <div className="pt-4 flex justify-center lg:justify-start">
                        <a href="/"
                            className="inline-flex items-center gap-3 bg-azul text-white font-slab uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:bg-[#044085] transition-all hover:shadow-md">
                            Ver Cafeterias <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        {/* Pillars Grid Section */}
        <section className="bg-white/80 border-t border-b border-azul/5 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl sm:text-4xl uppercase tracking-tighter text-azul">Como funciona o
                        festival</h2>
                    <p className="font-body text-sm text-marrom/50 uppercase tracking-widest mt-2">Três passos simples para
                        adoçar o seu mês</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Pillar 1 */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-rosa/30 text-azul flex items-center justify-center shadow-sm transition-all duration-300 hover:rotate-6 hover:scale-105 hover:bg-rosa/40" style={{"borderRadius":"60% 40% 60% 40% / 50% 60% 40% 50%"}}>
                            {/* Steaming coffee mug SVG */}
                            <svg className="w-10 h-10 text-azul" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                                <line x1="6" y1="2" x2="6" y2="4" />
                                <line x1="10" y1="2" x2="10" y2="4" />
                                <line x1="14" y1="2" x2="14" y2="4" />
                            </svg>
                        </div>
                        <h3 className="font-slab text-xl uppercase text-azul tracking-wide">1. Escolha & Visite</h3>
                        <p className="text-sm text-marrom/60 leading-relaxed font-body max-w-xs">
                            Navegue pelas cafeterias participantes e vá até os estabelecimentos experimentar as receitas
                            especiais do evento.
                        </p>
                    </div>
                    {/* Pillar 2 */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-rosa/30 text-azul flex items-center justify-center shadow-sm transition-all duration-300 hover:-rotate-6 hover:scale-105 hover:bg-rosa/40" style={{"borderRadius":"40% 60% 50% 50% / 60% 40% 60% 40%"}}>
                            {/* Price Tag SVG */}
                            <svg className="w-10 h-10 text-azul" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="font-slab text-xl uppercase text-azul tracking-wide">2. Valor Fixo</h3>
                        <p className="text-sm text-marrom/60 leading-relaxed font-body max-w-xs">
                            Todas as receitas exclusivas criadas para o Pé de Cacau possuem o valor único de R$ 25.
                        </p>
                    </div>
                    {/* Pillar 3 */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-rosa/30 text-azul flex items-center justify-center shadow-sm transition-all duration-300 hover:rotate-6 hover:scale-105 hover:bg-rosa/40" style={{"borderRadius":"50% 50% 60% 40% / 40% 60% 50% 50%"}}>
                            {/* Heart SVG */}
                            <svg className="w-10 h-10 text-azul" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <h3 className="font-slab text-xl uppercase text-azul tracking-wide">3. Vote no Site</h3>
                        <p className="text-sm text-marrom/60 leading-relaxed font-body max-w-xs">
                            Escaneie o QR Code em cada mesa, avalie as sobremesas e ajude a eleger a grande vencedora.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    {/* Footer */}
    <footer className="w-full bg-azul text-creme py-16 px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            <img src="assets/logo.svg" className="h-12 mb-8" alt="Pé de Cacau Logo"
                style={{"filter":"invert(100%)","opacity":"0.5"}} />

            <div className="flex justify-center gap-6 mb-8 text-[10px]">
                <a href="/"
                    className="font-slab uppercase tracking-widest hover:text-rosa transition-colors opacity-60 hover:opacity-100">Início</a>
                <span className="text-rosa font-bold">/</span>
                <a href="/sobre"
                    className="font-slab uppercase tracking-widest hover:text-rosa transition-colors opacity-60 hover:opacity-100">Sobre</a>
            </div>

            <div className="flex flex-col items-center gap-2 opacity-35 text-[8px] uppercase tracking-[0.3em] font-body">
                <p>Realização: <a href="https://instagram.com/oquefazerem.jf" target="_blank"
                        className="font-bold hover:text-rosa transition-colors">O que fazer em JF</a></p>
                <p>Desenvolvido por: <a href="https://primitiva.cc" target="_blank"
                        className="font-bold hover:text-rosa transition-colors">Primitiva</a></p>
                <p className="mt-8">© 2026 Todos os direitos reservados</p>
            </div>
        </div>
    </footer>

    {/* Prevent right-click and drag-to-save on all images */}
    

        </div>
    );
}

export default Sobre;
