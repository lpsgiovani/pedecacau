import React, { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';

function Home() {
    const containerRef = useRef(null);

    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    {/* Hero Block */}
    <div
        className="bg-azul text-creme rounded-b-[2rem] lg:rounded-b-[4rem] shadow-[0_15px_30px_rgba(5,81,167,0.15)] relative z-20">

        {/* Parallax Background Clouds (Behind Text and behind Illustration) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-25">
            {/* Track 1: Far Background (Tiny, Very Blurry, Extremely Slow - Hidden on Mobile) */}
            <div className="hidden sm:block absolute top-[5%] left-0 w-full h-[25%] cloud-blur-bg">
                <div className="cloud-track-1 h-full">
                    <div className="w-1/2 h-full relative">
                        {/* Cloud Shape C (Small & Cute) */}
                        <svg className="absolute top-1/4 left-[15%] w-24 h-16 text-white fill-current opacity-30"
                            viewBox="0 0 100 60">
                            <path
                                d="M 20 45 h 40 a 10 10 0 0 0 0 -20 a 6 6 0 0 0 -3 -1 a 12 12 0 0 0 -20 -3 a 8 8 0 0 0 -11 6 a 8 8 0 0 0 -6 18 z" />
                        </svg>
                        {/* Cloud Shape A (Puffy) */}
                        <svg className="absolute top-1/3 left-[70%] w-20 h-12 text-rosa fill-current opacity-20"
                            viewBox="0 0 100 60">
                            <path
                                d="M 18 45 h 64 a 14 14 0 0 0 0 -28 a 10 10 0 0 0 -3 -1 a 18 18 0 0 0 -32 -6 a 12 12 0 0 0 -23 7 a 14 14 0 0 0 -6 28 z" />
                        </svg>
                    </div>
                    <div className="w-1/2 h-full relative">
                        {/* Cloud Shape C (Small & Cute) */}
                        <svg className="absolute top-1/4 left-[15%] w-24 h-16 text-white fill-current opacity-30"
                            viewBox="0 0 100 60">
                            <path
                                d="M 20 45 h 40 a 10 10 0 0 0 0 -20 a 6 6 0 0 0 -3 -1 a 12 12 0 0 0 -20 -3 a 8 8 0 0 0 -11 6 a 8 8 0 0 0 -6 18 z" />
                        </svg>
                        {/* Cloud Shape A (Puffy) */}
                        <svg className="absolute top-1/3 left-[70%] w-20 h-12 text-rosa fill-current opacity-20"
                            viewBox="0 0 100 60">
                            <path
                                d="M 18 45 h 64 a 14 14 0 0 0 0 -28 a 10 10 0 0 0 -3 -1 a 18 18 0 0 0 -32 -6 a 12 12 0 0 0 -23 7 a 14 14 0 0 0 -6 28 z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Track 2: Mid-ground (Medium size, Lightly Blurry, Very Slow - Visible on Mobile) */}
            <div className="absolute top-[28%] left-0 w-full h-[35%] cloud-blur-mid">
                <div className="cloud-track-2 h-full">
                    <div className="w-1/2 h-full relative">
                        {/* Cloud Shape B (Long & Flat) */}
                        <svg className="absolute top-1/3 left-[40%] w-48 h-28 text-rosa fill-current opacity-40"
                            viewBox="0 0 100 60">
                            <path
                                d="M 10 45 h 80 a 10 10 0 0 0 0 -20 a 8 8 0 0 0 -5 -2 a 22 22 0 0 0 -38 -4 a 14 14 0 0 0 -28 6 a 9 9 0 0 0 -9 20 z" />
                        </svg>
                        {/* Cloud Shape A (Puffy) */}
                        <svg className="absolute top-1/4 left-[85%] w-36 h-20 text-white fill-current opacity-45"
                            viewBox="0 0 100 60">
                            <path
                                d="M 18 45 h 64 a 14 14 0 0 0 0 -28 a 10 10 0 0 0 -3 -1 a 18 18 0 0 0 -32 -6 a 12 12 0 0 0 -23 7 a 14 14 0 0 0 -6 28 z" />
                        </svg>
                    </div>
                    <div className="w-1/2 h-full relative">
                        {/* Cloud Shape B (Long & Flat) */}
                        <svg className="absolute top-1/3 left-[40%] w-48 h-28 text-rosa fill-current opacity-40"
                            viewBox="0 0 100 60">
                            <path
                                d="M 10 45 h 80 a 10 10 0 0 0 0 -20 a 8 8 0 0 0 -5 -2 a 22 22 0 0 0 -38 -4 a 14 14 0 0 0 -28 6 a 9 9 0 0 0 -9 20 z" />
                        </svg>
                        {/* Cloud Shape A (Puffy) */}
                        <svg className="absolute top-1/4 left-[85%] w-36 h-20 text-white fill-current opacity-45"
                            viewBox="0 0 100 60">
                            <path
                                d="M 18 45 h 64 a 14 14 0 0 0 0 -28 a 10 10 0 0 0 -3 -1 a 18 18 0 0 0 -32 -6 a 12 12 0 0 0 -23 7 a 14 14 0 0 0 -6 28 z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* Original Top Header / Centralized Header Info */}
        <header
            className="w-full flex flex-col items-center justify-center pt-12 pb-6 px-6 lg:pt-20 lg:pb-10 lg:px-12 max-w-7xl mx-auto text-center gap-4 relative z-10 animate-fade-in-up"
            style={{"animationDelay":"0.1s"}}>
            <a href="index.html">
                <img src="assets/logo.svg" className="h-8 sm:h-9 mx-auto" alt="Pé de Cacau" style={{"filter":"invert(100%)"}} />
            </a>
        </header>

        {/* Original Hero Section (Headline) */}
        <section
            className="flex flex-col items-center justify-center text-center px-4 pt-4 lg:pt-8 pb-20 lg:pb-28 max-w-5xl mx-auto gap-6 relative z-30">
            <h1 ref={containerRef} className="font-headline text-[13vw] sm:text-7xl md:text-8xl lg:text-[7rem] uppercase tracking-tighter text-creme drop-shadow-sm"
                style={{"lineHeight":"0.85","letterSpacing":"-0.02em"}}>
                <VariableProximity
                  label={'QUAL SUA SOBREMESA FAVORITA?'}
                  className={'variable-proximity-demo'}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff='linear'
                />
            </h1>

            <div className="flex flex-col items-center text-center mt-2 gap-1 animate-fade-in-up"
                style={{"animationDelay":"0.85s"}}>
                <div className="flex items-center gap-2 font-slab uppercase tracking-wider text-sm">
                    <span className="text-creme/80 text-[10px] tracking-widest">De</span>
                    <span className="font-headline text-rosa text-3xl leading-none">01</span>
                    <span className="text-creme/80 text-[10px] tracking-widest">a</span>
                    <span className="font-headline text-rosa text-3xl leading-none">31</span>
                    <span className="text-creme/80 text-[10px] tracking-widest">de Julho</span>
                </div>
                <span className="font-slab text-xl uppercase tracking-tighter text-creme">Juiz de Fora</span>
            </div>

            {/* Search Bar (below Juiz de Fora on all devices) */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm mt-6 z-30 animate-fade-in-up"
                style={{"animationDelay":"1s"}}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-marrom/40 text-xl sm:text-2xl">search</span>
                </div>
                <input type="text" id="searchInput"
                    className="block w-full pl-11 pr-4 py-2 sm:py-3 bg-white border border-azul/20 rounded-2xl text-marrom placeholder-marrom/40 focus:outline-none focus:ring-2 focus:ring-rosa focus:border-rosa transition-all font-body text-sm sm:text-base shadow-sm"
                    placeholder="Busque pelo nome da cafeteria..." autocomplete="off" />
            </div>
        </section>
        {/* Header Illustration (Wrapper to isolate positioning transforms from keyframe animation overrides) */}
        <div
            className="absolute bottom-0 right-0 transform translate-x-1/4 lg:translate-x-16 translate-y-8 sm:translate-y-1/4 lg:translate-y-12 w-64 sm:w-80 lg:w-[34rem] xl:w-[40rem] z-10 pointer-events-none drop-shadow-2xl object-contain">
            <img src="assets/header.svg" alt="Ilustração" className="w-full h-full object-contain animate-fade-in-up"
                style={{"animationDelay":"0.4s","animationDuration":"1.2s"}} />
        </div>

        {/* Parallax Foreground Clouds (In Front of Illustration - Hidden on Mobile) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 opacity-25">
            {/* Track 3: Foreground / Closer (Large, Sharp, Moderate Speed) */}
            <div className="hidden sm:block absolute bottom-[5%] left-0 w-full h-[45%]">
                <div className="cloud-track-3 h-full">
                    <div className="w-1/2 h-full relative">
                        {/* Cloud Shape A (Puffy, Scaled up) */}
                        <svg className="absolute top-1/4 left-[5%] w-72 h-40 text-white fill-current opacity-40"
                            viewBox="0 0 100 60">
                            <path
                                d="M 18 45 h 64 a 14 14 0 0 0 0 -28 a 10 10 0 0 0 -3 -1 a 18 18 0 0 0 -32 -6 a 12 12 0 0 0 -23 7 a 14 14 0 0 0 -6 28 z" />
                        </svg>
                        {/* Cloud Shape B (Long & Flat, Scaled up) */}
                        <svg className="absolute top-1/3 left-[55%] w-60 h-32 text-white fill-current opacity-25"
                            viewBox="0 0 100 60">
                            <path
                                d="M 10 45 h 80 a 10 10 0 0 0 0 -20 a 8 8 0 0 0 -5 -2 a 22 22 0 0 0 -38 -4 a 14 14 0 0 0 -28 6 a 9 9 0 0 0 -9 20 z" />
                        </svg>
                    </div>
                    <div className="w-1/2 h-full relative">
                        {/* Cloud Shape A (Puffy, Scaled up) */}
                        <svg className="absolute top-1/4 left-[5%] w-72 h-40 text-white fill-current opacity-40"
                            viewBox="0 0 100 60">
                            <path
                                d="M 18 45 h 64 a 14 14 0 0 0 0 -28 a 10 10 0 0 0 -3 -1 a 18 18 0 0 0 -32 -6 a 12 12 0 0 0 -23 7 a 14 14 0 0 0 -6 28 z" />
                        </svg>
                        {/* Cloud Shape B (Long & Flat, Scaled up) */}
                        <svg className="absolute top-1/3 left-[55%] w-60 h-32 text-white fill-current opacity-25"
                            viewBox="0 0 100 60">
                            <path
                                d="M 10 45 h 80 a 10 10 0 0 0 0 -20 a 8 8 0 0 0 -5 -2 a 22 22 0 0 0 -38 -4 a 14 14 0 0 0 -28 6 a 9 9 0 0 0 -9 20 z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Main Content Grid */}
    <main className="flex-1 px-6 py-12 lg:py-24 max-w-7xl mx-auto w-full z-10 relative animate-fade-in-up"
        style={{"animationDelay":"1.15s"}}>



        {/* No Results State */}
        <div id="no-results" className="hidden flex flex-col items-center justify-center py-20 text-center">
            <img src="assets/notfound.svg" alt="Não encontrado" className="w-16 object-contain mb-6 opacity-85" />
            <h3 className="font-slab text-2xl text-marrom uppercase tracking-widest mb-2">Nenhuma cafeteria encontrada</h3>
            <p className="font-body text-marrom/60 max-w-xs mx-auto">Tente buscar por outro nome ou remova os filtros
                selecionados.</p>
            <button onclick="resetFilters()"
                className="mt-6 px-6 py-2 bg-azul/10 text-azul rounded-full font-bold uppercase tracking-wider text-xs hover:bg-azul/20 transition-colors">Limpar
                Filtros</button>
        </div>

        {/* Wrapper para permitir sangria completa com fade nas laterais */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-visible">
            {/* Grid Container (Scroll horizontal no desktop/tablet, flex vertical no mobile) */}
            <div className="flex flex-row overflow-x-auto no-scrollbar gap-6 sm:gap-8 lg:gap-10 pb-12 scroll-smooth px-[calc((100vw-280px)/2)] sm:px-12 lg:px-20 snap-x snap-mandatory sm:snap-none"
                id="cafeteriaGrid">
                {/* Participant 1: Acallento */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Acallento" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Acallento.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Acallento" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Acallento</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Gelato
                                    com Cookie</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Gelato
                                    artesanal de baunilha com açúcar mascavo, cremoso, acompanhado de um cookie de
                                    chocolate quentinho, repleto de gotas de chocolate branco.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 2: Bom Brasileiro */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Bom Brasileiro" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Bom Brasileiro.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Bom Brasileiro" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Bom Brasileiro</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Brownie
                                    com Ganache</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Brownie
                                    de chocolate com nozes e recheio de ganache meio amargo.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 3: Brownie da Fabi */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Brownie da Fabi" data-neighborhood="Bom Pastor">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Brownie da Fabi.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Brownie da Fabi" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Bom Pastor</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Brownie da Fabi</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Torta
                                    Bombom de Morango</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Base
                                    crocante de biscoito, creme branco superaveludado, morangos fresquinhos e uma
                                    ganache intensa 70% cacau.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 4: Café com Limão */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Café com Limão" data-neighborhood="Granbery">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Café com Limão.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Café com Limão" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Granbery</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Café com Limão</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Tortinha
                                    de Chocolate e Limão</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Tortinha
                                    artesanal de chocolate com recheio cremoso de ganache de chocolate ao leite e creme
                                    de baunilha, coberta por morangos frescos e chantilly. Acompanha sorvete de creme e
                                    calda de chocolate meio amargo.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 5: Camafeu */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Camafeu" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Camafeu.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Camafeu" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Camafeu</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Chocolate
                                    Quente Camafeu</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">
                                    Chocolate quente, chantilly de baunilha com marshmallow maçaricado, finalizado com
                                    raspas de chocolate.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 6: Cheirin Bão */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Cheirin Bão" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Cheirin Bao.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Cheirin Bão" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Cheirin Bão</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Brownie
                                    Recheado</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Brownie
                                    recheado com Nutella, acompanhado de sorvete de creme.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 7: Damy */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Damy" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Damy.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Damy" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Damy</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Sensação</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Massa de
                                    cacau black, com uma camada de brigadeiro meio amargo, outra camada de brigadeiro de
                                    Ninho e uma camada de geleia de morango. Finalizada com raspas de chocolate, ganache
                                    de chocolate e morango para decorar.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 8: Delícias da Lili */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Delícias da Lili" data-neighborhood="Granbery">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Delicias da Lili.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Delícias da Lili" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Granbery</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Delícias da Lili</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Cascata
                                    de Chocolate</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Um
                                    irresistível bolo de chocolate envolto por uma delicada cesta artesanal de
                                    chocolate, acompanhado de um leve chiffon de chocolate. A finalização fica por sua
                                    conta: despeje a ganache quente sobre a sobremesa e veja a casquinha se derreter.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 9: Dois Amores */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Dois Amores" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Dois Amores.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Dois Amores" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Dois Amores</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Tentação
                                    de Chocolate</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Base
                                    crocante de biscoito de chocolate, recheada com um creme extremamente aveludado de
                                    cream cheese, doce de leite e cacau 50%. Finalizada com generosas raspas de
                                    chocolate meio amargo.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 10: Empório Life Gourmet */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Empório Life Gourmet" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Emporio Life Gourmet.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Empório Life Gourmet" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Empório Life Gourmet</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Novidade
                                    Concurso Choco</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Dark
                                    Mousse Protein: com farofinha amanteigada de castanhas, acompanhado de Creme Ninho
                                    Life. Baixo carboidrato, 21g de proteína e zero açúcar.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 11: Espaço Café Central */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Espaço Café Central" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Espaço Café Central.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Espaço Café Central" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Espaço Café Central</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Devil's
                                    Cake</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Massa
                                    úmida de chocolate 50% cacau, com recheio e cobertura de ganache aerada de chocolate
                                    meio amargo.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 12: Estação Urbana */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Estação Urbana" data-neighborhood="Cascatinha">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Estação Urbana.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Estação Urbana" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Cascatinha</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Estação Urbana</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Cannoncini
                                    alla Crema</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Cone de
                                    massa folhada com recheio de creme de baunilha clássico, banhado em uma calda de
                                    chocolate nobre derretido.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 13: Inverno D'Itália */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Inverno D'Itália" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Inverno D'italia.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Inverno D'Itália" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Inverno D'Itália</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Abbraccio
                                    di Cioccolato</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Bolo de
                                    chocolate quente, com base de creme de KitKat, ganache cremosa de chocolate com
                                    café, finalizado com farofa crocante de KitKat.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 14: Madame */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Madame" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Madame.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Madame" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Madame</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Brownie
                                    com Cookie</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Brownie
                                    com cookie, servido com nosso delicioso brigadeiro ao leite, uma bola de sorvete de
                                    creme e, para finalizar, ganache de chocolate.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 15: Manchester */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Manchester" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Manchester.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Manchester" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Manchester</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Toast
                                    Manchester</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Toast de
                                    pão doce com fios de Nutella, mergulhados em chocolate quente cremoso.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 16: Meiuca */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Meiuca" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Meiuca.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Meiuca" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Meiuca</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Torta
                                    Vegana de Chocolate</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Torta
                                    vegana de chocolate com brigadeiro e mousse de morango — totalmente vegana.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 17: Milklândia */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Milklândia" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Milklandia.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Milklândia" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Mil<span className="font-slab">k</span>lândia</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Brownie
                                    Delícia</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Brownie
                                    com calda de Ninho, calda de brigadeiro, chantilly, morango e casquinha de
                                    chocolate.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 18: Mr. Pina */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Mr. Pina" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Mr Pina.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Mr. Pina" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Mr. Pina</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Dark
                                    Rum Tarte</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Torta de
                                    chocolate dark 100% cacau belga, feita com massa amanteigada de chocolate premium,
                                    em camadas de mousse dark de chocolate meio amargo e essência de rum picante.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 18: Mulino */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Mulino" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Mulino.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Mulino" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Mulino</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Fondue</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Fondue:
                                    chocolate derretido, frutas da época disponíveis (morango, banana, uva...) e waffle.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 19: Orvalho */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Orvalho" data-neighborhood="Cascatinha">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Orvalho.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Orvalho" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Cascatinha</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Orvalho</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Donuts
                                    DUO</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Donuts
                                    DUO sem glúten, com massa de longa fermentação, recheio de brigadeiro meio amargo,
                                    cobertos com chocolate branco e calda extra de chocolate.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 20: Oui Uai */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Oui Uai" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Oui Uai.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Oui Uai" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Oui Uai</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Maria
                                    Antonieta</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">
                                    Croissant recheado com ganache quentinha de chocolate meio amargo, coberto com
                                    chantilly e mel.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 21: Prosa */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Prosa" data-neighborhood="Granbery">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Prosa.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Prosa" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Granbery</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Prosa</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Brasileirinha</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Tortinha
                                    de chocolate com massa crocante, recheio cremoso de brigadeiro e cobertura de geleia
                                    artesanal de frutas amarelas (manga, pêssego e maracujá).</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 22: R Grife */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="R Grife" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_R Grife.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="R Grife" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        R Grife</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Bolo
                                    Matilda</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Massa de
                                    chocolate fofinha, recheio cremoso de brigadeiro e muita cobertura de chocolate,
                                    finalizado com calda quente.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 23: Reza Brava */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Reza Brava" data-neighborhood="Centro">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Reza Brava.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Reza Brava" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Centro</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Reza Brava</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Cookie
                                    Reza Brava</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Palitos
                                    crocantes de cookie de chocolate com gergelim torrado, servidos com ganache de
                                    chocolate branco caramelizado e missô.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 24: Sodiê */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Sodiê" data-neighborhood="São Mateus">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Sodie.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Sodiê" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>São Mateus</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Sodiê</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">S'Mores
                                    Chocolate Quente</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">
                                    Chocolate quente cremoso, envolto por marshmallows maçaricados, coroado com
                                    chantilly gelado, cobertura de Nutella e topping de brownie.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Participant 25: Unni */}
                <div className="cafeteria-card relative flex flex-col w-[280px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] flex-shrink-0 snap-center sm:snap-align-none"
                    data-name="Unni" data-neighborhood="Cascatinha">
                    <div className="arch-card bg-azul flex-1 flex flex-col border-4 border-white">
                        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 overflow-hidden">
                            <img src="assets/fotos/pedecacau_Unni.webp"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                alt="Unni" />
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                            </div>
                            <div
                                className="absolute bottom-4 left-6 flex items-center gap-1.5 text-white/90 font-body uppercase tracking-[0.2em] text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px] text-rosa">location_on</span>
                                <span>Cascatinha</span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-20 flex flex-col justify-end mb-3">
                                    <h2
                                        className="font-headline text-4xl uppercase leading-none text-creme tracking-tighter">
                                        Unni</h2>
                                </div>
                                <span
                                    className="font-body text-xs text-rosa/80 uppercase tracking-widest font-semibold block mb-1">Choco
                                    Rocks!</span>
                                <p className="font-body text-[11px] text-creme/65 leading-normal mb-5 line-clamp-3">Nosso
                                    brownie ultra cremoso e chocolatudo, finalizado com uma surpreendente camada
                                    crocante.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <a href="perfil-cafeteria.html"
                                    className="flex-1 text-center py-3 rounded-xl border border-creme/30 text-creme font-slab uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    Ver Perfil
                                </a>
                                <a href="voto.html"
                                    className="flex-1 text-center py-3 rounded-xl bg-rosa text-azul font-slab uppercase tracking-widest text-sm hover:bg-[#f3a6cf] transition-colors shadow-lg font-bold">
                                    Avaliar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Fade Overlays para a rolagem lateral no Desktop */}
            <div
                className="hidden sm:block absolute right-0 top-0 bottom-6 w-32 bg-gradient-to-l from-creme via-creme/60 to-transparent pointer-events-none z-20">
            </div>
            <div
                className="hidden sm:block absolute left-0 top-0 bottom-6 w-32 bg-gradient-to-r from-creme via-creme/60 to-transparent pointer-events-none z-20">
            </div>

            {/* Floating Navigation Buttons */}
            <button id="scroll-left-btn"
                className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-azul text-creme items-center justify-center shadow-2xl transition-all duration-300 hover:bg-[#044085] hover:scale-105 opacity-0 pointer-events-auto cursor-pointer">
                <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
            <button id="scroll-right-btn"
                className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-azul text-creme items-center justify-center shadow-2xl transition-all duration-300 hover:bg-[#044085] hover:scale-105 opacity-0 pointer-events-auto cursor-pointer">
                <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
        </div>
    </main>

    {/* Footer */}
    <footer className="w-full bg-azul text-creme py-16 px-6 relative z-10">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            <img src="assets/logo.svg" className="h-12 mb-8" alt="Pé de Cacau Logo"
                style={{"filter":"invert(100%)","opacity":"0.5"}} />

            <div className="flex justify-center gap-6 mb-8 text-[10px]">
                <a href="index.html"
                    className="font-slab uppercase tracking-widest hover:text-rosa transition-colors opacity-60 hover:opacity-100">Início</a>
                <span className="text-rosa font-bold">/</span>
                <a href="sobre.html"
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

    {/* Logic for Search and Filters */}
    

        </div>
    );
}

export default Home;
