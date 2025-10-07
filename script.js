// Elementos do DOM
const coordinatesInput = document.getElementById('coordinates-input');
const decipherBtn = document.getElementById('decipher-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Função principal para calcular coordenadas dimensionais
function calculateDimensionalCoordinates(movements) {
  // Inicializa as coordenadas em [0, 0, 0] para [x, y, z]
  const coordinates = [0, 0, 0];
  const steps = [];

  // Processa cada movimento
  movements.forEach((move, index) => {
    if (move === 0) {
      coordinates[0]++; // Incrementa eixo X
      steps.push(`Movimento ${index + 1}: ${move} → Eixo X (+1) | Coordenadas atuais: [${coordinates.join(', ')}]`);
    } else if (move === 1) {
      coordinates[1]++; // Incrementa eixo Y
      steps.push(`Movimento ${index + 1}: ${move} → Eixo Y (+1) | Coordenadas atuais: [${coordinates.join(', ')}]`);
    } else if (move === 2) {
      coordinates[2]++; // Incrementa eixo Z
      steps.push(`Movimento ${index + 1}: ${move} → Eixo Z (+1) | Coordenadas atuais: [${coordinates.join(', ')}]`);
    }
  });

  return { coordinates, steps };
}

// Função para validar a entrada
function validateInput(input) {
  // Remove espaços em branco
  const trimmed = input.trim();

  if (trimmed === '') {
    return { valid: false, error: 'Por favor, insira as coordenadas dimensionais!' };
  }

  // Converte string em array de números
  const movements = trimmed.split(',').map(item => parseInt(item.trim()));

  // Valida se todos os valores são números válidos
  if (movements.some(isNaN)) {
    return { valid: false, error: 'Entrada inválida! Use apenas números separados por vírgula (0, 1 ou 2).' };
  }

  // Valida se todos os valores são 0, 1 ou 2
  if (movements.some(val => val < 0 || val > 2)) {
    return { valid: false, error: 'Os valores devem ser 0 (eixo X), 1 (eixo Y) ou 2 (eixo Z)!' };
  }

  return { valid: true, movements };
}

// Função para exibir o resultado
function displayResult(movements, result) {
  let html = '<div class="calculation-steps">';

  // Exibe entrada original
  html += `<div class="calculation-step">
    <strong>📍 Entrada:</strong> [${movements.join(', ')}]
  </div>`;

  // Exibe contagem de movimentos por eixo
  const xCount = movements.filter(m => m === 0).length;
  const yCount = movements.filter(m => m === 1).length;
  const zCount = movements.filter(m => m === 2).length;

  html += `<div class="calculation-step">
    <strong>🔢 Análise dos Movimentos:</strong><br>
    • Eixo X (0): ${xCount} movimento(s)<br>
    • Eixo Y (1): ${yCount} movimento(s)<br>
    • Eixo Z (2): ${zCount} movimento(s)
  </div>`;

  // Exibe passo a passo
  html += `<div class="calculation-step">
    <strong>🧭 Processamento Dimensional:</strong><br>`;

  result.steps.forEach(step => {
    html += `${step}<br>`;
  });

  html += `</div>`;

  // Exibe resultado final
  html += `<div class="final-result">
    🌌 Coordenadas Finais: [${result.coordinates.join(', ')}]<br>
    <small style="font-size: 0.8rem; opacity: 0.8; display: block; margin-top: 10px;">
      Miles pode agora reencontrar Gwen Stacy!
    </small>
  </div>`;

  html += '</div>';

  resultContent.innerHTML = html;
  resultSection.classList.add('active');
}

// Função para exibir erro
function displayError(errorMessage) {
  resultContent.innerHTML = `<div class="error-message">⚠️ ${errorMessage}</div>`;
  resultSection.classList.add('active');
}

// Event listener para o botão DECIFRAR
decipherBtn.addEventListener('click', () => {
  const input = coordinatesInput.value;
  const validation = validateInput(input);

  if (!validation.valid) {
    displayError(validation.error);
    return;
  }

  const result = calculateDimensionalCoordinates(validation.movements);
  displayResult(validation.movements, result);
});

// Event listener para o botão RETORNAR
returnBtn.addEventListener('click', () => {
  coordinatesInput.value = '';
  resultSection.classList.remove('active');
  resultContent.innerHTML = '';
});

// Event listener para Enter no input
coordinatesInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    decipherBtn.click();
  }
});

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play().catch(err => {
    console.log('Erro ao reproduzir áudio:', err);
  });
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  console.log('🕷️ Gizmo Multiversal inicializado!');
  coordinatesInput.focus();
});
