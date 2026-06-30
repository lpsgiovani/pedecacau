import React from 'react';

function Voto() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    {/* Navigation */}
    <nav
        className="absolute top-0 inset-x-0 z-[60] flex items-center justify-center lg:justify-between p-6 lg:px-12 lg:py-10 text-white">
        {/* Mobile: Back Arrow */}
        <a href="javascript:history.back()"
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

    {/* Desktop Split Container */}
    <div className="lg:flex lg:flex-row min-h-screen">

        {/* Left Side: Visual Panel (Desktop Only) */}
        <div className="header-visual lg:block hidden">
            <img alt="Acallento atmosphere" className="w-full h-full object-cover contrast-110"
                src="assets/fotos/pedecacau_Acallento.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-10 lg:bottom-16 px-6 lg:px-12 flex flex-col items-start text-left">
                <h1
                    className="text-[9vw] font-headline tracking-tighter leading-[0.8] drop-shadow-[5px_10px_20px_rgba(0,0,0,0.6)] uppercase text-white mb-4">
                    Acallento</h1>
            </div>
        </div>

        {/* Right Side: Everything (Mobile photo + form) */}
        <main
            className="relative z-10 lg:ml-[45vw] lg:flex-1 lg:h-screen lg:overflow-y-auto lg:flex lg:flex-col min-h-screen">

            {/* Mobile: Photo (hidden on desktop) */}
            <div className="lg:hidden relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                <img alt="Acallento atmosphere" className="w-full h-full object-cover contrast-110"
                    src="assets/fotos/pedecacau_Acallento.webp" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Name + Sticker */}
                <div className="absolute inset-x-0 bottom-4 px-6 flex flex-col items-center text-center">
                    <div className="relative inline-block mb-6">
                        <h2
                            className="text-6xl sm:text-7xl font-headline tracking-tighter leading-[0.8] drop-shadow-[5px_10px_20px_rgba(0,0,0,0.6)] uppercase text-white px-2">
                            Acallento
                        </h2>
                    </div>
                </div>
            </div>

            {/* Voting Form */}
            <div
                className="flex-grow flex flex-col px-6 pt-12 lg:pt-8 pb-12 lg:pb-8 lg:px-12 max-w-xl lg:max-w-4xl mx-auto w-full justify-center">

                {/* Header */}
                <div className="text-center lg:text-left mb-6 lg:mb-4">
                    <div className="flex flex-col items-center lg:items-start">
                        <span
                            className="text-3xl lg:text-4xl font-headline text-azul uppercase tracking-wide leading-none">Como
                            foi a sua experiência</span>
                        <span
                            className="text-xs font-body font-bold text-marrom/60 uppercase tracking-[0.3em] mt-2 font-semibold">No
                            Café Bloom</span>
                    </div>
                </div>

                {/* Desktop: 2-column layout. Mobile: vertical stack */}
                <div className="lg:flex lg:flex-row lg:gap-6 lg:w-full space-y-6 lg:space-y-0 items-start">

                    {/* Voting cards: mobile stack, desktop vertical flex */}
                    <div className="lg:flex lg:flex-col lg:gap-4 lg:flex-1 space-y-4 lg:space-y-0 w-full">

                        {/* Step 1: Sabor */}
                        <div id="step-1" className="category-box p-5 lg:py-3 lg:px-4 relative group">
                            <div className="flex flex-col gap-2">
                                <div
                                    className="flex items-center gap-2 border-b border-azul/10 pb-2 w-full justify-center lg:justify-between">
                                    <h4
                                        className="text-sm lg:text-sm font-body font-bold tracking-wider text-azul flex items-center justify-center lg:justify-start gap-2 text-center">
                                        <span
                                            className="w-5 h-5 rounded-full bg-azul text-creme text-[10px] font-bold flex items-center justify-center flex-shrink-0">1</span>
                                        <span className="leading-tight">Sabor da sobremesa</span>
                                    </h4>
                                </div>
                                <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-1">
                                    <div
                                        className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-3 flex-shrink-0 w-full lg:w-52 justify-center lg:justify-start mb-4 lg:mb-0">
                                        <div id="val-1"
                                            className="text-7xl lg:text-5xl font-slab text-azul leading-none transition-transform duration-150">
                                            5</div>
                                        <span id="label-1"
                                            className="text-[10px] lg:text-[9px] uppercase font-bold text-marrom tracking-[0.2em] lg:tracking-wider bg-rosa px-2.5 py-0.5 rounded-full text-center whitespace-nowrap mt-1 lg:mt-0">Gostoso</span>
                                    </div>
                                    <div className="relative flex-1 w-full h-8 flex items-center px-1">
                                        <input type="range" min="0" max="10" step="1" value="5" id="slider-1"
                                            oninput="updateVal(1, this.value)"
                                            onpointerup="handleInitialVote(1, this.value)"
                                            ontouchend="handleInitialVote(1, this.value)" className="range-slider"
                                            autocomplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Marcou */}
                        <div id="step-2"
                            className="category-box p-5 lg:py-3 lg:px-4 relative group lg:block hidden opacity-0 lg:opacity-100">
                            <div className="flex flex-col gap-2">
                                <div
                                    className="flex items-center gap-2 border-b border-azul/10 pb-2 w-full justify-center lg:justify-between">
                                    <h4
                                        className="text-sm lg:text-sm font-body font-bold tracking-wider text-azul flex items-center justify-center lg:justify-start gap-2 text-center">
                                        <span
                                            className="w-5 h-5 rounded-full bg-azul text-creme text-[10px] font-bold flex items-center justify-center flex-shrink-0">2</span>
                                        <span className="leading-tight">O quanto a sobremesa marcou você</span>
                                    </h4>
                                </div>
                                <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-1">
                                    <div
                                        className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-3 flex-shrink-0 w-full lg:w-52 justify-center lg:justify-start mb-4 lg:mb-0">
                                        <div id="val-2"
                                            className="text-7xl lg:text-5xl font-slab text-azul leading-none transition-transform duration-150">
                                            5</div>
                                        <span id="label-2"
                                            className="text-[10px] lg:text-[9px] uppercase font-bold text-marrom tracking-[0.2em] lg:tracking-wider bg-rosa px-2.5 py-0.5 rounded-full text-center whitespace-nowrap font-semibold mt-1 lg:mt-0">Mais
                                            ou menos</span>
                                    </div>
                                    <div className="relative flex-1 w-full h-8 flex items-center px-1">
                                        <input type="range" min="0" max="10" step="1" value="5" id="slider-2"
                                            oninput="updateVal(2, this.value)"
                                            onpointerup="handleInitialVote(2, this.value)"
                                            ontouchend="handleInitialVote(2, this.value)" className="range-slider"
                                            autocomplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Apresentação */}
                        <div id="step-3"
                            className="category-box p-5 lg:py-3 lg:px-4 relative group lg:block hidden opacity-0 lg:opacity-100">
                            <div className="flex flex-col gap-2">
                                <div
                                    className="flex items-center gap-2 border-b border-azul/10 pb-2 w-full justify-center lg:justify-between">
                                    <h4
                                        className="text-sm lg:text-sm font-body font-bold tracking-wider text-azul flex items-center justify-center lg:justify-start gap-2 text-center">
                                        <span
                                            className="w-5 h-5 rounded-full bg-azul text-creme text-[10px] font-bold flex items-center justify-center flex-shrink-0">3</span>
                                        <span className="leading-tight">Apresentação da sobremesa</span>
                                    </h4>
                                </div>
                                <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-1">
                                    <div
                                        className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-3 flex-shrink-0 w-full lg:w-52 justify-center lg:justify-start mb-4 lg:mb-0">
                                        <div id="val-3"
                                            className="text-7xl lg:text-5xl font-slab text-azul leading-none transition-transform duration-150">
                                            5</div>
                                        <span id="label-3"
                                            className="text-[10px] lg:text-[9px] uppercase font-bold text-marrom tracking-[0.2em] lg:tracking-wider bg-rosa px-2.5 py-0.5 rounded-full text-center whitespace-nowrap font-semibold mt-1 lg:mt-0">Normal</span>
                                    </div>
                                    <div className="relative flex-1 w-full h-8 flex items-center px-1">
                                        <input type="range" min="0" max="10" step="1" value="5" id="slider-3"
                                            oninput="updateVal(3, this.value)"
                                            onpointerup="handleInitialVote(3, this.value)"
                                            ontouchend="handleInitialVote(3, this.value)" className="range-slider"
                                            autocomplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary + Submit */}
                    <div id="submit-container"
                        className="lg:flex lg:flex-col lg:w-64 xl:w-72 lg:flex-shrink-0 hidden opacity-0 lg:opacity-100 lg:!block w-full">
                        <div className="category-box p-4 mb-3 flex-grow-0">
                            <h5
                                className="font-body font-bold uppercase tracking-widest text-xs text-azul mb-3 text-center">
                                Sua avaliação</h5>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between gap-2 bg-azul/5 rounded-xl px-3 py-1.5">
                                    <span
                                        className="text-[10px] font-body font-bold uppercase tracking-wider text-marrom/60 font-semibold">Sabor</span>
                                    <span id="summary-1" className="text-lg font-slab text-azul font-bold">5</span>
                                </div>
                                <div className="flex items-center justify-between gap-2 bg-azul/5 rounded-xl px-3 py-1.5">
                                    <span
                                        className="text-[10px] font-body font-bold uppercase tracking-wider text-marrom/60 font-semibold">Marcou</span>
                                    <span id="summary-2" className="text-lg font-slab text-azul font-bold">5</span>
                                </div>
                                <div className="flex items-center justify-between gap-2 bg-azul/5 rounded-xl px-3 py-1.5">
                                    <span
                                        className="text-[10px] font-body font-bold uppercase tracking-wider text-marrom/60 font-semibold">Apresentação</span>
                                    <span id="summary-3" className="text-lg font-slab text-azul font-bold">5</span>
                                </div>
                            </div>
                            {/* Average */}
                            <div className="mt-3 pt-3 border-t border-azul/10 flex items-center justify-between">
                                <span
                                    className="text-xs font-body font-bold uppercase tracking-widest text-marrom/60 font-semibold">Média
                                    Geral</span>
                                <div className="flex items-baseline gap-1">
                                    <span id="summary-avg" className="text-2xl font-slab text-azul font-bold">5.0</span>
                                    <span className="text-xs text-azul/40 font-slab font-bold">/ 10</span>
                                </div>
                            </div>
                        </div>

                        <a href="/confirmacao"
                            className="w-full bg-azul hover:bg-[#044085] active:scale-[0.99] transition-all duration-200 text-creme font-slab uppercase tracking-widest font-bold text-xl lg:text-lg py-5 lg:py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 text-center leading-none">
                            <span>Enviar Avaliação</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Footer (Mobile Only) */}
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

                    <div
                        className="flex flex-col items-center gap-2 opacity-35 text-[8px] uppercase tracking-[0.3em] font-body">
                        <p>Realização: <a href="https://instagram.com/oquefazerem.jf" target="_blank"
                                className="font-bold hover:text-rosa transition-colors">O que fazer em JF</a></p>
                        <p>Desenvolvido por: <a href="https://primitiva.cc" target="_blank"
                                className="font-bold hover:text-rosa transition-colors">Primitiva</a></p>
                        <p className="mt-8">© 2026 Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>
        </main>
    </div>

    

        </div>
    );
}

export default Voto;
