# Leitor de Cartão-Resposta V9

Implementações incluídas:

1. OpenCV.js via CDN.
2. Detector automático de círculos para calibrar a leitura.
3. Exportação XLSX real com SheetJS.
4. Correção em lote por múltiplas imagens.
5. Banco local de alunos, com importação/exportação CSV.
6. Relatório por descritor.
7. Teste automático do sistema.
8. Barra de confiança da leitura.

## Publicação
Envie estes arquivos ao GitHub Pages:
- index.html
- manifest.webmanifest
- sw.js
- README.md
- .nojekyll

## Observações
OpenCV.js e SheetJS são carregados por CDN. No primeiro uso, é necessário internet. Depois, o PWA guarda os arquivos locais do app, mas as bibliotecas externas dependem do cache do navegador/CDN.

Para melhor leitura:
- imprimir o cartão sem redimensionar;
- manter os quatro quadrados pretos visíveis;
- evitar sombras fortes;
- usar caneta preta ou azul bem marcada;
- conferir alertas de BRANCO, DUPLA e DUVIDOSA.


## Revisão V9
- Corrige salvamento em lote para não salvar leituras vazias quando a imagem falha.
- Usa banco de alunos no lote: aluno 1 para imagem 1, aluno 2 para imagem 2 etc.
- Preenche turma e matrícula automaticamente ao selecionar aluno cadastrado.
- Exporta XLSX real com abas: Leituras, Descritores e Banco_Alunos.
- Relatório por descritor agora também pode ser exportado.
- Cache do PWA atualizado para evitar carregar versão anterior.


## Revisão V9
- Carregamento local-first de OpenCV.js e SheetJS, com fallback para CDN.
- Modo de calibração com cartão em branco.
- Detecção automática aprimorada dos círculos por contornos após a homografia.
- Validação do modelo: quantidade de círculos, agrupamento das 4 colunas e 13 linhas.
- Barra de confiança considera leitura, círculos detectados e validação do modelo.
- XLSX real com abas de leituras, descritores e banco de alunos.
- Correção em lote preservada com banco de alunos.
- Cache PWA atualizado.


## Revisão V9
- Corrigido o cache do PWA para armazenar também as bibliotecas externas quando forem carregadas pela primeira vez.
- Detector de círculos reforçado com HoughCircles quando os contornos forem insuficientes.
- Remoção de círculos duplicados próximos.
- Validação do modelo ficou um pouco mais tolerante para fotos reais.
- Observação importante: OpenCV.js e SheetJS podem precisar de internet no primeiro carregamento. Depois de carregados, o service worker tenta armazená-los em cache para uso offline.


## V9 completa

### Banco inicial de alunos
Esta versão já vem com banco inicial extraído das listas enviadas:
- Redes de Computadores: 241 alunos.
- Administração: 237 alunos.
- Total: 478 alunos.

### Fluxo de uso
1. Escolha o curso.
2. Escolha a turma.
3. Escolha o aluno.
4. Fotografe ou envie a imagem do cartão.
5. Clique em "Ler cartão atual".
6. Confira a leitura.
7. Clique em "Salvar leitura".

### Correção em lote
Ao selecionar uma turma, o lote usa a ordem dos alunos filtrados:
imagem 1 → aluno 1,
imagem 2 → aluno 2,
e assim por diante.

### Exportação
O XLSX contém:
- Leituras;
- Descritores;
- Banco_Alunos;
- Dashboard_Turmas.
