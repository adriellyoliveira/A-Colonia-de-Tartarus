document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');
    const btnReinicio = document.getElementById('btn-reinicio');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPassoId = botao.getAttribute('data-proximo');
            const passoAtual = document.querySelector('.passo.ativo');
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);

            if (passoAtual) {
                passoAtual.classList.remove('ativo');
            }
            if (proximoPasso) {
                proximoPasso.classList.add('ativo');
            }

            // Verifica se o próximo passo é um final e exibe o botão de reinício
            if (proximoPasso.classList.contains('final')) {
                btnReinicio.style.display = 'block';
            } else {
                btnReinicio.style.display = 'none';
            }
        });
    });

    btnReinicio.addEventListener('click', () => {
        const passoAtual = document.querySelector('.passo.ativo');
        if (passoAtual) {
            passoAtual.classList.remove('ativo');
        }
        document.getElementById('passo-0').classList.add('ativo');
        btnReinicio.style.display = 'none';
    });
});
