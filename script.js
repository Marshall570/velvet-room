function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function on_load() {
    localStorage.setItem('status1', 'SET')
    localStorage.setItem('status2', 'SET')
    localStorage.setItem('status3', 'SET')
    localStorage.setItem('card1', -1)
    localStorage.setItem('card2', -1)
    localStorage.setItem('card3', -1)
}

function verify_card(card1, card2, card3) {
    let number = Math.floor(Math.random() * 22)

    while (number == card1 || number == card2 || number == card3) {
        number = Math.floor(Math.random() * 22)
    }

    return number
}

function handle_click(id) {
    const card1 = localStorage.getItem('card1')
    const card2 = localStorage.getItem('card2')
    const card3 = localStorage.getItem('card3')

    const card = document.querySelector(`img#card${id}`)
    const card_div = document.querySelector(`div#card_area${id}`)

    if (localStorage.getItem(`status${id}`) === 'SET') {
        const state = Math.random()
        localStorage.setItem(`card${id}`, verify_card(card1, card2, card3))

        card_div.style.transform = 'rotateY(180deg)'

        sleep(275).then(() => {
            if (state < 0.5) {
                card.style.transform = 'rotateX(180deg)'
            } else {
                card.style.transform = 'scaleX(-1)'
            }

            card.src = `assets/cards/${localStorage.getItem(`card${id}`)}.webp`
        })

        localStorage.setItem(`status${id}`, 'FLIP')
    } else {
        card_div.style.transform = 'rotateY(0deg)'

        sleep(275).then(() => {
            card.style.transform = 'scaleX(1)'
            card.src = 'assets/cards/back.webp'
        })
        localStorage.setItem(`status${id}`, 'SET')
        localStorage.setItem(`card${id}`, -1)
    }
}

// function up_effect(card_number) {
//     const ups = [
//         'Novidades, Inocência, Espontaneidade, Liberdade',
//         'Poder, Habilidade, Concentração, Engenhosidade',
//         'Intuição, Superioridade, Mistério, Ideias',
//         'Fertilidade, Feminismo, Beleza, Abundância',
//         'Autoridade, Paternidade, Boa Estrutura',
//         'Religiosidade, Conformidade, Fé',
//         'Amor, União, Novos relacionamentos, Boas escolhas',
//         'Controle, Força de Vontade, Vitória, Determinação',
//         'Justiça, Honestidade, Verdade, Lei',
//         'Busca de sentido, Instrospecção, Solitude',
//         'Boa Sorte, Bom Karma, Destino, Mudança de rumo',
//         'Força, Coragem, Paciência, Compaixão',
//         'Suspensão, Restrições, Sacrifícios',
//         'Recomeços, Mudanças, Transformações',
//         'Equilíbrio, Paciência, Significado',
//         'Masoquismo, Vícios, Sexualidade, Materialismo',
//         'Desastre, Mudanças drásticas, Revelações',
//         'Esperança, Espiritualidade, Insipiração, Renovação',
//         'Ilusão, Medo, Ansiedade, Inconsciente turbulento',
//         'Diversão, Sucesso, Positividade, Vitalidade',
//         'Renascimento, Absolução',
//         'Conclusão, Integração, Conquista'
//     ]

//     return ups[card_number]
// }

// function down_effect(card_number) {
//     const downs = [
//         'Ingenuidade, Estupidez, Imprudência, Caos',
//         'Manipulação, Mau planejamento, Desperdício de Talento',
//         'Falso moralismo, Necessidade de se ouvir',
//         'Bloqueio criativo, improdutividade, Dependência',
//         'Dominância, Possessividade, Rigidez',
//         'Restrição, Revolta',
//         'Desordem, Falta de Equilíbrio, Divergências',
//         'Falta de controle, Agressividade',
//         'Desonestidade, Desigualdade, Acerto de contas',
//         'Isolamento, Solidão, Recaídas',
//         'Má sorte, Energias negativas, Descontrole',
//         'Fraqueza, Insegurança, Irresponsabilidade',
//         'Martirização, Indecisão, Atraso',
//         'Resistência a mudança, Incapacidade de seguir em frente',
//         'Desequilíbrio, Excessos, Falta de percepção',
//         'Desapego, Liberdade, Recuperação',
//         'Prevenção, Incerteza',
//         'Falta de fé, Desespero, Falta de coragem',
//         'Superação, infelicidade, Confusão',
//         'Tristeza, Fracasso',
//         'Dúvida, Falta de autoavaliação',
//         'Falta de conclusão, Derrota'
//     ]

//     return downs[card_number]
// }
