# Формат постов с ссылками
[ { title, subtitle, buttons: [ { href, text } ], image } ]

# Формат постов с информацией
[ { id, title, headText, bottomText, image } ]

# Формат тестов
{ title, subtitle, questions: [ { question, category, value } ], categoryNames: { key }, categoryScores: { key }, buttons: { yes, no, ns }, max, interpretation: { key } }
    
# Формат результата теста
{ "test": { key }, "user": { "firstName", "lastName", "classNumber" , "classLetter" } }
