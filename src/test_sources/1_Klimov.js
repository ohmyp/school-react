const Klimov = {
    id: 'klimov',
    title: "Тест по профориентации по методике Е.А. Климова.",
    subtitle: "Прочитай данные утверждения. Если ты согласен с ними, то нажми на кнопку \"Да\", если нет, нажми на кнопку \"Нет\". Если ты сомневаешься,  нажми на кнопку \"Не знаю\".",
    questions: [{
            question: "1. Легко знакомлюсь с людьми.",
            category: "human",
            value: 1
        },
        {
            question: "2. Охотно и подолгу могу что-нибудь мастерить.",
            category: "tech",
            value: 1
        },
        {
            question: "3. Люблю ходить в музеи, театры, на выставки.",
            category: "art",
            value: 1
        },
        {
            question: "4. Охотно и постоянно ухаживаю за растениями, животными.",
            category: "nature",
            value: 1
        },
        {
            question: "5. Охотно и подолгу могу что-нибудь вычислять, чертить.",
            category: "digit",
            value: 1
        },
        {
            question: "6. С удовольствием общаюсь со сверстниками или малышами. ",
            category: "human",
            value: 1
        },
        {
            question: "7. С удовольствием ухаживаю за растениями и животными.",
            category: "nature",
            value: 1
        },
        {
            question: "8. Обычно делаю мало ошибок в письменных работах.",
            category: "digit",
            value: 1
        },
        {
            question: "9. Мои изделия обычно вызывают интерес у товарищей, старших.",
            category: "tech",
            value: 2
        },
        {
            question: "10. Люди считают, что у меня есть художественные способности.",
            category: "art",
            value: 2
        },
        {
            question: "11. Охотно читаю о растениях, животных.",
            category: "nature",
            value: 1
        },
        {
            question: "12. Принимаю участие в спектаклях, концертах.",
            category: "art",
            value: 1
        },
        {
            question: "13. Люблю читать об устройстве механизмов, приборов, машин.",
            category: "tech",
            value: 1
        },
        {
            question: "14. Подолгу могу разгадывать головоломки, задачи, ребусы.",
            category: "digit",
            value: 2
        },
        {
            question: "15. Легко улаживаю разногласия между людьми.",
            category: "human",
            value: 2
        },
        {
            question: "16. Считают, что у меня есть способности к работе с техникой.",
            category: "tech",
            value: 2
        },
        {
            question: "17. Людям нравится мое художественное творчество.",
            category: "art",
            value: 2
        },
        {
            question: "18. У меня есть способности к работе с растениями и животными.",
            category: "nature",
            value: 2
        },
        {
            question: "19. Я могу ясно излагать свои мысли в письменной форме.",
            category: "digit",
            value: 2
        },
        {
            question: "20. Я почти никогда ни с кем не ссорюсь.",
            category: "human",
            value: 1
        },
        {
            question: "21. Результаты моего технического творчества одобряют даже незнакомые люди.",
            category: "tech",
            value: 1
        },
        {
            question: "22. Без особого труда усваиваю иностранные языки.",
            category: "digit",
            value: 1
        },
        {
            question: "23. Мне часто случается помогать даже незнакомым людям.",
            category: "human",
            value: 2
        },
        {
            question: "24. Подолгу могу заниматься музыкой, рисованием, читать книги и т. д.",
            category: "art",
            value: 1
        },
        {
            question: "25. Могу влиять на ход развития растений и животных.",
            category: "nature",
            value: 2
        },
        {
            question: "26. Люблю разбираться в устройстве механизмов, приборов.",
            category: "tech",
            value: 1
        },
        {
            question: "27. Мне обычно удается убедить людей в своей правоте.",
            category: "human",
            value: 1
        },
        {
            question: "28. Охотно наблюдаю за растениями или животными.",
            category: "nature",
            value: 1
        },
        {
            question: "29.Охотно читаю научно-популярную, критическую литературу, публицистику.",
            category: "digit",
            value: 1
        },
        {
            question: "30. Стараюсь понять секреты мастерства и пробую свои силы в живописи, музыке и т. п.",
            category: "art",
            value: 1
        }
    ],
    categoryNames: {
        nature: "Человек-природа",
        tech: "Человек-техника",
        human: "Человек-человек",
        digit: "Человек-знаковая система",
        art: "Человек-искусство"
    },
    categoryScores: {
        nature: 0,
        tech: 0,
        human: 0,
        digit: 0,
        art: 0
    }, 
    buttons: {
        yes: 1,
        no: -1,
        ns: 0
    },
    max: 6,
    interpretation:{
        nature: "Представителей этих профессий объединяет одно очень важное качество — любовь к природе. Но любовь не созерцательная. Которой обладают практически все люди, считая природу наиболее благоприятной средой для отдыха, а деятельная связанная с познанием ее законов и применением их. Одно дело — любить животных и растения, играть с ними, радоваться им. И совсем другое — регулярно, день за днем ухаживать за ними, наблюдать, лечить, выгуливать, не считаясь с личным временем и планами. Специалист должен не просто все знать о живых организмах, но и прогнозировать возможные изменения в них и принимать меры. От человека требуется инициатива и самостоятельность в решении конкретных задач, заботливость, терпение и дальновидность. Человек, работающий в сфере «человек-природа», должен быть спокойным и уравновешенным.",
        tech: "Особенность технических объектов в том, что они, как правило, могут быть точно измерены по многим признакам. При их обработке, преобразовании, перемещении или оценке от работника требуется точность, определенность действий. Техника как предмет руда представляет широкие возможности для новаторства, выдумки. творчества, поэтому важное значение приобретает такое качество, как практическое мышление. Техническая фантазия, способность мысленно соединять и разъединять технические объекты и их части — важные условия для успеха в данной области.",
        digit: "Мы встречаемся со знаками значительно чаще, чем обычно представляем себе. Это цифры. Коды, условные знаки, естественные или искусственные языки, чертежи, таблицы формулы. В любом случае человек воспринимает знак как символ реального объекта или явления. Поэтому специалисту, который работает со знаками, важно уметь с одной стороны, абстрагироваться от реальных физических, химически, механических свойств предметов, а с другой — представлять и воспринимать характеристики реальных явлений или объектов, стоящих за знаками. Чтобы успешно работать в какой-нибудь профессии данного типа, необходимо уметь мысленно погружаться в мир, казалось бы, сухих обозначений и сосредотачиваться на сведениях, которые они несут в себе. Особые требования профессии этого типа предъявляют к вниманию.",
        human: "Даже выбирая профессию, не связанную непосредственно с общением, вы поступите правильно, если обратите внимание на общительность и контактность. Подумайте, куда вы обращены- к людям или к себе? С кем бы вы хотели общаться — с собой или с другими? Главное содержание труда в профессиях типа «человек-человек» сводится к взаимодействию между людьми. Если не наладится это взаимодействие, значит, не наладится и работа. Качества, необходимые для работы с людьми: устойчивое, хорошее настроение в процессе работы с людьми, потребность в общении, способность мысленно ставить себя на место другого человека, быстро понимать намерения, помыслы, настроение людей, умение разбираться в человеческих взаимоотношениях, хорошая память (умение держать в уме имена и особенности многих людей), умение находить общий язык с различными людьми, терпение.",
        art: "Важнейшие требования, которые предъявляют профессии, связанные с изобразительной, музыкальной, литературно-художественной, актерско-сценической деятельностью человека — наличие способности к искусствам, творческое воображение, образное мышление, талант, трудолюбие."
    }

}

export default Klimov