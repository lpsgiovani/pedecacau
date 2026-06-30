import React from 'react';

function PerfilCafeteria() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    {/* Navigation */}
    <nav
        className="absolute top-0 inset-x-0 z-[60] flex items-center justify-center lg:justify-between p-6 lg:px-12 lg:py-10 text-white">
        {/* Mobile: Back Arrow */}
        <a href="/"
            className="absolute left-6 w-10 h-10 lg:hidden flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-all text-white">
            <span className="material-symbols-outlined">arrow_back</span>
        </a>

        {/* Desktop: Logo in place of Back Arrow */}
        <a href="/" className="hidden lg:block">
            <img src="assets/logo.svg" className="h-10 opacity-90 hover:opacity-70 transition-opacity" alt="Logo"
                style={{"filter":"invert(100%)"}} />
        </a>

        {/* Mobile: Centered Logo */}
        <img src="assets/logo.svg" className="h-8 opacity-90 lg:hidden" alt="Logo" style={{"filter":"invert(100%)"}} />
    </nav>

    {/* Desktop Container */}
    <div className="lg:flex lg:flex-row min-h-screen">

        {/* Left Side: Visual & Brand Content */}
        <div className="header-visual">
            <img src="assets/fotos/pedecacau_Acallento.webp"
                className="w-full h-full object-cover contrast-110" alt="Acallento Header" />

            {/* Deep Neutral Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Content Over Image (Name & Description) */}
            <div
                className="absolute inset-x-0 bottom-10 lg:bottom-16 px-6 lg:px-12 flex flex-col items-center lg:items-start text-center lg:text-left">

                <div className="relative inline-block mb-6 lg:mb-10">
                    {/* Pizzeria Name */}
                    <h1
                        className="text-6xl sm:text-7xl lg:text-[7vw] font-headline tracking-tighter leading-[0.8] drop-shadow-[5px_10px_20px_rgba(0,0,0,0.6)] uppercase text-white px-2">
                        Acallento
                    </h1>
                </div>

                {/* Pizzeria Description (Desktop Only on this side) */}
                <div className="hidden lg:block max-w-xl">
                    <div className="relative">
                        <div className="px-2 py-2">
                            <p className="font-body text-xl text-white/90 leading-relaxed drop-shadow-lg">
                                O <strong>Acallento</strong> vem para o concurso com o seu
                                <strong>Gelato com Cookie</strong>, um gelato artesanal de baunilha com açúcar mascavo, cremoso, acompanhado de um cookie de chocolate quentinho, repleto de gotas de chocolate branco.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side: Contact & Info Area */}
        <main
            className="relative z-10 lg:ml-[45vw] lg:flex-1 lg:h-screen lg:overflow-y-auto lg:flex lg:flex-col min-h-screen bg-creme">

            <div className="flex-1 flex flex-col items-center justify-center pt-12 pb-20 lg:pt-0 lg:pb-0 px-6 lg:px-10">
                <div className="w-full lg:max-w-xl">
                    {/* Responsive Order Container */}
                    <div className="flex flex-col">
                        {/* Description Section (Mobile Only) */}
                        <div className="lg:hidden mb-14 px-2 text-left order-1">
                            <div className="relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rosa rounded-full"></div>
                                <div className="pl-8 py-2">
                                    <p className="font-body text-lg text-marrom/90 leading-relaxed">
                                        O <strong>Acallento</strong> vem para o concurso com o seu
                                        <strong>Gelato com Cookie</strong>, um gelato artesanal de baunilha com açúcar mascavo, cremoso, acompanhado de um cookie de chocolate quentinho, repleto de gotas de chocolate branco.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Avaliar Button (Prominent) - Positioned at the bottom (order-4) replacing "Onde Encontrar" */}
                        <div className="px-4 mb-10 text-center lg:text-left order-4 border-t border-marrom/10 pt-8">
                            <h3 className="font-headline text-4xl uppercase tracking-widest mb-4 text-azul leading-none">
                                Avalie e Participe!</h3>
                            <p className="font-body text-sm text-marrom/60 mb-6">Experimentou a sobremesa? Deixe sua
                                avaliação para ajudar o Acallento a ser o vencedor.</p>
                            <a href="/voto"
                                className="inline-flex items-center justify-center w-full lg:w-auto bg-azul text-creme px-10 py-5 rounded-xl font-slab text-xl uppercase tracking-widest hover:bg-[#044085] transition-colors shadow-lg group">
                                Avaliar Sobremesa
                            </a>
                        </div>

                        {/* Integrated Info Cards (Bottom on Desktop, Middle on Mobile) */}
                        <div
                            className="space-y-4 mb-10 lg:mb-10 order-3 lg:border-t lg:border-marrom/10 lg:pt-12 border-none pt-0">
                            <div
                                className="flex items-center gap-4 bg-white/60 p-2 rounded-2xl shadow-sm border border-azul/5">
                                <div className="w-14 h-14 bg-azul rounded-xl flex items-center justify-center text-creme">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <span
                                        className="block font-body text-[8px] tracking-[0.3em] text-marrom/40 uppercase mb-0.5 font-bold">Funcionamento</span>
                                    <p className="font-slab text-marrom uppercase text-lg leading-tight">Terça a Domingo •
                                        14h às 20h</p>
                                </div>
                            </div>

                            <div
                                className="flex items-center gap-4 bg-white/60 p-2 rounded-2xl shadow-sm border border-azul/5">
                                <div className="w-14 h-14 bg-azul rounded-xl flex items-center justify-center text-creme">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </div>
                                <div>
                                    <span
                                        className="block font-body text-[8px] tracking-[0.3em] text-marrom/40 uppercase mb-0.5 font-bold">Siga
                                        no Instagram</span>
                                    <p className="font-slab text-marrom uppercase text-lg leading-tight">@acallento.jf</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    {/* Footer */}
    <footer className="w-full bg-azul text-creme py-16 px-6 mt-auto relative z-10 lg:hidden">
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

export default PerfilCafeteria;
