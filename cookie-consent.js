/**
 * Pé de Cacau - Cookie & Data Consent Manager (LGPD)
 * Autocontrolado e com integração visual ao design system do projeto.
 */

(function () {
    const STORAGE_KEY = 'pedecacau_cookie_consent';

    // Get saved consent or default
    function getConsent() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    // Save consent
    function saveConsent(consent) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
        // Dispatch custom event for other scripts (e.g., analytics)
        window.dispatchEvent(new CustomEvent('pedecacauConsentChanged', { detail: consent }));
        hideFloatingButton();
    }

    // Initialize UI
    function init() {
        const consent = getConsent();

        // Inject styles for animations and toggles
        injectStyles();

        // Create elements
        createFloatingButton();
        createBanner();
        createModal();

        // Expose function globally for manual trigger if needed
        window.openCookieConsentModal = showModal;

        if (!consent) {
            showBanner();
            hideFloatingButton();
        } else {
            hideFloatingButton();
            // Apply current consent settings (e.g., enable analytics if allowed)
            applyConsent(consent);
        }
    }

    function showFloatingButton() {
        const btn = document.getElementById('cookie-consent-trigger');
        if (btn) btn.classList.remove('hidden');
    }

    function hideFloatingButton() {
        const btn = document.getElementById('cookie-consent-trigger');
        if (btn) btn.classList.add('hidden');
    }

    function injectStyles() {
        if (document.getElementById('cookie-consent-styles')) return;
        const style = document.createElement('style');
        style.id = 'cookie-consent-styles';
        style.innerHTML = `
            .cookie-toggle-checkbox:checked + .cookie-toggle-bg {
                background-color: #0551a7;
            }
            .cookie-toggle-checkbox:checked + .cookie-toggle-bg .cookie-toggle-dot {
                transform: translateX(100%);
            }
        `;
        document.head.appendChild(style);
    }

    // Create the floating settings trigger button
    function createFloatingButton() {
        const btn = document.createElement('button');
        btn.id = 'cookie-consent-trigger';
        btn.className = 'fixed bottom-4 left-4 z-40 bg-creme text-marrom border border-azul/20 p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center hidden';
        btn.setAttribute('aria-label', 'Configurações de Privacidade');
        btn.innerHTML = '<span class="material-symbols-outlined text-azul" style="font-size: 24px;">cookie</span>';

        btn.addEventListener('click', () => {
            showModal();
        });

        document.body.appendChild(btn);
    }

    // Create the main banner
    function createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        // Positioned fixed bottom center on mobile, bottom-left on desktop
        banner.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:left-6 md:translate-x-0 z-50 w-[95%] md:w-96 max-w-sm md:max-w-none bg-creme/95 backdrop-blur-md border border-azul/20 text-marrom shadow-xl p-4 md:p-5 rounded-2xl transition-all duration-500 ease-in-out opacity-0 translate-y-10 pointer-events-none';

        banner.innerHTML = `
            <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-1.5">
                    <h4 class="font-body font-bold text-sm text-azul flex items-center gap-2">
                        <span class="material-symbols-outlined text-azul text-xl shrink-0">cookie</span>
                        Aceita um cookie?
                    </h4>
                    <p class="font-body text-[11px] md:text-xs text-marrom/80 leading-relaxed">
                        Para deixar a sua experiência no Concurso Pé de Cacau ainda mais saborosa, nós usamos cookies. Eles nos ajudam a lembrar das suas preferências, garantir a segurança do seu voto e entender quais sobremesas estão bombando em Juiz de Fora! Prometemos que eles não engordam. Saiba mais na nossa <a href="politica-privacidade.html" class="text-azul font-bold hover:underline">Política de Privacidade</a>.
                    </p>
                </div>
                <div class="flex flex-wrap items-center justify-end gap-2 mt-1 pt-3 border-t border-marrom/10">
                    <button id="cookie-btn-reject" class="font-body text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-xl border border-marrom/20 text-marrom hover:bg-marrom/5 transition-all">Rejeitar</button>
                    <button id="cookie-btn-customize" class="font-body text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-xl bg-rosa/30 text-azul hover:bg-rosa/60 transition-all">Personalizar</button>
                    <button id="cookie-btn-accept" class="font-body text-[11px] md:text-xs font-semibold px-4 py-1.5 rounded-xl bg-azul text-white hover:bg-azul/90 shadow-md shadow-azul/20 transition-all">Aceitar Todos</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Event Listeners
        document.getElementById('cookie-btn-accept').addEventListener('click', () => {
            const consent = { necessary: true, analytics: true, marketing: true };
            saveConsent(consent);
            applyConsent(consent);
            hideBanner();
        });

        document.getElementById('cookie-btn-reject').addEventListener('click', () => {
            const consent = { necessary: true, analytics: false, marketing: false };
            saveConsent(consent);
            applyConsent(consent);
            hideBanner();
        });

        document.getElementById('cookie-btn-customize').addEventListener('click', () => {
            hideBanner();
            showModal();
        });
    }

    // Create the detailed settings modal
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'cookie-consent-modal';
        modal.className = 'fixed inset-0 z-50 bg-marrom/50 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300';

        modal.innerHTML = `
            <div class="bg-creme border border-azul/20 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden transform scale-95 transition-all duration-300 max-h-[90vh] flex flex-col">
                <!-- Header -->
                <div class="p-6 border-b border-marrom/10 flex justify-between items-center bg-azul/5">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-azul text-2xl">cookie</span>
                        <h3 class="font-body font-bold text-lg text-azul">Preferências de Privacidade</h3>
                    </div>
                    <button id="cookie-modal-close" class="text-marrom/50 hover:text-marrom flex items-center justify-center p-1 rounded-full hover:bg-marrom/5 transition-all">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>

                <!-- Body (Scrollable) -->
                <div class="p-6 overflow-y-auto flex-1 space-y-5 font-body">
                    <p class="text-sm text-marrom/80 leading-relaxed">
                        Gerencie suas preferências de privacidade abaixo. Você pode ativar ou desativar diferentes tipos de cookies e rastreadores conforme sua preferência.
                    </p>

                    <!-- Category: Necessary -->
                    <div class="flex items-start justify-between gap-4 p-4 bg-marrom/5 rounded-2xl">
                        <div class="flex-1">
                            <h5 class="font-bold text-sm text-marrom flex items-center gap-2">
                                Necessários <span class="bg-azul/10 text-azul text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Obrigatório</span>
                            </h5>
                            <p class="text-xs text-marrom/70 mt-1">
                                Essenciais para o funcionamento básico do site, navegação e segurança das suas informações.
                            </p>
                        </div>
                        <div class="relative shrink-0 mt-1">
                            <div class="w-10 h-6 bg-azul/30 rounded-full flex items-center p-1 cursor-not-allowed opacity-60">
                                <div class="w-4 h-4 bg-white rounded-full shadow-md translate-x-4"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Category: Analytics -->
                    <div class="flex items-start justify-between gap-4 p-4 border border-marrom/10 rounded-2xl hover:bg-marrom/[0.02] transition-all">
                        <div class="flex-1">
                            <h5 class="font-bold text-sm text-marrom">Estatísticas e Analytics</h5>
                            <p class="text-xs text-marrom/70 mt-1">
                                Nos ajudam a entender como os visitantes interagem com o site, coletando dados de navegação de forma anônima.
                            </p>
                        </div>
                        <div class="relative shrink-0 mt-1">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="cookie-opt-analytics" class="sr-only cookie-toggle-checkbox">
                                <div class="w-10 h-6 bg-marrom/20 rounded-full flex items-center p-1 transition-all duration-300 cookie-toggle-bg">
                                    <div class="w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 cookie-toggle-dot"></div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Category: Marketing -->
                    <div class="flex items-start justify-between gap-4 p-4 border border-marrom/10 rounded-2xl hover:bg-marrom/[0.02] transition-all">
                        <div class="flex-1">
                            <h5 class="font-bold text-sm text-marrom">Marketing e Rastreamento</h5>
                            <p class="text-xs text-marrom/70 mt-1">
                                Utilizados para direcionar anúncios relevantes e medir o retorno de nossas campanhas em redes sociais e plataformas de anúncios.
                            </p>
                        </div>
                        <div class="relative shrink-0 mt-1">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="cookie-opt-marketing" class="sr-only cookie-toggle-checkbox">
                                <div class="w-10 h-6 bg-marrom/20 rounded-full flex items-center p-1 transition-all duration-300 cookie-toggle-bg">
                                    <div class="w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 cookie-toggle-dot"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="p-6 border-t border-marrom/10 flex flex-wrap items-center justify-end gap-2 bg-marrom/[0.01]">
                    <button id="cookie-modal-save" class="font-body text-xs md:text-sm font-semibold px-4 py-2 rounded-xl border border-azul text-azul hover:bg-azul/5 transition-all">Salvar Preferências</button>
                    <button id="cookie-modal-accept-all" class="font-body text-xs md:text-sm font-semibold px-5 py-2 rounded-xl bg-azul text-white hover:bg-azul/90 shadow-md shadow-azul/20 transition-all">Aceitar Todos</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Modal Controls
        const closeModalBtn = document.getElementById('cookie-modal-close');
        closeModalBtn.addEventListener('click', () => {
            hideModal();
        });

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });

        // Save preferences
        document.getElementById('cookie-modal-save').addEventListener('click', () => {
            const consent = {
                necessary: true,
                analytics: document.getElementById('cookie-opt-analytics').checked,
                marketing: document.getElementById('cookie-opt-marketing').checked
            };
            saveConsent(consent);
            applyConsent(consent);
            hideModal();
        });

        // Accept all from modal
        document.getElementById('cookie-modal-accept-all').addEventListener('click', () => {
            const consent = { necessary: true, analytics: true, marketing: true };
            saveConsent(consent);
            applyConsent(consent);
            hideModal();
        });
    }

    function showBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            banner.classList.add('opacity-100', 'translate-y-0');
        }
    }

    // Modal selectors fallback for nested children
    function getModalContainers() {
        const modal = document.getElementById('cookie-consent-modal');
        if (!modal) return { modal: null, container: null };
        const container = modal.querySelector('div');
        return { modal, container };
    }

    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            banner.classList.remove('opacity-100', 'translate-y-0');
        }
    }

    function showModal() {
        const { modal, container } = getModalContainers();
        if (modal) {
            // Load current options into checkboxes
            const consent = getConsent() || { necessary: true, analytics: false, marketing: false };
            document.getElementById('cookie-opt-analytics').checked = !!consent.analytics;
            document.getElementById('cookie-opt-marketing').checked = !!consent.marketing;

            modal.classList.remove('opacity-0', 'pointer-events-none');
            if (container) {
                container.classList.remove('scale-95');
                container.classList.add('scale-100');
            }
        }
    }

    function hideModal() {
        const { modal, container } = getModalContainers();
        if (modal) {
            modal.classList.add('opacity-0', 'pointer-events-none');
            if (container) {
                container.classList.remove('scale-100');
                container.classList.add('scale-95');
            }
        }
    }

    // Apply active consent preferences (e.g. enable/disable external trackers)
    function applyConsent(consent) {
        console.log('[Pé de Cacau] Aplicando consentimento de cookies:', consent);

        if (consent.analytics) {
            // Se houver Google Analytics ou similar, ativar aqui
            // E.g., window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
        }

        if (consent.marketing) {
            // Se houver Facebook Pixel ou similar, ativar aqui
            // E.g., window.fbq('consent', 'grant');
        }
    }

    // Init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
