function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function on_load() {
    localStorage.setItem('status', 'SET')
}

function handle_click() {
    const card_number = Math.floor(Math.random() * 22)
    const state = Math.random()

    const card = document.querySelector('img#card')
    const card_div = document.querySelector('div#card')
    const card_name = document.querySelector('h1#card_name')
    const card_desc = document.querySelector('p#card_description')

    if (localStorage.getItem('status') === 'SET') {
        card_div.style.transform = 'rotateY(180deg)'

        sleep(275).then(() => {
            card_name.textContent = arcana_name(card_number)
                        
            if (state < 0.5) {
                card.style.transform = 'rotateX(180deg)'
                card_desc.textContent = downright_effect(card_number)
            } else {
                card.style.transform = 'scaleX(-1)'
                card_desc.textContent = upright_effect(card_number)
            }
            
            card.src = `assets/cards/${card_number}.jpg`
        })

        localStorage.setItem('status', 'FLIP')
    } else {
        card_div.style.transform = 'rotateY(0deg)'
        card_name.textContent = ''
        card_desc.textContent = ''

        sleep(275).then(() => {
            card.style.transform = 'scaleX(1)'
            card.src = 'assets/cards/back.jpg'
        })
        localStorage.setItem('status', 'SET')
    }
}

function arcana_name(card_number) {
    const arcanas = [
        'O TOLO',
        'O MAGO',
        'A SACERDOTISA',
        'A IMPERATRIZ',
        'O IMPERADOR',
        'O SACERDOTE',
        'OS AMANTES',
        'A CARRUAGEM',
        'A JUSTIÇA',
        'O EREMITA',
        'A FORTUNA',
        'A FORÇA',
        'O ENFORCADO',
        'A MORTE',
        'A TEMPERANÇA',
        'O DIABO',
        'A TORRE',
        'A ESTRELA',
        'A LUA',
        'O SOL',
        'O JULGAMENTO',
        'O MUNDO',
    ]

    return arcanas[card_number]
}

function upright_effect(card_number) {
    const ups = [
        'Novidades, Inocência, Espontaneidade, Liberdade',
        'Poder, Habilidade, Concentração, Engenhosidade',
        'Intuição, Superioridade, Mistério, Ideias',
        'Fertilidade, Feminismo, Beleza, Abundância',
        'Autoridade, Paternidade, Boa Estrutura',
        'Religiosidade, Conformidade, Fé',
        'Amor, União, Novos relacionamentos, Boas escolhas',
        'Controle, Força de Vontade, Vitória, Determinação',
        'Justiça, Honestidade, Verdade, Lei',
        'Busca de sentido, Instrospecção, Solitude',
        'Boa Sorte, Bom Karma, Destino, Mudança de rumo',
        'Força, Coragem, Paciência, Compaixão',
        'Suspensão, Restrições, Sacrifícios',
        'Recomeços, Mudanças, Transformações',
        'Equilíbrio, Paciência, Significado',
        'Masoquismo, Vícios, Sexualidade, Materialismo',
        'Desastre, Mudanças drásticas, Revelações',
        'Esperança, Espiritualidade, Insipiração, Renovação',
        'Ilusão, Medo, Ansiedade, Inconsciente turbulento',
        'Diversão, Sucesso, Positividade, Vitalidade',
        'Renascimento, Absolução',
        'Conclusão, Integração, Conquista'
    ]

    return ups[card_number]
}

function downright_effect(card_number) {
    const downs = [
        'Ingenuidade, Estupidez, Imprudência, Caos',
        'Manipulação, Mau planejamento, Desperdício de Talento',
        'Falso moralismo, Necessidade de se ouvir',
        'Bloqueio criativo, improdutividade, Dependência',
        'Dominância, Possessividade, Rigidez',
        'Restrição, Revolta',
        'Desordem, Falta de Equilíbrio, Divergências',
        'Falta de controle, Agressividade',
        'Desonestidade, Desigualdade, Acerto de contas',
        'Isolamento, Solidão, Recaídas',
        'Má sorte, Energias negativas, Descontrole',
        'Fraqueza, Insegurança, Irresponsabilidade',
        'Martirização, Indecisão, Atraso',
        'Resistência a mudança, Incapacidade de seguir em frente',
        'Desequilíbrio, Excessos, Falta de percepção',
        'Desapego, Liberdade, Recuperação',
        'Prevenção, Incerteza',
        'Falta de fé, Desespero, Falta de coragem',
        'Superação, infelicidade, Confusão',
        'Tristeza, Fracasso',
        'Dúvida, Falta de autoavaliação',
        'Falta de conclusão, Derrota'
    ]

    return downs[card_number]
}
