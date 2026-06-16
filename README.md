# Leitor de Cartão-Resposta V13 LIMPA

Versão focada em corrigir o erro observado na V12: o sistema estava marcando bolhas/respostas como se fossem marcadores.

## Correções principais
- Bloqueia a leitura se os 4 marcadores pretos reais não forem encontrados.
- Exige marcadores com tamanho semelhante e configuração geométrica coerente.
- Não tenta ler bolhas diretamente na foto bruta.
- Só faz leitura após homografia baseada nos 4 marcadores válidos.
- Usa grade fixa matemática na imagem corrigida.
- Mostra diagnóstico: candidatos, marcadores e bloqueio/liberação da leitura.
- Mantém captura automática, mas só dispara após 4 marcadores válidos por 2 ciclos.
- Service worker sem cache persistente.

## Como publicar
1. Apague todos os arquivos antigos do repositório.
2. Envie somente os arquivos deste ZIP.
3. Acesse com: `https://periciahard.github.io/gabarito/?v=13-limpa`

## Observação
Se a câmera não mostrar os quatro quadrados pretos do gabarito, a leitura será bloqueada. Isso é proposital para evitar leituras falsas.
