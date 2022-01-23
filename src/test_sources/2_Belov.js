const Belov = {
    title: "Тест на темперамент А. Белова.",
    subtitle: "Прочитай данные утверждения. Если ты согласен с ними, то нажми на кнопку \"Да\", если нет, нажми на кнопку \"Нет\". Если ты сомневаешься,  нажми на кнопку \"Не знаю\".",
    questions: [
        {
            question: "Спокойны и хладнокровны.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Последовательны, обстоятельны в делах.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Стеснительны, застенчивы.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Теряетесь в новой обстановке.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Неустойчивы, суетливы.",
            category: "holerik",
            value: 1
        },
        {
            question: "Невыдержанны, вспыльчивы",
            category: "holerik",
            value: 1
        },
        {
            question: "Веселы и жизнерадостны.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Энергичны и деловиты",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Осторожны и рассудительны.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Умеете ждать.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Не верите в свои силы",
            category: "melanholik",
            value: 1
        },
        {
            question: "Затрудняетесь установить контакт с чужими людьми",
            category: "melanholik",
            value: 1
        },
        {
            question: "Нетерпеливы.",
            category: "holerik",
            value: 1
        },
        {
            question: "Резки и прямолинейны в отношениях с людьми.",
            category: "holerik",
            value: 1
        },
        {
            question: "Часто не доводите начатое дело до конца.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Склонны переоценивать себя.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Молчаливы и не любите попусту болтать.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Сдержанны и терпеливы.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Легко переносите одиночество.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Чувствуете подавленность и растерянность при неудачах.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Решительны и инициативны.",
            category: "holerik",
            value: 1
        },
        {
            question: "Упрямы.",
            category: "holerik",
            value: 1
        },
        {
            question: "Способны быстро схватить новое.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Неустойчивы в интересах и склонностях.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Обладаете спокойной, равномерной речью, с остановками, без выраженных эмоций.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Доводите начатое дело до конца.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Склонны уходить в себя.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Быстро утомляетесь.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Находчивы в споре.",
            category: "holerik",
            value: 1
        },
        {
            question: "Работаете рывками.",
            category: "holerik",
            value: 1
        },
        {
            question: "Легко переживаете неудачи и неприятности",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Легко приспосабливаетесь к разным обстоятельствам.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Не растрачиваете попусту сил.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Строго придерживаетесь выработанного распорядка жизни, системы в работе.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Обладаете слабой тихой речью, иногда до шепота.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Невольно приспосабливаетесь к характеру собеседника",
            category: "melanholik",
            value: 1
        },
        {
            question: "Склонны к риску.",
            category: "holerik",
            value: 1
        },
        {
            question: "Незлопамятны и необидчивы.",
            category: "holerik",
            value: 1
        },
        {
            question: "С увлечением беретесь за любое дело.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Быстро остываете, если дело перестает вас интересовать.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Легко сдерживаете порывы.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Маловосприимчивы к одобрению и порицанию.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Впечатлительны до слезливости.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Чрезвычайно восприимчивы к одобрению и порицанию",
            category: "melanholik",
            value: 1
        },
        {
            question: "Обладаете быстрой, страстной, со сбивчивыми патологиями речью.",
            category: "holerik",
            value: 1
        },
        {
            question: "Неуравновешенны, склонны к горячности.",
            category: "holerik",
            value: 1
        },
        {
            question: "Быстро включаетесь в новую работу и быстро переключаетесь с одной работы на другую.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Тяготитесь однообразной, будничной, кропотливой работой.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Не злобливы, проявляете снисходительное отношение к колкостям в свой адрес.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Постоянны в своих интересах.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Предъявляете высокие требования к себе и к окружающим.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Склонны к подозрительности, мнительности",
            category: "melanholik",
            value: 1
        },
        {
            question: "Агрессивный забияка.",
            category: "holerik",
            value: 1
        },
        {
            question: "Нетерпеливы к недостаткам.",
            category: "holerik",
            value: 1
        },
        {
            question: "Общительны и отзывчивы, не чувствуете скованности с новыми для вас людьми.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Выносливы и работоспособны.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Ровны в отношениях со всеми.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Инертны, малоподвижны, вялы.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Болезненно чувствительности и легко ранимы",
            category: "melanholik",
            value: 1
        },
        {
            question: "Чрезмерно обидчивы.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Обладаете выразительной речью.",
            category: "holerik",
            value: 1
        },
        {
            question: "Способны быстро действовать и решать.",
            category: "holerik",
            value: 1
        },
        {
            question: "Быстро засыпаете и пробуждаетесь.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Склонны иногда скользить по поверхности, отвлекаться.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Любите аккуратность во всем, порядок во всем.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "С трудом приспосабливаетесь к новой обстановке",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Скрытны и необщительны, не делитесь ни с кем своими мыслями.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Малоактивны и робки.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Неустанно стремитесь к новому.",
            category: "holerik",
            value: 1
        },
        {
            question: "Обладаете резкими, порывистыми движениями",
            category: "holerik",
            value: 1
        },
        {
            question: "Обладаете громкой, быстрой, отчетливой речью, сопровождающейся живыми жестами, выразительной мимикой.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Сохраняете самообладание в неожиданной, сложной обстановке",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Обладаете выдержкой.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Постепенно сходитесь с новыми людьми.",
            category: "flegmatik",
            value: 1
        },
        {
            question: "Безропотно покорны.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Стремитесь вызвать сочувствие и помощь у окружающих.",
            category: "melanholik",
            value: 1
        },
        {
            question: "Настойчивы в достижении поставленной цели",
            category: "holerik",
            value: 1
        },
        {
            question: "Склонны к резким сменам настроения,",
            category: "holerik",
            value: 1
        },
        {
            question: "Обладаете всегда бодрым настроением.",
            category: "sangvinik",
            value: 1
        },
        {
            question: "Часто несобранны, проявляете поспешность в решениях.",
            category: "sangvinik",
            value: 1
        },
    ],
    categoryNames: {
        flegmatik: 'Флегматик',
        melanholik: 'Меланхолик',
        holerik: 'Холерик',
        sangvinik: 'Сангвиник'
    },
    categoryScores: {
        flegmatik: 0,
        melanholik: 0,
        holerik: 0,
        sangvinik: 0,
    }, 
    buttons: {
        yes: 1,
        no: 0,
        ns: 0
    },
    max: 20,
    interpretation:{
        flegmatik: 'Новые формы поведения вырабатываются медленно, но являются стойкими. Обладает медлительностью и спокойствием в действиях, мимике и речи, ровностью, постоянством, глубиной чувств и настроений. Настойчивый и упорный, он редко выходит из себя, не склонен к аффектам, рассчитав свои силы, доводит дело до конца, ровен в отношениях, в меру общителен, не любит попусту болтать. Экономит силы, попусту их не тратит. В зависимости от условий в одних случаях флегматик может характеризоваться "положительными" чертами - выдержкой, глубиной мыслей, постоянством, основательностью, в других - ленью и склонностью к выполнению одних лишь привычных действий',
        melanholik: 'Обладает высокой чувствительностью: присутствует глубина чувств при слабом их выражении. Ему свойственна сдержанность и приглушенность речи и движений, скромность, осторожность. В нормальных условиях меланхолик - человек глубокий, содержательный, ответственный, успешно справляться с жизненными задачами. При неблагоприятных условиях может превратиться в замкнутого, тревожного, ранимого человека, склонного к тяжелым внутренним переживаниям таких жизненных обстоятельств, которые этого не заслуживают. ',
        holerik: 'Отличается повышенной возбудимостью, действия прерывисты. Ему свойственны резкость и стремительность движений, сила, импульсивность, яркая выраженность эмоциональных переживаний. Вследствие неуравновешенности, увлекшись делом, склонен действовать изо всех сил, истощаться больше, чем следует. Имея общественные интересы, темперамент проявляет в инициативности, энергичности, принципиальности. При отсутствии духовной жизни холерический темперамент часто проявляется в раздражительности, вспыльчивости при эмоциональных обстоятельствах. ',
        sangvinik: 'Быстро приспосабливается к новым условиям, быстро сходится с людьми, общителен. Чувства легко возникают и сменяются, эмоциональные переживания, как правило неглубоки. Мимика богатая, подвижная, выразительная. Несколько непоседлив, нуждается в новых впечатлениях, недостаточно регулирует свои импульсы, не умеет строго придерживаться выработанного распорядка жизни, системы в работе. В связи с этим не может успешно выполнять дело, требующее равной затраты сил, длительного и методичного напряжения, усидчивости, устойчивости внимания, терпения. При отсутствии серьезных целей, глубоких мыслей, творческой деятельности вырабатывается поверхностность и непостоянство'
    }

}

export default Belov