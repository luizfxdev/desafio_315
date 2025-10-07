# 🕷️ Gizmo Multiversal - Desafio do Aranhaverso

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-00ff55)
![License](https://img.shields.io/badge/license-MIT-00d4ff)
![Status](https://img.shields.io/badge/status-active-ff0055)

*"Com grandes dados vêm grandes responsabilidades dimensionais"*

</div>

---

## 📖 Sobre o Desafio

Preso em uma dimensão alternativa após um erro no **Gizmo Multiversal**, **Miles Morales** precisa decifrar o padrão dos vetores dimensionalistas para reencontrar **Gwen Stacy**, sua maior aliada no Aranhaverso.

As instruções no tablet cósmico indicam que cada número da sequência representa um ajuste em um dos eixos do multiverso:
- **0** → Eixo X
- **1** → Eixo Y  
- **2** → Eixo Z

Somente ao calcular corretamente a somatória dos movimentos em cada eixo, Miles poderá configurar o Gizmo Multiversal e alcançar as coordenadas exatas onde Gwen Stacy está esperando.

---

## 🎯 Objetivo

Desenvolver uma função que:
1. Recebe um array de movimentos dimensionais
2. Processa cada movimento identificando o eixo correspondente
3. Soma todos os avanços para cada eixo (X, Y, Z)
4. Retorna as coordenadas finais no formato `[x, y, z]`

---

## 🧩 Regras do Desafio

### Entrada
- Um **array de números inteiros**
- Cada número representa um movimento:
  - `0` = movimento no eixo X
  - `1` = movimento no eixo Y
  - `2` = movimento no eixo Z
- Exemplo: `[0, 0, 1, 2, 0, 1, 1, 2]`

### Processamento
- Inicializar coordenadas em `[0, 0, 0]`
- Para cada número no array:
  - Se for `0`: incrementar coordenada X
  - Se for `1`: incrementar coordenada Y
  - Se for `2`: incrementar coordenada Z

### Saída
- Retornar as coordenadas finais
- Formato: `[x, y, z]`
- Exemplo: `[3, 3, 2]` (para a entrada acima)

---

## 💡 Exemplos de Uso

### Exemplo 1: Caso Básico
```javascript
Entrada: [0, 0, 1, 2, 0, 1, 1, 2]
Processamento:
  - 0 → X = 1
  - 0 → X = 2
  - 1 → Y = 1
  - 2 → Z = 1
  - 0 → X = 3
  - 1 → Y = 2
  - 1 → Y = 3
  - 2 → Z = 2
Saída: [3, 3, 2]
```

### Exemplo 2: Movimento Simples
```javascript
Entrada: [1, 1, 1, 2, 2, 0]
Análise:
  - Eixo X (0): 1 movimento
  - Eixo Y (1): 3 movimentos
  - Eixo Z (2): 2 movimentos
Saída: [1, 3, 2]
```

### Exemplo 3: Movimento Intenso no Eixo Z
```javascript
Entrada: [2, 2, 2, 2, 1, 0, 1, 2, 2]
Análise:
  - Eixo X (0): 1 movimento
  - Eixo Y (1): 2 movimentos
  - Eixo Z (2): 6 movimentos
Saída: [1, 2, 6]
```

### Exemplo 4: Movimento Equilibrado
```javascript
Entrada: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2]
Análise:
  - Eixo X (0): 4 movimentos
  - Eixo Y (1): 4 movimentos
  - Eixo Z (2): 4 movimentos
Saída: [4, 4, 4]
```

---

## 🚀 Como Usar

### Estrutura de Arquivos
```
desafio_315/
├── index.html          # Interface principal
├── styles.css          # Estilos visuais
├── script.js           # Lógica do desafio
└── assets/
    ├── background.mp4  # Vídeo de fundo (tema Aranhaverso)
    └── theme.mp3       # Música tema
```

### Instalação

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/seu-usuario/desafio_315.git
   cd desafio_315
   ```

2. **Adicione os arquivos de mídia**
   - Coloque `background.mp4` na pasta `assets/`
   - Coloque `theme.mp3` na pasta `assets/`

3. **Abra o projeto**
   - Abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local (Live Server, http-server, etc.)

### Como Funciona

1. **Digite as coordenadas** no campo de entrada
   - Formato: números separados por vírgula
   - Exemplo: `0,0,1,2,0,1,1,2`

2. **Clique em DECIFRAR**
   - O sistema processará os movimentos
   - Exibirá o cálculo detalhado passo a passo
   - Mostrará as coordenadas finais

3. **Controles de Áudio**
   - 🎵 Tocar música tema
   - ⏸️ Pausar música

4. **Botão RETORNAR**
   - Limpa o campo de entrada
   - Remove os resultados exibidos

---

## 🎨 Características Técnicas

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Animações e responsividade
- **JavaScript (ES6+)**: Lógica e validação
- **Web Audio API**: Controle de áudio
- **Video HTML5**: Background animado

### Recursos Implementados

#### 🎭 Visual
- Design inspirado no Aranhaverso
- Cores neon vibrantes (#00ff55, #00d4ff, #ff0055)
- Efeito glassmorphism no container
- Animações suaves e interativas
- Barra de rolagem customizada

#### 🧠 Funcionalidade
- Validação robusta de entrada
- Processamento em tempo real
- Exibição detalhada do cálculo
- Tratamento de erros amigável
- Suporte para tecla Enter

#### 📱 Responsividade
- Layout adaptável para desktop
- Otimizado para tablets
- Mobile-first approach
- Breakpoints: 768px e 480px

---

## 🔧 Algoritmo Principal

```javascript
function calculateDimensionalCoordinates(movements) {
  // Inicializa coordenadas
  const coordinates = [0, 0, 0];
  
  // Processa cada movimento
  movements.forEach((move) => {
    if (move === 0) coordinates[0]++;      // Eixo X
    else if (move === 1) coordinates[1]++; // Eixo Y
    else if (move === 2) coordinates[2]++; // Eixo Z
  });
  
  return coordinates;
}
```

### Complexidade
- **Tempo**: O(n) - onde n é o número de movimentos
- **Espaço**: O(1) - usa apenas array fixo de 3 posições

---

## 🎓 Conceitos Aplicados

### Programação
- Manipulação de arrays
- Estruturas condicionais
- Iteração de dados
- Validação de entrada
- Tratamento de erros

### Matemática
- Soma acumulativa
- Sistemas de coordenadas 3D
- Vetores dimensionais

### Web Development
- DOM Manipulation
- Event Listeners
- CSS Grid/Flexbox
- Responsive Design
- Accessibility (ARIA)

---

## 🎮 Testando o Desafio

### Casos de Teste

```javascript
// Teste 1: Entrada vazia
Entrada: []
Esperado: [0, 0, 0]

// Teste 2: Um único eixo
Entrada: [0, 0, 0]
Esperado: [3, 0, 0]

// Teste 3: Todos os eixos
Entrada: [0, 1, 2]
Esperado: [1, 1, 1]

// Teste 4: Sequência longa
Entrada: [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2]
Esperado: [5, 5, 5]

// Teste 5: Predominância de um eixo
Entrada: [2,2,2,2,2,1,0]
Esperado: [1, 1, 5]
```

---

## 🌟 Melhorias Futuras

- [ ] Visualização 3D das coordenadas
- [ ] Histórico de cálculos anteriores
- [ ] Modo escuro/claro
- [ ] Exportar resultados em JSON
- [ ] Animação da trajetória do Miles
- [ ] Sons de efeitos ao decifrar
- [ ] Ranking de dimensões mais visitadas
- [ ] Modo multiplayer (competitivo)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💚 inspirado no universo do Homem-Aranha

---

## 🙏 Agradecimentos

- **Marvel Comics** - Pelos personagens inspiradores
- **Sony Pictures Animation** - Pelo universo visual do Aranhaverso
- **Comunidade Dev** - Pelas ferramentas e recursos open-source

---

<div align="center">

### 🕸️ *"Anyone can wear the mask... and solve the challenge!"* 🕸️

**[⬆ Voltar ao topo](#-gizmo-multiversal---desafio-do-aranhaverso)**

</div>
