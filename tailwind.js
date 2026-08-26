/**
 * Configuração do Tailwind CSS.
 * Arquivo externo utilizado pelo CDN na tag <script src="tailwind-config.js"></script>.
 * 
 * NOTA: Se você for migrar este projeto para um build moderno (NPM/PostCSS), 
 * basta copiar este objeto para o 'tailwind.config.js' e adicionar:
 * module.exports = { ... }
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#1B2A22',      // Verde escuro principal (Hero, Galeria, Footer, Títulos)
                    green: '#2C4A3B',     // Verde secundário
                    yellow: '#EAB308',    // Amarelo dourado (CTAs e destaques)
                    yellowHover: '#CA8A04',
                    light: '#FAFAF9',     // Off-white (Fundos gerais para leveza)
                    sand: '#F5F5F0',      // Fundo secundário (Avaliações)
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        }
    }
}