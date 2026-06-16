# Leitor de Cartão-Resposta V12 LIMPA

Versão limpa para substituir totalmente versões antigas no GitHub Pages.

## O que muda
- Identificação visual fixa: **V12 LIMPA - BUILD 2026-06-16**.
- Remove service workers antigos no carregamento.
- Apaga caches antigos do navegador.
- `sw.js` novo sem cache persistente.
- Captura automática iniciada ao abrir a câmera.
- Status visível de captura automática e marcadores.

## Como publicar corretamente
1. Apague todos os arquivos antigos do repositório.
2. Envie somente os arquivos desta pasta/ZIP.
3. Faça commit.
4. Aguarde o GitHub Pages concluir o deploy.
5. Abra: `https://periciahard.github.io/gabarito/?v=12-limpa`

Se ainda aparecer V10/V11 antiga:
- Limpe os dados do site no navegador.
- Desinstale o PWA antigo.
- Abra novamente com `?v=12-limpa`.
