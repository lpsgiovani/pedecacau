import React from 'react';

function Confirmacao() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    <div className="flex-grow flex flex-col justify-center lg:py-2">
        {/* Header Section (Compact, Blue, Elegant with Confetti) */}
        <header id="header-section" className="relative overflow-hidden pt-14 pb-6 lg:pt-8 lg:pb-2 px-6 text-center">

            <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
                {/* Mascot Icon instead of generic check */}
                <img src="assets/mascote.svg" alt="Mascote Pé de Cacau"
                    className="w-16 h-16 lg:w-11 lg:h-11 mb-4 lg:mb-2 filter brightness-0 invert opacity-95 anim-slide d1" />
                {/* Title */}
                <h1 className="font-headline text-5xl lg:text-4xl uppercase tracking-tighter leading-[0.85] text-white">
                    <span className="inline-block anim-slide d2">Obrigado</span><br />
                    <span className="inline-block anim-slide d3">por</span>
                    <span className="inline-block anim-slide d4">participar!</span>
                </h1>
            </div>
        </header>

        {/* Main Content (Sponsor & Interactive Gift Section) */}
        <main className="flex items-center justify-center px-4 pt-2 pb-12 lg:pb-2">
            <div
                className="max-w-md lg:max-w-4xl w-full bg-white rounded-3xl border border-azul/10 shadow-2xl p-8 sm:p-10 lg:p-8 lg:py-6 relative overflow-hidden anim-slide d5">
                {/* Subtle background texture */}
                <div className="absolute inset-0 opacity-[0.02] diamond-pattern pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column (Mascot, Title & Tagline) */}
                    <div
                        className="flex flex-col items-center text-center lg:border-r lg:border-azul/10 lg:pr-12 lg:h-full lg:justify-center">
                        {/* Illustration — Centered */}
                        <div className="w-full flex justify-center mb-6 lg:mb-4 anim-slide d3">
                            <img src="assets/ilustra_2.png" alt="Mulher carregando chocolate"
                                className="w-44 sm:w-48 lg:w-40 object-contain floating-illustra"
                                style={{"mixBlendMode":"multiply"}} />
                        </div>

                        {/* Title & Tagline */}
                        <div className="w-full anim-slide d3">
                            <h2
                                className="font-headline text-4xl sm:text-5xl lg:text-4xl uppercase tracking-tighter leading-[0.85] text-azul">
                                Você ganhou<br />um presente!
                            </h2>
                            <p className="font-body text-[10px] text-marrom/45 font-bold uppercase tracking-[0.2em] mt-3">
                                Não é chocolate, <br />mas é tão bom quanto
                            </p>
                        </div>
                    </div>

                    {/* Right Column (Description, Card & CTA) */}
                    <div className="flex flex-col justify-center">
                        {/* Description */}
                        <p
                            className="text-sm text-marrom/60 leading-relaxed font-body mb-6 lg:mb-4 text-center lg:text-left anim-slide d3">
                            Como participante do <strong className="text-azul font-semibold">Pé de Cacau</strong>, você tem
                            acesso a um desconto exclusivo na conta de luz com a <strong
                                className="text-marrom font-semibold">Hive Energy</strong>.
                        </p>

                        {/* Hive Energy card */}
                        <div
                            className="w-full bg-azul text-white p-5 lg:p-4 rounded-2xl flex items-center justify-center text-center mb-6 lg:mb-4 shadow-md anim-slide d4">
                            <div>
                                <p
                                    className="font-slab text-xl uppercase tracking-wide text-white leading-none whitespace-nowrap">
                                    Até 95% de economia</p>
                                <p className="text-[10px] text-white/60 font-body mt-0.5">na conta de luz com energia solar</p>
                            </div>
                        </div>

                        {/* CTA & Navigation */}
                        <div className="w-full space-y-4 lg:space-y-3 anim-slide d4">
                            <a href="https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Participei%20do%20P%C3%A9%20de%20Cacau%20e%20gostaria%20de%20saber%20mais%20sobre%20meu%20desconto%20exclusivo%20com%20a%20Hive%20Energy."
                                target="_blank" rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-slab uppercase tracking-widest text-lg lg:text-base py-4 lg:py-3.5 rounded-xl hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-lg hover:shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>Quero meu desconto</span>
                            </a>

                            {/* Hive Energy Logo below the link */}
                            <div className="flex justify-center pt-2 lg:pt-1">
                                <img src="assets/hive_logo.webp" alt="Hive Energy"
                                    className="h-6 lg:h-5 object-contain brightness-0 opacity-40 hover:opacity-70 transition-opacity" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>

    {/* Footer */}
    <footer className="w-full bg-azul text-creme pt-12 pb-16 lg:pt-4 lg:pb-6 px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            <img src="assets/logo.svg" className="h-12 lg:h-8 mb-8 lg:mb-3" alt="Pé de Cacau Logo"
                style={{"filter":"invert(100%)","opacity":"0.5"}} />
            <div className="flex justify-center gap-6 mb-8 lg:mb-3 text-[10px]">
                <a href="/"
                    className="font-slab uppercase tracking-widest hover:text-rosa transition-colors opacity-60 hover:opacity-100">Início</a>
                <span className="text-rosa font-bold">/</span>
                <a href="/sobre"
                    className="font-slab uppercase tracking-widest hover:text-rosa transition-colors opacity-60 hover:opacity-100">Sobre</a>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30 text-[8px] uppercase tracking-[0.3em] font-body">
                <p>Realização: <a href="https://instagram.com/oquefazerem.jf" target="_blank" className="font-bold">O que
                        fazer em JF</a></p>
                <p>Desenvolvido por: <a href="https://primitiva.cc" target="_blank" className="font-bold">Primitiva</a></p>
                <p className="mt-8 lg:mt-2">© 2026 Todos os direitos reservados</p>
            </div>
        </div>
    </footer>

    {/* Canvas Confetti Library & Trigger */}
    
    

        </div>
    );
}

export default Confirmacao;
