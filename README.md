# Leitor de Cartão-Resposta V14 LIMPA

Correções sobre a V13:
- Corrige abertura da câmera com fallback de permissões/constraints.
- Mostra status da câmera.
- Remove chamada duplicada de captura automática antiga.
- Implementa `renderResults()` ausente, que impedia a exibição das respostas.
- Mantém bloqueio obrigatório por 4 marcadores reais.
- Service worker sem cache persistente.

Publique apagando os arquivos antigos e enviando somente este ZIP extraído.
Acesse com `?v=14-limpa`.
