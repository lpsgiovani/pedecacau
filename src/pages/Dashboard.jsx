import React from 'react';

function Dashboard() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            

    <nav className="relative z-20 border-b border-azul/10 bg-white/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="/" className="flex items-center gap-3">
                <img src="assets/logo.svg" className="w-10 h-auto" alt="Logo" />
            </a>
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-body font-bold uppercase tracking-widest text-marrom/40">Atualizado há
                    5min</span>
                <span className="w-2.5 h-2.5 bg-rosa rounded-full animate-pulse shadow-sm"></span>
            </div>
        </div>
    </nav>

    <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">


        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Global Ranking */}
            <div className="lg:col-span-2 space-y-6">
                <div
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b-2 border-azul pb-2 gap-2">
                    <h2 className="text-3xl sm:text-4xl font-slab uppercase tracking-tighter leading-none text-azul">Ranking
                        de Apuração</h2>
                </div>

                <div className="space-y-4">
                    {/* Cafeteria 1 */}
                    <div id="cafeteria-1" onclick="updateStats('cafeteria-1')"
                        className="ranking-item glass-card p-1.5 flex flex-col group cursor-pointer transition-all duration-300 active">
                        <div
                            className="ranking-header p-3.5 sm:p-4 flex flex-col sm:items-center sm:flex-row justify-between gap-4">
                            <div className="flex items-center gap-4 sm:gap-5">
                                <span
                                    className="text-3xl sm:text-4xl font-slab opacity-20 italic w-8 text-center shrink-0 text-marrom">01</span>
                                <div>
                                    <h4
                                        className="text-lg sm:text-xl font-slab uppercase tracking-tighter leading-tight name text-marrom">
                                        Café Bloom</h4>
                                    <div
                                        className="flex gap-3 text-[9px] sm:text-[10px] uppercase tracking-wider opacity-60 mt-1 info text-marrom/60 font-body font-semibold">
                                        <span>842 Avaliações</span>
                                        <span>•</span>
                                        <span>Média 9.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Details Container */}
                        <div className="mobile-details w-full lg:hidden block px-1 pb-1"></div>
                    </div>

                    {/* Cafeteria 2 */}
                    <div id="cafeteria-2" onclick="updateStats('cafeteria-2')"
                        className="ranking-item glass-card p-1.5 flex flex-col group cursor-pointer transition-all duration-300">
                        <div
                            className="ranking-header p-3.5 sm:p-4 flex flex-col sm:items-center sm:flex-row justify-between gap-4">
                            <div className="flex items-center gap-4 sm:gap-5">
                                <span
                                    className="text-3xl sm:text-4xl font-slab opacity-15 italic w-8 text-center shrink-0 text-marrom">02</span>
                                <div>
                                    <h4
                                        className="text-lg sm:text-xl font-slab uppercase tracking-tighter text-marrom/80 leading-tight name">
                                        Espaço Café Central</h4>
                                    <div
                                        className="flex gap-3 text-[9px] sm:text-[10px] uppercase tracking-wider opacity-40 mt-1 info text-marrom/50 font-body font-semibold">
                                        <span>715 Avaliações</span>
                                        <span>•</span>
                                        <span>Média 9.6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Details Container */}
                        <div className="mobile-details w-full lg:hidden hidden px-1 pb-1"></div>
                    </div>

                    {/* Cafeteria 3 */}
                    <div id="cafeteria-3" onclick="updateStats('cafeteria-3')"
                        className="ranking-item glass-card p-1.5 flex flex-col group cursor-pointer transition-all duration-300">
                        <div
                            className="ranking-header p-3.5 sm:p-4 flex flex-col sm:items-center sm:flex-row justify-between gap-4">
                            <div className="flex items-center gap-4 sm:gap-5">
                                <span
                                    className="text-3xl sm:text-4xl font-slab opacity-15 italic w-8 text-center shrink-0 text-marrom">03</span>
                                <div>
                                    <h4
                                        className="text-lg sm:text-xl font-slab uppercase tracking-tighter text-marrom/80 leading-tight name">
                                        Grão & Mel</h4>
                                    <div
                                        className="flex gap-3 text-[9px] sm:text-[10px] uppercase tracking-wider opacity-40 mt-1 info text-marrom/50 font-body font-semibold">
                                        <span>628 Avaliações</span>
                                        <span>•</span>
                                        <span>Média 9.4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Details Container */}
                        <div className="mobile-details w-full lg:hidden hidden px-1 pb-1"></div>
                    </div>

                    {/* Outras Cafeterias (Simplificadas) */}
                    <div className="pt-6 space-y-2">
                        <div
                            className="flex justify-between items-center px-4 sm:px-8 text-[10px] sm:text-[11px] font-body font-bold uppercase opacity-35 text-marrom">
                            <span># Cafeteria</span>
                            <span>Avaliações / Média</span>
                        </div>

                        {/* Cafeteria 4 */}
                        <div id="cafeteria-4" onclick="updateStats('cafeteria-4')"
                            className="ranking-item glass-card p-1.5 flex flex-col group cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100">
                            <div
                                className="ranking-header p-2.5 sm:p-3 px-4 sm:px-8 flex justify-between items-center w-full">
                                <span className="font-slab text-xs sm:text-sm uppercase truncate pr-4 text-marrom">04. Cacau
                                    Noir</span>
                                <span className="font-body font-bold text-xs shrink-0 text-marrom/60">412 | 9.0</span>
                            </div>
                            {/* Mobile Details Container */}
                            <div className="mobile-details w-full lg:hidden hidden px-1 pb-1"></div>
                        </div>

                        {/* Cafeteria 5 */}
                        <div id="cafeteria-5" onclick="updateStats('cafeteria-5')"
                            className="ranking-item glass-card p-1.5 flex flex-col group cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100">
                            <div
                                className="ranking-header p-2.5 sm:p-3 px-4 sm:px-8 flex justify-between items-center w-full">
                                <span className="font-slab text-xs sm:text-sm uppercase truncate pr-4 text-marrom">05.
                                    Confeitaria Sol</span>
                                <span className="font-body font-bold text-xs shrink-0 text-marrom/60">389 | 8.6</span>
                            </div>
                            {/* Mobile Details Container */}
                            <div className="mobile-details w-full lg:hidden hidden px-1 pb-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Category Performance */}
            <div className="space-y-6 hidden lg:block sticky top-28 h-fit">
                <h2 id="category-title" className="text-2xl font-slab uppercase tracking-tighter mb-8 text-azul opacity-40">
                    Desempenho: Café Bloom</h2>
                <div className="glass-card p-8 space-y-8">
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-[10px] font-body font-bold uppercase tracking-widest text-marrom/50">Sabor
                                (Média)</span>
                            <span id="score-sabor" className="font-slab text-xl uppercase leading-none text-azul">9.6</span>
                        </div>
                        <div className="score-bar">
                            <div id="bar-sabor" className="score-progress" style={{"width":"96%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-[10px] font-body font-bold uppercase tracking-widest text-marrom/50">O
                                quanto marcou (Média)</span>
                            <span id="score-marcou"
                                className="font-slab text-xl uppercase leading-none text-azul">9.8</span>
                        </div>
                        <div className="score-bar">
                            <div id="bar-marcou" className="score-progress" style={{"width":"98%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span
                                className="text-[10px] font-body font-bold uppercase tracking-widest text-marrom/50">Apresentação
                                (Média)</span>
                            <span id="score-apresentacao"
                                className="font-slab text-xl uppercase leading-none text-azul">9.8</span>
                        </div>
                        <div className="score-bar">
                            <div id="bar-apresentacao" className="score-progress" style={{"width":"98%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-[10px] font-body font-bold uppercase tracking-widest text-marrom/50">Nota
                                Geral (Média)</span>
                            <span id="score-geral" className="font-slab text-xl uppercase leading-none text-azul">9.8</span>
                        </div>
                        <div className="score-bar">
                            <div id="bar-geral" className="score-progress" style={{"width":"98%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer className="pt-4 pb-12 px-6 text-center relative z-10 w-full mt-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-2 opacity-50">
            <img src="assets/logo.svg" className="w-24 h-auto mb-2" alt="Logo" />
            <div className="font-body text-marrom/60 text-[8px] space-y-1">
                <p>Realização: <a href="https://instagram.com/oquefazerem.jf" target="_blank"
                        className="font-bold hover:text-azul transition-colors">O que fazer em JF</a></p>
                <p>Desenvolvido por: <a href="https://primitiva.cc" target="_blank"
                        className="font-bold hover:text-azul transition-colors">Primitiva</a></p>
                <p className="font-slab pt-2 opacity-30 uppercase tracking-[0.1em] text-[7px]">© 2026 Todos os direitos
                    reservados</p>
            </div>
        </div>
    </footer>
    

        </div>
    );
}

export default Dashboard;
